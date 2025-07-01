
import { CheckCircle, Users, Award, BookOpen, MapPin } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Kolaborasi Adalah Kekuatan",
      description: "Kami menjalin kemitraan strategis dengan berbagai lembaga pendidikan, instansi pemerintah, serta mitra profesional lainnya untuk menghadirkan pelatihan yang relevan, aplikatif, dan berdampak langsung."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Sertifikat Resmi & Manfaat Lainnya",
      description: "Sertifikat resmi dari UIN Sunan Kalijaga Yogyakarta (setara 120 JP), ilmu praktis dari para pakar, relasi dan jejaring nasional dengan peserta dari berbagai daerah."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Pelatihan Berkualitas dan Terpercaya",
      description: "Selembayung Institute hadir sebagai bagian dari perubahan positif di dunia pendidikan dan pengembangan SDM - menghadirkan program yang relevan, tenaga ahli berpengalaman."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Fasilitas Selama Pelatihan",
      description: "Materi pelatihan lengkap, akomodasi/penginapan selama kegiatan, konsumsi (makan dan minum) selama pelatihan berlangsung."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Narasumber Berpengalaman",
      description: "Pelatihan dipandu langsung oleh dosen dan akademisi dari UIN Sunan Kalijaga Yogyakarta, praktisi profesional di bidang pendidikan dan manajemen laboratorium/sekolah."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kenapa Selembayung Institute?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menghadirkan pelatihan yang berkualitas dengan fasilitas lengkap 
            dan narasumber berpengalaman untuk mendukung pengembangan kompetensi Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://lynk.id/selembayunginstituteriau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
