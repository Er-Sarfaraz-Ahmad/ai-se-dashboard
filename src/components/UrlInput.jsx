import { useState } from "react";
import { analyzeSEO } from "../services/seoApi";

function UrlInput({
  setSeoData,
  loading,
  setLoading,
}) {
  const [url, setUrl] =
    useState("");

  const [progress, setProgress] =
    useState(0);

  const handleAnalyze =
    async () => {
      if (!url.trim()) {
        alert(
          "Please enter a website URL"
        );
        return;
      }

      let interval;

      try {
        setLoading(true);

        setSeoData({
          seo: 0,
          performance: 0,
          mobile: 0,
          security: 0,
          website: null,
          recommendations: [],
        });

        setProgress(10);

        interval =
          setInterval(() => {
            setProgress((prev) => {
              if (prev >= 90)
                return 90;

              return prev + 10;
            });
          }, 300);

        const result =
          await analyzeSEO(url);

        clearInterval(interval);

        setProgress(100);

        setSeoData(result);

        setTimeout(() => {
          setProgress(0);
        }, 800);
      } catch (error) {
        console.error(error);

        alert(
          "Could not analyze website"
        );
      } finally {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };

  return (
    <div className="max-w-3xl mx-auto mt-8 sm:mt-10 bg-slate-800 p-5 sm:p-8 rounded-3xl border border-slate-700">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 sm:mb-4">
        Website SEO Analysis
      </h2>

      <p className="text-slate-400 text-center text-sm sm:text-base mb-5 sm:mb-6">
        Enter any website URL to
        generate SEO insights
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) =>
            setUrl(e.target.value)
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter"
            ) {
              handleAnalyze();
            }
          }}
          className="flex-1 bg-slate-900 border border-slate-600 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none focus:border-blue-500"
        />

        <button
          onClick={
            handleAnalyze
          }
          disabled={loading}
          className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px] ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {progress}%
            </>
          ) : (
            "Analyze SEO"
          )}
        </button>
      </div>

      {loading && (
        <div className="mt-5">
          <div className="flex justify-between text-xs sm:text-sm text-slate-300 mb-2">
            <span>
              Analyzing SEO...
            </span>

            <span>
              {progress}%
            </span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-2.5 sm:h-3 overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UrlInput;