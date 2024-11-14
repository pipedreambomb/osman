import { ContestantScore } from './ContestantScore';
import { Contestant } from '../types/Contestant';

type ScoreBoardProps = {
  contestants: Contestant[];
  currentContestantName: string;
};

export function ScoreBoard({ contestants, currentContestantName }: ScoreBoardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scores</h2>
      <div className="space-y-3">
        {contestants.map((c) => (
          <ContestantScore
            contestant={c}
            isTurnTaker={c.name === currentContestantName}
          />
        ))}
      </div>
    </div>
  );
}