import { Star, ThumbsUp, MessageSquare, Send, CheckCircle, Home } from "lucide-react";
import { useState } from "react";

interface SurveyPageProps {
  onNavigate?: (page: string) => void;
}

export default function SurveyPage({ onNavigate }: SurveyPageProps) {
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    service: 0,
    facilities: 0,
    doctorCare: 0,
    waitingTime: 0
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    feedback: ""
  });

  const handleRating = (category: string, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = () => {
    // Validasi minimal satu rating harus diisi
    const hasRating = Object.values(ratings).some(rating => rating > 0);
    
    if (!hasRating) {
      alert("Mohon berikan minimal satu penilaian sebelum mengirim survey");
      return;
    }

    // Simulasi pengiriman data
    console.log("Survey Data:", {
      ratings,
      formData,
      submittedAt: new Date().toISOString()
    });

    // Tampilkan modal sukses
    setShowSuccessModal(true);

    // Reset form setelah 3 detik
    setTimeout(() => {
      setShowSuccessModal(false);
      setRatings({
        cleanliness: 0,
        service: 0,
        facilities: 0,
        doctorCare: 0,
        waitingTime: 0
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        feedback: ""
      });
    }, 3000);
  };

  const RatingStars = ({ category, label }: { category: string; label: string }) => (
    <div className="mb-6">
      <label className="font-['Alkatra:SemiBold',sans-serif] block mb-3">{label}</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(category, star)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`w-10 h-10 ${
                star <= ratings[category as keyof typeof ratings]
                  ? "fill-[#1378fd] text-[#1378fd]"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-[#b6d5fe] to-[#1378fd] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Survey Kepuasan Pasien</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Pendapat Anda sangat berharga untuk meningkatkan kualitas layanan kami
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

      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Survey Form */}
        <div className="bg-[#e1ecfb] p-8 rounded-3xl shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-8">
            <ThumbsUp className="w-8 h-8 text-[#1378fd]" />
            <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd]">Berikan Penilaian Anda</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl mb-6">
            <RatingStars category="cleanliness" label="Kebersihan Rumah Sakit" />
            <RatingStars category="service" label="Kualitas Pelayanan Staff" />
            <RatingStars category="facilities" label="Kelengkapan Fasilitas" />
            <RatingStars category="doctorCare" label="Perawatan Dokter" />
            <RatingStars category="waitingTime" label="Waktu Tunggu Pelayanan" />
          </div>

          {/* Patient Info */}
          <div className="bg-white p-6 rounded-2xl mb-6">
            <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-4">Informasi Pasien (Opsional)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="p-3 rounded-lg border-2 border-[#e1ecfb] font-['Alkatra:Regular',sans-serif]"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="p-3 rounded-lg border-2 border-[#e1ecfb] font-['Alkatra:Regular',sans-serif]"
              />
            </div>
            <select 
              value={formData.service}
              onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
              className="w-full p-3 rounded-lg border-2 border-[#e1ecfb] font-['Alkatra:Regular',sans-serif] mb-4"
            >
              <option value="">Jenis Layanan yang Digunakan</option>
              <option value="igd">IGD</option>
              <option value="rawat-jalan">Rawat Jalan</option>
              <option value="rawat-inap">Rawat Inap</option>
              <option value="laboratorium">Laboratorium</option>
              <option value="radiologi">Radiologi</option>
            </select>
          </div>

          {/* Feedback */}
          <div className="bg-white p-6 rounded-2xl mb-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-[#1378fd]" />
              <h3 className="font-['Alkatra:SemiBold',sans-serif]">Kritik & Saran</h3>
            </div>
            <textarea
              rows={6}
              placeholder="Bagikan pengalaman Anda atau saran untuk perbaikan layanan kami..."
              value={formData.feedback}
              onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
              className="w-full p-4 rounded-lg border-2 border-[#e1ecfb] font-['Alkatra:Regular',sans-serif] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            className="w-full bg-[#1378fd] text-white py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] shadow-lg hover:bg-[#0d5fd4] transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Kirim Survey
          </button>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center">
              <div className="mb-6">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
              </div>
              <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Survey Berhasil Dikirim!</h3>
              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] mb-6">
                Terima kasih atas masukan Anda. Pendapat Anda sangat membantu kami dalam meningkatkan kualitas layanan.
              </p>
              <div className="bg-[#e1ecfb] p-4 rounded-xl">
                <p className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd]">
                  Halaman akan direset otomatis...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-[#1378fd] mb-2">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#1378fd] text-[#1378fd]" />
                ))}
              </div>
            </div>
            <p className="font-['Alkatra:SemiBold',sans-serif] mb-1">4.8/5.0</p>
            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Rating Rata-rata</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2">2,456</p>
            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Total Survey</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2">94%</p>
            <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Pasien Puas</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-6 text-center">Testimoni Pasien</h2>
          <div className="space-y-4">
            {[
              { name: "Ibu Siti Aminah", rating: 5, comment: "Pelayanan sangat baik, dokter dan perawat sangat ramah. Fasilitas juga bersih dan nyaman." },
              { name: "Bapak Ahmad Fauzi", rating: 5, comment: "Proses pendaftaran cepat, tidak perlu menunggu lama. Dokter sangat profesional dalam menangani keluhan saya." },
              { name: "Ibu Dewi Kartika", rating: 4, comment: "Secara keseluruhan bagus, hanya perlu ditingkatkan di bagian parkir yang masih kurang luas." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#e1ecfb] p-6 rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-['Alkatra:SemiBold',sans-serif]">{testimonial.name}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1378fd] text-[#1378fd]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
