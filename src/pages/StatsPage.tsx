import { portfolioData } from "../data/portfolio";
import { StatCategory } from "../types/portfolio";

function StatsPage() {
  // This Page will contain the information about my skills in general presented as soccer player stats format with ratings etc.
  const statsPageData: StatCategory[] = portfolioData.statsPageData;

  // Function to get color based on stat value
  const getStatColor = (value: number) => {
    if (value >= 80) return "#22c55e"; // Green
    if (value >= 70) return "#eab308"; // Yellow
    if (value >= 60) return "#f97316"; // Orange
    return "#ef4444"; // Red
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl border border-gray-600/20 rounded-xl w-full max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Player Stats
        </h1>

        {/* Horizontal Layout for Small Screens (sm and below) */}
        <div className="md:hidden space-y-6">
          {statsPageData.map((category) => (
            <div
              key={`horizontal-${category.id}`}
              className="flex items-stretch gap-4"
            >
              {/* Main Category on the Left */}
              <div className="bg-gray-800/80 border border-gray-600/30 rounded-lg p-4 text-center flex-shrink-0 w-[30%] flex flex-col justify-center">
                {/* Circular Progress Indicator */}
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg
                    className="w-16 h-16 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    {/* Background circle */}
                    <path
                      className="text-gray-600"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Progress circle */}
                    <path
                      stroke={getStatColor(category.value)}
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={`${category.value}, 100`}
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  {/* Value in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-lg font-bold"
                      style={{ color: getStatColor(category.value) }}
                    >
                      {category.value}
                    </span>
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>

              {/* Sub-stats flowing horizontally to the right */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.substats.map((substat) => (
                  <div
                    key={`${category.id}-${substat.id}`}
                    className="bg-gray-700/50 rounded px-3 py-3 text-sm"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 truncate pr-2 text-xs font-medium tracking-wide leading-relaxed">
                        {substat.label}
                      </span>
                      <span
                        className="font-bold text-sm"
                        style={{ color: getStatColor(substat.value) }}
                      >
                        {substat.value}
                      </span>
                    </div>
                    {/* Mini Progress Bar */}
                    <div className="w-full h-1 bg-gray-600/50 rounded mt-1">
                      <div
                        className="h-1 rounded"
                        style={{
                          width: `${substat.value}%`,
                          backgroundColor: getStatColor(substat.value),
                          transition: "width 0.5s",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Grid Layout for Medium Screens and Above */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-6">
          {statsPageData.map((category) => (
            <div key={`vertical-${category.id}`} className="flex flex-col">
              {/* Main Category */}
              <div className="bg-gray-800/80 border border-gray-600/30 rounded-lg p-4 text-center mb-4">
                {/* Circular Progress Indicator */}
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg
                    className="w-20 h-20 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    {/* Background circle */}
                    <path
                      className="text-gray-600"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Progress circle */}
                    <path
                      stroke={getStatColor(category.value)}
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={`${category.value}, 100`}
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  {/* Value in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-xl font-bold"
                      style={{ color: getStatColor(category.value) }}
                    >
                      {category.value}
                    </span>
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>

              {/* Sub-stats */}
              <div className="space-y-2">
                {category.substats.map((substat) => (
                  <div
                    key={`${category.id}-${substat.id}`}
                    className="bg-gray-700/50 rounded px-3 py-4 text-sm mb-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 truncate pr-2">
                        {substat.label}
                      </span>
                      <span
                        className="font-bold min-w-[2rem] text-right"
                        style={{ color: getStatColor(substat.value) }}
                      >
                        {substat.value}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-600/50 rounded mt-2">
                      <div
                        className="h-2 rounded"
                        style={{
                          width: `${substat.value}%`,
                          backgroundColor: getStatColor(substat.value),
                          transition: "width 0.5s",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
