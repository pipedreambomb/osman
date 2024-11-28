import { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { GameControls } from './components/GameControls';
import { ScoreBoard } from './components/ScoreBoard';
import { Contestant, createContestant } from './types/Contestant';

function App() {
  let initialContestants: Contestant[] = [
    createContestant({ name: 'Mum', colour: 'text-pink-600' }),
    createContestant({ name: 'George', colour: 'text-cyan-600' }),
    createContestant({ name: 'Rob', colour: 'text-orange-600' }),
  ];
  let [contestants, setContestants] = useLocalStorage(
    'contestants',
    initialContestants
  );
  let [currentContestantIndex, setCurrentContestantIndex] = useState(0);
  let contestant = contestants[currentContestantIndex];

  let rotateTurn = (latestContestants: Contestant[]) => {
    setContestants(
      latestContestants.map((c) => {
        if (c.name === contestant.name) {
          return { ...c, attempts: c.attempts + 1 };
        } else {
          return c;
        }
      })
    );
    setCurrentContestantIndex(
      currentContestantIndex === contestants.length - 1
        ? 0
        : currentContestantIndex + 1
    );
  }

  let skipHandler = () => rotateTurn(contestants);

  let resetHandler = () => setContestants(initialContestants)

  let correctHandler = () => {
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

  const clickContestantHandler = (name: string, score: number) => { alert(`${name}'s new score would be ${score}`)}

  const sortedContestants = [...contestants].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-blue-300 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            <span className={contestant.colour}>{contestant.name}'s</span> Turn
          </h1>

          <GameControls onCorrect={correctHandler} onSkip={skipHandler} />
          <ScoreBoard contestants={sortedContestants} currentContestantName={contestant.name} updateScore={clickContestantHandler} />

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
