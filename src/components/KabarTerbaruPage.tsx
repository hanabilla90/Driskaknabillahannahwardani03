import { Calendar, User, Tag, Home } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface KabarTerbaruPageProps {
  onNavigate?: (page: string) => void;
}

export default function KabarTerbaruPage({ onNavigate }: KabarTerbaruPageProps) {
  const newsData = [
    {
      id: 1,
      title: "RSUD dr.Iskak Raih Akreditasi Paripurna 2024",
      category: "Prestasi",
      date: "28 November 2024",
      author: "Admin RSUD",
      excerpt: "RSUD dr.Iskak Tulungagung berhasil meraih akreditasi paripurna dari KARS (Komisi Akreditasi Rumah Sakit) yang menunjukkan komitmen tinggi terhadap kualitas pelayanan kesehatan.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
    },
    {
      id: 2,
      title: "Launching Layanan Telemedicine untuk Pasien",
      category: "Inovasi",
      date: "20 November 2024",
      author: "Humas RSUD",
      excerpt: "Kini pasien dapat berkonsultasi dengan dokter spesialis melalui video call tanpa harus datang ke rumah sakit, memudahkan akses layanan kesehatan di era digital.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    },
    {
      id: 3,
      title: "Program Vaksinasi Gratis untuk Lansia",
      category: "Program",
      date: "15 November 2024",
      author: "Tim Medis",
      excerpt: "RSUD dr.Iskak mengadakan program vaksinasi gratis untuk lansia di Kabupaten Tulungagung sebagai upaya preventif kesehatan masyarakat.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"
    },
    {
      id: 4,
      title: "Alat CT-Scan Generasi Terbaru Sudah Beroperasi",
      category: "Fasilitas",
      date: "10 November 2024",
      author: "Bagian Radiologi",
      excerpt: "Pengadaan CT-Scan 128 slice terbaru meningkatkan akurasi diagnostik dan mempercepat pemeriksaan radiologi untuk pasien.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800"
    },
    {
      id: 5,
      title: "Pelatihan BLS untuk Seluruh Staff Medis",
      category: "Pelatihan",
      date: "5 November 2024",
      author: "HRD RSUD",
      excerpt: "Seluruh tenaga medis mengikuti pelatihan Basic Life Support (BLS) untuk meningkatkan kemampuan penanganan kegawatdaruratan.",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800"
    },
    {
      id: 6,
      title: "Kerjasama dengan Universitas untuk Riset Kesehatan",
      category: "Kerjasama",
      date: "1 November 2024",
      author: "Direktur RSUD",
      excerpt: "RSUD dr.Iskak menandatangani MoU dengan beberapa universitas terkemuka untuk penelitian dan pengembangan di bidang kesehatan.",
      image: "https://images.unsplash.com/photo-1631815587974-69fd869cc44f?w=800"
    }
  ];

  const announcements = [
    { title: "Jadwal Libur Natal & Tahun Baru 2024", date: "25 Des 2024" },
    { title: "Maintenance Sistem Informasi RS", date: "15 Des 2024" },
    { title: "Update Tarif Layanan 2025", date: "1 Jan 2025" }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-4">Kabar Terbaru</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Berita, Informasi, dan Pengumuman Terkini dari RSUD dr.Iskak
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

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-8">Berita Utama</h2>
            <div className="space-y-8">
              {newsData.map((news) => (
                <article key={news.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <ImageWithFallback 
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#b6d5fe] text-[#1378fd] px-3 py-1 rounded-full font-['Alkatra:SemiBold',sans-serif]">
                          <Tag className="inline w-4 h-4 mr-1" />
                          {news.category}
                        </span>
                      </div>
                      <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-3">{news.title}</h3>
                      <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] mb-4">{news.excerpt}</p>
                      <div className="flex items-center gap-4 font-['Alkatra:Regular',sans-serif] text-[#425166]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {news.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Announcements */}
            <div className="bg-[#e1ecfb] p-6 rounded-2xl shadow-lg mb-8">
              <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Pengumuman</h3>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl">
                    <p className="font-['Alkatra:SemiBold',sans-serif] mb-1">{announcement.title}</p>
                    <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Kategori</h3>
              <div className="space-y-2">
                {["Prestasi", "Inovasi", "Program", "Fasilitas", "Pelatihan", "Kerjasama"].map((category, index) => (
                  <button key={index} className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#e1ecfb] font-['Alkatra:Regular',sans-serif] transition-colors">
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#1378fd] to-[#b6d5fe] text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-['Alkatra:Bold',sans-serif] mb-3">Newsletter</h3>
              <p className="font-['Alkatra:Regular',sans-serif] mb-4">Dapatkan berita terbaru langsung ke email Anda</p>
              <input 
                type="email" 
                placeholder="Email Anda"
                className="w-full p-3 rounded-lg mb-3 font-['Alkatra:Regular',sans-serif] text-black"
              />
              <button className="w-full bg-white text-[#1378fd] py-3 rounded-lg font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
