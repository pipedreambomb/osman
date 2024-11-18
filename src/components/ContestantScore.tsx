import { Contestant } from "../types/Contestant";

type ContestantScoreProps = {
  contestant: Contestant;
  isTurnTaker: boolean;
  onClick: (name: string) => void;
}

export function ContestantScore({ contestant, isTurnTaker, onClick }: ContestantScoreProps) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg ${isTurnTaker ? 'bg-yellow-100' : 'bg-orange-50'
        }`}
      onClick={() => onClick(contestant.name)}
    >
      <span className={`text-xl font-medium ${contestant.colour || 'text-gray-700'}`}>
        {contestant.name}
      </span>
      <span className={`text-3xl font-bold ${contestant.colour || 'text-indigo-600'}`}>
        {contestant.score}
        <span className={`text-base font-bold ${contestant.colour || 'text-indigo-600'}`}>
          {` /  ${contestant.attempts}`}
        </span>
      </span>
    </div>
  );
}