import TagPill from '@components/common/TagPill';

interface ExperiencePageTagsProps {
  tags: string[];
}

const ExperiencePageTags = ({ tags }: ExperiencePageTagsProps) => (
  <div className="mx-auto mt-6 grid max-w-[1280px] grid-cols-1 gap-2 sm:mt-8 xl:mt-10">
    <h3 className="text-xl font-bold md:text-2xl">Tags</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <TagPill key={tag} tag={tag} mdTextSm />
      ))}
    </div>
  </div>
);

export default ExperiencePageTags;
