interface ExperiencePageDescriptionProps {
  description: string;
}

const ExperiencePageDescription = ({
  description,
}: ExperiencePageDescriptionProps) => (
  <div className="mx-auto mt-6 grid max-w-[1280px] grid-cols-1 gap-2 sm:mt-8 xl:mt-10">
    <h3 className="text-xl font-bold md:text-2xl">Description</h3>
    <p className="text-sm md:text-lg">{description}</p>
  </div>
);

export default ExperiencePageDescription;
