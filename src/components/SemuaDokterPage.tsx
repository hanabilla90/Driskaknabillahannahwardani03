import { useState } from "react";
import { Home, Calendar, Clock, Phone, Mail, Award, Stethoscope, ChevronDown, ChevronUp } from "lucide-react";
import DoctorScheduleModal from "./DoctorScheduleModal";

interface SemuaDokterPageProps {
  onNavigate?: (page: string) => void;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  education: string;
  experience: string;
  phone: string;
  email: string;
  schedule: {
    day: string;
    time: string;
    room: string;
  }[];
  achievements: string[];
}

export default function SemuaDokterPage({ onNavigate }: SemuaDokterPageProps) {
  const [expandedDoctor, setExpandedDoctor] = useState<number | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("Semua");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleViewSchedule = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ahmad Hidayat, Sp.JP",
      specialty: "Spesialis Jantung",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      education: "Universitas Indonesia, Spesialis Kardiologi",
      experience: "15 tahun",
      phone: "(0355) 320119 ext. 101",
      email: "ahmad.hidayat@rsudiskak.com",
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Rabu", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" }
      ],
      achievements: [
        "Sertifikasi Kardiologi Intervensional",
        "Fellow American College of Cardiology",
        "Ahli Kateterisasi Jantung"
      ]
    },
    {
      id: 2,
      name: "Dr. Siti Nurhaliza, Sp.A",
      specialty: "Spesialis Anak",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      education: "Universitas Airlangga, Spesialis Pediatri",
      experience: "12 tahun",
      phone: "(0355) 320119 ext. 102",
      email: "siti.nurhaliza@rsudiskak.com",
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
        { day: "Selasa", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" }
      ],
      achievements: [
        "Sertifikasi Neonatal Intensive Care",
        "Ahli Tumbuh Kembang Anak",
        "Member Ikatan Dokter Anak Indonesia"
      ]
    },
    {
      id: 3,
      name: "Dr. Budi Santoso, Sp.PD",
      specialty: "Spesialis Penyakit Dalam",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      education: "Universitas Gadjah Mada, Spesialis Penyakit Dalam",
      experience: "18 tahun",
      phone: "(0355) 320119 ext. 103",
      email: "budi.santoso@rsudiskak.com",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Penyakit Dalam Lt.2" }
      ],
      achievements: [
        "Konsultan Gastroenterologi",
        "Sertifikasi ACLS & BLS",
        "Pengajar di FK Universitas Brawijaya"
      ]
    },
    {
      id: 4,
      name: "Dr. Rina Wijayanti, Sp.M",
      specialty: "Spesialis Mata",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      education: "Universitas Padjadjaran, Spesialis Oftalmologi",
      experience: "10 tahun",
      phone: "(0355) 320119 ext. 104",
      email: "rina.wijayanti@rsudiskak.com",
      schedule: [
        { day: "Senin", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
        { day: "Rabu", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
        { day: "Jumat", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" }
      ],
      achievements: [
        "Ahli Bedah Katarak",
        "Sertifikasi Lasik Surgery",
        "Member Asia-Pacific Ophtalmology Society"
      ]
    },
    {
      id: 5,
      name: "Dr. Hendra Gunawan, Sp.OG",
      specialty: "Spesialis Kandungan",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      education: "Universitas Indonesia, Spesialis Obstetri & Ginekologi",
      experience: "14 tahun",
      phone: "(0355) 320119 ext. 105",
      email: "hendra.gunawan@rsudiskak.com",
      schedule: [
        { day: "Senin", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" },
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" },
        { day: "Jumat", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" }
      ],
      achievements: [
        "Konsultan Fetomaternal",
        "Ahli Bedah Laparoskopi",
        "Member POGI (Perkumpulan Obstetri & Ginekologi Indonesia)"
      ]
    },
    {
      id: 6,
      name: "Dr. Maya Puspita, Sp.KK",
      specialty: "Spesialis Kulit",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      education: "Universitas Airlangga, Spesialis Kulit & Kelamin",
      experience: "9 tahun",
      phone: "(0355) 320119 ext. 106",
      email: "maya.puspita@rsudiskak.com",
      schedule: [
        { day: "Selasa", time: "09:00 - 15:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Kamis", time: "09:00 - 15:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Poliklinik Kulit Lt.1" }
      ],
      achievements: [
        "Sertifikasi Dermatologi Estetik",
        "Ahli Laser Therapy",
        "Member Indonesian Society of Dermatology"
      ]
    },
    {
      id: 7,
      name: "Dr. Fajar Raharjo, Sp.THT-KL",
      specialty: "Spesialis THT",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      education: "Universitas Diponegoro, Spesialis THT-KL",
      experience: "11 tahun",
      phone: "(0355) 320119 ext. 107",
      email: "fajar.raharjo@rsudiskak.com",
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik THT Lt.2" },
        { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" }
      ],
      achievements: [
        "Ahli Bedah Mikroskopik Telinga",
        "Sertifikasi Endoskopi Sinus",
        "Member PERHATI-KL"
      ]
    },
    {
      id: 8,
      name: "Dr. Dewi Lestari, Sp.S",
      specialty: "Spesialis Saraf",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop",
      education: "Universitas Indonesia, Spesialis Neurologi",
      experience: "13 tahun",
      phone: "(0355) 320119 ext. 108",
      email: "dewi.lestari@rsudiskak.com",
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Saraf Lt.2" }
      ],
      achievements: [
        "Konsultan Stroke",
        "Sertifikasi EEG & EMG",
        "Fellow American Academy of Neurology"
      ]
    }
  ];

  const specialties = ["Semua", ...Array.from(new Set(doctors.map(d => d.specialty)))];

  const filteredDoctors = selectedSpecialty === "Semua" 
    ? doctors 
    : doctors.filter(d => d.specialty === selectedSpecialty);

  const toggleExpand = (doctorId: number) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] bg-gradient-to-r from-[#1378fd] via-[#b6d5fe] to-[#e1ecfb] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full animate-pulse delay-150" />
        </div>
        <div className="text-center text-white px-4 sm:px-8 z-10">
          <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl inline-block">
            <Stethoscope className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h1 className="font-['Alkatra:Bold',sans-serif] mb-2 text-2xl sm:text-3xl lg:text-4xl">Tim Dokter Spesialis Kami</h1>
            <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive health care Service Tailored To Your Needs
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('home')}
            className="mt-4 sm:mt-6 bg-white text-[#1378fd] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto shadow-lg text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Kembali ke Home
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-gradient-to-r from-[#e1ecfb] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 text-base sm:text-lg">
            Filter Berdasarkan Spesialisasi
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-['Alkatra:Regular',sans-serif] transition-all duration-300 text-sm sm:text-base ${
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

        {/* Doctors Grid */}
        <div className="grid gap-4 sm:gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-[#e1ecfb] hover:border-[#b6d5fe]"
            >
              {/* Doctor Header */}
              <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-[#e1ecfb] to-white">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl object-cover shadow-lg ring-4 ring-white"
                    />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2 text-lg sm:text-xl lg:text-2xl">
                      {doctor.name}
                    </h2>
                    <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-3 sm:mb-4 text-sm sm:text-base">
                      {doctor.specialty}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 text-[#425166] justify-center sm:justify-start">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd] flex-shrink-0" />
                        <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm break-words">{doctor.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#425166] justify-center sm:justify-start">
                        <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd] flex-shrink-0" />
                        <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm">Pengalaman: {doctor.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#425166] justify-center sm:justify-start">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd] flex-shrink-0" />
                        <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm">{doctor.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#425166] justify-center sm:justify-start">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd] flex-shrink-0" />
                        <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm break-all">{doctor.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                  <button
                    onClick={() => toggleExpand(doctor.id)}
                    className="bg-[#1378fd] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-[#0d5fd1] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    {expandedDoctor === doctor.id ? (
                      <>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        Tutup Detail
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                        Lihat Detail
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedDoctor === doctor.id && (
                <div className="p-4 sm:p-6 bg-white animate-fadeIn">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Schedule */}
                    <div>
                      <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        Jadwal Praktik
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {doctor.schedule.map((schedule, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-r from-[#e1ecfb] to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-[#1378fd]"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <span className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">
                                {schedule.day}
                              </span>
                              <div className="flex items-center gap-2 text-[#425166]">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm">{schedule.time}</span>
                              </div>
                            </div>
                            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                              📍 {schedule.room}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                        Keahlian & Sertifikasi
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {doctor.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-r from-white to-[#e1ecfb] p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-[#b6d5fe] hover:border-[#1378fd] transition-colors"
                          >
                            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] flex items-start gap-2 text-xs sm:text-sm">
                              <span className="text-[#1378fd] mt-1">✓</span>
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <button 
                      onClick={() => onNavigate?.('janji-temu')}
                      className="bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      Buat Janji Temu
                    </button>
                    <button 
                      onClick={() => onNavigate?.('konsultasi-online')}
                      className="bg-white text-[#1378fd] border-2 border-[#1378fd] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-[#e1ecfb] transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      Konsultasi Online
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl">
            <div className="mb-3 sm:mb-4">
              <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
            </div>
            <p className="font-['Alkatra:Bold',sans-serif] mb-2 text-sm sm:text-base">Total Dokter Spesialis</p>
            <p className="font-['Alkatra:Bold',sans-serif] text-xl sm:text-2xl">{doctors.length} Dokter</p>
          </div>
          <div className="bg-gradient-to-br from-[#b6d5fe] to-[#e1ecfb] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#1378fd] text-center shadow-xl">
            <div className="mb-3 sm:mb-4">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
            </div>
            <p className="font-['Alkatra:Bold',sans-serif] mb-2 text-sm sm:text-base">Spesialisasi Tersedia</p>
            <p className="font-['Alkatra:Bold',sans-serif] text-xl sm:text-2xl">{specialties.length - 1} Bidang</p>
          </div>
          <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl sm:col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
            </div>
            <p className="font-['Alkatra:Bold',sans-serif] mb-2 text-sm sm:text-base">Jam Layanan</p>
            <p className="font-['Alkatra:Bold',sans-serif] text-xl sm:text-2xl">Senin - Sabtu</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Doctor Schedule Modal */}
      <DoctorScheduleModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        doctor={selectedDoctor}
      />
    </div>
  );
}