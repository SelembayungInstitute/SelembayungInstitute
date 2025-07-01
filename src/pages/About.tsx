
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, Compass, Users, Award, MapPin } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "120 JP", label: "Sertifikat Resmi" },
    { number: "7+", label: "Wilayah Layanan" },
    { number: "100%", label: "Kepuasan Peserta" },
    { number: "5+", label: "Tahun Pengalaman" }
  ];

  const areas = [
    "Sumatera Selatan", "Jambi", "Riau", "Bengkulu", 
    "Sumatera Utara", "Bangka Belitung", "Kalimantan Timur"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Tentang Kami
            </h1>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Selembayung Institute
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Selembayung Institute adalah lembaga di bawah <span className="font-semibold text-green-600">Yayasan Selembayung Riau</span> yang 
                  fokus pada pendidikan, pelatihan, penelitian, dan pengembangan SDM.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kami hadir dengan semangat berbagi, membina, dan mencetak tenaga profesional yang berkualitas 
                  untuk mendukung transformasi pendidikan Indonesia.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mr-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">VISI</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadi lembaga pelatihan, penelitian, pendidikan, dan pengembangan 
                SDM yang <span className="font-semibold text-blue-600">berkualitas, terkemuka, handal, dan terpercaya</span>.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mr-4">
                  <Compass className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">MISI</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Mempersiapkan tenaga pendidik yang handal dan kompeten
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Meningkatkan keterampilan dan pengetahuan berbasis kebutuhan nyata
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Menjadikan diklat sebagai penguat kompetensi yang berdampak langsung
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Lokasi Pelatihan
              </h2>
              <p className="text-xl text-gray-600">
                Melayani berbagai daerah di Indonesia dengan komitmen kualitas terbaik
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <span className="text-lg font-medium text-gray-900">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
