interface ExperiencePageDescriptionProps {
  description: string;
}

const ExperiencePageDescription = ({
  description,
}: ExperiencePageDescriptionProps) => (
  <div className="grid grid-cols-1 gap-2 max-w-[1280px] mx-auto mt-6 sm:mt-8 xl:mt-10">
    <h3 className="text-xl md:text-2xl font-bold">Description</h3>
    <p className="text-md md:text-lg">{description}</p>
  </div>
);

export default ExperiencePageDescription;
