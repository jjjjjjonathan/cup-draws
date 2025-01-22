import { Card, CardContent, CardTitle, CardFooter } from './ui/card';
import type { Team } from '@/lib/helpers';
import {
  PREMIER,
  createDrawSlips,
  selectRandomTeam,
  LEAGUE2,
  CHAMPIONSHIP,
} from '@/lib/helpers';
import { Button } from './ui/button';
import { MensMatches } from './mens-matches';
import { WomensMatches } from './womens-matches';
import { useAtom } from 'jotai';
import type { Atom, State } from '@/App';
import { useCallback } from 'react';
import { toast } from 'sonner';

type BracketProps = {
  byeTeamCount: number;
  isMensBracket: boolean;
  bracketAtom: Atom;
  resetBracket: () => void;
  initialState: State;
};

export const Bracket = ({
  byeTeamCount,
  isMensBracket,
  bracketAtom,
  initialState,
}: BracketProps) => {
  const [bracket, setBracket] = useAtom(bracketAtom);
  const seededTeams = createDrawSlips(bracket.byeTeams);

  const message = () => {
    if (bracket.byeTeams.length > byeTeamCount) {
      return `${bracket.byeTeams.length - byeTeamCount} team${
        bracket.byeTeams.length - byeTeamCount === 1 ? '' : 's'
      } from the Round Two pot need to be drawn into the Round One pot.`;
    } else if (
      bracket.byeTeams.length <= byeTeamCount &&
      bracket.byeTeams.length > 0
    ) {
      return `${bracket.byeTeams.length} team${
        bracket.byeTeams.length === 1 ? '' : 's'
      } need to be drawn for Round Two.`;
    } else if (bracket.firstRoundTeams.length === 0) {
      return 'You have finished with the bracket draw.';
    } else {
      return `${bracket.firstRoundTeams.length} team${
        bracket.firstRoundTeams.length === 1 ? '' : 's'
      } need to be drawn into Round One.`;
    }
  };

  const drawSecondRoundTeam = () => {
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
          `${selectedTeam.name} were drawn and moved into the first-round pot.`,
        ],
      }));
    } else {
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
          `${selectedTeam.name} were drawn and placed in the second round.`,
        ],
      }));
    }
  };

  const nonPremierMajority =
    bracket.firstRoundTeams.filter((team) => team.division !== PREMIER).length >
    bracket.firstRoundTeams.filter((team) => team.division === PREMIER).length;

  const nonLeague2Majority =
    bracket.firstRoundTeams.filter((team) => team.division !== LEAGUE2).length >
    bracket.firstRoundTeams.filter((team) => team.division === LEAGUE2).length;

  const drawFirstRoundTeam = () => {
    let selectionPool = bracket.firstRoundTeams;
    if (!nonPremierMajority) {
      // Select from only Premier teams if Premier teams are majority
      selectionPool = selectionPool.filter((team) => team.division === PREMIER);
    } else if (!nonLeague2Majority) {
      // Select from only League2 teams if League2 teams are majority
      selectionPool = selectionPool.filter((team) => team.division === LEAGUE2);
    }
    const selectedTeam = selectRandomTeam(selectionPool);

    const selectedTeamIsAway = bracket.bracketSeeding.length % 2 !== 0;
    const previousSelectedTeam =
      bracket.bracketSeeding[bracket.bracketSeeding.length - 1];

    if (
      previousSelectedTeam.division === PREMIER &&
      selectedTeam.division === PREMIER &&
      selectedTeamIsAway
    ) {
      // Premier cannot face Premier
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: [...prev.firstRoundTeams],
        byeTeams: [...prev.byeTeams],
        bracketSeeding: [...prev.bracketSeeding],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} were drawn but cannot face another Premier Division team. The club returns to the pot.`,
        ],
      }));
    } else if (
      previousSelectedTeam.division === LEAGUE2 &&
      selectedTeam.division === LEAGUE2 &&
      selectedTeamIsAway
    ) {
      // League2 cannot play against League2

      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: [...prev.firstRoundTeams],
        byeTeams: [...prev.byeTeams],
        bracketSeeding: [...prev.bracketSeeding],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} were drawn but cannot face another League2 team. The club returns to the pot.`,
        ],
      }));
    } else if (
      previousSelectedTeam.division === LEAGUE2 &&
      selectedTeam.division !== LEAGUE2 &&
      selectedTeamIsAway
    ) {
      // League2 must be an away team
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: prev.firstRoundTeams.filter(
          (team) => team.name !== selectedTeam.name
        ),
        byeTeams: [...prev.byeTeams],
        bracketSeeding: [
          ...prev.bracketSeeding.slice(0, -1),
          selectedTeam,
          previousSelectedTeam,
        ],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} were drawn and placed in the first round. Home and away were switched because a League2 team cannot be the home team.`,
        ],
      }));
    } else if (
      previousSelectedTeam.division === CHAMPIONSHIP &&
      previousSelectedTeam.name === 'Sudbury Cyclones' &&
      selectedTeamIsAway
    ) {
      // Men's Sudbury has to be away
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: prev.firstRoundTeams.filter(
          (team) => team.name !== selectedTeam.name
        ),
        byeTeams: [...prev.byeTeams],
        bracketSeeding: [
          ...prev.bracketSeeding.slice(0, -1),
          selectedTeam,
          previousSelectedTeam,
        ],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} were drawn and placed in the first round. Home and away were switched because Sudbury Cyclones need to be an away team.`,
        ],
      }));
    } else {
      // default
      const addedLogText = !nonPremierMajority
        ? ' A Premier team was purposely chosen to avoid division conflict.'
        : !nonLeague2Majority
        ? ' A League2 team was purposely chosen to avoid division conflict.'
        : '';
      setBracket((prev) => ({
        lastSelectedTeam: selectedTeam.name,
        firstRoundTeams: prev.firstRoundTeams.filter(
          (team) => team.name !== selectedTeam.name
        ),
        byeTeams: [...prev.byeTeams],
        bracketSeeding: [...prev.bracketSeeding, selectedTeam],
        drawLog: [
          ...prev.drawLog,
          `${selectedTeam.name} were drawn and placed in the first round.${addedLogText}`,
        ],
      }));
    }
  };

  const copyToClipboard = useCallback((value: string) => {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(value);
      } catch (error) {
        throw new Error('writeText not supported.');
      } finally {
        toast('Copied log to clipboard.');
      }
    };

    handleCopy();
  }, []);

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
          <Card className='h-64'>
            <CardTitle className='p-2 text-xl'>L1 Cup Bracket</CardTitle>
            <div className='flex flex-col justify-between h-52'>
              <CardContent className='space-y-6'>
                <p className='text-lg'>
                  Last selected team:{' '}
                  <span className='font-semibold'>
                    {bracket.lastSelectedTeam}
                  </span>
                </p>
                <p>{message()}</p>
              </CardContent>
              <CardFooter className='flex flex-row justify-between items-end'>
                <Button
                  onClick={
                    bracket.byeTeams.length > 0
                      ? drawSecondRoundTeam
                      : drawFirstRoundTeam
                  }
                  disabled={bracket.firstRoundTeams.length <= 0}
                >
                  Draw team
                </Button>
                <Button
                  variant='secondary'
                  disabled={bracket.drawLog.length <= 0}
                  onClick={() => copyToClipboard(bracket.drawLog.join('\n\n'))}
                >
                  Copy log
                </Button>
                <Button
                  variant='destructive'
                  onClick={() => setBracket(initialState)}
                >
                  Reset bracket
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Card className='h-64'>
            <CardTitle className='p-2 text-xl'>Draw log</CardTitle>
            <CardContent className='text-xs overflow-y-auto h-48 px-12'>
              <ol
                className='gap-y-1 leading-loose list-decimal text-pretty'
                reversed
              >
                {bracket.drawLog
                  .map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))
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
          <div
            className='text-ellipsis flex flex-row justify-between'
            key={team.name}
          >
            <p className='text-truncate'>{team.name}</p>
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
