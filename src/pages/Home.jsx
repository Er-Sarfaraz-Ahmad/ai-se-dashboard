import { useState } from "react";
import Header from "../components/Header";
import UrlInput from "../components/UrlInput";
import ScoreCard from "../components/ScoreCard";
import RecommendationCard from "../components/RecommendationCard";
import WebsiteInfo from "../components/WebsiteInfo";
import SeoSummary from "../components/SeoSummary.jsx";

const downloadReport = (
  seoData
) => {
  const report = `
AI SEO AUDIT REPORT
========================

Website:
${seoData.website?.url}

SEO Score:
${seoData.seo}%

Performance:
${seoData.performance}%

Mobile Friendly:
${seoData.mobile}%

Security:
${seoData.security}%

Recommendations:
${seoData.recommendations
  .map(
    (item) =>
      `- ${item.title}: ${item.description}`
  )
  .join("\n")}
`;

  const blob = new Blob(
    [report],
    {
      type: "text/plain",
    }
  );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    "seo-report.txt";

  link.click();
};

function Home() {
  const [seoData, setSeoData] =
    useState({
      seo: 0,
      performance: 0,
      mobile: 0,
      security: 0,
      website: null,
      recommendations: [],
    });

  const [loading, setLoading] =
    useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 md:pt-24 pb-20 overflow-x-hidden">

      {/* Header */}
      <Header />

      {/* URL Input */}
      <UrlInput
        setSeoData={setSeoData}
        loading={loading}
        setLoading={setLoading}
      />

      {/* Website Info */}
      <WebsiteInfo
        website={seoData.website}
        seoScore={seoData.seo}
      />

      {/* SEO Summary */}
      <SeoSummary
        seo={seoData.seo}
        performance={
          seoData.performance
        }
        mobile={seoData.mobile}
        security={
          seoData.security
        }
        website={seoData.website}
      />

      {/* Score Cards */}
      <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
        {loading ? (
          [...Array(4)].map(
            (_, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 sm:p-7 rounded-[26px] animate-pulse h-40 sm:h-56 border border-slate-700"
              >
                <div className="h-4 sm:h-5 bg-slate-700 rounded w-1/2 mb-6"></div>

                <div className="h-10 sm:h-14 bg-slate-700 rounded w-20 sm:w-24 mb-6"></div>

                <div className="h-2.5 sm:h-3 bg-slate-700 rounded-full"></div>
              </div>
            )
          )
        ) : (
          <>
            <ScoreCard
              title="SEO Score"
              score={
                seoData.seo
              }
            />

            <ScoreCard
              title="Performance"
              score={
                seoData.performance
              }
            />

            <ScoreCard
              title="Mobile Friendly"
              score={
                seoData.mobile
              }
            />

            <ScoreCard
              title="Security"
              score={
                seoData.security
              }
            />
          </>
        )}
      </div>

      {/* Export Report */}
      {seoData.website && (
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={() =>
              downloadReport(
                seoData
              )
            }
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold shadow-lg hover:scale-105"
          >
            📄 Export SEO Report
          </button>
        </div>
      )}

      {/* Recommendations */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-8 text-center sm:text-left">
          AI Recommendations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {seoData.recommendations
            .length > 0 ? (
            seoData.recommendations.map(
              (
                item,
                index
              ) => (
                <RecommendationCard
                  key={index}
                  title={
                    item.title
                  }
                  description={
                    item.description
                  }
                />
              )
            )
          ) : (
            <div className="text-center py-10 sm:py-12 text-slate-400 col-span-1 lg:col-span-2 text-sm sm:text-base bg-slate-900 border border-slate-800 rounded-3xl">
              Analyze a website to
              get AI SEO
              recommendations 🚀
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;