
import { Target, Compass } from "lucide-react";

const VisionMissionSection = () => {
  const missions = [
    "Mempersiapkan tenaga pendidik yang handal dan kompeten",
    "Meningkatkan keterampilan dan pengetahuan berbasis kebutuhan nyata",
    "Menjadikan diklat sebagai penguat kompetensi yang berdampak langsung"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visi & Misi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Komitmen kami untuk menjadi lembaga terdepan dalam pengembangan 
            SDM pendidikan yang berkualitas dan terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
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
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mr-4">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">MISI</h3>
            </div>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mission}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Description */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tentang Selembayung Institute
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Selembayung Institute adalah lembaga di bawah <span className="font-semibold text-green-600">Yayasan Selembayung Riau</span> yang 
              fokus pada pendidikan, pelatihan, penelitian, dan pengembangan SDM. 
              Kami hadir dengan semangat berbagi, membina, dan mencetak tenaga profesional yang berkualitas. 
              Sebagai <span className="font-semibold text-blue-600">lembaga terpercaya di Riau</span>, kami siap mendampingi transformasi 
              pendidikan dan SDM Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
