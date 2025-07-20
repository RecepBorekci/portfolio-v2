import clsx from 'clsx';

interface TagPillProps {
  tag: string;
  mdTextSm?: boolean;
}

export default function TagPill({ tag, mdTextSm }: TagPillProps) {
  return (
    <span
      className={clsx(
        'rounded-full bg-yellow-400/20 px-2 py-1 text-xs text-yellow-300',
        mdTextSm && 'md:text-sm'
      )}
    >
      {tag}
    </span>
  );
}
