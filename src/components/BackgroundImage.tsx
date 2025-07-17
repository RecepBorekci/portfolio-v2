import clsx from "clsx";

interface BackgroundImageProps {
  isMainPage: boolean;
}

export default function BackgroundImage({ isMainPage }: BackgroundImageProps) {
  return (
    <img
      src="/images/Stadium.jpg"
      alt=""
      aria-hidden="true"
      className={clsx(
        "absolute top-0 left-0 w-full h-full object-cover xl:object-top z-0 transition-all duration-500",
        isMainPage ? "" : "blur-md brightness-50"
      )}
    />
  );
}
