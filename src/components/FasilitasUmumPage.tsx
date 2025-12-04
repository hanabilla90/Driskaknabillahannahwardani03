import { useState } from "react";
import { Home, Building2, Bed, Stethoscope, Ambulance, FlaskConical, Heart, Brain, Eye, Microscope, Activity, Baby, Pill, X, Search } from "lucide-react";

interface FasilitasUmumPageProps {
  onNavigate?: (page: string) => void;
}

interface Facility {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  location: string;
  hours: string;
  icon: any;
  image: string;
}

export default function FasilitasUmumPage({ onNavigate }: FasilitasUmumPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const facilities: Facility[] = [
    {
      id: 1,
      name: "Unit Gawat Darurat (UGD)",
      category: "Layanan Darurat",
      description: "Layanan gawat darurat 24 jam dengan tim medis berpengalaman dan peralatan lengkap untuk menangani berbagai kasus emergency.",
      features: [
        "Buka 24 Jam Non-Stop",
        "Ambulans Siaga",
        "Tim Dokter Spesialis On-Call",
        "Ruang Resusitasi",
        "Ruang Observasi",
        "Fasilitas Trauma Center"
      ],
      location: "Gedung A Lantai 1",
      hours: "24 Jam",
      icon: Ambulance,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Instalasi Rawat Inap",
      category: "Rawat Inap",
      description: "Kamar rawat inap dengan berbagai kelas yang nyaman dan fasilitas lengkap untuk kenyamanan pasien dan keluarga.",
      features: [
        "Kamar VIP & Suite",
        "Kamar Kelas 1, 2, 3",
        "AC & TV di setiap kamar",
        "Nurse Call System",
        "Wifi Gratis",
        "Area Parkir Luas"
      ],
      location: "Gedung B & C Lantai 2-5",
      hours: "24 Jam",
      icon: Bed,
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Poliklinik Spesialis",
      category: "Poliklinik",
      description: "Berbagai poliklinik spesialis dengan dokter ahli dan peralatan medis terkini untuk diagnosis dan pengobatan yang akurat.",
      features: [
        "Jantung & Pembuluh Darah",
        "Penyakit Dalam",
        "Bedah Umum",
        "Kandungan & Kebidanan",
        "Anak & Tumbuh Kembang",
        "THT, Mata, Kulit, Saraf"
      ],
      location: "Gedung A Lantai 2-3",
      hours: "Senin-Sabtu 08:00-16:00",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Laboratorium Klinik",
      category: "Penunjang Medis",
      description: "Laboratorium dengan peralatan canggih dan terakreditasi untuk berbagai pemeriksaan darah, urine, dan tes diagnostik lainnya.",
      features: [
        "Pemeriksaan Darah Lengkap",
        "Kimia Klinik",
        "Mikrobiologi",
        "Imunologi & Serologi",
        "Hasil Cepat & Akurat",
        "Sistem Online"
      ],
      location: "Gedung A Lantai 1",
      hours: "Senin-Sabtu 06:00-20:00",
      icon: FlaskConical,
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      name: "Radiologi & Imaging",
      category: "Penunjang Medis",
      description: "Fasilitas pencitraan medis lengkap dengan teknologi terkini untuk diagnosis yang akurat dan cepat.",
      features: [
        "CT Scan Multi-Slice",
        "MRI 1.5 Tesla",
        "USG 4D",
        "Rontgen Digital",
        "Mammografi",
        "Fluoroskopi"
      ],
      location: "Gedung A Lantai Basement",
      hours: "Senin-Sabtu 08:00-18:00",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      name: "Intensive Care Unit (ICU)",
      category: "Perawatan Intensif",
      description: "Ruang perawatan intensif dengan monitoring 24 jam dan peralatan life support lengkap untuk pasien kritis.",
      features: [
        "Monitor Pasien 24/7",
        "Ventilator",
        "Central Monitoring System",
        "Tim Dokter & Perawat ICU",
        "Ruang Isolasi",
        "Fasilitas Steril"
      ],
      location: "Gedung C Lantai 4",
      hours: "24 Jam",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      name: "Kamar Operasi",
      category: "Operasi",
      description: "Kamar operasi modern dengan standar internasional dan tim bedah berpengalaman untuk berbagai jenis operasi.",
      features: [
        "4 Kamar Operasi Major",
        "2 Kamar Operasi Minor",
        "Lampu Operasi LED",
        "Sistem Sterilisasi Modern",
        "Recovery Room",
        "Tim Anestesi"
      ],
      location: "Gedung C Lantai 3",
      hours: "24 Jam",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      name: "Instalasi Farmasi",
      category: "Farmasi",
      description: "Apotek rumah sakit dengan stok obat lengkap dan pelayanan farmasi klinis yang profesional.",
      features: [
        "Obat Lengkap & Berkualitas",
        "Pelayanan Resep Cepat",
        "Konsultasi Apoteker",
        "Obat Generik & Paten",
        "Sistem Komputerisasi",
        "Buka 24 Jam"
      ],
      location: "Gedung A Lantai 1",
      hours: "24 Jam",
      icon: Pill,
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      name: "NICU & Perinatologi",
      category: "Perawatan Khusus",
      description: "Unit perawatan intensif neonatus dengan inkubator modern dan tim neonatologi untuk bayi prematur dan bayi sakit.",
      features: [
        "Inkubator Canggih",
        "Fototerapi",
        "CPAP & Ventilator Neonatal",
        "Monitor Vital Sign",
        "Tim Dokter Spesialis Anak",
        "Ruang Isolasi Bayi"
      ],
      location: "Gedung B Lantai 3",
      hours: "24 Jam",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop"
    },
    {
      id: 10,
      name: "Rehabilitasi Medik",
      category: "Rehabilitasi",
      description: "Fasilitas fisioterapi dan rehabilitasi medis dengan peralatan modern untuk pemulihan fungsi tubuh pasien.",
      features: [
        "Fisioterapi",
        "Terapi Okupasi",
        "Terapi Wicara",
        "Hidroterapi",
        "Elektroterapi",
        "Terapis Berpengalaman"
      ],
      location: "Gedung D Lantai 1",
      hours: "Senin-Sabtu 08:00-16:00",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      id: 11,
      name: "Hemodialisa",
      category: "Perawatan Khusus",
      description: "Unit cuci darah dengan mesin hemodialisa modern dan tim medis berpengalaman untuk pasien gagal ginjal.",
      features: [
        "Mesin HD Terbaru",
        "12 Unit HD",
        "Tim Nefrologi",
        "Ruang Nyaman & Bersih",
        "Water Treatment System",
        "Jadwal Fleksibel"
      ],
      location: "Gedung D Lantai 2",
      hours: "Senin-Sabtu 06:00-18:00",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop"
    },
    {
      id: 12,
      name: "Medical Check Up",
      category: "Layanan Kesehatan",
      description: "Paket pemeriksaan kesehatan lengkap untuk deteksi dini penyakit dan menjaga kesehatan Anda.",
      features: [
        "Paket Basic, Silver, Gold",
        "Paket Pre-Marriage",
        "Paket Executive",
        "Konsultasi Dokter",
        "Hasil Cepat",
        "Ruang VIP"
      ],
      location: "Gedung A Lantai 2",
      hours: "Senin-Sabtu 07:00-14:00",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
    }
  ];

  const categories = ["Semua", ...Array.from(new Set(facilities.map(f => f.category)))];

  const filteredFacilities = facilities.filter(facility => {
    const matchCategory = selectedCategory === "Semua" || facility.category === selectedCategory;
    const matchSearch = searchQuery === "" || 
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1378fd] via-[#2f8afd] to-[#b6d5fe] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-32 w-40 h-40 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="text-center text-white px-4 sm:px-8 z-10">
          <Building2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl">Fasilitas Umum</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Fasilitas Medis Lengkap & Modern untuk Pelayanan Kesehatan Terbaik
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Search & Filter */}
        <div className="bg-gradient-to-r from-[#e1ecfb] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl mb-6 sm:mb-8 lg:mb-10">
          {/* Search */}
          <div className="mb-4 sm:mb-6">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#1378fd] w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Cari fasilitas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-[#425166] transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Filter */}
          <div>
            <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 text-sm sm:text-base">
              Kategori Fasilitas
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-['Alkatra:Regular',sans-serif] transition-all duration-300 text-xs sm:text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#1378fd] to-[#2f8afd] text-white shadow-lg scale-105'
                      : 'bg-white text-[#1378fd] border-2 border-[#b6d5fe] hover:border-[#1378fd] hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Count */}
        <div className="mb-6 sm:mb-8 text-center">
          <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166] text-sm sm:text-base lg:text-lg">
            Menampilkan <span className="text-[#1378fd] text-lg sm:text-xl lg:text-2xl">{filteredFacilities.length}</span> fasilitas
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {filteredFacilities.map((facility) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl sm:rounded-2xl border-2 border-[#e1ecfb] hover:border-[#1378fd] hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedFacility(facility)}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#1378fd]" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                    <span className="inline-block bg-[#1378fd] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-['Alkatra:SemiBold',sans-serif]">
                      {facility.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2 sm:mb-3 text-base sm:text-lg">
                    {facility.name}
                  </h3>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-[#425166]">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1378fd]" />
                      <span className="font-['Alkatra:Regular',sans-serif]">{facility.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#425166]">
                      <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1378fd]" />
                      <span className="font-['Alkatra:Regular',sans-serif]">{facility.hours}</span>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-4 py-2 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-lg transition-all text-xs sm:text-sm">
                    Lihat Detail
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => onNavigate?.('home')}
            className="bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Kembali ke Beranda
          </button>
        </div>
      </div>

      {/* Modal Detail */}
      {selectedFacility && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedFacility(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img 
                src={selectedFacility.image} 
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                {(() => {
                  const IconComponent = selectedFacility.icon;
                  return (
                    <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] rounded-full p-2 sm:p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  );
                })()}
                <div className="flex-grow">
                  <span className="inline-block bg-[#e1ecfb] text-[#1378fd] px-3 py-1 rounded-full text-xs sm:text-sm font-['Alkatra:SemiBold',sans-serif] mb-2">
                    {selectedFacility.category}
                  </span>
                  <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-xl sm:text-2xl lg:text-3xl">
                    {selectedFacility.name}
                  </h2>
                </div>
              </div>

              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] mb-4 sm:mb-6 text-sm sm:text-base">
                {selectedFacility.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-[#e1ecfb] to-white p-3 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd]" />
                    <span className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">Lokasi</span>
                  </div>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                    {selectedFacility.location}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#e1ecfb] to-white p-3 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd]" />
                    <span className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">Jam Operasional</span>
                  </div>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                    {selectedFacility.hours}
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 text-base sm:text-lg">
                  Fasilitas & Layanan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedFacility.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-white border border-[#e1ecfb] p-2 sm:p-3 rounded-lg hover:border-[#1378fd] transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#1378fd] rounded-full flex-shrink-0" />
                      <span className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedFacility(null)}
                className="w-full bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
