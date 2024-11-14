import { Contestant } from "../types/Contestant";

type ContestantScoreProps = {
  contestant: Contestant;
  isTurnTaker: boolean;
}

export function ContestantScore({contestant, isTurnTaker}: ContestantScoreProps) {
  return (
    <div 
      className={`flex justify-between items-center p-3 rounded-lg ${
        isTurnTaker ? 'bg-yellow-100' : 'bg-white'
      }`}
    >
      <span className={`text-lg font-medium ${contestant.colour || 'text-gray-700'}`}>
        {contestant.name}
      </span>
      <span className={`text-2xl font-bold ${contestant.colour || 'text-indigo-600'}`}>
        {contestant.score}
      <span className={`text-l font-bold ${contestant.colour || 'text-indigo-600'}`}>
        {`/${contestant.attempts}`}
      </span>
      </span>      
    </div>
  );
}