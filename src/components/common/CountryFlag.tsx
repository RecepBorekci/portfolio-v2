import React from 'react';
import clsx from 'clsx';
interface CountryFlagProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountryFlag({
  src,
  alt,
  className = '',
  style = {},
}: CountryFlagProps) {
  return (
    <div className={clsx('aspect-[4/3]', className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        style={style}
      />
    </div>
  );
}
