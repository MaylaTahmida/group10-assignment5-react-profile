function ProfileCard({ profile }) {
  return (
    <div className="bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-3xl shadow-2xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 relative group">
      
      {/* DECORATIVE GLOW */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${profile.warna.accent}-600/10 to-${profile.warna.accent}-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

      {/* PROFILE PHOTO */}
      <div className="relative w-24 h-24 mx-auto mb-8">
        <div className={`absolute inset-0 bg-gradient-to-br ${profile.warna.secondary} rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
        <img
          src={profile.foto}
          alt={profile.nama}
          className="relative w-24 h-24 rounded-full object-cover border-2 border-white/30 shadow-xl group-hover:scale-110 group-hover:border-white/50 transition-all duration-300"
        />
      </div>

      {/* NAME */}
      <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent text-center mb-1 tracking-tight">
        {profile.nama}
      </h1>
      <div className={`h-1 w-16 bg-gradient-to-r ${profile.warna.primary} rounded-full mx-auto mb-8`}></div>

      {/* INFO GRID */}
      <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-t border-b border-white/10">
        <div className="text-center">
          <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Kelas</p>
          <p className="text-white font-semibold mt-1">{profile.kelas}</p>
        </div>
        <div className="text-center">
          <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Prodi</p>
          <p className="text-white font-semibold mt-1 text-sm">Tech Info</p>
        </div>
        <div className="text-center">
          <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Kota</p>
          <p className="text-white font-semibold mt-1">{profile.domisili}</p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="mb-6">
        <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className={`w-2 h-2 bg-gradient-to-r ${profile.warna.primary} rounded-full`}></span>
          Tentang Diri
        </h2>
        <p className="text-white/70 leading-relaxed text-sm text-justify whitespace-pre-line">
          {profile.tentangDiri}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
