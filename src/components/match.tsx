import { Card } from '@/components/ui/card';
import { Separator } from './ui/separator';
import clsx from 'clsx';

type MatchProps = {
  matchNumber: number;
  homeTeam: string;
  awayTeam: string;
};

export const Match = ({ matchNumber, homeTeam, awayTeam }: MatchProps) => {
  return (
    <Card className='p-1 h-12 w-5/6 mx-auto'>
      <div className='flex flex-row font-light gap-x-2 h-full items-center w-full p-2'>
        <div className='w-5 text-center'>{matchNumber}</div>
        <Separator orientation='vertical' className='bg-slate-300 h-full' />
        <div className=''>
          <p
            className={clsx(
              'text-ellipsis',
              !homeTeam.includes('Team') &&
                !homeTeam.includes('Winner') &&
                'font-semibold'
            )}
          >
            {homeTeam}
          </p>
          <p
            className={clsx(
              'text-ellipsis',
              !awayTeam.includes('Team') &&
                !awayTeam.includes('Winner') &&
                'font-semibold'
            )}
          >
            {awayTeam}
          </p>
        </div>
      </div>
    </Card>
  );
};
