import { useState } from "react";
import { Home, Calendar, Clock, ChevronDown, ChevronUp, Stethoscope, User } from "lucide-react";

interface DaftarDokterPageProps {
  onNavigate?: (page: string) => void;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  schedule: {
    day: string;
    time: string;
    room: string;
  }[];
}

export default function DaftarDokterPage({ onNavigate }: DaftarDokterPageProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("Semua");
  const [expandedDoctor, setExpandedDoctor] = useState<number | null>(null);

  const toggleSchedule = (doctorId: number) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId);
  };

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ahmad Hidayat, Sp.JP",
      specialty: "Spesialis Jantung",
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Rabu", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" }
      ]
    },
    {
      id: 2,
      name: "Dr. Siti Nurhaliza, Sp.A",
      specialty: "Spesialis Anak",
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
        { day: "Selasa", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" }
      ]
    },
    {
      id: 3,
      name: "Dr. Budi Santoso, Sp.PD",
      specialty: "Spesialis Penyakit Dalam",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Penyakit Dalam Lt.2" }
      ]
    },
    {
      id: 4,
      name: "Dr. Rina Wijayanti, Sp.M",
      specialty: "Spesialis Mata",
      schedule: [
        { day: "Senin", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
        { day: "Rabu", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
        { day: "Jumat", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" }
      ]
    },
    {
      id: 5,
      name: "Dr. Hendra Gunawan, Sp.OG",
      specialty: "Spesialis Kandungan",
      schedule: [
        { day: "Senin", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" },
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" },
        { day: "Jumat", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" }
      ]
    },
    {
      id: 6,
      name: "Dr. Maya Puspita, Sp.KK",
      specialty: "Spesialis Kulit",
      schedule: [
        { day: "Selasa", time: "09:00 - 15:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Kamis", time: "09:00 - 15:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Poliklinik Kulit Lt.1" }
      ]
    },
    {
      id: 7,
      name: "Dr. Fajar Raharjo, Sp.THT-KL",
      specialty: "Spesialis THT",
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik THT Lt.2" },
        { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" }
      ]
    },
    {
      id: 8,
      name: "Dr. Dewi Lestari, Sp.S",
      specialty: "Spesialis Saraf",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Saraf Lt.2" }
      ]
    },
    {
      id: 9,
      name: "Dr. Agus Prasetyo, Sp.B",
      specialty: "Spesialis Bedah",
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Bedah Lt.3" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik Bedah Lt.3" },
        { day: "Jumat", time: "13:00 - 17:00", room: "Poliklinik Bedah Lt.3" }
      ]
    },
    {
      id: 10,
      name: "Dr. Lina Kartika, Sp.KJ",
      specialty: "Spesialis Kejiwaan",
      schedule: [
        { day: "Selasa", time: "14:00 - 18:00", room: "Poliklinik Jiwa Lt.1" },
        { day: "Kamis", time: "14:00 - 18:00", room: "Poliklinik Jiwa Lt.1" },
        { day: "Sabtu", time: "10:00 - 14:00", room: "Poliklinik Jiwa Lt.1" }
      ]
    },
    {
      id: 11,
      name: "Dr. Rizki Firmansyah, Sp.U",
      specialty: "Spesialis Urologi",
      schedule: [
        { day: "Senin", time: "09:00 - 13:00", room: "Poliklinik Urologi Lt.2" },
        { day: "Kamis", time: "09:00 - 13:00", room: "Poliklinik Urologi Lt.2" }
      ]
    },
    {
      id: 12,
      name: "Dr. Anita Sari, Sp.An",
      specialty: "Spesialis Anestesi",
      schedule: [
        { day: "Setiap Hari", time: "On-Call 24 Jam", room: "Kamar Operasi" }
      ]
    },
    {
      id: 13,
      name: "Dr. Bambang Wijaya, Sp.OT",
      specialty: "Spesialis Orthopedi",
      schedule: [
        { day: "Senin", time: "10:00 - 14:00", room: "Poliklinik Orthopedi Lt.3" },
        { day: "Rabu", time: "10:00 - 14:00", room: "Poliklinik Orthopedi Lt.3" },
        { day: "Jumat", time: "10:00 - 14:00", room: "Poliklinik Orthopedi Lt.3" }
      ]
    },
    {
      id: 14,
      name: "Dr. Citra Dewi, Sp.PA",
      specialty: "Spesialis Patologi",
      schedule: [
        { day: "Senin - Jumat", time: "08:00 - 16:00", room: "Lab Patologi" }
      ]
    },
    {
      id: 15,
      name: "Dr. Dimas Prasetya, Sp.PK",
      specialty: "Spesialis Patologi Klinik",
      schedule: [
        { day: "Senin - Sabtu", time: "07:00 - 15:00", room: "Lab Klinik" }
      ]
    },
    {
      id: 16,
      name: "Dr. Eka Putri, Sp.Rad",
      specialty: "Spesialis Radiologi",
      schedule: [
        { day: "Senin - Sabtu", time: "08:00 - 16:00", room: "Instalasi Radiologi" }
      ]
    },
    {
      id: 17,
      name: "Dr. Faisal Rahman, Sp.RM",
      specialty: "Spesialis Rehabilitasi Medik",
      schedule: [
        { day: "Selasa", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" },
        { day: "Kamis", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Unit Rehabilitasi Medik" }
      ]
    },
    {
      id: 18,
      name: "Dr. Gita Maharani, Sp.GK",
      specialty: "Spesialis Gizi Klinik",
      schedule: [
        { day: "Senin", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" },
        { day: "Rabu", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" }
      ]
    },
    {
      id: 19,
      name: "Dr. Hadi Susanto, Sp.BS",
      specialty: "Spesialis Bedah Saraf",
      schedule: [
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Bedah Saraf Lt.3" },
        { day: "Jumat", time: "14:00 - 18:00", room: "Poliklinik Bedah Saraf Lt.3" }
      ]
    },
    {
      id: 20,
      name: "Dr. Indah Permata, Sp.KFR",
      specialty: "Spesialis Kedokteran Fisik & Rehabilitasi",
      schedule: [
        { day: "Senin", time: "10:00 - 16:00", room: "Poliklinik KFR Lt.1" },
        { day: "Kamis", time: "10:00 - 16:00", room: "Poliklinik KFR Lt.1" }
      ]
    },
    {
      id: 21,
      name: "Dr. Joko Widodo, Sp.P",
      specialty: "Spesialis Paru",
      schedule: [
        { day: "Selasa", time: "08:00 - 12:00", room: "Poliklinik Paru Lt.2" },
        { day: "Kamis", time: "08:00 - 12:00", room: "Poliklinik Paru Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Paru Lt.2" }
      ]
    },
    {
      id: 22,
      name: "Dr. Kartika Sari, Sp.PD-KGEH",
      specialty: "Spesialis Penyakit Dalam Gastro",
      schedule: [
        { day: "Senin", time: "14:00 - 17:00", room: "Poliklinik Gastro Lt.2" },
        { day: "Rabu", time: "14:00 - 17:00", room: "Poliklinik Gastro Lt.2" }
      ]
    },
    {
      id: 23,
      name: "Dr. Lukman Hakim, Sp.BP-RE",
      specialty: "Spesialis Bedah Plastik",
      schedule: [
        { day: "Selasa", time: "10:00 - 14:00", room: "Poliklinik Bedah Plastik Lt.3" },
        { day: "Jumat", time: "10:00 - 14:00", room: "Poliklinik Bedah Plastik Lt.3" }
      ]
    },
    {
      id: 24,
      name: "Dr. Mega Wulandari, Sp.KGA",
      specialty: "Spesialis Kedokteran Gigi Anak",
      schedule: [
        { day: "Senin", time: "09:00 - 15:00", room: "Poliklinik Gigi Anak Lt.1" },
        { day: "Rabu", time: "09:00 - 15:00", room: "Poliklinik Gigi Anak Lt.1" },
        { day: "Jumat", time: "09:00 - 15:00", room: "Poliklinik Gigi Anak Lt.1" }
      ]
    },
    {
      id: 25,
      name: "Dr. Nanda Pratama, Sp.PD-KR",
      specialty: "Spesialis Penyakit Dalam Ginjal",
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Ginjal Lt.2" },
        { day: "Kamis", time: "08:00 - 12:00", room: "Poliklinik Ginjal Lt.2" }
      ]
    },
    {
      id: 26,
      name: "Dr. Olivia Susanti, Sp.KK",
      specialty: "Spesialis Kulit & Kelamin",
      schedule: [
        { day: "Selasa", time: "10:00 - 16:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Jumat", time: "10:00 - 16:00", room: "Poliklinik Kulit Lt.1" }
      ]
    },
    {
      id: 27,
      name: "Dr. Panji Wibowo, Sp.B-KBD",
      specialty: "Spesialis Bedah Digestif",
      schedule: [
        { day: "Rabu", time: "09:00 - 13:00", room: "Poliklinik Bedah Digestif Lt.3" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Poliklinik Bedah Digestif Lt.3" }
      ]
    },
    {
      id: 28,
      name: "Dr. Qonita Rahma, Sp.EM",
      specialty: "Spesialis Kedokteran Emergency",
      schedule: [
        { day: "Setiap Hari", time: "On-Call 24 Jam", room: "IGD" }
      ]
    },
    {
      id: 29,
      name: "Dr. Raden Surya, Sp.N",
      specialty: "Spesialis Neurologi",
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Jumat", time: "13:00 - 17:00", room: "Poliklinik Saraf Lt.2" }
      ]
    },
    {
      id: 30,
      name: "Dr. Sari Indah, Sp.GK",
      specialty: "Spesialis Gizi Klinik",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" }
      ]
    },
    {
      id: 31,
      name: "Dr. Taufik Hidayat, Sp.OG-KFER",
      specialty: "Spesialis Kandungan Fertilitas",
      schedule: [
        { day: "Senin", time: "14:00 - 18:00", room: "Poliklinik Fertilitas Lt.2" },
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Fertilitas Lt.2" }
      ]
    },
    {
      id: 32,
      name: "Dr. Umi Kalsum, Sp.PK",
      specialty: "Spesialis Patologi Klinik",
      schedule: [
        { day: "Senin - Sabtu", time: "07:00 - 15:00", room: "Lab Klinik" }
      ]
    },
    {
      id: 33,
      name: "Dr. Vino Adriansyah, Sp.M",
      specialty: "Spesialis Mata",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Mata Lt.1" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Mata Lt.1" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Mata Lt.1" }
      ]
    },
    {
      id: 34,
      name: "Dr. Winda Permata, Sp.A-K",
      specialty: "Spesialis Anak Konsultan",
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" },
        { day: "Rabu", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" }
      ]
    },
    {
      id: 35,
      name: "Dr. Yoga Aditya, Sp.JP-FIHA",
      specialty: "Spesialis Jantung Konsultan",
      schedule: [
        { day: "Selasa", time: "13:00 - 17:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik Jantung Lt.2" }
      ]
    },
    {
      id: 36,
      name: "Dr. Zahra Amalia, Sp.THT-KL",
      specialty: "Spesialis THT",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik THT Lt.2" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik THT Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" }
      ]
    },
    {
      id: 37,
      name: "Dr. Arief Budiman, Sp.B-KV",
      specialty: "Spesialis Bedah Vaskular",
      schedule: [
        { day: "Rabu", time: "10:00 - 14:00", room: "Poliklinik Bedah Vaskular Lt.3" },
        { day: "Jumat", time: "10:00 - 14:00", room: "Poliklinik Bedah Vaskular Lt.3" }
      ]
    },
    {
      id: 38,
      name: "Dr. Bella Safitri, Sp.KFR",
      specialty: "Spesialis Rehabilitasi Medik",
      schedule: [
        { day: "Senin", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" },
        { day: "Rabu", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" }
      ]
    },
    {
      id: 39,
      name: "Dr. Cahyo Nugroho, Sp.PD-KEMD",
      specialty: "Spesialis Penyakit Dalam Endokrin",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Endokrin Lt.2" },
        { day: "Jumat", time: "08:00 - 14:00", room: "Poliklinik Endokrin Lt.2" }
      ]
    },
    {
      id: 40,
      name: "Dr. Dina Mariana, Sp.PK",
      specialty: "Spesialis Patologi Klinik",
      schedule: [
        { day: "Senin - Jumat", time: "08:00 - 16:00", room: "Lab Klinik" }
      ]
    }
  ];

  const specialties = ["Semua", ...Array.from(new Set(doctors.map(d => d.specialty)))];

  const filteredDoctors = selectedSpecialty === "Semua" 
    ? doctors 
    : doctors.filter(d => d.specialty === selectedSpecialty);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[200px] sm:h-[250px] bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-24 h-24 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-32 w-32 h-32 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.75s' }} />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="text-center text-white px-4 sm:px-8 z-10">
          <User className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-2 text-2xl sm:text-3xl lg:text-4xl">Daftar Dokter Spesialis</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto text-sm sm:text-base">
            40 Dokter Spesialis Siap Melayani Anda
          </p>
          <button
            onClick={() => onNavigate?.('home')}
            className="mt-4 sm:mt-6 bg-white text-[#1378fd] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto shadow-lg text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Kembali ke Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Filter Section */}
        <div className="bg-gradient-to-r from-[#e1ecfb] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 text-base sm:text-lg">
            Filter Berdasarkan Spesialisasi
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-['Alkatra:Regular',sans-serif] transition-all duration-300 text-xs sm:text-sm ${
                  selectedSpecialty === specialty
                    ? 'bg-[#1378fd] text-white shadow-lg scale-105'
                    : 'bg-white text-[#1378fd] border-2 border-[#b6d5fe] hover:border-[#1378fd] hover:scale-105'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Count */}
        <div className="mb-4 text-center">
          <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166]">
            Menampilkan <span className="text-[#1378fd]">{filteredDoctors.length}</span> dokter
          </p>
        </div>

        {/* Doctors List - Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl border-2 border-[#e1ecfb] hover:border-[#1378fd] hover:shadow-lg transition-all duration-300"
            >
              {/* Doctor Info - Compact */}
              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] rounded-full p-2 flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-sm mb-1 line-clamp-2">
                      {doctor.name}
                    </h3>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs line-clamp-1">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleSchedule(doctor.id)}
                  className="w-full bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-4 py-2 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-lg transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {expandedDoctor === doctor.id ? 'Sembunyikan' : 'Lihat Jadwal'}
                  {expandedDoctor === doctor.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Schedule - Expandable */}
              {expandedDoctor === doctor.id && (
                <div className="px-4 pb-4 animate-fadeIn">
                  <div className="bg-gradient-to-br from-[#e1ecfb] to-white rounded-lg p-3 space-y-2">
                    {doctor.schedule.map((sch, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-2 rounded-md border-l-4 border-[#1378fd] text-xs"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-xs">
                            {sch.day}
                          </span>
                          <div className="flex items-center gap-1 text-[#425166]">
                            <Clock className="w-3 h-3" />
                            <span className="font-['Alkatra:Regular',sans-serif] text-[10px]">
                              {sch.time}
                            </span>
                          </div>
                        </div>
                        <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-[10px]">
                          📍 {sch.room}
                        </p>
                      </div>
                    ))}
                    
                    <button 
                      onClick={() => onNavigate?.('janji-temu')}
                      className="w-full mt-2 bg-white text-[#1378fd] border-2 border-[#1378fd] px-3 py-1.5 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-[#1378fd] hover:text-white transition-all text-[10px]"
                    >
                      Buat Janji Temu
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl">
          <Stethoscope className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
          <h3 className="font-['Alkatra:Bold',sans-serif] mb-3 sm:mb-4 text-xl sm:text-2xl">
            Informasi Penting
          </h3>
          <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3 text-sm sm:text-base">
            <p className="font-['Alkatra:Regular',sans-serif]">
              📞 Untuk informasi lebih lanjut dan pendaftaran, hubungi: <strong>(0355) 320119</strong>
            </p>
            <p className="font-['Alkatra:Regular',sans-serif]">
              ⏰ Jadwal dapat berubah sewaktu-waktu, harap konfirmasi terlebih dahulu
            </p>
            <p className="font-['Alkatra:Regular',sans-serif]">
              🏥 Pendaftaran online tersedia untuk memudahkan layanan Anda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
