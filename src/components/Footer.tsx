import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
  <div className="flex items-center space-x-4 mb-4">
    <div className="w-16 h-16">
      <img 
        src="src/img/logo.png" 
        alt="Selembayung Institute Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">Selembayung Institute</h3>
      <p className="text-green-400 text-sm">
        Tingkatkan Kompetensi Wujudkan Pendidikan Berkualitas!
      </p>
    </div>
  </div>
  <p className="text-gray-300 text-sm leading-relaxed text-justify">
    Kami bekerja sama dengan berbagai instansi, baik lembaga pendidikan maupun pemerintahan. 
    Sudah menjadi kewajiban kami untuk terus berbagi ilmu dan pengalaman berdaya saing nasional 
    dan internasional secara berkelanjutan, dengan didukung para akademisi pilihan dari universitas 
    terkemuka di Indonesia, serta para praktisi dari instansi pemerintahan dan profesional berpengalaman 
    di bidangnya, termasuk lembaga sertifikasi profesi.
  </p>
</div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-green-400 mt-1" />
                <div>
                  <p className="text-sm">Admin 1: 0852 3012 4212</p>
                  <p className="text-sm">Admin 2: 0821 7171 5343</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-green-400 mt-1" />
                <p className="text-sm">selembayunginstitute@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Coverage Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Lokasi Pelatihan</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Sumatera Selatan</li>
              <li>Jambi</li>
              <li>Riau</li>
              <li>Bengkulu</li>
              <li>Sumatera Utara</li>
              <li>Bangka Belitung</li>
              <li>Kalimantan Timur</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Selembayung Institute. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://lynk.id/selembayunginstituteriau"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-200"
              >
                Daftar Pelatihan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
