type ContestantScoreProps = {
  name: string;
  score: number;
  isTurnTaker: boolean;
  colour: string;
};


export function ContestantScore({ name, score, isTurnTaker, colour }: ContestantScoreProps) {
  return (
    <div 
      className={`flex justify-between items-center p-3 rounded-lg ${
        isTurnTaker ? 'bg-yellow-100' : 'bg-white'
      }`}
    >
      <span className={`text-lg font-medium ${colour || 'text-gray-700'}`}>
        {name}
      </span>
      <span className={`text-2xl font-bold ${colour || 'text-indigo-600'}`}>
        {score}
      </span>
    </div>
  );
}