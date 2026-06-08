function WebsiteInfo({
  website,
  seoScore,
}) {
  if (!website) return null;

  const getStatus = () => {
    if (seoScore >= 90) {
      return "Excellent 🚀";
    }

    if (seoScore >= 70) {
      return "Good ✅";
    }

    if (seoScore >= 50) {
      return "Average ⚠️";
    }

    return "Needs Improvement ❌";
  };

  const getGrade = () => {
    if (seoScore >= 90) {
      return "A+ 🟢";
    }

    if (seoScore >= 75) {
      return "A 🟢";
    }

    if (seoScore >= 60) {
      return "B 🟡";
    }

    if (seoScore >= 40) {
      return "C 🟠";
    }

    return "D 🔴";
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <a
        href={website.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="flex items-center gap-5">
          <img
            src={website.favicon}
            alt="favicon"
            className="w-16 h-16 rounded-2xl bg-white p-2"
          />

          <div>
            <h2 className="text-4xl font-bold text-white">
              {website.domain}
            </h2>

            <p className="text-gray-400 mt-1">
              {website.url}
            </p>

            <p className="text-blue-400 font-semibold mt-3 text-lg">
              SEO Status: {getStatus()}
            </p>

            <p className="text-slate-300 mt-2 text-lg">
              SEO Grade:{" "}
              <span className="font-bold text-white">
                {getGrade()}
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default WebsiteInfo;