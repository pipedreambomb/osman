import { ContestantScore } from './ContestantScore';
import { Contestant } from '../types/Contestant';

type ScoreBoardProps = {
  contestants: Contestant[];
  currentContestantName: string;
  onClickContestantScore: (name: string) => void;
};

export function ScoreBoard({ contestants, currentContestantName, onClickContestantScore }: ScoreBoardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scores <span className='text-base pl-2 align-middle'>(tap to edit)</span></h2>
      <div className="space-y-3">
        {contestants.map((c) => (
          <ContestantScore
            contestant={c}
            isTurnTaker={c.name === currentContestantName}
            onClick={onClickContestantScore}
          />
        ))}
      </div>
    </div>
  );
}