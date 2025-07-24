import React from 'react';
import clsx from 'clsx';

interface TeamLogoProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TeamLogo({
  src,
  alt,
  className = '',
  style = {},
}: TeamLogoProps) {
  return (
    <div
      className={clsx('aspect-square overflow-hidden rounded-full', className)}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={style}
      />
    </div>
  );
}
