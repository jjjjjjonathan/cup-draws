import { Match } from './match';
import { Card, CardContent, CardTitle } from './ui/card';
import { useState } from 'react';
import type { Team } from '@/lib/helpers';
import {
  PREMIER,
  CHAMPIONSHIP,
  LEAGUE2,
  createDrawSlips,
  selectRandomTeam,
} from '@/lib/helpers';
import { Button } from './ui/button';

export const Bracket = () => {
  const [firstRoundTeams, setFirstRoundTeams] = useState<Team[]>([
    { name: 'Waterloo United', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Darby FC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: `Master's FA`, division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'North Mississauga SC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Pickering FC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'York United Academy', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Unionville-Milliken SC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Windsor City FC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Sudbury Cyclones', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'The Borough FC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Guelph United FC', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Hamilton United', division: CHAMPIONSHIP, drawSlips: 0 },
    { name: 'Rush Canada Academy', division: LEAGUE2, drawSlips: 0 },
    { name: 'Cambridge United', division: LEAGUE2, drawSlips: 0 },
    { name: 'Railway City', division: LEAGUE2, drawSlips: 0 },
  ]);
  const [byeTeams, setByeTeams] = useState<Team[]>([
    { name: 'Scrosoppi FC', division: PREMIER, drawSlips: 1 },
    { name: 'Vaughan Azzurri', division: PREMIER, drawSlips: 4 },
    { name: 'Woodbridge Strikers', division: PREMIER, drawSlips: 8 },
    { name: 'North Toronto Nitros', division: PREMIER, drawSlips: 14 },
    { name: 'Simcoe County Rovers', division: PREMIER, drawSlips: 21 },
    { name: 'Alliance United', division: PREMIER, drawSlips: 30 },
    { name: 'Oakville SC', division: PREMIER, drawSlips: 40 },
    { name: 'Burlington SC', division: PREMIER, drawSlips: 49 },
    { name: 'Sigma FC', division: PREMIER, drawSlips: 62 },
    { name: 'ProStars FC', division: PREMIER, drawSlips: 76 },
    { name: 'FC London', division: PREMIER, drawSlips: 92 },
    { name: 'St. Catharines Roma', division: PREMIER, drawSlips: 102 },
  ]);
  const [bracketSeeding, setBracketSeeding] = useState<Team[]>([]);
  const seededTeams = createDrawSlips(byeTeams);
  const [lastSelectedTeam, setLastSelectedTeam] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const message = () => {
    if (byeTeams.length > 5) {
      return `${byeTeams.length - 5} team${
        byeTeams.length - 5 === 1 ? '' : 's'
      } from round two need to be drawn into round one.`;
    } else if (byeTeams.length <= 5 && byeTeams.length > 0) {
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
    if (byeTeams.length > 5) {
      const selectedTeam = selectRandomTeam(seededTeams);
      setLastSelectedTeam(selectedTeam.name);
      setFirstRoundTeams((prev) => [...prev, selectedTeam]);
      setByeTeams((prev) =>
        prev.filter((team) => team.name !== selectedTeam.name)
      );
    } else if (byeTeams.length <= 5 && byeTeams.length > 0) {
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
    <div className='flex flex-col justify-between'>
      <div className='grid grid-cols-5'>
        <div className='flex flex-col h-full bg-blue-200 justify-around'>
          <Match
            title='Match 1'
            homeTeam={getTeamName(5, bracketSeeding)}
            awayTeam={getTeamName(6, bracketSeeding)}
          />
          <Match
            title='Match 2'
            homeTeam={getTeamName(7, bracketSeeding)}
            awayTeam={getTeamName(8, bracketSeeding)}
          />
          <Match
            title='Match 3'
            homeTeam={getTeamName(9, bracketSeeding)}
            awayTeam={getTeamName(10, bracketSeeding)}
          />
          <Match
            title='Match 4'
            homeTeam={getTeamName(11, bracketSeeding)}
            awayTeam={getTeamName(12, bracketSeeding)}
          />
          <Match
            title='Match 5'
            homeTeam={getTeamName(13, bracketSeeding)}
            awayTeam={getTeamName(14, bracketSeeding)}
          />
          <Match
            title='Match 6'
            homeTeam={getTeamName(15, bracketSeeding)}
            awayTeam={getTeamName(16, bracketSeeding)}
          />
          <Match
            title='Match 7'
            homeTeam={getTeamName(17, bracketSeeding)}
            awayTeam={getTeamName(18, bracketSeeding)}
          />
          <Match
            title='Match 8'
            homeTeam={getTeamName(19, bracketSeeding)}
            awayTeam={getTeamName(20, bracketSeeding)}
          />
          <Match
            title='Match 9'
            homeTeam={getTeamName(21, bracketSeeding)}
            awayTeam={getTeamName(22, bracketSeeding)}
          />
          <Match
            title='Match 10'
            homeTeam={getTeamName(23, bracketSeeding)}
            awayTeam={getTeamName(24, bracketSeeding)}
          />
          <Match
            title='Match 11'
            homeTeam={getTeamName(25, bracketSeeding)}
            awayTeam={getTeamName(26, bracketSeeding)}
          />
        </div>
        <div className='flex flex-col bg-blue-300 h-full justify-around'>
          <Match
            title='Match 12'
            homeTeam={getTeamName(0, bracketSeeding)}
            awayTeam='Winner of Match 1'
          />
          <Match
            title='Match 13'
            homeTeam={getTeamName(1, bracketSeeding)}
            awayTeam='Winner of Match 2'
          />
          <Match
            title='Match 14'
            homeTeam={getTeamName(2, bracketSeeding)}
            awayTeam='Winner of Match 3'
          />
          <Match
            title='Match 15'
            homeTeam={getTeamName(3, bracketSeeding)}
            awayTeam='Winner of Match 4'
          />
          <Match
            title='Match 16'
            homeTeam={getTeamName(4, bracketSeeding)}
            awayTeam='Winner of Match 5'
          />
          <Card>
            <CardTitle>Match 17</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 6 v. Winner of Match 7
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 18</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 8 v. Winner of Match 9
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 19</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 10 v. Winner of Match 11
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col bg-blue-400 justify-around'>
          <Card>
            <CardTitle>Match 20</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 12 v. Winner of Match 13
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 21</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 14 v. Winner of Match 15
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 22</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 16 v. Winner of Match 17
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 23</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 18 v. Winner of Match 19
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col bg-blue-500 justify-around'>
          <Card>
            <CardTitle>Match 24</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 20 v. Winner of Match 21
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 25</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 22 v. Winner of Match 23
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col bg-blue-600 justify-around'>
          <Card>
            <CardTitle>Match 26</CardTitle>
            <CardContent className='text-center'>
              Winner of Match 24 v. Winner of Match 25
            </CardContent>
          </Card>
        </div>
      </div>
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
  );
};

function getTeamName(index: number, teams: Team[]) {
  return teams.length > index ? teams[index].name : `Team ${index + 1}`;
}
