import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import SkillsSection from "./SkillsSection";
import BackgroundAnimatedGradient from "./BackgroundAnimatedGradient";
import { getAllProfiles } from "../data/profilesDataMayla";

function ProfilePage({ profile }) {
  const allProfiles = getAllProfiles();
  const themeMap = {
    purple: "purple",
    blue: "blue",
    pink: "pink"
  };
  
  const theme = themeMap[profile.warna.accent] || "purple";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">

      {/* ANIMATED GRADIENT BACKGROUND */}
      <BackgroundAnimatedGradient theme={theme} />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-3xl">

        {/* NAVBAR */}
        <Navbar currentProfile={profile} allProfiles={allProfiles} />

        {/* PROFILE CARD */}
        <ProfileCard profile={profile} />

        {/* SKILLS SECTION */}
        <SkillsSection profile={profile} />

        {/* FOOTER */}
        <div className="mt-12 text-center text-white/40 text-xs font-light">
          <p>© 2026 {profile.nama.split(" ")[0]} - Universitas Brawijaya</p>
          <p className="mt-1 text-white/30">APSD Project - Teknologi Informasi T2A</p>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
