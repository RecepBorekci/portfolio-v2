import TagPill from "./TagPill";

interface ExperiencePageTagsProps {
  tags: string[];
}

const ExperiencePageTags = ({ tags }: ExperiencePageTagsProps) => (
  <div className="grid grid-cols-1 gap-2 max-w-[1280px] mx-auto mt-6 sm:mt-8 xl:mt-10">
    <h1 className="text-xl md:text-2xl font-bold">Tags</h1>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagPill key={tag} tag={tag} mdTextSm />
      ))}
    </div>
  </div>
);

export default ExperiencePageTags;
