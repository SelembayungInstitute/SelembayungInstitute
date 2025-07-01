
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telepon",
      details: ["Admin 1: 0852 3012 4212", "Admin 2: 0821 7171 5343"],
      bgColor: "from-green-500 to-blue-600"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      details: ["selembayunginstitute@gmail.com"],
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Lokasi Pelatihan",
      details: ["Sumatera Selatan, Jambi, Riau", "Bengkulu, Sumatera Utara", "Bangka Belitung, Kalimantan Timur"],
      bgColor: "from-purple-500 to-pink-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"],
      bgColor: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Siap membantu Anda dalam perjalanan pengembangan kompetensi. 
              Hubungi kami untuk informasi lebih lanjut tentang program pelatihan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${info.bgColor} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed mb-2">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Informasi Pendaftaran
              </h2>
              <p className="text-xl text-gray-600">
                Proses pendaftaran yang mudah dan transparan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Payment Information */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Pembayaran
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Biaya Pendaftaran Awal</h4>
                    <p className="text-gray-600">Rp 250.000</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Rekening Transfer</h4>
                    <p className="text-gray-600">BRI Rek. 7010-01-019727-53-2</p>
                    <p className="text-gray-600">a.n. Nani Suryani</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Konfirmasi Pembayaran</h4>
                    <p className="text-gray-600">WhatsApp: 0852 3012 4212</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Aksi Cepat
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://lynk.id/selembayunginstituteriau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Daftar Pelatihan
                  </a>
                  
                  <a
                    href="https://wa.me/6285230124212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Chat WhatsApp
                  </a>
                  
                  <a
                    href="mailto:selembayunginstitute@gmail.com"
                    className="block w-full bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Siap Bergabung?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Tingkatkan kompetensi Anda bersama ribuan pendidik lainnya. 
              Dapatkan sertifikat resmi dan pengalaman berharga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lynk.id/selembayunginstituteriau"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Daftar Sekarang
              </a>
              <a
                href="https://wa.me/6285230124212"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Tanya Admin
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
