import { useState } from "react";
import { Contestant } from "../types/Contestant";

type ContestantScoreProps = {
  contestant: Contestant;
  isTurnTaker: boolean;
  isScoreHidden: boolean;
  editScore: (delta: number) => void;
}

export function ContestantScore({ contestant, isTurnTaker, isScoreHidden, editScore }: ContestantScoreProps) {

  const [isEditMode, setIsEditMode] = useState(false)

  return (
    (<div className={`p-3 rounded-lg ${isTurnTaker ? 'bg-yellow-100' : 'bg-white' }`} >
      <div className="flex justify-between items-center">
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
        <span className={'text-lg font-medium text-gray-700'} onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? '❌' : '📝'}
        </span>
      </div>
      {isEditMode && 
        <div className="flex py-3">
          <span className="flex-1 text-lg text-center" onClick={() => editScore(-1)}>➖</span>
          <span className="flex-1 text-lg text-center" onClick={() => editScore(1)}>➕</span>
        </div>
      }
    </div>)
  );
}