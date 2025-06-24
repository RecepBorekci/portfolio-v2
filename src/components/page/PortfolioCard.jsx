function PortfolioCard() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md w-full p-8 bg-white/5 backdrop-blur-md rounded-xl shadow-xl flex flex-col items-center gap-2">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
          <img src="/images/profile.jpg" alt="Recep" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold text-white">Recep's Portfolio</h2>
        <p className="text-md text-gray-400 mb-6 text-center">
          Full Stack Developer specializing in React, Python, and modern web technologies. Explore my FIFA-style interactive portfolio!
        </p>
        <button className="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-lg">
          View Projects
        </button>
      </div>
    </div>
  );
}

export default PortfolioCard;