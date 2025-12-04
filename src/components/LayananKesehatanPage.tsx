import { Heart, Pill, Scan, TestTube, Microscope, Activity, X, Home } from "lucide-react";
import { useState } from "react";

interface LayananKesehatanPageProps {
  onNavigate?: (page: string) => void;
}

export default function LayananKesehatanPage({ onNavigate }: LayananKesehatanPageProps) {
  const [showMCUModal, setShowMCUModal] = useState(false);
  const services = [
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Klinik Jantung",
      description: "EKG, Rontgen, CT-Scan, Angiografi, Ekokardiogram (USG jantung), Stress test, Tes darah",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Pill className="w-16 h-16" />,
      title: "Klinik Farmasi",
      description: "Pelayanan resep, rekonsiliasi obat, konseling rawat jalan, CPPT, PIO",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Scan className="w-16 h-16" />,
      title: "Radiologi",
      description: "X-Ray, CT-Scan, MRI, USG, Mammografi dengan teknologi digital terkini",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <TestTube className="w-16 h-16" />,
      title: "Laboratorium",
      description: "Pemeriksaan darah lengkap, kimia darah, serologi, mikrobiologi, dan patologi",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      icon: <Microscope className="w-16 h-16" />,
      title: "Patologi Anatomi",
      description: "Pemeriksaan histopatologi, sitologi, dan biopsi untuk diagnosis akurat",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      icon: <Activity className="w-16 h-16" />,
      title: "Medical Check Up",
      description: "Paket pemeriksaan kesehatan lengkap untuk deteksi dini berbagai penyakit",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    }
  ];

  const specialists = [
    { name: "Penyakit Dalam", doctors: 8 },
    { name: "Bedah", doctors: 6 },
    { name: "Anak", doctors: 5 },
    { name: "Kandungan", doctors: 4 },
    { name: "Jantung", doctors: 3 },
    { name: "Mata", doctors: 2 },
    { name: "THT", doctors: 2 },
    { name: "Kulit & Kelamin", doctors: 2 },
    { name: "Saraf", doctors: 3 },
    { name: "Paru", doctors: 2 },
    { name: "Ortopedi", doctors: 2 },
    { name: "Gigi", doctors: 2 }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] bg-gradient-to-r from-[#e1ecfb] via-[#b6d5fe] to-[#1378fd] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Layanan Kesehatan</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Layanan Kesehatan Komprehensif dengan Teknologi Modern dan Tenaga Medis Profesional
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

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-center mb-12">Layanan Unggulan Kami</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-br ${service.color} p-6 text-white flex justify-center`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-3">{service.title}</h3>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialists Section */}
        <div className="bg-gradient-to-br from-[#e1ecfb] to-white p-8 rounded-3xl shadow-lg mb-12">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-8 text-center">Dokter Spesialis</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialists.map((specialist, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md text-center">
                <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-2">{specialist.name}</h3>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#1378fd]">{specialist.doctors} Dokter</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Hours */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1378fd] text-white p-8 rounded-3xl shadow-lg">
            <h3 className="font-['Alkatra:Bold',sans-serif] mb-6">Jam Operasional</h3>
            <div className="space-y-4 font-['Alkatra:Regular',sans-serif]">
              <div className="flex justify-between border-b border-white/30 pb-2">
                <span>Senin - Jumat</span>
                <span>08:00 - 20:00</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-2">
                <span>Sabtu</span>
                <span>08:00 - 14:00</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-2">
                <span>Minggu & Libur</span>
                <span>Tutup</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="font-['Alkatra:SemiBold',sans-serif]">IGD (24 Jam)</span>
                <span className="font-['Alkatra:SemiBold',sans-serif]">Setiap Hari</span>
              </div>
            </div>
          </div>

          <div className="bg-[#b6d5fe] p-8 rounded-3xl shadow-lg">
            <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-6">Paket Medical Check Up</h3>
            <ul className="space-y-3 font-['Alkatra:Regular',sans-serif] text-black">
              <li className="flex items-start">
                <span className="text-[#1378fd] mr-2">•</span>
                <span>Paket Basic - Pemeriksaan kesehatan dasar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1378fd] mr-2">•</span>
                <span>Paket Silver - Pemeriksaan menengah + Laboratorium</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1378fd] mr-2">•</span>
                <span>Paket Gold - Pemeriksaan lengkap + Radiologi</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1378fd] mr-2">•</span>
                <span>Paket Platinum - Pemeriksaan komprehensif + Konsultasi</span>
              </li>
            </ul>
            <button 
              onClick={() => setShowMCUModal(true)}
              className="mt-6 w-full bg-[#1378fd] text-white py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-[#0d5fd4] transition-colors"
            >
              Info Lebih Lanjut
            </button>
          </div>
        </div>
      </div>

      {/* Medical Check Up Modal */}
      {showMCUModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white p-6 rounded-t-3xl flex justify-between items-center">
              <h2 className="font-['Alkatra:Bold',sans-serif]">Detail Paket Medical Check Up</h2>
              <button 
                onClick={() => setShowMCUModal(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              {/* Paket Basic */}
              <div className="mb-8 bg-[#e1ecfb] p-6 rounded-2xl">
                <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Paket Basic - Rp 500.000</h3>
                <ul className="font-['Alkatra:Regular',sans-serif] space-y-2 mb-4">
                  <li>• Pemeriksaan Fisik Lengkap</li>
                  <li>• Tekanan Darah & Nadi</li>
                  <li>• Pemeriksaan Gula Darah</li>
                  <li>• Pemeriksaan Kolesterol Total</li>
                  <li>• Pemeriksaan Asam Urat</li>
                  <li>• Konsultasi Dokter Umum</li>
                </ul>
                <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166]">⏱️ Durasi: 1-2 jam</p>
              </div>

              {/* Paket Silver */}
              <div className="mb-8 bg-[#e1ecfb] p-6 rounded-2xl">
                <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Paket Silver - Rp 1.200.000</h3>
                <ul className="font-['Alkatra:Regular',sans-serif] space-y-2 mb-4">
                  <li>• Semua pemeriksaan Paket Basic</li>
                  <li>• Pemeriksaan Darah Lengkap (Hematologi)</li>
                  <li>• Fungsi Hati (SGOT, SGPT)</li>
                  <li>• Fungsi Ginjal (Ureum, Kreatinin)</li>
                  <li>• Rontgen Thorax</li>
                  <li>• EKG (Elektrokardiogram)</li>
                  <li>• Konsultasi Dokter Spesialis Penyakit Dalam</li>
                </ul>
                <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166]">⏱️ Durasi: 2-3 jam</p>
              </div>

              {/* Paket Gold */}
              <div className="mb-8 bg-[#e1ecfb] p-6 rounded-2xl">
                <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Paket Gold - Rp 2.500.000</h3>
                <ul className="font-['Alkatra:Regular',sans-serif] space-y-2 mb-4">
                  <li>• Semua pemeriksaan Paket Silver</li>
                  <li>• USG Abdomen (Perut)</li>
                  <li>• Pemeriksaan Mata Lengkap</li>
                  <li>• Tes Fungsi Paru (Spirometri)</li>
                  <li>• Profil Lipid Lengkap</li>
                  <li>• Marker Tumor (PSA untuk pria / CA 125 untuk wanita)</li>
                  <li>• Konsultasi Multi Spesialis</li>
                  <li>• Laporan Kesehatan Digital</li>
                </ul>
                <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166]">⏱️ Durasi: 3-4 jam</p>
              </div>

              {/* Paket Platinum */}
              <div className="mb-8 bg-[#e1ecfb] p-6 rounded-2xl">
                <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Paket Platinum - Rp 5.000.000</h3>
                <ul className="font-['Alkatra:Regular',sans-serif] space-y-2 mb-4">
                  <li>• Semua pemeriksaan Paket Gold</li>
                  <li>• CT-Scan / MRI (pilih salah satu)</li>
                  <li>• Ekokardiografi (USG Jantung)</li>
                  <li>• Treadmill Test</li>
                  <li>• Pemeriksaan Hormon Tiroid Lengkap</li>
                  <li>• Panel Marker Tumor Lengkap</li>
                  <li>• Konsultasi Nutrisionis</li>
                  <li>• Follow-up gratis 2 kali dalam 6 bulan</li>
                  <li>• Laporan Kesehatan Premium & Rekomendasi Lifestyle</li>
                </ul>
                <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166]">⏱️ Durasi: Full Day (6-8 jam)</p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white p-6 rounded-2xl text-center">
                <h4 className="font-['Alkatra:Bold',sans-serif] mb-4">Tertarik dengan paket MCU kami?</h4>
                <p className="font-['Alkatra:Regular',sans-serif] mb-4">
                  Hubungi kami untuk reservasi atau konsultasi lebih lanjut
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:0355320119" className="bg-white text-[#1378fd] px-6 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors">
                    📞 (0355) 320119
                  </a>
                  <a href="mailto:rsud@tulungagung.go.id" className="bg-white text-[#1378fd] px-6 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors">
                    ✉️ Email Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
