import { useState } from "react";
import { Home, MessageCircle, Phone, Video, Clock, Calendar, Send, CheckCircle } from "lucide-react";

interface KonsultasiOnlinePageProps {
  onNavigate?: (page: string) => void;
}

export default function KonsultasiOnlinePage({ onNavigate }: KonsultasiOnlinePageProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    complaint: "",
    specialist: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const consultationMethods = [
    {
      id: "chat",
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Chat Online",
      description: "Konsultasi melalui chat dengan dokter",
      color: "from-[#1378fd] to-[#b6d5fe]"
    },
    {
      id: "phone",
      icon: <Phone className="w-12 h-12" />,
      title: "Telepon",
      description: "Konsultasi langsung via telepon",
      color: "from-[#b6d5fe] to-[#e1ecfb]"
    },
    {
      id: "video",
      icon: <Video className="w-12 h-12" />,
      title: "Video Call",
      description: "Konsultasi tatap muka via video",
      color: "from-[#1378fd] to-[#b6d5fe]"
    }
  ];

  const specialists = [
    "Dokter Umum",
    "Spesialis Anak",
    "Spesialis Jantung",
    "Spesialis Gigi",
    "Spesialis Mata",
    "Spesialis THT",
    "Spesialis Kulit",
    "Spesialis Penyakit Dalam"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        complaint: "",
        specialist: ""
      });
      setSelectedMethod("");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#1378fd] via-[#b6d5fe] to-[#e1ecfb] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-150" />
        </div>
        <div className="text-center text-white px-8 z-10">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Konsultasi Kesehatan Online</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto mb-2">
            Start Now Your Consultant Your Health
          </p>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto opacity-90">
            Konsultasi mudah dengan dokter spesialis kapan saja, dimana saja
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-3xl p-8 text-center animate-fadeIn">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-['Alkatra:Bold',sans-serif] text-green-700 mb-2">
              Permintaan Konsultasi Berhasil Dikirim!
            </h3>
            <p className="font-['Alkatra:Regular',sans-serif] text-green-600">
              Tim kami akan segera menghubungi Anda untuk konfirmasi jadwal konsultasi.
            </p>
          </div>
        )}

        {/* Consultation Methods */}
        <div className="mb-16">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-center mb-8">
            Pilih Metode Konsultasi
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {consultationMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`bg-white rounded-3xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  selectedMethod === method.id ? 'ring-4 ring-[#1378fd] scale-105' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${method.color} p-6 rounded-2xl text-white flex justify-center items-center mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                  {method.icon}
                </div>
                <h3 className="font-['Alkatra:Bold',sans-serif] text-center mb-2 text-[#1378fd]">
                  {method.title}
                </h3>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-center">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        {selectedMethod && (
          <div className="bg-gradient-to-br from-[#e1ecfb] to-white rounded-3xl shadow-xl p-8 md:p-12 animate-fadeIn">
            <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-center mb-8">
              Form Permintaan Konsultasi
            </h2>
            
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2">
                    No. Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Specialist */}
                <div>
                  <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2">
                    Pilih Spesialis *
                  </label>
                  <select
                    name="specialist"
                    value={formData.specialist}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors"
                  >
                    <option value="">Pilih spesialis...</option>
                    {specialists.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Tanggal Konsultasi *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Waktu Konsultasi *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors"
                  >
                    <option value="">Pilih waktu...</option>
                    <option value="08:00">08:00 - 09:00</option>
                    <option value="09:00">09:00 - 10:00</option>
                    <option value="10:00">10:00 - 11:00</option>
                    <option value="11:00">11:00 - 12:00</option>
                    <option value="13:00">13:00 - 14:00</option>
                    <option value="14:00">14:00 - 15:00</option>
                    <option value="15:00">15:00 - 16:00</option>
                    <option value="16:00">16:00 - 17:00</option>
                  </select>
                </div>
              </div>

              {/* Complaint */}
              <div className="mb-6">
                <label className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] block mb-2">
                  Keluhan / Pertanyaan *
                </label>
                <textarea
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] transition-colors resize-none"
                  placeholder="Jelaskan keluhan atau pertanyaan Anda..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white py-4 rounded-full font-['Alkatra:Bold',sans-serif] hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2">
              Jadwal Fleksibel
            </h3>
            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
              Konsultasi sesuai waktu yang Anda inginkan
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-[#b6d5fe] to-[#e1ecfb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#1378fd]" />
            </div>
            <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2">
              Dokter Berpengalaman
            </h3>
            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
              Ditangani oleh dokter spesialis profesional
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2">
              Privasi Terjaga
            </h3>
            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">
              Data dan informasi Anda dijamin kerahasiaannya
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] rounded-3xl p-8 text-white text-center">
          <h2 className="font-['Alkatra:Bold',sans-serif] mb-4">Butuh Bantuan?</h2>
          <p className="font-['Alkatra:Regular',sans-serif] mb-6">
            Hubungi customer service kami untuk informasi lebih lanjut
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0355320119" 
              className="bg-white text-[#1378fd] px-8 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (0355) 320119
            </a>
            <a 
              href="https://wa.me/62355320119" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1378fd] px-8 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
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
    </div>
  );
}
