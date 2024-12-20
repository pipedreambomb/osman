type GameControlsProps = {
  onCorrect: () => void;
  onSkip: () => void;
};

export function GameControls({ onCorrect, onSkip }: GameControlsProps) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={onCorrect}
        className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Correct!
      </button>
      <button
        onClick={onSkip}
        className="flex-1 bg-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Pass
      </button>
    </div>
  );
}