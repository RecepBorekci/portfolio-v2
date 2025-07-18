import PlayerCard from "../components/PlayerCard";
import SidePanel from "../components/SidePanel";
import Platform from "../components/Platform.svg?react";
import {
  PageContainer,
  ResponsiveContainer,
  DesktopContainer,
} from "../components/MainPageLayout";

// Mobile/Tablet Layout
const MobileLayout = () => (
  <ResponsiveContainer className="xl:hidden">
    <div className="hidden md:block self-end">
      <SidePanel mirrored={false} />
    </div>
    <div className="flex justify-center">
      <PlayerCard size="full" />
    </div>
    <div className="hidden md:block self-end">
      <SidePanel mirrored={true} />
    </div>
  </ResponsiveContainer>
);

// Desktop Layout
const DesktopLayout = () => (
  <DesktopContainer className="hidden xl:block">
    <div className="w-[80vw] h-full flex justify-center xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2 xl:z-20 xl:w-auto xl:h-auto">
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
