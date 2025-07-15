import React from "react";
import StatCategoryCard from "../components/StatCategoryCard";
import StatSubCategoryCard from "../components/StatSubCategoryCard";
import { portfolioData } from "../data/portfolio";
import { StatCategory } from "../types/portfolio";

const StatsPage: React.FC = () => {
  const professionalSkillCategories: StatCategory[] =
    portfolioData.statsPageData;

  const renderMobileLayout = () => (
    <section
      className="md:hidden space-y-6"
      aria-label="Professional skills - Mobile view"
    >
      {professionalSkillCategories.map((skillCategory) => (
        <div
          key={`mobile-${skillCategory.id}`}
          className="flex items-stretch gap-4"
        >
          {/* Main skill category overview */}
          <StatCategoryCard category={skillCategory} displaySize="small" />

          {/* Individual skill breakdown */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillCategory.substats.map((individualSkill) => (
              <StatSubCategoryCard
                key={`${skillCategory.id}-${individualSkill.id}`}
                substatistic={individualSkill}
                displaySize="small"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );

  const renderDesktopLayout = () => (
    <section
      className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-6"
      aria-label="Professional skills - Desktop view"
    >
      {professionalSkillCategories.map((skillCategory) => (
        <div key={`desktop-${skillCategory.id}`} className="flex flex-col">
          {/* Main skill category overview */}
          <StatCategoryCard category={skillCategory} displaySize="large" />

          {/* Individual skill breakdown */}
          <div
            className="space-y-2"
            role="list"
            aria-label={`${skillCategory.name} skills`}
          >
            {skillCategory.substats.map((individualSkill) => (
              <StatSubCategoryCard
                key={`${skillCategory.id}-${individualSkill.id}`}
                substatistic={individualSkill}
                displaySize="large"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl border border-gray-600/20 rounded-xl w-full max-w-7xl mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 font-orbitron">
            Professional Skills Overview
          </h1>
          <p className="text-gray-300 text-lg font-orbitron">
            Technical expertise and competencies presented in player stats
            format
          </p>
        </header>

        {renderMobileLayout()}
        {renderDesktopLayout()}
      </div>
    </main>
  );
};

export default StatsPage;
