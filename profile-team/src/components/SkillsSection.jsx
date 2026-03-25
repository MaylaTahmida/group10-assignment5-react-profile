function SkillsSection({ profile }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

      {/* INTERESTS CARD */}
      <div className={`bg-gradient-to-br from-${profile.warna.accent}-600/20 to-${profile.warna.accent}-600/10 backdrop-blur-xl rounded-2xl p-6 border border-${profile.warna.accent}-400/30 hover:border-${profile.warna.accent}-400/60 transition-all duration-300 group hover:bg-gradient-to-br hover:from-${profile.warna.accent}-600/30 hover:to-${profile.warna.accent}-600/20`}>
        <div className="flex gap-3 items-start mb-4">
          <div className={`w-10 h-10 bg-gradient-to-br ${profile.warna.primary} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
            ♡
          </div>
          <h3 className="text-white font-bold">Minat</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {profile.minat.slice(0, 3).join(", ")}
        </p>
        <div className="flex flex-wrap gap-2">
          {profile.minat.map((item, idx) => (
            <span 
              key={idx}
              className={`px-2 py-1 bg-${profile.warna.accent}-500/30 text-${profile.warna.accent}-200 text-xs font-medium rounded border border-${profile.warna.accent}-400/40`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* SOFT SKILLS CARD */}
      <div className={`bg-gradient-to-br from-${profile.warna.accent}-600/20 to-${profile.warna.accent}-600/10 backdrop-blur-xl rounded-2xl p-6 border border-${profile.warna.accent}-400/30 hover:border-${profile.warna.accent}-400/60 transition-all duration-300 group hover:bg-gradient-to-br hover:from-${profile.warna.accent}-600/30 hover:to-${profile.warna.accent}-600/20`}>
        <div className="flex gap-3 items-start mb-4">
          <div className={`w-10 h-10 bg-gradient-to-br ${profile.warna.secondary} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
            ✦
          </div>
          <h3 className="text-white font-bold">Soft Skill</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {profile.softSkills.slice(0, 3).join(", ")}
        </p>
        <div className="flex flex-wrap gap-2">
          {profile.softSkills.map((item, idx) => (
            <span 
              key={idx}
              className={`px-2 py-1 bg-${profile.warna.accent}-500/30 text-${profile.warna.accent}-200 text-xs font-medium rounded border border-${profile.warna.accent}-400/40`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SkillsSection;
