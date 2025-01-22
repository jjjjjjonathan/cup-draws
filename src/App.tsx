import { Bracket } from './components/bracket';
import {
  mensByeRound,
  mensFirstRound,
  womensFirstRound,
  womensByeRound,
  bracketPlaceholder,
} from './lib/helpers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { atom, useSetAtom } from 'jotai';
import { Toaster } from './components/ui/sonner';

const logPlaceholder: string[] = [];

const initialMensState = {
  firstRoundTeams: mensFirstRound,
  byeTeams: mensByeRound,
  bracketSeeding: bracketPlaceholder,
  lastSelectedTeam: '',
  drawLog: logPlaceholder,
};
const initialWomensState = {
  firstRoundTeams: womensFirstRound,
  byeTeams: womensByeRound,
  bracketSeeding: bracketPlaceholder,
  lastSelectedTeam: '',
  drawLog: logPlaceholder,
};

export type State = typeof initialMensState;

const mensAtom = atom(initialMensState);
const womensAtom = atom(initialWomensState);

const resetMensBracket = () => {
  const setBracket = useSetAtom(mensAtom);
  setBracket(initialMensState);
};

const resetWomensBracket = () => {
  const setBracket = useSetAtom(womensAtom);
  setBracket(initialWomensState);
};

export type Atom = typeof mensAtom;

function App() {
  return (
    <>
      <Tabs className='w-full h-full' defaultValue='men'>
        <TabsList>
          <TabsTrigger value='men'>Men</TabsTrigger>
          <TabsTrigger value='women'>Women</TabsTrigger>
        </TabsList>
        <TabsContent value='men'>
          <Bracket
            byeTeamCount={6}
            isMensBracket={true}
            bracketAtom={mensAtom}
            initialState={initialMensState}
            resetBracket={resetMensBracket}
          />
        </TabsContent>
        <TabsContent value='women'>
          <Bracket
            byeTeamCount={7}
            isMensBracket={false}
            bracketAtom={womensAtom}
            initialState={initialWomensState}
            resetBracket={resetWomensBracket}
          />
        </TabsContent>
      </Tabs>
      <Toaster />
    </>
  );
}

export default App;
