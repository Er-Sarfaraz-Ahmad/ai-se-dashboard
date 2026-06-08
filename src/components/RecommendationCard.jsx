function RecommendationCard({
  title,
  description,
}) {
  return (
    <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="text-gray-400 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
}

export default RecommendationCard;