import { Contestant } from "../types/Contestant";

type ContestantScoreProps = {
  contestant: Contestant;
  isTurnTaker: boolean;
  updateScore: (name: string, score: number) => void;
}

export function ContestantScore({ contestant, isTurnTaker, updateScore }: ContestantScoreProps) {
  
  const clickHandler = () => updateScore(contestant.name, contestant.score + 1)
  
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg ${isTurnTaker ? 'bg-yellow-100' : 'bg-orange-50'
        }`}
      onClick={clickHandler}
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