
import { FileText, Image, Mail, CreditCard, Laptop, Users } from "lucide-react";

const RegistrationSection = () => {
  const requirements = [
    { icon: <FileText className="h-5 w-5" />, text: "Fotokopi ijazah terakhir (1 lembar)" },
    { icon: <Image className="h-5 w-5" />, text: "Pas foto ukuran 4x6 cm sebanyak 3 lembar (latar belakang merah)" },
    { icon: <Mail className="h-5 w-5" />, text: "Surat tugas dari sekolah" },
    { icon: <FileText className="h-5 w-5" />, text: "Telah mengisi formulir pendaftaran" },
    { icon: <CreditCard className="h-5 w-5" />, text: "Membayar biaya diklat sesuai wilayah" },
    { icon: <Laptop className="h-5 w-5" />, text: "Membawa laptop pribadi" },
    { icon: <Users className="h-5 w-5" />, text: "Mengenakan pakaian bebas rapi dan sopan" },
  ];

  const steps = [
    {
      step: "1",
      title: "Transfer Biaya Pendaftaran",
      description: "Transfer biaya pendaftaran awal sebesar Rp 250.000 ke:",
      detail: "BRI Rek. 7010-01-019727-53-2 a.n. Nani Suryani"
    },
    {
      step: "2", 
      title: "Konfirmasi Pembayaran",
      description: "Konfirmasi pembayaran via WhatsApp ke:",
      detail: "0852 3012 4212"
    },
    {
      step: "3",
      title: "Isi Formulir Pendaftaran",
      description: "Isi formulir pendaftaran melalui link:",
      detail: "https://lynk.id/selembayunginstituteriau"
    },
    {
      step: "4",
      title: "Bayar Sisa Biaya",
      description: "Sisa biaya dibayarkan saat registrasi di lokasi acara",
      detail: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cara Mendaftar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti langkah-langkah sederhana berikut untuk bergabung dalam pelatihan berkualitas kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              Persyaratan Pendaftaran
            </h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1 flex-shrink-0">
                    {req.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{req.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration Steps */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
              Langkah Pendaftaran
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                    {step.detail && (
                      <p className="text-blue-600 font-medium text-sm">{step.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Person</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Admin 1</h4>
              <p className="text-lg">0852 3012 4212</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Admin 2</h4>
              <p className="text-lg">0821 7171 5343</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-lg">selembayunginstitute@gmail.com</p>
            </div>
          </div>
          <a
            href="https://lynk.id/selembayunginstituteriau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
