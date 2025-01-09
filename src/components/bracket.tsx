import { Card, CardContent, CardTitle } from './ui/card';
import { useState } from 'react';

const PREMIER = 'Premier';
const CHAMPIONSHIP = 'Championship';
const LEAGUE2 = 'League2';

type Team = {
  name: string;
  division: typeof PREMIER | typeof CHAMPIONSHIP | typeof LEAGUE2;
};

export const Bracket = () => {
  const [firstRoundTeams, setFirstRoundTeams] = useState<Team[]>([
    { name: 'Waterloo United', division: CHAMPIONSHIP },
    { name: 'Darby FC', division: CHAMPIONSHIP },
    { name: `Master's FA`, division: CHAMPIONSHIP },
    { name: 'North Mississauga SC', division: CHAMPIONSHIP },
    { name: 'Pickering FC', division: CHAMPIONSHIP },
    { name: 'York United Academy', division: CHAMPIONSHIP },
    { name: 'Unionville-Milliken SC', division: CHAMPIONSHIP },
    { name: 'Windsor City FC', division: CHAMPIONSHIP },
    { name: 'Sudbury Cyclones', division: CHAMPIONSHIP },
    { name: 'The Borough FC', division: CHAMPIONSHIP },
    { name: 'Guelph United FC', division: CHAMPIONSHIP },
    { name: 'Hamilton United', division: CHAMPIONSHIP },
    { name: 'Rush Canada Academy', division: LEAGUE2 },
    { name: 'Cambridge United', division: LEAGUE2 },
    { name: 'Railway City', division: LEAGUE2 },
  ]);
  const [byeTeams, setByeTeams] = useState<Team[]>([
    { name: 'Scrosoppi FC', division: PREMIER },
    { name: 'Vaughan Azzurri', division: PREMIER },
    { name: 'Woodbridge Strikers', division: PREMIER },
    { name: 'North Toronto Nitros', division: PREMIER },
    { name: 'Simcoe County Rovers', division: PREMIER },
    { name: 'Alliance United', division: PREMIER },
    { name: 'Oakville SC', division: PREMIER },
    { name: 'Burlington SC', division: PREMIER },
    { name: 'Sigma FC', division: PREMIER },
    { name: 'ProStars FC', division: PREMIER },
    { name: 'FC London', division: PREMIER },
    { name: 'St. Catharines Roma', division: PREMIER },
  ]);
  const [bracketSeeding, setBracketSeeding] = useState<Team[]>([]);

  return (
    <div className='flex flex-col justify-between'>
      <div className='grid grid-cols-5'>
        <div className='flex flex-col h-full bg-blue-200 justify-around'>
          <Card>
            <CardTitle>Match 1</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 5 ? bracketSeeding[5].name : 'Team 1'} v.{' '}
              {bracketSeeding.length > 6 ? bracketSeeding[6].name : 'Team 2'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 2</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 7 ? bracketSeeding[7].name : 'Team 3'} v.{' '}
              {bracketSeeding.length > 8 ? bracketSeeding[8].name : 'Team 4'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 3</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 9 ? bracketSeeding[9].name : 'Team 5'} v.{' '}
              {bracketSeeding.length > 10 ? bracketSeeding[10].name : 'Team 6'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 4</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 11 ? bracketSeeding[11].name : 'Team 7'}{' '}
              v.{' '}
              {bracketSeeding.length > 12 ? bracketSeeding[12].name : 'Team 8'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 5</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 13 ? bracketSeeding[13].name : 'Team 9'}{' '}
              v.{' '}
              {bracketSeeding.length > 14 ? bracketSeeding[14].name : 'Team 10'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 6</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 15 ? bracketSeeding[15].name : 'Team 11'}{' '}
              v.{' '}
              {bracketSeeding.length > 16 ? bracketSeeding[16].name : 'Team 12'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 7</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 17 ? bracketSeeding[17].name : 'Team 13'}{' '}
              v.{' '}
              {bracketSeeding.length > 18 ? bracketSeeding[18].name : 'Team 14'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 8</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 19 ? bracketSeeding[19].name : 'Team 15'}{' '}
              v.{' '}
              {bracketSeeding.length > 20 ? bracketSeeding[20].name : 'Team 16'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 9</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 21 ? bracketSeeding[21].name : 'Team 17'}{' '}
              v.{' '}
              {bracketSeeding.length > 22 ? bracketSeeding[22].name : 'Team 18'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 10</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 23 ? bracketSeeding[23].name : 'Team 19'}{' '}
              v.{' '}
              {bracketSeeding.length > 24 ? bracketSeeding[24].name : 'Team 20'}
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 11</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 25 ? bracketSeeding[25].name : 'Team 21'}{' '}
              v.{' '}
              {bracketSeeding.length > 26 ? bracketSeeding[26].name : 'Team 22'}
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col bg-blue-300 h-full justify-around'>
          <Card>
            <CardTitle>Match 12</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 0 ? bracketSeeding[0].name : 'Team 23'}{' '}
              v. Winner of Match 1
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 13</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 1 ? bracketSeeding[1].name : 'Team 24'}{' '}
              v. Winner of Match 2
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 14</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 2 ? bracketSeeding[2].name : 'Team 25'}{' '}
              v. Winner of Match 3
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 15</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 3 ? bracketSeeding[3].name : 'Team 26'}{' '}
              v. Winner of Match 4
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Match 16</CardTitle>
            <CardContent className='text-center'>
              {bracketSeeding.length > 4 ? bracketSeeding[4].name : 'Team 27'}{' '}
              v. Winner of Match 5
            </CardContent>
          </Card>
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
      </div>
    </div>
  );
};
