import { Calendar, Clock, User, Phone, Mail, Home } from "lucide-react";
import { useState } from "react";

interface JanjiTemuPageProps {
  onNavigate?: (page: string) => void;
}

export default function JanjiTemuPage({ onNavigate }: JanjiTemuPageProps) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const doctors = [
    { id: 1, name: "dr. Heru Prasetyo, Sp.PD", specialty: "Penyakit Dalam" },
    { id: 2, name: "dr. Siti Aisyah, Sp.A", specialty: "Anak" },
    { id: 3, name: "dr. Budi Santoso, Sp.JP", specialty: "Jantung dan Pembuluh Darah" },
    { id: 4, name: "dr. Maya Widiastuti, Sp.OG", specialty: "Kebidanan dan Kandungan" },
    { id: 5, name: "dr. Agus Setiawan, Sp.B", specialty: "Bedah Umum" },
    { id: 6, name: "dr. Lina Marlina, Sp.M", specialty: "Mata" },
    { id: 7, name: "dr. Rizki Firmansyah, Sp.THT", specialty: "THT (Telinga Hidung Tenggorokan)" },
    { id: 8, name: "dr. Dewi Kartika, Sp.KK", specialty: "Kulit dan Kelamin" },
    { id: 9, name: "dr. Eko Prasetyo, Sp.S", specialty: "Saraf" },
    { id: 10, name: "dr. Nur Hidayati, Sp.P", specialty: "Paru" },
    { id: 11, name: "dr. Arief Budiman, Sp.OT", specialty: "Orthopedi" },
    { id: 12, name: "dr. Ratna Sari, Sp.KG", specialty: "Gigi" },
    { id: 13, name: "dr. Bambang Sutrisno, Sp.U", specialty: "Urologi" },
    { id: 14, name: "dr. Yuni Astuti, Sp.An", specialty: "Anestesi" },
    { id: 15, name: "dr. Darmawan, Sp.Rad", specialty: "Radiologi" },
    { id: 16, name: "dr. Fitri Handayani, Sp.PK", specialty: "Patologi Klinik" },
    { id: 17, name: "dr. Hadi Susanto, Sp.BS", specialty: "Bedah Saraf" },
    { id: 18, name: "dr. Indah Permata, Sp.RM", specialty: "Rehabilitasi Medik" },
    { id: 19, name: "dr. Joko Widodo, Sp.GK", specialty: "Gizi Klinik" },
    { id: 20, name: "dr. Kartini Soekarno, Sp.KJ", specialty: "Kedokteran Jiwa" },
  ];

  const timeSlots = [
    "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
    "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-[#b6d5fe] to-[#1378fd] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Janji Temu Dokter</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Buat janji temu dengan dokter spesialis kami dengan mudah dan cepat
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

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="bg-[#e1ecfb] p-8 rounded-3xl shadow-lg">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-8 text-center">Form Janji Temu</h2>
          
          <div className="space-y-6">
            {/* Patient Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                  <User className="inline w-5 h-5 mr-2" />
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                  <Phone className="inline w-5 h-5 mr-2" />
                  No. Telepon
                </label>
                <input 
                  type="tel" 
                  className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
                  placeholder="08xx xxxx xxxx"
                />
              </div>
            </div>

            <div>
              <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                <Mail className="inline w-5 h-5 mr-2" />
                Email
              </label>
              <input 
                type="email" 
                className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
                placeholder="email@contoh.com"
              />
            </div>

            {/* Doctor Selection */}
            <div>
              <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                Pilih Dokter Spesialis
              </label>
              <select 
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
              >
                <option value="">-- Pilih Dokter --</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                  <Calendar className="inline w-5 h-5 mr-2" />
                  Tanggal
                </label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
                />
              </div>
              <div>
                <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                  <Clock className="inline w-5 h-5 mr-2" />
                  Waktu
                </label>
                <select 
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
                >
                  <option value="">-- Pilih Waktu --</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="font-['Alkatra:SemiBold',sans-serif] text-black block mb-2">
                Keluhan / Catatan
              </label>
              <textarea 
                rows={4}
                className="w-full p-3 rounded-xl border-2 border-white bg-white font-['Alkatra:Regular',sans-serif]"
                placeholder="Jelaskan keluhan atau catatan tambahan..."
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#1378fd] text-white py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] shadow-lg hover:bg-[#0d5fd4] transition-colors">
              Buat Janji Temu
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-4">Informasi Penting</h3>
          <ul className="font-['Alkatra:Regular',sans-serif] text-[#425166] space-y-2">
            <li>• Pastikan datang 15 menit sebelum waktu yang dijadwalkan</li>
            <li>• Bawa kartu identitas dan kartu BPJS (jika ada)</li>
            <li>• Konfirmasi janji temu akan dikirim melalui SMS/Email</li>
            <li>• Untuk pembatalan, hubungi (0355) 320119 minimal 24 jam sebelumnya</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
