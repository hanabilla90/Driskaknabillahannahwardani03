import { Heart, Pill, Activity, Microscope, Baby, Eye, AudioLines, Sparkles, Brain, Wind, Stethoscope, Syringe, Home } from "lucide-react";

interface SemuaKlinikPageProps {
  onNavigate?: (page: string) => void;
}

export default function SemuaKlinikPage({ onNavigate }: SemuaKlinikPageProps) {
  const klinikData = [
    {
      icon: <Heart className="w-20 h-20" />,
      title: "Klinik JANTUNG",
      description: "EKG, Rontgen, CT-Scan, Angiografi, Ekokardiogram (USG jantung), Stress test, Tes darah.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Pill className="w-20 h-20" />,
      title: "Klinik Farmasi",
      description: "Pelayanan resep, rekonsiliasi obat, konseling rawat jalan, CPPT, PIO.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Activity className="w-20 h-20" />,
      title: "Klinik GIGI UMUM",
      description: "Orthodonti, Spesialis Periodonsia, Spesialis Prostodonsia, Spesialis Konservasi Gigi",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Baby className="w-20 h-20" />,
      title: "POLIKLINIK ANAK",
      description: "Pemeriksaan anak dan konsultasi kesehatan anak.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Microscope className="w-20 h-20" />,
      title: "Laboratorium",
      description: "Pemeriksaan darah lengkap, kimia darah, serologi, mikrobiologi, dan patologi.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Eye className="w-20 h-20" />,
      title: "Klinik Mata",
      description: "Pemeriksaan mata lengkap, operasi katarak, refraksi, glaukoma, dan retina.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <AudioLines className="w-20 h-20" />,
      title: "Klinik THT",
      description: "Telinga Hidung Tenggorokan - Pemeriksaan dan tindakan THT lengkap.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Sparkles className="w-20 h-20" />,
      title: "Klinik Ortopedi",
      description: "Bedah tulang, cedera olahraga, patah tulang, dan gangguan muskuloskeletal.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Brain className="w-20 h-20" />,
      title: "Klinik Saraf",
      description: "Neurologi, stroke, epilepsi, parkinson, dan gangguan sistem saraf.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Wind className="w-20 h-20" />,
      title: "Klinik Paru",
      description: "Penyakit paru-paru, asma, PPOK, TB paru, dan gangguan pernapasan.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Stethoscope className="w-20 h-20" />,
      title: "Klinik Penyakit Dalam",
      description: "Diabetes, hipertensi, gangguan metabolik, dan penyakit dalam lainnya.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Syringe className="w-20 h-20" />,
      title: "Klinik Bedah",
      description: "Bedah umum, bedah digestif, bedah onkologi, dan tindakan pembedahan.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Heart className="w-20 h-20" />,
      title: "Klinik Kandungan",
      description: "Kebidanan, kehamilan, persalinan, dan kesehatan reproduksi wanita.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Activity className="w-20 h-20" />,
      title: "Klinik Kulit & Kelamin",
      description: "Dermatologi, penyakit kulit, alergi kulit, dan kelamin.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Microscope className="w-20 h-20" />,
      title: "Klinik Radiologi",
      description: "X-Ray, CT-Scan, MRI, USG, Mammografi dengan teknologi digital terkini.",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Stethoscope className="w-20 h-20" />,
      title: "Klinik Rehabilitasi Medik",
      description: "Fisioterapi, terapi okupasi, terapi wicara, dan rehabilitasi pasca stroke.",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] bg-gradient-to-r from-[#1378fd] via-[#b6d5fe] to-[#e1ecfb] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Semua Klinik & Layanan</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Layanan Kesehatan Komprehensif dengan Tenaga Medis Profesional dan Peralatan Modern
          </p>
          <button
            onClick={() => onNavigate?.('home')}
            className="mt-6 bg-white text-[#1378fd] px-8 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto shadow-lg"
          >
            <Home className="w-5 h-5" />
            Kembali ke Home
          </button>
        </div>
      </div>

      {/* Klinik Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {klinikData.map((klinik, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${klinik.color} p-8 text-white flex justify-center items-center min-h-[160px]`}>
                <div className="transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  {klinik.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Alkatra:Bold',sans-serif] mb-3 text-center text-[#1378fd]">
                  {klinik.title}
                </h3>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-center">
                  {klinik.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] rounded-3xl p-8 text-white text-center">
          <h2 className="font-['Alkatra:Bold',sans-serif] mb-4">Butuh Informasi Lebih Lanjut?</h2>
          <p className="font-['Alkatra:Regular',sans-serif] mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu Anda untuk informasi lebih detail mengenai layanan klinik atau membuat janji temu dengan dokter spesialis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0355320119" 
              className="bg-white text-[#1378fd] px-8 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors"
            >
              📞 (0355) 320119
            </a>
            <button
              onClick={() => onNavigate?.('janji-temu')}
              className="bg-white text-[#1378fd] px-8 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors"
            >
              📅 Buat Janji Temu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
