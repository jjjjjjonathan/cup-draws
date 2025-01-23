import { Match } from './match';
import type { Team } from '@/lib/helpers';
import { getTeamName } from '@/lib/helpers';
import { Separator } from './ui/separator';

type MensMatchesProps = {
  teams: Team[];
};

export function MensMatches({ teams }: MensMatchesProps) {
  return (
    <>
      <div className='grid grid-cols-5 text-center font-semibold text-xl'>
        <p>Round One</p>
        <p>Round Two</p>
        <p>Quarter-finals</p>
        <p>Semifinals</p>
        <p>Final</p>
      </div>
      <Separator className='m-4' />
      <div className='grid grid-cols-5'>
        <div className='flex flex-col h-full justify-around gap-y-2'>
          <Match
            matchNumber={1}
            homeTeam={getTeamName(6, teams)}
            awayTeam={getTeamName(7, teams)}
          />
          <Match
            matchNumber={2}
            homeTeam={getTeamName(8, teams)}
            awayTeam={getTeamName(9, teams)}
          />
          <Match
            matchNumber={3}
            homeTeam={getTeamName(10, teams)}
            awayTeam={getTeamName(11, teams)}
          />
          <Match
            matchNumber={4}
            homeTeam={getTeamName(12, teams)}
            awayTeam={getTeamName(13, teams)}
          />
          <Match
            matchNumber={5}
            homeTeam={getTeamName(14, teams)}
            awayTeam={getTeamName(15, teams)}
          />
          <Match
            matchNumber={6}
            homeTeam={getTeamName(16, teams)}
            awayTeam={getTeamName(17, teams)}
          />
          <Match
            matchNumber={7}
            homeTeam={getTeamName(18, teams)}
            awayTeam={getTeamName(19, teams)}
          />
          <Match
            matchNumber={8}
            homeTeam={getTeamName(20, teams)}
            awayTeam={getTeamName(21, teams)}
          />
          <Match
            matchNumber={9}
            homeTeam={getTeamName(22, teams)}
            awayTeam={getTeamName(23, teams)}
          />
          <Match
            matchNumber={10}
            homeTeam={getTeamName(24, teams)}
            awayTeam={getTeamName(25, teams)}
          />
        </div>
        <div className='flex flex-col h-full justify-around gap-y-2'>
          <Match
            matchNumber={11}
            homeTeam={getTeamName(0, teams)}
            awayTeam='Winner of Match 1'
          />
          <Match
            matchNumber={12}
            homeTeam='Winner of Match 2'
            awayTeam='Winner of Match 3'
          />
          <Match
            matchNumber={13}
            homeTeam={getTeamName(1, teams)}
            awayTeam='Winner of Match 4'
          />
          <Match
            matchNumber={14}
            homeTeam={getTeamName(2, teams)}
            awayTeam='Winner of Match 5'
          />
          <Match
            matchNumber={15}
            homeTeam={getTeamName(3, teams)}
            awayTeam='Winner of Match 6'
          />
          <Match
            matchNumber={16}
            homeTeam='Winner of Match 7'
            awayTeam='Winner of Match 8'
          />
          <Match
            matchNumber={17}
            homeTeam={getTeamName(4, teams)}
            awayTeam='Winner of Match 9'
          />
          <Match
            matchNumber={18}
            homeTeam={getTeamName(5, teams)}
            awayTeam='Winner of Match 10'
          />
        </div>
        <div className='flex flex-col h-full justify-around gap-y-2'>
          <Match
            matchNumber={19}
            homeTeam='Winner of Match 11'
            awayTeam='Winner of Match 12'
          />
          <Match
            matchNumber={20}
            homeTeam='Winner of Match 13'
            awayTeam='Winner of Match 14'
          />
          <Match
            matchNumber={21}
            homeTeam='Winner of Match 15'
            awayTeam='Winner of Match 16'
          />
          <Match
            matchNumber={22}
            homeTeam='Winner of Match 17'
            awayTeam='Winner of Match 18'
          />
        </div>
        <div className='flex flex-col h-full justify-around gap-y-2'>
          <Match
            matchNumber={23}
            homeTeam='Winner of Match 19'
            awayTeam='Winner of Match 20'
          />
          <Match
            matchNumber={24}
            homeTeam='Winner of Match 21'
            awayTeam='Winner of Match 22'
          />
        </div>
        <div className='flex flex-col h-full justify-around gap-y-2'>
          <Match
            matchNumber={25}
            homeTeam='Winner of Match 23'
            awayTeam='Winner of Match 24'
          />
        </div>
      </div>
    </>
  );
}
