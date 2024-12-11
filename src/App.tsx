import { useLocalStorage } from '@uidotdev/usehooks';
import { GameControls } from './components/GameControls';
import { ScoreBoard } from './components/ScoreBoard';
import { Contestant, createContestant } from './types/Contestant';

function App() {
  const initialContestants: Contestant[] = [
    createContestant({ name: 'Mum', colour: 'text-pink-600' }),
    createContestant({ name: 'George', colour: 'text-cyan-600' }),
    createContestant({ name: 'Rob', colour: 'text-orange-600' }),
  ];
  const [contestants, setContestants] = useLocalStorage(
    'contestants',
    initialContestants
  );
  const [currentContestantIndex, setCurrentContestantIndex] = useLocalStorage('currentContestantIndex', 0);
  const [isRobMode, setIsRobMode] = useLocalStorage('isRobMode', false);
  const contestant = contestants[currentContestantIndex];

  const rotateTurn = (latestContestants: Contestant[]) => {
    setContestants(
      latestContestants.map((c) => {
        if (c.name === contestant.name) {
          return { ...c, attempts: c.attempts + 1 };
        } else {
          return c;
        }
      })
    );
    
    // If there are three contestants, increment the counter, looping back to the first if at the end.
    if (isRobMode) setCurrentContestantIndex(currentContestantIndex === contestants.length - 1
          ? 0
          : currentContestantIndex + 1)
    
    // In no Rob mode, there are two contestants, so toggle between them.
    else setCurrentContestantIndex(currentContestantIndex === 0 ? 1 : 0)
  }

  const skipHandler = () => rotateTurn(contestants);

  const resetHandler = () => setContestants(initialContestants)

  const correctHandler = () => {
    const latestContestants =
      contestants.map((c) => {
        if (c.name === contestant.name) {
          return { ...c, score: c.score + 1 };
        } else {
          return c;
        }
      })

    rotateTurn(latestContestants);
  };

  const robPresenceToggleHandler = () => {
    if(window.confirm(`Are you sure you want to change to ${isRobMode ? 'No Rob' : 'Rob'} Mode?`, )) {
      setIsRobMode(!isRobMode);
      // Don't leave it as Rob's turn!
      if(contestant.name === 'Rob') setCurrentContestantIndex(0);
    }
  }

  const filteredContestants = contestants.filter(c => isRobMode || c.name !== 'Rob');
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-blue-300 px-4 pb-12">
      <div className="text-right text-blue-700 py-4" onClick={robPresenceToggleHandler}>Rob {isRobMode && 'not '} here?</div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            <span className={contestant.colour}>{contestant.name}'s</span> Turn
          </h1>

          <GameControls onCorrect={correctHandler} onSkip={skipHandler} />
          <ScoreBoard contestants={filteredContestants} currentContestantName={contestant.name} isScoreHidden={!isRobMode} />

          <div className="mt-6 text-center">
            <button
              onClick={resetHandler}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
