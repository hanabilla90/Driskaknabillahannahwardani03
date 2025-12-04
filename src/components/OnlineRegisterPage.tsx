import { useState } from "react";
import { Home, Calendar, User, Phone, Mail, MapPin, FileText, Clock, CheckCircle, AlertCircle, Stethoscope } from "lucide-react";

interface OnlineRegisterPageProps {
  onNavigate?: (page: string) => void;
}

export default function OnlineRegisterPage({ onNavigate }: OnlineRegisterPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    doctor: "",
    specialty: "",
    complaint: "",
    paymentMethod: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const specialties = [
    "Spesialis Jantung & Pembuluh Darah",
    "Spesialis Anak",
    "Spesialis Penyakit Dalam",
    "Spesialis Mata",
    "Spesialis Kandungan & Kebidanan",
    "Spesialis Kulit & Kelamin",
    "Spesialis THT",
    "Spesialis Saraf",
    "Spesialis Bedah Umum",
    "Spesialis Orthopedi"
  ];

  const doctors = [
    "Dr. Ahmad Hidayat, Sp.JP",
    "Dr. Siti Nurhaliza, Sp.A",
    "Dr. Budi Santoso, Sp.PD",
    "Dr. Rina Wijayanti, Sp.M",
    "Dr. Hendra Gunawan, Sp.OG",
    "Dr. Maya Puspita, Sp.KK",
    "Dr. Fajar Raharjo, Sp.THT-KL",
    "Dr. Dewi Lestari, Sp.S"
  ];

  const timeSlots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full bg-white min-h-screen">
        {/* Success Hero */}
        <div className="relative h-[300px] sm:h-[350px] bg-gradient-to-br from-green-500 via-green-600 to-green-700 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-32 w-40 h-40 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="text-center text-white px-4 sm:px-8 z-10">
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6" />
            <h1 className="font-['Alkatra:Bold',sans-serif] mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">Pendaftaran Berhasil!</h1>
            <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Terima kasih telah mendaftar. Silakan datang sesuai jadwal yang telah Anda pilih.
            </p>
          </div>
        </div>

        {/* Success Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-green-200 shadow-xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8">
            <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-6 sm:mb-8 text-xl sm:text-2xl text-center">
              Detail Pendaftaran Anda
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gradient-to-r from-[#e1ecfb] to-white p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#1378fd]" />
                  <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">Data Pasien</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>Nama:</strong> {formData.name}
                  </p>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>NIK:</strong> {formData.nik}
                  </p>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>Telepon:</strong> {formData.phone}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#e1ecfb] to-white p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#1378fd]" />
                  <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">Jadwal Kunjungan</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>Tanggal:</strong> {new Date(formData.appointmentDate).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>Waktu:</strong> {formData.appointmentTime}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#e1ecfb] to-white p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#1378fd]" />
                  <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">Dokter & Spesialisasi</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>Dokter:</strong> {formData.doctor}
                  </p>
                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <strong>Spesialisasi:</strong> {formData.specialty}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#e1ecfb] to-white p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#1378fd]" />
                  <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">Keluhan</h3>
                </div>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                  {formData.complaint}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#1378fd] p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#1378fd] flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm">
                  <p className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-2">Informasi Penting:</p>
                  <ul className="list-disc list-inside space-y-1 font-['Alkatra:Regular',sans-serif] text-[#425166]">
                    <li>Harap datang 15 menit sebelum jadwal konsultasi</li>
                    <li>Bawa kartu identitas dan kartu BPJS (jika ada)</li>
                    <li>Simpan bukti pendaftaran ini</li>
                    <li>Hubungi (0355) 320119 jika ingin reschedule</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => window.print()}
                className="flex-1 bg-white text-[#1378fd] border-2 border-[#1378fd] px-6 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-[#1378fd] hover:text-white transition-all text-sm sm:text-base"
              >
                Cetak Bukti
              </button>
              <button
                onClick={() => onNavigate?.('home')}
                className="flex-1 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1378fd] via-[#2f8afd] to-[#b6d5fe] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-32 w-40 h-40 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="text-center text-white px-4 sm:px-8 z-10">
          <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl">Pendaftaran Online</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Daftar secara online untuk menghemat waktu Anda
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Progress Steps */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full font-['Alkatra:Bold',sans-serif] transition-all text-sm sm:text-base ${
                  step >= stepNumber 
                    ? 'bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white scale-110' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-8 sm:w-12 lg:w-16 h-1 mx-1 sm:mx-2 transition-all ${
                    step > stepNumber ? 'bg-[#1378fd]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 sm:gap-8 lg:gap-16 mt-3 sm:mt-4">
            <span className={`font-['Alkatra:SemiBold',sans-serif] text-xs sm:text-sm ${step >= 1 ? 'text-[#1378fd]' : 'text-gray-400'}`}>
              Data Pasien
            </span>
            <span className={`font-['Alkatra:SemiBold',sans-serif] text-xs sm:text-sm ${step >= 2 ? 'text-[#1378fd]' : 'text-gray-400'}`}>
              Jadwal
            </span>
            <span className={`font-['Alkatra:SemiBold',sans-serif] text-xs sm:text-sm ${step >= 3 ? 'text-[#1378fd]' : 'text-gray-400'}`}>
              Konfirmasi
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#e1ecfb] shadow-xl p-4 sm:p-6 lg:p-8">
          {/* Step 1: Data Pasien */}
          {step === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4 sm:mb-6 text-xl sm:text-2xl">Data Pasien</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    NIK <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nik"
                    value={formData.nik}
                    onChange={handleInputChange}
                    required
                    maxLength={16}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                    placeholder="16 digit NIK"
                  />
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                  >
                    <option value="">Pilih jenis kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                  Alamat Lengkap <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base resize-none"
                  placeholder="Masukkan alamat lengkap"
                />
              </div>
            </div>
          )}

          {/* Step 2: Jadwal */}
          {step === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4 sm:mb-6 text-xl sm:text-2xl">Pilih Jadwal & Dokter</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Tanggal Kunjungan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Waktu Kunjungan <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                  >
                    <option value="">Pilih waktu</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Spesialisasi <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                  >
                    <option value="">Pilih spesialisasi</option>
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                    Dokter <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                  >
                    <option value="">Pilih dokter</option>
                    {doctors.map((doctor) => (
                      <option key={doctor} value={doctor}>{doctor}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                  Keluhan / Gejala <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base resize-none"
                  placeholder="Jelaskan keluhan atau gejala yang Anda alami"
                />
              </div>
            </div>
          )}

          {/* Step 3: Konfirmasi */}
          {step === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4 sm:mb-6 text-xl sm:text-2xl">Konfirmasi Pendaftaran</h2>
              
              <div className="bg-gradient-to-r from-[#e1ecfb] to-white rounded-2xl p-4 sm:p-6 space-y-4">
                <div>
                  <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 text-base sm:text-lg">Data Pasien</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Nama:</strong> {formData.name}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>NIK:</strong> {formData.nik}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Telepon:</strong> {formData.phone}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Email:</strong> {formData.email || '-'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 text-base sm:text-lg">Jadwal Kunjungan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Tanggal:</strong> {formData.appointmentDate}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Waktu:</strong> {formData.appointmentTime}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Dokter:</strong> {formData.doctor}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]"><strong>Spesialisasi:</strong> {formData.specialty}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-['Alkatra:SemiBold',sans-serif] text-[#425166] mb-2 text-sm sm:text-base">
                  Metode Pembayaran <span className="text-red-500">*</span>
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e1ecfb] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-sm sm:text-base"
                >
                  <option value="">Pilih metode pembayaran</option>
                  <option value="BPJS">BPJS Kesehatan</option>
                  <option value="Umum">Umum / Tunai</option>
                  <option value="Asuransi">Asuransi Swasta</option>
                </select>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-['Alkatra:SemiBold',sans-serif] text-yellow-700 mb-2">Perhatian:</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-yellow-700">
                      Pastikan semua data yang Anda masukkan sudah benar sebelum melanjutkan pendaftaran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 bg-white text-[#425166] border-2 border-[#e1ecfb] px-6 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-50 transition-all text-sm sm:text-base"
              >
                Kembali
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="flex-1 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Konfirmasi Pendaftaran
              </button>
            )}
          </div>
        </form>

        {/* Back to Home */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => onNavigate?.('home')}
            className="text-[#1378fd] hover:text-[#2f8afd] font-['Alkatra:SemiBold',sans-serif] flex items-center gap-2 mx-auto transition-colors text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
