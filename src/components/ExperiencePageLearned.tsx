interface ExperiencePageLearnedProps {
  whatILearned: string[];
}

const ExperiencePageLearned = ({
  whatILearned,
}: ExperiencePageLearnedProps) => (
  <div className="grid grid-cols-1 gap-2 max-w-[1280px] mx-auto mt-6 sm:mt-8 xl:mt-10">
    <h1 className="text-xl md:text-2xl font-bold">What I Learned</h1>
    <ul className="list-disc pl-6 text-md md:text-lg">
      {whatILearned.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ExperiencePageLearned;
