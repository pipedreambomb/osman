import { useState } from "react";
import { Contestant } from "../types/Contestant";
import AnimateHeight from 'react-animate-height';
import { MinusCircleIcon, PencilIcon, PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

type ContestantScoreProps = {
  contestant: Contestant;
  isTurnTaker: boolean;
  isScoreHidden: boolean;
  editScore: (name: string, delta: number) => void;
}

export function ContestantScore({ contestant, isTurnTaker, isScoreHidden, editScore }: ContestantScoreProps) {

  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <AnimateHeight
        duration={300}
        height={isEditMode && !isScoreHidden ? 105 : 60} 

    className={`p-3 transition rounded-lg ${isTurnTaker ? 'bg-yellow-100' : 'bg-white' }`}>
        <div className="flex justify-between items-center">
          <span className={`flex-1 text-xl font-medium ${contestant.colour || 'text-gray-700'}`}>
            {contestant.name}
          </span>
          {isScoreHidden === false &&
          <div className="flex-1 flex">
            <span className={`flex-1 text-3xl font-bold ${contestant.colour || 'text-indigo-600'}`}>
              {contestant.score}
              <span className={`text-base font-bold ${contestant.colour || 'text-indigo-600'}`}>
                {` /  ${contestant.attempts}`}
              </span>
            </span>
            	 {isEditMode 
               ?  <XMarkIcon className={`flex-none  w-6 ${contestant.colour}`} onClick={() => setIsEditMode(!isEditMode)}/>
               :  <PencilIcon className={`flex-none  w-6 ${contestant.colour}`} onClick={() => setIsEditMode(!isEditMode)}/>}
            </div>
          }
        </div>
          <div className="flex py-4">
            <MinusCircleIcon className={`flex-1 h-8 ${contestant.colour}`} onClick={() => editScore(contestant.name, -1)}/>
            <PlusCircleIcon className={`flex-1 h-8 ${contestant.colour}`} onClick={() => editScore(contestant.name, 1)}/>
          </div>
        
    </AnimateHeight>
  );
}