import ProfileAttributeList from '@components/pages/profile/ProfileAttributeList';
import PlayerCard from '@components/pages/main/PlayerCard';
import { profilePageData } from '@data/profile';
import { ProfileData } from '@customTypes/portfolio';
import { motion } from 'motion/react';
import {
  profileContainerAnimation,
  profileImageAnimation,
  playerCardAnimation,
  profileContentAnimation,
} from '@animation/profilePage';

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
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-12 text-white">
      <motion.div
        initial={profileContainerAnimation.initial}
        animate={profileContainerAnimation.animate}
        transition={profileContainerAnimation.transition}
        className="container mx-auto grid w-full grid-cols-1 gap-8 rounded-xl border border-yellow-400/10 bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 p-10 shadow-2xl shadow-xl lg:grid-cols-3"
      >
        {/* Left - Avatar */}
        <motion.div
          initial={profileImageAnimation.initial}
          animate={profileImageAnimation.animate}
          transition={profileImageAnimation.transition}
          className="col-span-1 flex items-center justify-center"
        >
          <motion.img
            whileHover={profileImageAnimation.hover}
            src={avatar}
            alt={`${name} avatar`}
            className="w-[220px] object-contain sm:w-[280px] md:w-[320px] lg:w-[380px]"
          />
        </motion.div>
        <div className="hidden items-center justify-center sm:flex md:col-span-1 lg:hidden">
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-10">
            <div className="hidden md:col-span-2 lg:inline">
              <motion.div
                initial={playerCardAnimation.initial}
                animate={playerCardAnimation.animate}
                transition={playerCardAnimation.transition}
              >
                <PlayerCard size="mini" />
              </motion.div>
            </div>
            <motion.div
              initial={profileContentAnimation.initial}
              animate={profileContentAnimation.animate}
              transition={profileContentAnimation.transition}
              className="col-span-5 flex flex-col justify-center gap-2 px-0 lg:col-span-3 lg:px-4"
            >
              <h1 className="text-3xl font-bold md:text-4xl">{name}</h1>
              <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                {title}
              </h2>
              <p className="text-md text-gray-200 md:text-lg">{description}</p>
            </motion.div>
          </div>

          {/* Bottom Row - Skills / Languages / Hobbies */}
          <div className="flex grid-cols-3 flex-col gap-8 text-base md:grid">
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
