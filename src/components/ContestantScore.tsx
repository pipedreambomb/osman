import React from 'react';

type ContestantScoreProps = {
  name: string;
  score: number;
  isLeader: boolean;
  colour: string;
};


export function ContestantScore({ name, score, isLeader, colour }: ContestantScoreProps) {
  return (
    <div 
      className={`flex justify-between items-center p-3 rounded-lg ${
        isLeader ? 'bg-yellow-100' : 'bg-white'
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