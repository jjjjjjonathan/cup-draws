import { Card, CardContent, CardTitle } from './ui/card';
import { useState } from 'react';
import type { Team } from '@/lib/helpers';
import { PREMIER, createDrawSlips, selectRandomTeam } from '@/lib/helpers';
import { Button } from './ui/button';
import { MensMatches } from './mens-matches';

type BracketProps = {
  firstRoundTeamList: Team[];
  byeRoundTeamList: Team[];
  title: string;
  byeTeamCount: number;
  isMensBracket: boolean;
};

export const Bracket = ({
  firstRoundTeamList,
  byeRoundTeamList,
  title,
  byeTeamCount,
  isMensBracket,
}: BracketProps) => {
  const [firstRoundTeams, setFirstRoundTeams] =
    useState<Team[]>(firstRoundTeamList);
  const [byeTeams, setByeTeams] = useState<Team[]>(byeRoundTeamList);
  const [bracketSeeding, setBracketSeeding] = useState<Team[]>([]);
  const seededTeams = createDrawSlips(byeTeams);
  const [lastSelectedTeam, setLastSelectedTeam] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const message = () => {
    if (byeTeams.length > byeTeamCount) {
      return `${byeTeams.length - byeTeamCount} team${
        byeTeams.length - byeTeamCount === 1 ? '' : 's'
      } from round two need to be drawn into round one.`;
    } else if (byeTeams.length <= byeTeamCount && byeTeams.length > 0) {
      return `${byeTeams.length} team${
        byeTeams.length === 1 ? '' : 's'
      } need to be drawn for round two.`;
    } else if (firstRoundTeams.length === 0) {
      return 'You have finished with the bracket draw.';
    } else {
      return `${firstRoundTeams.length} team${
        firstRoundTeams.length === 1 ? '' : 's'
      } need to be drawn into round one.`;
    }
  };

  const drawTeam = () => {
    setErrorMessage('');
    if (byeTeams.length > byeTeamCount) {
      const selectedTeam = selectRandomTeam(seededTeams);
      setLastSelectedTeam(selectedTeam.name);
      setFirstRoundTeams((prev) => [...prev, selectedTeam]);
      setByeTeams((prev) =>
        prev.filter((team) => team.name !== selectedTeam.name)
      );
    } else if (byeTeams.length <= byeTeamCount && byeTeams.length > 0) {
      const selectedTeam = selectRandomTeam(byeTeams);
      setLastSelectedTeam(selectedTeam.name);
      setBracketSeeding((prev) => [...prev, selectedTeam]);
      setByeTeams((prev) =>
        prev.filter((team) => team.name !== selectedTeam.name)
      );
    } else if (
      firstRoundTeams.filter((team) => team.division === PREMIER).length >
      firstRoundTeams.filter((team) => team.division !== PREMIER).length
    ) {
      const selectedTeam = selectRandomTeam(
        firstRoundTeams.filter((team) => team.division === PREMIER)
      );
      setLastSelectedTeam(selectedTeam.name);
      setErrorMessage('Forced selection of Premier team');
      setBracketSeeding((prev) => [...prev, selectedTeam]);
      setFirstRoundTeams((prev) =>
        prev.filter((team) => team.name !== selectedTeam.name)
      );
    } else {
      const selectedTeam = selectRandomTeam(firstRoundTeams);
      setLastSelectedTeam(selectedTeam.name);
      // if away team in first round, compare if both teams are in Premier
      if (bracketSeeding.length % 2 === 0) {
        if (
          bracketSeeding[bracketSeeding.length - 1].division === PREMIER &&
          selectedTeam.division === PREMIER
        ) {
          setErrorMessage(
            `${bracketSeeding[bracketSeeding.length - 1].name} and ${
              selectedTeam.name
            } are both in the Premier Division, so this matchup is not valid.`
          );
        } else {
          setBracketSeeding((prev) => [...prev, selectedTeam]);
          setFirstRoundTeams((prev) =>
            prev.filter((team) => team.name !== selectedTeam.name)
          );
        }
      } else {
        setBracketSeeding((prev) => [...prev, selectedTeam]);
        setFirstRoundTeams((prev) =>
          prev.filter((team) => team.name !== selectedTeam.name)
        );
      }
    }
  };

  return (
    <>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <div className='flex flex-col justify-between'>
        {isMensBracket ? <MensMatches teams={bracketSeeding} /> : null}
        <div className='bg-red-300 grid grid-cols-5 gap-x-2'>
          <Card>
            <CardTitle>Round 1 Teams</CardTitle>
            <CardContent className='text-sm'>
              {firstRoundTeams.map((team) => team.name).join(', ')}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Round 2 Teams</CardTitle>
            <CardContent className='text-sm'>
              {byeTeams.map((team) => team.name).join(', ')}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Odds</CardTitle>
            <CardContent className='text-sm'>
              <ul>
                {byeTeams.map((team) => (
                  <li key={team.name}>
                    {team.name}:{' '}
                    {((team.drawSlips / seededTeams.length) * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className='flex flex-col'>
            <Button onClick={drawTeam} disabled={firstRoundTeams.length <= 0}>
              Draw Team
            </Button>
            <p>{message()}</p>
          </div>
          <div className='flex flex-col'>
            <p>Last selected team: {lastSelectedTeam}</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
};
