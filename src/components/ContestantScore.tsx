import { Contestant } from "../types/Contestant";

type ContestantScoreProps = {
  contestant: Contestant;
  isTurnTaker: boolean;
  isScoreHidden: boolean;
}

export function ContestantScore({ contestant, isTurnTaker, isScoreHidden }: ContestantScoreProps) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg ${isTurnTaker ? 'bg-yellow-100' : 'bg-white'
        }`}
    >
      <span className={`text-xl font-medium ${contestant.colour || 'text-gray-700'}`}>
        {contestant.name}
      </span>
      {isScoreHidden === false &&
      <span className={`text-3xl font-bold ${contestant.colour || 'text-indigo-600'}`}>
        {contestant.score}
        <span className={`text-base font-bold ${contestant.colour || 'text-indigo-600'}`}>
          {` /  ${contestant.attempts}`}
        </span>
      </span>
      }
    </div>
  );
}