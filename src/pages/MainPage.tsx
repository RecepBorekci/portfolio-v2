import PlayerCard from '@components/pages/main/PlayerCard';
import SidePanel from '@components/pages/main/SidePanel';
import Platform from '@assets/svgs/Platform.svg?react';
import {
  PageContainer,
  ResponsiveContainer,
  DesktopContainer,
} from '@components/layout/MainPageLayout';

// Mobile/Tablet Layout
const MobileLayout = () => (
  <ResponsiveContainer className="xl:hidden">
    <div className="hidden self-end md:block">
      <SidePanel mirrored={false} />
    </div>
    <div className="flex justify-center">
      <PlayerCard size="full" />
    </div>
    <div className="hidden self-end md:block">
      <SidePanel mirrored={true} />
    </div>
  </ResponsiveContainer>
);

// Desktop Layout
const DesktopLayout = () => (
  <DesktopContainer className="hidden xl:block">
    <div className="flex h-full w-[80vw] justify-center xl:absolute xl:bottom-0 xl:left-1/2 xl:z-20 xl:h-auto xl:w-auto xl:-translate-x-1/2">
      <Platform />
    </div>
    <div className="hidden lg:block">
      <SidePanel mirrored={false} />
    </div>
    <PlayerCard size="full" />
    <div className="hidden lg:block">
      <SidePanel mirrored={true} />
    </div>
  </DesktopContainer>
);

// Main Page Component
export default function MainPage() {
  return (
    <PageContainer>
      <MobileLayout />
      <DesktopLayout />
    </PageContainer>
  );
}
