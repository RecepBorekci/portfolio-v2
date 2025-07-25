import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className = '' }: LayoutProps) => (
  <div
    className={`relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export const ResponsiveContainer = ({
  children,
  className = '',
}: LayoutProps) => (
  <div
    className={`relative flex w-full max-w-[1280px] items-center justify-around px-4 ${className}`}
  >
    {children}
  </div>
);

export const DesktopContainer = ({ children, className = '' }: LayoutProps) => (
  <div className={`relative h-[800px] w-full max-w-[1678px] ${className}`}>
    {children}
  </div>
);
