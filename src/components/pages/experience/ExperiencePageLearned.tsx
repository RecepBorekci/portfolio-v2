interface ExperiencePageLearnedProps {
  whatILearned: string[];
}

const ExperiencePageLearned = ({
  whatILearned,
}: ExperiencePageLearnedProps) => (
  <div className="mx-auto mt-6 grid max-w-[1280px] grid-cols-1 gap-2 sm:mt-8 xl:mt-10">
    <h3 className="text-xl font-bold md:text-2xl">What I Learned</h3>
    <ul className="text-md list-disc pl-6 md:text-lg">
      {whatILearned.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ExperiencePageLearned;
