function SpotlightBackground() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{
        background: "radial-gradient(circle at center, #00000000 10rem, #000000 40rem)",
        backgroundSize: "200% 200%",
        animation: "spotlight 4s infinite"
      }}
    />
  );
}

export default SpotlightBackground;
