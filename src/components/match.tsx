import { Card, CardContent } from '@/components/ui/card';
import { Separator } from './ui/separator';

type MatchProps = {
  matchNumber: number;
  homeTeam: string;
  awayTeam: string;
};

export const Match = ({ matchNumber, homeTeam, awayTeam }: MatchProps) => {
  return (
    <Card>
      <CardContent className='space-x-1 flex flex-row items-center w-full'>
        <div className='my-auto'>{matchNumber}</div>
        <Separator orientation='vertical' className='bg-black h-8' />
        <div className=''>
          {homeTeam} v. {awayTeam}
        </div>
      </CardContent>
    </Card>
  );
};
