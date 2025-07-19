import ProfileAttributeList from "../components/ProfileAttributeList";
import PlayerCard from "../components/PlayerCard";
import { profilePageData } from "../data/profile";
import { ProfileData } from "../types/portfolio";
import { motion } from "motion/react";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl shadow-xl w-full container mx-auto p-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className="col-span-1 flex justify-center items-center"
        >
          <motion.img
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            src={avatar}
            alt={`${name} avatar`}
            className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] object-contain"
          />
        </motion.div>
        <div className="md:col-span-1 lg:hidden flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PlayerCard size="mini" />
          </motion.div>
        </div>

        {/* Right - Main Content */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Top Row - Card + Info */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
            <div className="hidden lg:inline md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PlayerCard size="mini" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="col-span-5 lg:col-span-3 flex flex-col gap-2 justify-center px-4"
            >
              <h1 className="text-4xl font-bold">{name}</h1>
              <h2 className="text-2xl text-yellow-400 font-semibold">
                {title}
              </h2>
              <p className="text-lg text-gray-200">{description}</p>
            </motion.div>
          </div>

          {/* Bottom Row - Skills / Languages / Hobbies */}
          <div className="flex flex-col md:grid grid-cols-3 gap-8 text-base">
            <ProfileAttributeList
              title="Skills"
              items={skills}
              type="skills"
              index={0}
            />
            <ProfileAttributeList
              title="Languages"
              items={languages}
              type="languages"
              index={1}
            />
            <ProfileAttributeList
              title="Hobbies"
              items={hobbies}
              type="hobbies"
              index={2}
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default ProfilePage;
