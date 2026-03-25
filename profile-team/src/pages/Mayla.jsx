import fotoMayla from "../assets/MaylaProfil.png";
import Navbar from "../components/Navbar";

function Mayla() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center p-6 relative overflow-hidden">
      
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl top-0 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl top-1/3 right-0"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl bottom-0 left-1/2"></div>
      </div>

      {/* CARD */}
      <div className="bg-slate-800/40 backdrop-blur-2xl shadow-2xl rounded-3xl p-12 max-w-2xl w-full text-center border border-white/10 relative z-10">

        {/* FOTO */}
        <img
           src={fotoMayla}
           alt="Mayla"
           className="w-10 h-10 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
        />

        {/* NAMA */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Mayla Tahmida
        </h1>

        {/* INFO */}
        <div className="text-purple-300 mb-4 space-y-1">
          <p>Kelas: T2A</p>
          <p>Prodi: Teknologi Informasi</p>
          <p>Domisili: Malang</p>
        </div>

        {/* DESKRIPSI (≥100 kata) */}
        <p className="text-white/70 text-sm leading-relaxed text-justify">
          Saya adalah mahasiswa Teknologi Informasi yang memiliki ketertarikan besar dalam dunia pengembangan web,
          khususnya dalam membangun tampilan yang menarik, interaktif, dan mudah digunakan. Saat ini saya sedang
          mempelajari ReactJS untuk memahami bagaimana membuat aplikasi web yang modern dan responsif. Saya juga
          tertarik pada desain antarmuka (UI/UX) karena saya percaya bahwa pengalaman pengguna yang baik sangat
          penting dalam sebuah aplikasi.

          Selain itu, saya memiliki semangat belajar yang tinggi dan senang mengeksplorasi hal-hal baru di bidang teknologi.
          Saya menikmati proses belajar secara bertahap dan mencoba menerapkan apa yang telah saya pelajari ke dalam proyek
          sederhana. Saya juga terbiasa bekerja dalam tim, berkomunikasi dengan baik, dan terbuka terhadap masukan untuk
          terus berkembang menjadi pribadi yang lebih baik di dunia teknologi.
        </p>
      </div>

      {/* FEATURES */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full relative z-10">

        {/* MINAT */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold mb-2">Minat</h3>
          <p>UI/UX Design, Web Development, Teknologi</p>
        </div>

        {/* SOFT SKILL */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold mb-2">Soft Skill</h3>
          <p>Komunikatif, Kolaboratif, Adaptif</p>
        </div>

      </div>

    </div>
  );
}

export default Mayla;