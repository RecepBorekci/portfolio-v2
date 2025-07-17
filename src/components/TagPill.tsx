import clsx from "clsx";

interface TagPillProps {
  tag: string;
  mdTextSm?: boolean;
}

export default function TagPill({ tag, mdTextSm }: TagPillProps) {
  return (
    <span
      className={clsx(
        "bg-yellow-400/20 text-yellow-300 px-2 py-1 text-xs rounded-full",
        mdTextSm && "md:text-sm"
      )}
    >
      {tag}
    </span>
  );
}
