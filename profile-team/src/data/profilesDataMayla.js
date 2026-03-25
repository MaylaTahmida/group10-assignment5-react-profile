// Data Profiles untuk semua anggota tim
// Struktur ini dapat diperluas untuk tim lainnya

export const profilesData = {
  mayla: {
    id: "mayla-tahmida",
    nama: "Mayla Tahmida",
    kelas: "T2A",
    prodi: "Teknologi Informasi",
    domisili: "Kota Malang",
    foto: "/src/assets/MaylaProfil.png",
    tentangDiri: "Saya adalah mahasiswa Teknologi Informasi yang memiliki ketertarikan besar dalam dunia pengembangan web, khususnya dalam membangun tampilan yang menarik, interaktif, dan nyaman digunakan. Saat ini sedang mempelajari ReactJS untuk memahami bagaimana membuat aplikasi web yang responsif dan modern.\n\nBagi saya, teknologi bukan hanya tentang coding, tetapi juga tentang bagaimana menciptakan pengalaman yang sederhana, rapi, dan menyenangkan bagi pengguna. Saya menikmati proses belajar secara bertahap dan mencoba membuat desain yang lebih kreatif dan estetis.\n\nSelain itu, saya juga senang bekerja dalam tim, terbuka terhadap ide baru, dan terus berusaha mengembangkan kemampuan diri. Dengan semangat belajar yang saya miliki, saya berharap dapat menghasilkan karya yang bermanfaat dan memberikan kontribusi positif di masa depan.",
    minat: ["UI/UX Design", "Web Development", "ReactJS", "Frontend Development"],
    softSkills: ["Komunikatif", "Kolaboratif", "Adaptif", "Problem Solving"],
    warna: {
      primary: "from-purple-500 to-violet-600",
      secondary: "from-purple-600 to-pink-500",
      accent: "purple"
    }
  },
  darin: {
    id: "imtinan-darin-huwaida",
    nama: "Imtinan Darin Huwaida",
    kelas: "T2A",
    prodi: "Teknologi Informasi",
    domisili: "Kota Malang",
    foto: "/src/assets/DarinProfil.png",
    tentangDiri: "Sebagai mahasiswa Teknologi Informasi, saya tertarik dengan backend development dan sistem database. Saya sedang mempelajari berbagai bahasa pemrograman untuk membangun aplikasi yang scalable dan efficient.\n\nSaya percaya bahwa code yang baik adalah code yang mudah dipahami dan di-maintain oleh tim. Saya enjoy problem-solving dan mencari solusi terbaik untuk setiap tantangan teknis yang dihadapi.\n\nDalam tim, saya berusaha untuk selalu memberikan yang terbaik, terbuka dengan feedback, dan terus belajar dari rekan-rekan. Saya ingin berkembang menjadi developer profesional yang dapat memberikan nilai tambah bagi industri teknologi.",
    minat: ["Backend Development", "Database Design", "REST API", "System Architecture"],
    softSkills: ["Analytical", "Team Player", "Detail Oriented", "Enthusiastic"],
    warna: {
      primary: "from-blue-500 to-cyan-600",
      secondary: "from-blue-600 to-teal-500",
      accent: "blue"
    }
  },
  jace: {
    id: "jacinda-queena-clearesta",
    nama: "Jacinda Queena Clearesta",
    kelas: "T2A",
    prodi: "Teknologi Informasi",
    domisili: "Kota Malang",
    foto: "/src/assets/JaceProfil.png",
    tentangDiri: "Saya seorang mahasiswa Teknologi Informasi dengan passion di bidang mobile development dan cross-platform solutions. Saat ini saya sedang mempelajari React Native dan Flutter untuk menciptakan aplikasi mobile yang powerful.\n\nSaya percaya bahwa user experience adalah kunci dari aplikasi yang sukses. Oleh karena itu, saya selalu memperhatikan detail dalam setiap aspek development, dari UI/UX hingga performance optimization.\n\nSaya adalah tipe orang yang self-motivated, proaktif dalam mencari solusi, dan tidak takut untuk take initiative. Saya menganggap kerja tim sebagai kesempatan untuk belajar dan grow bersama. Saya berkomitmen untuk terus meningkatkan skill dan memberikan kontribusi maksimal untuk kesuksesan project.",
    minat: ["Mobile Development", "React Native", "Flutter", "UI/UX Optimization"],
    softSkills: ["Proactive", "Detail-Oriented", "Self-Motivated", "Leadership"],
    warna: {
      primary: "from-pink-500 to-rose-600",
      secondary: "from-pink-600 to-orange-500",
      accent: "pink"
    }
  }
};

export const getAllProfiles = () => {
  return Object.values(profilesData);
};

export const getProfileById = (id) => {
  return Object.values(profilesData).find(profile => profile.id === id);
};
