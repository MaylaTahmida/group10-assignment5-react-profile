import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center mt-4 mb-8">
      <div className="flex gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/20">

        <Link
          to="/mayla-tahmida"
          className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
            location.pathname === "/mayla-tahmida"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Mayla
        </Link>

        <Link
          to="/imtinan-darin-huwaida"
          className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
            location.pathname === "/imtinan-darin-huwaida"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Darin
        </Link>

        <Link
          to="/jacinda-queena-clearesta"
          className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
            location.pathname === "/jacinda-queena-clearesta"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Jace
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;