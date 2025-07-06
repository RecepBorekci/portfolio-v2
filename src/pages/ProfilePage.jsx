import MyAvatar from "/images/MyAvatar.png";
import PlayerCard from "../components/PlayerCard";
import portfolioData from "../data/portfolio";

function ProfilePage() {
  const { name, title, description, skills, languages, hobbies } =
    portfolioData.profilePageData;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
      <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl shadow-xl w-full container mx-auto  p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Left - Avatar */}
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={MyAvatar}
            alt="Cartoon Avatar"
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
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b border-white/20 pb-1">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 overflow-y-auto pr-1">
                {skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-yellow-400/20 border border-yellow-400 text-yellow-300 px-2 py-1 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b border-white/20 pb-1">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages?.map(({ label, bg }, i) => (
                  <div
                    key={i}
                    className={`px-3 py-2 rounded-lg text-sm text-white flex items-center gap-2 ${bg}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-xl  font-semibold mb-2 border-b border-white/20 pb-1">
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {hobbies?.map(({ icon, label }, i) => (
                  <div
                    key={i}
                    className="bg-white/10 px-3 py-2 rounded-lg text-sm text-white flex items-center gap-2"
                  >
                    <span>{icon}</span> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
