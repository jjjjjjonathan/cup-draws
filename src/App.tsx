import { Bracket } from './components/bracket';
import { mensByeRound, mensFirstRound } from './lib/helpers';

function App() {
  return (
    <>
      <Bracket
        firstRoundTeamList={mensFirstRound}
        byeRoundTeamList={mensByeRound}
        title='L1 Cup (M) 2025'
        byeTeamCount={5}
        isMensBracket={true}
      />
    </>
  );
}

export default App;
