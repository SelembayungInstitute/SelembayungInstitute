import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image as ImageIcon, Users, Award, BookOpen } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: "src/img/photo_6217226209528496591_y.jpg" },
    { id: 2, image: "src/img/photo_6217226209528496592_y.jpg" },
    { id: 3, image: "src/img/photo_6217226209528496593_y.jpg" },
    { id: 4, image: "src/img/photo_6217226209528496594_y.jpg" },
    { id: 5, image: "src/img/photo_6217226209528496595_y.jpg" },
    { id: 6, image: "src/img/photo_6217226209528496596_y.jpg" },
    { id: 7, image: "src/img/photo_6217226209528496597_y.jpg" },
    { id: 8, image: "src/img/photo_6217226209528496598_y.jpg" }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Peserta Terlatih" },
    { icon: <Award className="h-8 w-8" />, number: "120 JP", label: "Sertifikat Resmi" },
    { icon: <BookOpen className="h-8 w-8" />, number: "50+", label: "Program Pelatihan" },
    { icon: <ImageIcon className="h-8 w-8" />, number: "7", label: "Wilayah Layanan" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Galeri Momen</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dokumentasi perjalanan kami dalam menciptakan pendidik berkualitas 
              dan mengembangkan kompetensi SDM pendidikan Indonesia
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img 
                    src={item.image} 
                    alt={`Gallery item ${item.id}`} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Bergabunglah dalam Momen Bersejarah</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Jadilah bagian dari transformasi pendidikan Indonesia. Dapatkan pengalaman berharga, 
              sertifikat resmi, dan jejaring nasional dengan bergabung dalam program pelatihan kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lynk.id/selembayunginstituteriau"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Daftar Pelatihan
              </a>
              <a
                href="https://wa.me/6285230124212"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
