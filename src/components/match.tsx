import { Card } from '@/components/ui/card';
import { Separator } from './ui/separator';

type MatchProps = {
  matchNumber: number;
  homeTeam: string;
  awayTeam: string;
};

export const Match = ({ matchNumber, homeTeam, awayTeam }: MatchProps) => {
  return (
    <Card className='p-1 h-12 w-5/6 mx-auto'>
      <div className='flex flex-row font-semibold gap-x-2 h-full items-center w-full p-2'>
        <div className='w-5 text-center'>{matchNumber}</div>
        <Separator orientation='vertical' className='bg-slate-300 h-full' />
        <div className=''>
          <p className='text-ellipsis'>{homeTeam}</p>
          <p className='text-truncate'>{awayTeam}</p>
        </div>
      </div>
    </Card>
  );
};
