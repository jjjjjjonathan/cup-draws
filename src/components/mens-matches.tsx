import { Match } from './match';
import type { Team } from '@/lib/helpers';
import { getTeamName } from '@/lib/helpers';

type MensMatchesProps = {
  teams: Team[];
};

export function MensMatches({ teams }: MensMatchesProps) {
  return (
    <div className='grid grid-cols-5'>
      <div className='flex flex-col h-full bg-emerald-200 justify-around'>
        <Match
          title='Match 1'
          homeTeam={getTeamName(5, teams)}
          awayTeam={getTeamName(6, teams)}
        />
        <Match
          title='Match 2'
          homeTeam={getTeamName(7, teams)}
          awayTeam={getTeamName(8, teams)}
        />
        <Match
          title='Match 3'
          homeTeam={getTeamName(9, teams)}
          awayTeam={getTeamName(10, teams)}
        />
        <Match
          title='Match 4'
          homeTeam={getTeamName(11, teams)}
          awayTeam={getTeamName(12, teams)}
        />
        <Match
          title='Match 5'
          homeTeam={getTeamName(13, teams)}
          awayTeam={getTeamName(14, teams)}
        />
        <Match
          title='Match 6'
          homeTeam={getTeamName(15, teams)}
          awayTeam={getTeamName(16, teams)}
        />
        <Match
          title='Match 7'
          homeTeam={getTeamName(17, teams)}
          awayTeam={getTeamName(18, teams)}
        />
        <Match
          title='Match 8'
          homeTeam={getTeamName(19, teams)}
          awayTeam={getTeamName(20, teams)}
        />
        <Match
          title='Match 9'
          homeTeam={getTeamName(21, teams)}
          awayTeam={getTeamName(22, teams)}
        />
        <Match
          title='Match 10'
          homeTeam={getTeamName(23, teams)}
          awayTeam={getTeamName(24, teams)}
        />
        <Match
          title='Match 11'
          homeTeam={getTeamName(25, teams)}
          awayTeam={getTeamName(26, teams)}
        />
      </div>
      <div className='flex flex-col bg-emerald-300 h-full justify-around'>
        <Match
          title='Match 12'
          homeTeam={getTeamName(0, teams)}
          awayTeam='Winner of Match 1'
        />
        <Match
          title='Match 13'
          homeTeam={getTeamName(1, teams)}
          awayTeam='Winner of Match 2'
        />
        <Match
          title='Match 14'
          homeTeam={getTeamName(2, teams)}
          awayTeam='Winner of Match 3'
        />
        <Match
          title='Match 15'
          homeTeam={getTeamName(3, teams)}
          awayTeam='Winner of Match 4'
        />
        <Match
          title='Match 16'
          homeTeam={getTeamName(4, teams)}
          awayTeam='Winner of Match 5'
        />
        <Match
          title='Match 17'
          homeTeam='Winner of Match 6'
          awayTeam='Winner of Match 7'
        />
        <Match
          title='Match 18'
          homeTeam='Winner of Match 8'
          awayTeam='Winner of Match 9'
        />
        <Match
          title='Match 19'
          homeTeam='Winner of Match 10'
          awayTeam='Winner of Match 11'
        />
      </div>
      <div className='flex flex-col h-full bg-emerald-400 justify-around'>
        <Match
          title='Match 20'
          homeTeam='Winner of Match 12'
          awayTeam='Winner of Match 13'
        />
        <Match
          title='Match 21'
          homeTeam='Winner of Match 14'
          awayTeam='Winner of Match 15'
        />
        <Match
          title='Match 22'
          homeTeam='Winner of Match 16'
          awayTeam='Winner of Match 77'
        />
        <Match
          title='Match 23'
          homeTeam='Winner of Match 18'
          awayTeam='Winner of Match 19'
        />
      </div>
      <div className='flex flex-col h-full bg-emerald-500 justify-around'>
        <Match
          title='Match 24'
          homeTeam='Winner of Match 20'
          awayTeam='Winner of Match 21'
        />
        <Match
          title='Match 25'
          homeTeam='Winner of Match 22'
          awayTeam='Winner of Match 23'
        />
      </div>
      <div className='flex flex-col h-full bg-emerald-600 justify-around'>
        <Match
          title='Match 26'
          homeTeam='Winner of Match 24'
          awayTeam='Winner of Match 25'
        />
      </div>
    </div>
  );
}
