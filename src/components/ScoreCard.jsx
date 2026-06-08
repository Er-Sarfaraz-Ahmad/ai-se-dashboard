function ScoreCard({
  title,
  score,
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg w-full">
      <h3 className="text-sm sm:text-lg text-slate-300 font-medium">
        {title}
      </h3>

      <div className="mt-3 sm:mt-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-blue-400">
          {score}%
        </h2>
      </div>

      <div className="mt-4 sm:mt-5 w-full bg-slate-700 rounded-full h-2.5 sm:h-3 overflow-hidden">
        <div
          className="bg-blue-500 h-full rounded-full transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ScoreCard;