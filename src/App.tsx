import { Bracket } from './components/bracket';
import {
  mensByeRound,
  mensFirstRound,
  womensFirstRound,
  womensByeRound,
  bracketPlaceholder,
} from './lib/helpers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { atom } from 'jotai';

const logPlaceholder: string[] = [];

const mensAtom = atom({
  firstRoundTeams: mensFirstRound,
  byeTeams: mensByeRound,
  bracketSeeding: bracketPlaceholder,
  lastSelectedTeam: '',
  drawLog: logPlaceholder,
});
const womensAtom = atom({
  firstRoundTeams: womensFirstRound,
  byeTeams: womensByeRound,
  bracketSeeding: bracketPlaceholder,
  lastSelectedTeam: '',
  drawLog: logPlaceholder,
});

export type Atom = typeof mensAtom;

function App() {
  return (
    <Tabs className='w-full h-full' defaultValue='men'>
      <TabsList>
        <TabsTrigger value='men'>Men</TabsTrigger>
        <TabsTrigger value='women'>Women</TabsTrigger>
      </TabsList>
      <TabsContent value='men'>
        <Bracket byeTeamCount={5} isMensBracket={true} bracketAtom={mensAtom} />
      </TabsContent>
      <TabsContent value='women'>
        <Bracket
          byeTeamCount={7}
          isMensBracket={false}
          bracketAtom={womensAtom}
        />
      </TabsContent>
    </Tabs>
  );
}

export default App;
