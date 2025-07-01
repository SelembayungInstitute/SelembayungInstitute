import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, CheckCircle, Info } from "lucide-react";

const Terms = () => {
  const requirements = [
    "Fotokopi ijazah terakhir (1 lembar)",
    "Pas foto ukuran 4x6 cm sebanyak 3 lembar (latar belakang merah)",
    "Surat tugas dari sekolah",
    "Telah mengisi formulir pendaftaran",
    "Membayar biaya diklat sesuai wilayah",
    "Membawa laptop pribadi",
    "Mengenakan pakaian bebas rapi dan sopan"
  ];

  const rules = [
    {
      title: "Kehadiran",
      items: [
        "Peserta wajib hadir tepat waktu sesuai jadwal yang telah ditentukan",
        "Keterlambatan maksimal 15 menit dari waktu yang ditentukan",
        "Peserta yang tidak hadir tanpa keterangan tidak berhak mendapat sertifikat"
      ]
    },
    {
      title: "Pembayaran",
      items: [
        "Biaya pendaftaran awal Rp 250.000 dibayar saat mendaftar",
        "Sisa biaya dibayarkan saat registrasi di lokasi acara",
        "Pembayaran yang sudah dilakukan tidak dapat dikembalikan",
        "Konfirmasi pembayaran wajib dilakukan via WhatsApp"
      ]
    },
    {
      title: "Fasilitas dan Akomodasi",
      items: [
        "Selembayung Institute menyediakan materi pelatihan lengkap",
        "Akomodasi/penginapan selama kegiatan disediakan",
        "Konsumsi (makan dan minum) selama pelatihan berlangsung",
        "Peserta bertanggung jawab atas barang pribadi masing-masing"
      ]
    },
    {
      title: "Sertifikat",
      items: [
        "Sertifikat resmi dari UIN Sunan Kalijaga Yogyakarta (setara 120 JP)",
        "Sertifikat diberikan kepada peserta yang mengikuti pelatihan secara penuh",
        "Sertifikat tidak dapat diganti jika hilang atau rusak setelah diserahkan",
        "Nama pada sertifikat sesuai dengan data pendaftaran"
      ]
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
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Panduan lengkap persyaratan dan ketentuan untuk mengikuti 
              program pelatihan Selembayung Institute
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Persyaratan Pendaftaran
              </h2>
              <p className="text-xl text-gray-600">
                Dokumen dan persyaratan yang harus dipenuhi peserta
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Dokumen yang Diperlukan</h3>
              </div>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{req}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aturan dan Ketentuan
            </h2>
            <p className="text-xl text-gray-600">
              Ketentuan yang berlaku selama mengikuti program pelatihan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-xl flex items-center justify-center text-white mr-4">
                    <Info className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{rule.title}</h3>
                </div>
                <ul className="space-y-3">
                  {rule.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pertanyaan Lebih Lanjut?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan, 
              jangan ragu untuk menghubungi tim kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285230124212"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Hubungi Admin
              </a>
              <a
                href="https://lynk.id/selembayunginstituteriau"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
