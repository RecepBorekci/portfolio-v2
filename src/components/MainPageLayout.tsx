import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className = "" }: LayoutProps) => (
  <div
    className={`min-h-screen overflow-hidden relative flex flex-col items-center justify-center gap-10 ${className}`}
  >
    {children}
  </div>
);

export const ResponsiveContainer = ({
  children,
  className = "",
}: LayoutProps) => (
  <div
    className={`relative w-full max-w-[1280px] px-4 flex items-center justify-around ${className}`}
  >
    {children}
  </div>
);

export const DesktopContainer = ({ children, className = "" }: LayoutProps) => (
  <div className={`relative w-full max-w-[1678px] h-[800px] ${className}`}>
    {children}
  </div>
);
