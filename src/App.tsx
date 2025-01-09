import { Bracket } from './components/bracket';
import {
  mensByeRound,
  mensFirstRound,
  womensFirstRound,
  womensByeRound,
} from './lib/helpers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function App() {
  return (
    <Tabs className='w-full h-full' defaultValue='men'>
      <TabsList>
        <TabsTrigger value='men'>Men</TabsTrigger>
        <TabsTrigger value='women'>Women</TabsTrigger>
      </TabsList>
      <TabsContent value='men'>
        <Bracket
          firstRoundTeamList={mensFirstRound}
          byeRoundTeamList={mensByeRound}
          byeTeamCount={5}
          isMensBracket={true}
        />
      </TabsContent>
      <TabsContent value='women'>
        <Bracket
          firstRoundTeamList={womensFirstRound}
          byeRoundTeamList={womensByeRound}
          byeTeamCount={7}
          isMensBracket={false}
        />
      </TabsContent>
    </Tabs>
  );
}

export default App;
