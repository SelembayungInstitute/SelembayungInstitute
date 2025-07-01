
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                Lembaga Terpercaya & Bersertifikat
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tingkatkan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  {" "}Kompetensi{" "}
                </span>
                Wujudkan Pendidikan Berkualitas!
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Bersama Selembayung Institute, wujudkan kepala perpustakaan dan 
                laboratorium yang profesional, berintegritas, dan siap menghadapi 
                tantangan pendidikan masa kini.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://lynk.id/selembayunginstituteriau"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-green-500 hover:text-green-600 transition-all duration-200">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">120 JP</div>
                <div className="text-sm text-gray-600">Sertifikat Resmi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">7+</div>
                <div className="text-sm text-gray-600">Wilayah Layanan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Terpercaya</div>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <img 
                        src="src/img/logo.png" 
                        alt="Selembayung Institute Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-gray-600 font-medium">Pelatihan Berkualitas</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
