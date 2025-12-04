import { Stethoscope, Ambulance, Users, HeartPulse, ShieldCheck, Phone, Home } from "lucide-react";

interface PatientCarePageProps {
  onNavigate?: (page: string) => void;
}

export default function PatientCarePage({ onNavigate }: PatientCarePageProps) {
  const services = [
    {
      icon: <Ambulance className="w-12 h-12 text-[#1378fd]" />,
      title: "Layanan IGD 24 Jam",
      description: "Unit Gawat Darurat siap melayani 24/7 dengan tim medis berpengalaman dan peralatan modern."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-[#1378fd]" />,
      title: "Rawat Inap",
      description: "Ruang rawat inap yang nyaman dengan berbagai kelas: VIP, Kelas I, II, dan III."
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-[#1378fd]" />,
      title: "ICU & ICCU",
      description: "Intensive Care Unit dengan monitoring 24 jam dan perawatan intensif untuk pasien kritis."
    },
    {
      icon: <Users className="w-12 h-12 text-[#1378fd]" />,
      title: "Rawat Jalan",
      description: "Poliklinik spesialis dengan jadwal praktik dokter yang teratur dan komprehensif."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#1378fd]" />,
      title: "Home Care",
      description: "Layanan perawatan di rumah oleh tenaga medis profesional untuk pasien pasca operasi."
    },
    {
      icon: <Phone className="w-12 h-12 text-[#1378fd]" />,
      title: "Telemedicine",
      description: "Konsultasi kesehatan jarak jauh melalui telepon atau video call dengan dokter."
    }
  ];

  const facilities = [
    { name: "Ruang VIP", capacity: "20 bed", amenities: "AC, TV, Kulkas, Sofa" },
    { name: "Ruang Kelas I", capacity: "50 bed", amenities: "AC, TV, Kamar mandi dalam" },
    { name: "Ruang Kelas II", capacity: "80 bed", amenities: "AC, TV" },
    { name: "Ruang Kelas III", capacity: "100 bed", amenities: "Ventilasi udara" },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] bg-gradient-to-br from-[#1378fd] via-[#b6d5fe] to-[#e1ecfb] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Patient Care</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Pelayanan Pasien Terpadu dengan Standar Medis Terbaik
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

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-center mb-12">Layanan Perawatan Pasien</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-[#e1ecfb] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-3">{service.title}</h3>
              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Facilities Table */}
        <div className="bg-gradient-to-br from-[#e1ecfb] to-white p-8 rounded-3xl shadow-lg mb-12">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-6">Fasilitas Ruang Rawat Inap</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#b6d5fe]">
                  <th className="p-4 text-left font-['Alkatra:SemiBold',sans-serif]">Tipe Ruangan</th>
                  <th className="p-4 text-left font-['Alkatra:SemiBold',sans-serif]">Kapasitas</th>
                  <th className="p-4 text-left font-['Alkatra:SemiBold',sans-serif]">Fasilitas</th>
                </tr>
              </thead>
              <tbody>
                {facilities.map((facility, index) => (
                  <tr key={index} className="border-b border-[#b6d5fe]">
                    <td className="p-4 font-['Alkatra:Regular',sans-serif]">{facility.name}</td>
                    <td className="p-4 font-['Alkatra:Regular',sans-serif]">{facility.capacity}</td>
                    <td className="p-4 font-['Alkatra:Regular',sans-serif]">{facility.amenities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-[#1378fd] text-white p-8 rounded-3xl shadow-lg text-center">
          <h2 className="font-['Alkatra:Bold',sans-serif] mb-4">Butuh Bantuan Segera?</h2>
          <p className="font-['Alkatra:Regular',sans-serif] mb-6">Tim kami siap melayani 24 jam setiap hari</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white text-[#1378fd] px-8 py-4 rounded-full">
              <p className="font-['Alkatra:SemiBold',sans-serif]">IGD: (0355) 320119</p>
            </div>
            <div className="bg-white text-[#1378fd] px-8 py-4 rounded-full">
              <p className="font-['Alkatra:SemiBold',sans-serif]">Ambulance: 118</p>
            </div>
          </div>
        </div>

        {/* Patient Rights */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-4">Hak Pasien</h3>
            <ul className="font-['Alkatra:Regular',sans-serif] text-[#425166] space-y-2">
              <li>• Memperoleh informasi mengenai diagnosis dan tata cara pengobatan</li>
              <li>• Memberikan persetujuan atau menolak tindakan medis</li>
              <li>• Mendapat pelayanan yang manusiawi, adil, dan jujur</li>
              <li>• Memperoleh privasi dan kerahasiaan penyakit</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-4">Kewajiban Pasien</h3>
            <ul className="font-['Alkatra:Regular',sans-serif] text-[#425166] space-y-2">
              <li>• Memberikan informasi yang lengkap dan jujur</li>
              <li>• Mematuhi nasihat dan petunjuk dokter</li>
              <li>• Memenuhi kewajiban finansial yang telah disepakati</li>
              <li>• Mematuhi peraturan rumah sakit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
