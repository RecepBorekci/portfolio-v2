import ProfileAttributeList from "../components/ProfileAttributeList";
import PlayerCard from "../components/PlayerCard";
import { profilePageData } from "../data/profile";
import { ProfileData } from "../types/portfolio";

function ProfilePage() {
  const {
    name,
    title,
    avatar,
    description,
    skills,
    languages,
    hobbies,
  }: ProfileData = profilePageData;

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
      <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl shadow-xl w-full container mx-auto  p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Left - Avatar */}
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] object-contain"
          />
        </div>
        <div className="md:col-span-1 lg:hidden flex justify-center items-center">
          <PlayerCard size="mini" />
        </div>

        {/* Right - Main Content */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Top Row - Card + Info */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
            <div className="hidden lg:inline md:col-span-2 ">
              <PlayerCard size="mini" />
            </div>
            <div className="col-span-5 lg:col-span-3 flex flex-col gap-2 justify-center px-4">
              <h1 className="text-4xl font-bold">{name}</h1>
              <h2 className="text-2xl text-yellow-400 font-semibold">
                {title}
              </h2>
              <p className="text-lg text-gray-200">{description}</p>
            </div>
          </div>

          {/* Bottom Row - Skills / Languages / Hobbies */}
          <div className="flex flex-col md:grid grid-cols-3 gap-8 text-base">
            <ProfileAttributeList title="Skills" items={skills} type="skills" />
            <ProfileAttributeList
              title="Languages"
              items={languages}
              type="languages"
            />
            <ProfileAttributeList
              title="Hobbies"
              items={hobbies}
              type="hobbies"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
