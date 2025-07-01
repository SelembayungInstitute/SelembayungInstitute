
import { MapPin, Calendar, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TrainingLocations = () => {
  const locations = [
    {
      id: 1,
      province: "Sumatera Selatan",
      city: "Palembang",
      description: "Pelatihan profesional untuk kepala perpustakaan dan laboratorium dengan fasilitas lengkap dan narasumber berpengalaman.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    },
    {
      id: 2,
      province: "Riau",
      city: "Pekanbaru",
      description: "Pusat pelatihan utama Selembayung Institute dengan fasilitas terlengkap dan akses mudah.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    },
    {
      id: 3,
      province: "Jambi",
      city: "Jambi",
      description: "Lokasi strategis dengan akses mudah untuk peserta dari berbagai daerah di Jambi.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    },
    {
      id: 4,
      province: "Bengkulu",
      city: "Bengkulu",
      description: "Pelatihan berkualitas dengan narasumber dari UIN Sunan Kalijaga Yogyakarta.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    },
    {
      id: 5,
      province: "Sumatera Utara",
      city: "Medan",
      description: "Melayani peserta dari seluruh Sumatera Utara dengan standar pelatihan nasional.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    },
    {
      id: 6,
      province: "Bangka Belitung",
      city: "Pangkalpinang",
      description: "Pelatihan khusus untuk wilayah kepulauan dengan pendekatan yang disesuaikan.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    },
    {
      id: 7,
      province: "Kalimantan Timur",
      city: "Samarinda",
      description: "Ekspansi layanan ke Kalimantan dengan standar kualitas yang sama.",
      schedule: "Jadwal tersedia sepanjang tahun",
      nextSession: "Info terbaru tersedia",
      facilities: ["Konsumsi", "Materi Lengkap", "Sertifikat 120 JP"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Lokasi Pelatihan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selembayung Institute melayani pelatihan di 7 wilayah strategis di Indonesia. 
              Pilih lokasi terdekat untuk mengikuti pelatihan berkualitas dengan sertifikat resmi.
            </p>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="rounded-3xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {location.province}
                  </CardTitle>
                </div>
                <p className="text-gray-600 font-medium">{location.city}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {location.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">{location.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-600">{location.nextSession}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Fasilitas:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {location.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-full"
                  >
                    <a
                      href="https://lynk.id/selembayunginstituteriau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>Lihat Selengkapnya</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Meningkatkan Kompetensi?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Pilih lokasi pelatihan terdekat dan mulai perjalanan profesional Anda bersama kami.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
          >
            <a
              href="https://lynk.id/selembayunginstituteriau"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daftar Sekarang
            </a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrainingLocations;
