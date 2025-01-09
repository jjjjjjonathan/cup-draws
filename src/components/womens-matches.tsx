import { Match } from './match';
import type { Team } from '@/lib/helpers';
import { getTeamName } from '@/lib/helpers';

type WomensMatchesProps = {
  teams: Team[];
};

export function WomensMatches({ teams }: WomensMatchesProps) {
  return (
    <div className='grid grid-cols-5'>
      <div className='flex flex-col h-full justify-around bg-violet-200'>
        <Match
          title='Match 1'
          homeTeam={getTeamName(8, teams)}
          awayTeam={getTeamName(9, teams)}
        />
        <Match
          title='Match 2'
          homeTeam={getTeamName(10, teams)}
          awayTeam={getTeamName(11, teams)}
        />
        <Match
          title='Match 3'
          homeTeam={getTeamName(12, teams)}
          awayTeam={getTeamName(13, teams)}
        />
        <Match
          title='Match 4'
          homeTeam={getTeamName(14, teams)}
          awayTeam={getTeamName(15, teams)}
        />
        <Match
          title='Match 5'
          homeTeam={getTeamName(16, teams)}
          awayTeam={getTeamName(17, teams)}
        />
        <Match
          title='Match 6'
          homeTeam={getTeamName(18, teams)}
          awayTeam={getTeamName(19, teams)}
        />
        <Match
          title='Match 7'
          homeTeam={getTeamName(20, teams)}
          awayTeam={getTeamName(21, teams)}
        />
        <Match
          title='Match 8'
          homeTeam={getTeamName(22, teams)}
          awayTeam={getTeamName(23, teams)}
        />
      </div>
      <div className='flex flex-col h-full justify-around bg-violet-300'>
        <Match
          title='Match 9'
          homeTeam={getTeamName(0, teams)}
          awayTeam='Winner of Match 1'
        />
        <Match
          title='Match 10'
          homeTeam={getTeamName(1, teams)}
          awayTeam='Winner of Match 2'
        />
        <Match
          title='Match 11'
          homeTeam={getTeamName(2, teams)}
          awayTeam='Winner of Match 3'
        />
        <Match
          title='Match 12'
          homeTeam={getTeamName(3, teams)}
          awayTeam='Winner of Match 4'
        />
        <Match
          title='Match 13'
          homeTeam={getTeamName(4, teams)}
          awayTeam='Winner of Match 5'
        />
        <Match
          title='Match 14'
          homeTeam={getTeamName(5, teams)}
          awayTeam='Winner of Match 6'
        />
        <Match
          title='Match 15'
          homeTeam={getTeamName(6, teams)}
          awayTeam='Winner of Match 7'
        />
        <Match
          title='Match 16'
          homeTeam={getTeamName(7, teams)}
          awayTeam='Winner of Match 8'
        />
      </div>
      <div className='flex flex-col h-full justify-around bg-violet-400'>
        <Match
          title='Match 17'
          homeTeam='Winner of Match 9'
          awayTeam='Winner of Match 10'
        />
        <Match
          title='Match 18'
          homeTeam='Winner of Match 11'
          awayTeam='Winner of Match 12'
        />
        <Match
          title='Match 19'
          homeTeam='Winner of Match 13'
          awayTeam='Winner of Match 14'
        />
        <Match
          title='Match 20'
          homeTeam='Winner of Match 15'
          awayTeam='Winner of Match 16'
        />
      </div>
      <div className='flex flex-col h-full justify-around bg-violet-500'>
        <Match
          title='Match 21'
          homeTeam='Winner of Match 17'
          awayTeam='Winner of Match 18'
        />
        <Match
          title='Match 22'
          homeTeam='Winner of Match 19'
          awayTeam='Winner of Match 20'
        />
      </div>
      <div className='flex flex-col h-full justify-around bg-violet-600'>
        <Match
          title='Match 23'
          homeTeam='Winner of Match 21'
          awayTeam='Winner of Match 22'
        />
      </div>
    </div>
  );
}
