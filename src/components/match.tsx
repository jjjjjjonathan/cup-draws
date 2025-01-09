import { Card, CardContent, CardTitle } from '@/components/ui/card';

type MatchProps = {
  title: string;
  homeTeam: string;
  awayTeam: string;
};

export const Match = ({ title, homeTeam, awayTeam }: MatchProps) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent className='text-center'>
        {homeTeam} v. {awayTeam}
      </CardContent>
    </Card>
  );
};
