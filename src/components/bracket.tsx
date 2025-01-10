import { Card, CardContent, CardTitle } from './ui/card';
import type { Team } from '@/lib/helpers';
import { PREMIER, createDrawSlips, selectRandomTeam } from '@/lib/helpers';
import { Button } from './ui/button';
import { MensMatches } from './mens-matches';
import { WomensMatches } from './womens-matches';
import { useAtom } from 'jotai';
import type { Atom } from '@/App';

type BracketProps = {
  byeTeamCount: number;
  isMensBracket: boolean;
  bracketAtom: Atom;
};

export const Bracket = ({
  byeTeamCount,
  isMensBracket,
  bracketAtom,
}: BracketProps) => {
  const [bracket, setBracket] = useAtom(bracketAtom);
  const seededTeams = createDrawSlips(bracket.byeTeams);

  const message = () => {
    if (bracket.byeTeams.length > byeTeamCount) {
      return `${bracket.byeTeams.length - byeTeamCount} team${
        bracket.byeTeams.length - byeTeamCount === 1 ? '' : 's'
      } from round two need to be drawn into round one.`;
    } else if (
      bracket.byeTeams.length <= byeTeamCount &&
      bracket.byeTeams.length > 0
    ) {
      return `${bracket.byeTeams.length} team${
        bracket.byeTeams.length === 1 ? '' : 's'
      } need to be drawn for round two.`;
    } else if (bracket.firstRoundTeams.length === 0) {
      return 'You have finished with the bracket draw.';
    } else {
      return `${bracket.firstRoundTeams.length} team${
        bracket.firstRoundTeams.length === 1 ? '' : 's'
      } need to be drawn into round one.`;
    }
  };

  const drawTeam = () => {
    if (bracket.byeTeams.length > byeTeamCount) {
      const selectedTeam = selectRandomTeam(seededTeams);
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: [...prev.firstRoundTeams, selectedTeam],
        byeTeams: prev.byeTeams.filter(
          (team) => team.name !== selectedTeam.name
        ),
        bracketSeeding: [...prev.bracketSeeding],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} was drawn and moved into the first round pot.`,
        ],
      }));
    } else if (
      bracket.byeTeams.length <= byeTeamCount &&
      bracket.byeTeams.length > 0
    ) {
      const selectedTeam = selectRandomTeam(bracket.byeTeams);
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: [...prev.firstRoundTeams],
        byeTeams: prev.byeTeams.filter(
          (team) => team.name !== selectedTeam.name
        ),
        bracketSeeding: [...prev.bracketSeeding, selectedTeam],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} was drawn and placed in the second round.`,
        ],
      }));
    } else if (
      bracket.firstRoundTeams.filter((team) => team.division === PREMIER)
        .length >
      bracket.firstRoundTeams.filter((team) => team.division !== PREMIER).length
    ) {
      const selectedTeam = selectRandomTeam(
        bracket.firstRoundTeams.filter((team) => team.division === PREMIER)
      );
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: prev.firstRoundTeams.filter(
          (team) => team.name !== selectedTeam.name
        ),
        byeTeams: [...prev.byeTeams],
        bracketSeeding: [...prev.bracketSeeding, selectedTeam],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} was drawn and placed in the first round. A Premier team was purposely chosen to avoid division conflict.`,
        ],
      }));
    } else {
      const selectedTeam = selectRandomTeam(bracket.firstRoundTeams);
      if (bracket.bracketSeeding.length % 2 === 0) {
        const index = bracket.bracketSeeding.length - 1;
        if (
          bracket.bracketSeeding[index].division === PREMIER &&
          selectedTeam.division === PREMIER
        ) {
          setBracket((prev) => ({
            lastSelectedTeam: selectedTeam.name,
            firstRoundTeams: [...prev.firstRoundTeams],
            byeTeams: [...prev.byeTeams],
            bracketSeeding: [...prev.bracketSeeding, selectedTeam],
            drawLog: [
              ...prev.drawLog,
              `${selectedTeam.name} was drawn but cannot face another Premier Division team. The club returns to the pot.`,
            ],
          }));
        } else {
          setBracket((prev) => ({
            lastSelectedTeam: selectedTeam.name,
            firstRoundTeams: prev.firstRoundTeams.filter(
              (team) => team.name !== selectedTeam.name
            ),
            byeTeams: [...prev.byeTeams],
            bracketSeeding: [...prev.bracketSeeding, selectedTeam],
            drawLog: [
              ...prev.drawLog,
              `${selectedTeam.name} was drawn and placed in the first round.`,
            ],
          }));
        }
      } else {
        setBracket((prev) => ({
          lastSelectedTeam: selectedTeam.name,
          firstRoundTeams: prev.firstRoundTeams.filter(
            (team) => team.name !== selectedTeam.name
          ),
          byeTeams: [...prev.byeTeams],
          bracketSeeding: [...prev.bracketSeeding, selectedTeam],
          drawLog: [
            ...prev.drawLog,
            `${selectedTeam.name} was drawn and placed in the first round.`,
          ],
        }));
      }
    }
  };

  return (
    <>
      <div className='m-2 p-4'>
        {isMensBracket ? (
          <MensMatches teams={bracket.bracketSeeding} />
        ) : (
          <WomensMatches teams={bracket.bracketSeeding} />
        )}
        <div className='grid grid-cols-4 gap-x-2 pt-2'>
          <TeamList
            title='Round 1 teams'
            teams={bracket.firstRoundTeams}
            shouldCountOdds={false}
            seededTeams={seededTeams}
          />
          <TeamList
            title='Round 2 teams'
            teams={bracket.byeTeams}
            shouldCountOdds={bracket.byeTeams.length > byeTeamCount}
            seededTeams={seededTeams}
          />

          <div className='flex flex-col'>
            <Button
              onClick={drawTeam}
              disabled={bracket.firstRoundTeams.length <= 0}
            >
              Draw Team
            </Button>
            <p className='text-lg'>
              Last selected team:{' '}
              <span className='font-semibold'>{bracket.lastSelectedTeam}</span>
            </p>
            <p>{message()}</p>
          </div>
          <Card className='h-64'>
            <CardTitle className='p-2 text-xl'>Draw log</CardTitle>
            <CardContent className='text-xs overflow-y-auto h-48 px-12'>
              <ol
                className='gap-y-1 leading-loose list-decimal text-pretty'
                reversed
              >
                {bracket.drawLog
                  .map((item) => <li key={item}>{item}</li>)
                  .toReversed()}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
type TeamListProps = {
  teams: Team[];
  title: string;
  shouldCountOdds: boolean;
  seededTeams: Team[];
};
const TeamList = ({
  teams,
  title,
  shouldCountOdds,
  seededTeams,
}: TeamListProps) => {
  return (
    <Card className='h-64'>
      <CardTitle className='p-2 text-xl'>{title}</CardTitle>
      <CardContent className='text-xs grid grid-cols-2 gap-x-2'>
        {teams.map((team) => (
          <div className='text-ellipsis flex flex-row justify-between'>
            <p>{team.name}</p>
            {shouldCountOdds ? (
              <span>
                {((team.drawSlips / seededTeams.length) * 100).toFixed(2)}%
              </span>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
