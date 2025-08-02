import { backgroundImage } from '@data/backgroundImage';

export default function BackgroundImage() {
  return (
    <img
      src={backgroundImage.src}
      alt={backgroundImage.alt}
      aria-hidden="true"
      className="absolute top-0 left-0 z-0 h-full w-full object-cover xl:object-top"
    />
  );
}
