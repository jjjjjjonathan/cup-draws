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
          matchNumber={1}
          homeTeam={getTeamName(5, teams)}
          awayTeam={getTeamName(6, teams)}
        />
        <Match
          matchNumber={2}
          homeTeam={getTeamName(7, teams)}
          awayTeam={getTeamName(8, teams)}
        />
        <Match
          matchNumber={3}
          homeTeam={getTeamName(9, teams)}
          awayTeam={getTeamName(10, teams)}
        />
        <Match
          matchNumber={4}
          homeTeam={getTeamName(11, teams)}
          awayTeam={getTeamName(12, teams)}
        />
        <Match
          matchNumber={5}
          homeTeam={getTeamName(13, teams)}
          awayTeam={getTeamName(14, teams)}
        />
        <Match
          matchNumber={6}
          homeTeam={getTeamName(15, teams)}
          awayTeam={getTeamName(16, teams)}
        />
        <Match
          matchNumber={7}
          homeTeam={getTeamName(17, teams)}
          awayTeam={getTeamName(18, teams)}
        />
        <Match
          matchNumber={8}
          homeTeam={getTeamName(19, teams)}
          awayTeam={getTeamName(20, teams)}
        />
        <Match
          matchNumber={9}
          homeTeam={getTeamName(21, teams)}
          awayTeam={getTeamName(22, teams)}
        />
        <Match
          matchNumber={10}
          homeTeam={getTeamName(23, teams)}
          awayTeam={getTeamName(24, teams)}
        />
        <Match
          matchNumber={11}
          homeTeam={getTeamName(25, teams)}
          awayTeam={getTeamName(26, teams)}
        />
      </div>
      <div className='flex flex-col bg-emerald-300 h-full justify-around'>
        <Match
          matchNumber={12}
          homeTeam={getTeamName(0, teams)}
          awayTeam='Winner of Match 1'
        />
        <Match
          matchNumber={13}
          homeTeam='Winner of Match 2'
          awayTeam='Winner of Match 3'
        />
        <Match
          matchNumber={14}
          homeTeam={getTeamName(1, teams)}
          awayTeam='Winner of Match 4'
        />
        <Match
          matchNumber={15}
          homeTeam={getTeamName(2, teams)}
          awayTeam='Winner of Match 5'
        />
        <Match
          matchNumber={16}
          homeTeam={getTeamName(3, teams)}
          awayTeam='Winner of Match 6'
        />
        <Match
          matchNumber={17}
          homeTeam='Winner of Match 7'
          awayTeam='Winner of Match 8'
        />
        <Match
          matchNumber={18}
          homeTeam={getTeamName(4, teams)}
          awayTeam='Winner of Match 9'
        />
        <Match
          matchNumber={19}
          homeTeam='Winner of Match 10'
          awayTeam='Winner of Match 11'
        />
      </div>
      <div className='flex flex-col h-full bg-emerald-400 justify-around'>
        <Match
          matchNumber={20}
          homeTeam='Winner of Match 12'
          awayTeam='Winner of Match 13'
        />
        <Match
          matchNumber={21}
          homeTeam='Winner of Match 14'
          awayTeam='Winner of Match 15'
        />
        <Match
          matchNumber={22}
          homeTeam='Winner of Match 16'
          awayTeam='Winner of Match 77'
        />
        <Match
          matchNumber={23}
          homeTeam='Winner of Match 18'
          awayTeam='Winner of Match 19'
        />
      </div>
      <div className='flex flex-col h-full bg-emerald-500 justify-around'>
        <Match
          matchNumber={24}
          homeTeam='Winner of Match 20'
          awayTeam='Winner of Match 21'
        />
        <Match
          matchNumber={25}
          homeTeam='Winner of Match 22'
          awayTeam='Winner of Match 23'
        />
      </div>
      <div className='flex flex-col h-full bg-emerald-600 justify-around'>
        <Match
          matchNumber={26}
          homeTeam='Winner of Match 24'
          awayTeam='Winner of Match 25'
        />
      </div>
    </div>
  );
}
