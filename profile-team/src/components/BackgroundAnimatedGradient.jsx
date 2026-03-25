function BackgroundAnimatedGradient({ theme = "purple" }) {
  const themes = {
    purple: {
      color1: "from-purple-600 to-violet-600",
      color2: "from-pink-500 to-purple-600",
      color3: "from-violet-600 to-purple-600"
    },
    blue: {
      color1: "from-blue-600 to-cyan-600",
      color2: "from-cyan-500 to-blue-600",
      color3: "from-blue-600 to-cyan-600"
    },
    pink: {
      color1: "from-pink-600 to-rose-600",
      color2: "from-rose-500 to-pink-600",
      color3: "from-pink-600 to-rose-600"
    }
  };

  const selectedTheme = themes[theme] || themes.purple;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className={`absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r ${selectedTheme.color1} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}></div>
      <div className={`absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r ${selectedTheme.color2} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}></div>
      <div className={`absolute -bottom-8 left-1/2 w-80 h-80 bg-gradient-to-r ${selectedTheme.color3} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`}></div>
    </div>
  );
}

export default BackgroundAnimatedGradient;
