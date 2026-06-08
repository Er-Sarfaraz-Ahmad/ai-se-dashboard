function SeoSummary({
  seo,
  performance,
  mobile,
  security,
  website,
}) {
  if (!website) return null;

  // SEO text logic
  const seoStatus =
    seo >= 85
      ? "strong"
      : seo >= 70
      ? "good"
      : "weak";

  // Performance text logic
  const performanceStatus =
    performance >= 85
      ? "excellent"
      : performance >= 70
      ? "good"
      : "poor";

  // Website health
  const websiteHealth =
    seo >= 85 &&
    performance >= 80 &&
    mobile >= 80 &&
    security >= 80
      ? "Excellent 🚀"
      : seo >= 70
      ? "Good ✅"
      : "Needs Improvement ⚠️";

  // Smart priority system
  let topPriority =
    "Maintain Website Health";

  if (
    performance < 70
  ) {
    topPriority =
      "Fix Performance First";
  } else if (
    seo < 80
  ) {
    topPriority =
      "Optimize SEO";
  } else if (
    mobile < 80
  ) {
    topPriority =
      "Improve Mobile UX";
  } else if (
    security < 80
  ) {
    topPriority =
      "Improve Security";
  }

  return (
    <div className="mt-10 bg-slate-800 rounded-[30px] p-6 md:p-8 border border-slate-700">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        🤖 AI SEO Summary
      </h2>

      <p className="text-slate-300 text-base md:text-lg leading-8">
        <span className="font-bold text-white">
          {
            website.domain
          }
        </span>{" "}
        has{" "}
        <span className="text-green-400 font-semibold capitalize">
          {
            seoStatus
          }{" "}
          SEO ({seo}%)
        </span>{" "}
        with{" "}
        <span
          className={`font-semibold capitalize ${
            performance >=
            70
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          {
            performanceStatus
          }{" "}
          performance (
          {
            performance
          }
          %)
        </span>
        . Mobile usability is{" "}
        <span className="text-yellow-400 font-semibold">
          {mobile}%
        </span>{" "}
        and security stands at{" "}
        <span className="text-blue-400 font-semibold">
          {security}%
        </span>
        .
      </p>

      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {/* Website Health */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-700">
          <h3 className="text-slate-400 uppercase text-sm">
            Website Health
          </h3>

          <p className="text-2xl md:text-3xl font-bold mt-2">
            {
              websiteHealth
            }
          </p>
        </div>

        {/* Top Priority */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-700">
          <h3 className="text-slate-400 uppercase text-sm">
            Top Priority
          </h3>

          <p className="text-2xl md:text-3xl font-bold mt-2 text-red-400">
            {
              topPriority
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeoSummary;