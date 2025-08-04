import BackgroundImage from './BackgroundImage';
import clsx from 'clsx';

export default function BackgroundMotionWrapper({
  isMainPage,
}: {
  isMainPage: boolean;
}) {
  return (
    <div
      className={clsx(
        'absolute top-0 left-0 z-0 h-full w-full',
        isMainPage
          ? 'blur-none brightness-100'
          : 'bg-black/30 blur-md brightness-50'
      )}
    >
      <BackgroundImage />
    </div>
  );
}
