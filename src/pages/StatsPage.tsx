import React from 'react';
import StatCategoryCard from '@components/pages/stats/StatCategoryCard';
import StatSubCategoryCard from '@components/pages/stats/StatSubCategoryCard';
import { statsPageData } from '@data/stats';
import { StatCategory } from '@customTypes/portfolio';

const StatsPage: React.FC = () => {
  const professionalSkillCategories: StatCategory[] = statsPageData;

  const renderMobileLayout = () => (
    <section
      className="space-y-6 md:hidden"
      aria-label="Professional skills - Mobile view"
    >
      {professionalSkillCategories.map((skillCategory, categoryIndex) => (
        <div
          key={`mobile-${skillCategory.id}`}
          className="flex items-stretch gap-4"
        >
          {/* Main skill category overview */}
          <StatCategoryCard
            category={skillCategory}
            displaySize="small"
            delay={categoryIndex * 0.1}
          />

          {/* Individual skill breakdown */}
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
            {skillCategory.substats.map((individualSkill, subIndex) => (
              <StatSubCategoryCard
                key={`${skillCategory.id}-${individualSkill.id}`}
                substatistic={individualSkill}
                displaySize="small"
                delay={categoryIndex * 0.1 + (subIndex + 1) * 0.15}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );

  const renderDesktopLayout = () => (
    <section
      className="hidden grid-cols-3 gap-6 md:grid lg:grid-cols-6"
      aria-label="Professional skills - Desktop view"
    >
      {professionalSkillCategories.map((skillCategory, categoryIndex) => (
        <div key={`desktop-${skillCategory.id}`} className="flex flex-col">
          {/* Main skill category overview */}
          <StatCategoryCard
            category={skillCategory}
            displaySize="large"
            delay={categoryIndex * 0.2}
          />

          {/* Individual skill breakdown */}
          <div
            className="space-y-2"
            role="list"
            aria-label={`${skillCategory.name} skills`}
          >
            {skillCategory.substats.map((individualSkill, subIndex) => (
              <StatSubCategoryCard
                key={`${skillCategory.id}-${individualSkill.id}`}
                substatistic={individualSkill}
                displaySize="large"
                delay={categoryIndex * 0.2 + (subIndex + 1) * 0.1}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mx-auto w-full max-w-7xl rounded-xl border border-gray-600/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl">
        <header className="mb-8 text-center">
          <h1 className="font-orbitron mb-2 text-4xl font-bold text-white">
            Professional Skills Overview
          </h1>
          <p className="font-orbitron text-lg text-gray-300">
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
