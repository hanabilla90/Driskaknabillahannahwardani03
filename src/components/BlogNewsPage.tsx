import { useState } from "react";
import { Home, Calendar, User, Search, Tag, Clock, ArrowRight, X, Eye, Heart, Share2, MessageCircle } from "lucide-react";

interface BlogNewsPageProps {
  onNavigate?: (page: string) => void;
}

interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
}

export default function BlogNewsPage({ onNavigate }: BlogNewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "Tips Menjaga Kesehatan Jantung di Era Modern",
      category: "Kesehatan",
      excerpt: "Pelajari cara-cara praktis untuk menjaga kesehatan jantung Anda di tengah kesibukan modern dengan pola hidup sehat dan olahraga teratur.",
      content: `Kesehatan jantung adalah hal yang sangat penting untuk dijaga di era modern ini. Dengan pola hidup yang semakin sibuk, banyak orang yang mengabaikan kesehatan jantung mereka.

Berikut adalah beberapa tips untuk menjaga kesehatan jantung:

1. Olahraga Teratur
Lakukan olahraga minimal 30 menit setiap hari. Olahraga aerobik seperti berjalan, jogging, atau berenang sangat baik untuk kesehatan jantung.

2. Pola Makan Sehat
Konsumsi makanan yang kaya akan serat, omega-3, dan antioksidan. Hindari makanan tinggi lemak jenuh dan kolesterol.

3. Kelola Stress
Stress berlebihan dapat meningkatkan risiko penyakit jantung. Praktikkan teknik relaksasi seperti meditasi atau yoga.

4. Hindari Rokok dan Alkohol
Merokok dan konsumsi alkohol berlebihan adalah faktor risiko utama penyakit jantung.

5. Cek Kesehatan Rutin
Lakukan pemeriksaan kesehatan secara rutin untuk mendeteksi dini masalah kesehatan jantung.

Dengan menerapkan tips-tips di atas, Anda dapat menjaga kesehatan jantung dan meningkatkan kualitas hidup Anda.`,
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=600&fit=crop",
      author: "Dr. Ahmad Hidayat, Sp.JP",
      date: "2024-12-01",
      readTime: "5 menit",
      views: 1250,
      likes: 89,
      tags: ["Jantung", "Kesehatan", "Tips"]
    },
    {
      id: 2,
      title: "RSUD dr.Iskak Raih Akreditasi Paripurna",
      category: "Berita",
      excerpt: "Prestasi membanggakan! RSUD dr.Iskak Tulungagung berhasil meraih akreditasi paripurna dari Komisi Akreditasi Rumah Sakit.",
      content: `RSUD dr.Iskak Tulungagung dengan bangga mengumumkan pencapaian akreditasi paripurna dari Komisi Akreditasi Rumah Sakit (KARS). Ini adalah pencapaian tertinggi yang bisa diraih oleh sebuah rumah sakit di Indonesia.

Akreditasi paripurna ini menunjukkan komitmen RSUD dr.Iskak dalam memberikan pelayanan kesehatan berkualitas tinggi kepada masyarakat. Proses akreditasi meliputi penilaian terhadap berbagai aspek, termasuk:

1. Pelayanan Medis
Standar pelayanan medis yang tinggi dengan dokter-dokter spesialis berpengalaman.

2. Fasilitas dan Peralatan
Fasilitas medis modern dan peralatan canggih untuk diagnosis dan pengobatan.

3. Manajemen Mutu
Sistem manajemen mutu yang terpadu dan berkelanjutan.

4. Keselamatan Pasien
Protokol keselamatan pasien yang ketat dan terstandarisasi.

5. Hak Pasien dan Keluarga
Penghormatan terhadap hak-hak pasien dan keluarga dalam setiap aspek pelayanan.

Direktur RSUD dr.Iskak menyampaikan terima kasih kepada seluruh tim medis dan non-medis yang telah bekerja keras untuk mencapai prestasi ini.`,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      author: "Tim Humas RSUD",
      date: "2024-11-28",
      readTime: "4 menit",
      views: 2340,
      likes: 156,
      tags: ["Berita", "Prestasi", "Akreditasi"]
    },
    {
      id: 3,
      title: "Pentingnya Imunisasi Lengkap untuk Anak",
      category: "Kesehatan Anak",
      excerpt: "Imunisasi adalah investasi kesehatan terbaik untuk masa depan anak Anda. Ketahui jadwal dan jenis imunisasi yang wajib diberikan.",
      content: `Imunisasi adalah salah satu cara paling efektif untuk melindungi anak dari berbagai penyakit berbahaya. Sebagai orang tua, penting untuk memahami pentingnya imunisasi lengkap.

Mengapa Imunisasi Penting?

1. Mencegah Penyakit Berbahaya
Imunisasi melindungi anak dari penyakit seperti polio, campak, difteri, dan tetanus.

2. Melindungi Komunitas
Ketika banyak anak diimunisasi, penyebaran penyakit dapat dicegah (herd immunity).

3. Menghemat Biaya
Mencegah penyakit jauh lebih murah daripada mengobatinya.

Jadwal Imunisasi Dasar:
- 0-1 bulan: Hepatitis B, Polio 0, BCG
- 2 bulan: DPT 1, Polio 1, Hepatitis B 2
- 3 bulan: DPT 2, Polio 2
- 4 bulan: DPT 3, Polio 3, Hepatitis B 3
- 9 bulan: Campak
- 18 bulan: DPT 4, Polio 4, Campak 2

Konsultasikan dengan dokter spesialis anak untuk jadwal imunisasi yang tepat untuk anak Anda.`,
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop",
      author: "Dr. Siti Nurhaliza, Sp.A",
      date: "2024-11-25",
      readTime: "6 menit",
      views: 1890,
      likes: 124,
      tags: ["Anak", "Imunisasi", "Kesehatan"]
    },
    {
      id: 4,
      title: "Layanan Baru: Klinik Diabetes Terpadu",
      category: "Berita",
      excerpt: "RSUD dr.Iskak meluncurkan Klinik Diabetes Terpadu dengan fasilitas lengkap dan tim medis berpengalaman untuk penanganan diabetes.",
      content: `RSUD dr.Iskak Tulungagung dengan bangga mengumumkan pembukaan Klinik Diabetes Terpadu yang dirancang khusus untuk memberikan pelayanan komprehensif bagi penderita diabetes.

Fasilitas Klinik Diabetes Terpadu:

1. Konsultasi Endokrinologi
Tim dokter spesialis penyakit dalam konsultan endokrin yang berpengalaman.

2. Edukasi Diabetes
Program edukasi untuk pasien dan keluarga tentang manajemen diabetes.

3. Pemeriksaan HbA1c
Pemeriksaan kadar gula darah jangka panjang dengan hasil cepat.

4. Konsultasi Gizi
Ahli gizi yang akan membantu menyusun menu diet diabetes.

5. Deteksi Komplikasi
Pemeriksaan komplikasi diabetes seperti retinopati, neuropati, dan nefropati.

6. Gym Diabetes
Fasilitas olahraga khusus untuk penderita diabetes dengan instruktur terlatih.

Klinik Diabetes Terpadu buka setiap hari Senin-Jumat pukul 08:00-16:00. Untuk informasi lebih lanjut dan pendaftaran, hubungi (0355) 320119.`,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
      author: "Tim Humas RSUD",
      date: "2024-11-20",
      readTime: "5 menit",
      views: 1670,
      likes: 98,
      tags: ["Berita", "Diabetes", "Layanan Baru"]
    },
    {
      id: 5,
      title: "Cara Mencegah dan Mengatasi Hipertensi",
      category: "Kesehatan",
      excerpt: "Hipertensi atau tekanan darah tinggi adalah silent killer. Pelajari cara mencegah dan mengatasi hipertensi untuk hidup lebih sehat.",
      content: `Hipertensi atau tekanan darah tinggi sering disebut sebagai "silent killer" karena tidak menimbulkan gejala yang jelas namun dapat menyebabkan komplikasi serius.

Pencegahan Hipertensi:

1. Pola Makan Sehat
Kurangi konsumsi garam, lemak jenuh, dan makanan olahan. Perbanyak sayur dan buah.

2. Olahraga Teratur
Lakukan aktivitas fisik minimal 30 menit setiap hari untuk menjaga tekanan darah normal.

3. Kelola Berat Badan
Pertahankan berat badan ideal untuk mengurangi risiko hipertensi.

4. Batasi Alkohol dan Kafein
Konsumsi berlebihan dapat meningkatkan tekanan darah.

5. Kelola Stress
Teknik relaksasi seperti meditasi dan yoga dapat membantu menurunkan tekanan darah.

Penanganan Hipertensi:

1. Konsumsi Obat Teratur
Minum obat sesuai resep dokter secara teratur.

2. Monitor Tekanan Darah
Cek tekanan darah secara rutin di rumah atau rumah sakit.

3. Kontrol Rutin
Kunjungi dokter secara teratur untuk memantau kondisi kesehatan.

Jika Anda memiliki riwayat keluarga hipertensi atau mengalami gejala, segera konsultasikan dengan dokter.`,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      author: "Dr. Budi Santoso, Sp.PD",
      date: "2024-11-15",
      readTime: "7 menit",
      views: 2100,
      likes: 145,
      tags: ["Hipertensi", "Kesehatan", "Pencegahan"]
    },
    {
      id: 6,
      title: "Donor Darah Rutin: Manfaat untuk Pendonor dan Penerima",
      category: "Berita",
      excerpt: "RSUD dr.Iskak mengadakan donor darah rutin setiap bulan. Ketahui manfaat donor darah untuk kesehatan Anda.",
      content: `RSUD dr.Iskak Tulungagung secara rutin mengadakan kegiatan donor darah setiap bulan untuk membantu pasien yang membutuhkan transfusi darah.

Manfaat Donor Darah untuk Pendonor:

1. Menjaga Kesehatan Jantung
Donor darah dapat mengurangi kelebihan zat besi dalam darah yang dapat meningkatkan risiko penyakit jantung.

2. Membakar Kalori
Setiap kali donor darah, tubuh membakar sekitar 650 kalori.

3. Deteksi Dini Penyakit
Sebelum donor darah, dilakukan pemeriksaan kesehatan lengkap termasuk tes darah.

4. Meningkatkan Produksi Sel Darah Merah
Tubuh akan memproduksi sel darah merah baru setelah donor darah.

5. Memberikan Kepuasan Psikologis
Membantu menyelamatkan nyawa orang lain memberikan kepuasan tersendiri.

Syarat Donor Darah:
- Usia 17-60 tahun
- Berat badan minimal 45 kg
- Tekanan darah normal
- Tidak sedang sakit
- Tidak hamil atau menyusui

Jadwal Donor Darah RSUD dr.Iskak:
Setiap Minggu ke-2, Rabu, pukul 08:00-12:00 di Lobby Utama

Mari bergabung dalam kegiatan donor darah dan selamatkan nyawa!`,
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&h=600&fit=crop",
      author: "Tim Humas RSUD",
      date: "2024-11-10",
      readTime: "6 menit",
      views: 1450,
      likes: 87,
      tags: ["Donor Darah", "Berita", "Kesehatan"]
    },
    {
      id: 7,
      title: "Panduan Lengkap Persiapan Medical Check Up",
      category: "Tips Kesehatan",
      excerpt: "Medical check up adalah investasi kesehatan penting. Ketahui persiapan yang perlu dilakukan sebelum medical check up.",
      content: `Medical check up adalah pemeriksaan kesehatan menyeluruh untuk mendeteksi penyakit sejak dini. Berikut panduan persiapan medical check up:

Sebelum Medical Check Up:

1. Puasa 8-12 Jam
Untuk pemeriksaan gula darah puasa dan kolesterol, Anda perlu berpuasa 8-12 jam sebelumnya.

2. Hindari Alkohol dan Kafein
Hindari konsumsi alkohol 24 jam dan kafein 12 jam sebelum pemeriksaan.

3. Istirahat Cukup
Tidur yang cukup malam sebelumnya untuk hasil pemeriksaan yang akurat.

4. Bawa Riwayat Medis
Bawa catatan riwayat penyakit dan obat-obatan yang dikonsumsi.

5. Kenakan Pakaian Nyaman
Gunakan pakaian yang nyaman dan mudah untuk pemeriksaan fisik.

Jenis Pemeriksaan dalam Medical Check Up:

1. Pemeriksaan Fisik
Tekanan darah, denyut nadi, tinggi dan berat badan.

2. Pemeriksaan Laboratorium
Darah lengkap, gula darah, kolesterol, fungsi hati dan ginjal.

3. Pemeriksaan Penunjang
EKG, rontgen thorax, USG abdomen.

4. Konsultasi Dokter
Diskusi hasil pemeriksaan dengan dokter.

Paket Medical Check Up di RSUD dr.Iskak:
- Paket Basic: Rp 500.000
- Paket Silver: Rp 1.000.000
- Paket Gold: Rp 2.000.000
- Paket Executive: Rp 3.500.000

Hubungi (0355) 320119 untuk informasi dan pendaftaran.`,
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800&h=600&fit=crop",
      author: "Tim Medis RSUD",
      date: "2024-11-05",
      readTime: "8 menit",
      views: 1780,
      likes: 102,
      tags: ["Medical Check Up", "Tips", "Kesehatan"]
    },
    {
      id: 8,
      title: "Kesehatan Mental Sama Pentingnya dengan Kesehatan Fisik",
      category: "Kesehatan Mental",
      excerpt: "Kesehatan mental sering diabaikan padahal sangat penting. Pelajari cara menjaga kesehatan mental di tengah tekanan hidup.",
      content: `Kesehatan mental adalah aspek penting dari kesehatan secara keseluruhan yang sering diabaikan. Di tengah tekanan hidup modern, menjaga kesehatan mental sama pentingnya dengan kesehatan fisik.

Tanda-tanda Masalah Kesehatan Mental:

1. Perubahan Mood Ekstrem
Perubahan suasana hati yang drastis dan tidak wajar.

2. Kesulitan Tidur
Insomnia atau tidur berlebihan.

3. Menarik Diri dari Sosial
Menghindari interaksi dengan orang lain.

4. Perubahan Nafsu Makan
Makan terlalu banyak atau kehilangan nafsu makan.

5. Kesulitan Konsentrasi
Sulit fokus dan mengambil keputusan.

Cara Menjaga Kesehatan Mental:

1. Olahraga Teratur
Aktivitas fisik melepaskan endorfin yang meningkatkan mood.

2. Pola Tidur Teratur
Tidur 7-8 jam setiap malam sangat penting.

3. Praktikkan Mindfulness
Meditasi dan teknik pernapasan dapat mengurangi stress.

4. Jaga Hubungan Sosial
Terhubung dengan keluarga dan teman memberikan dukungan emosional.

5. Hobi dan Aktivitas Menyenangkan
Luangkan waktu untuk hal-hal yang Anda sukai.

6. Konsultasi Profesional
Jangan ragu mencari bantuan profesional jika diperlukan.

RSUD dr.Iskak menyediakan layanan konsultasi kesehatan mental dengan psikolog dan psikiater berpengalaman. Jadwal praktek: Senin-Jumat, 09:00-15:00.`,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      author: "Dr. Lina Kartika, Sp.KJ",
      date: "2024-11-01",
      readTime: "7 menit",
      views: 1920,
      likes: 134,
      tags: ["Kesehatan Mental", "Psikologi", "Well-being"]
    }
  ];

  const categories = ["Semua", ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    const matchSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1378fd] via-[#2f8afd] to-[#b6d5fe] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-32 w-40 h-40 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="text-center text-white px-4 sm:px-8 z-10">
          <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl">Blog & Berita Kesehatan</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Informasi Kesehatan Terkini dan Berita Rumah Sakit
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Search & Filter */}
        <div className="bg-gradient-to-r from-[#e1ecfb] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl mb-6 sm:mb-8 lg:mb-10">
          {/* Search */}
          <div className="mb-4 sm:mb-6">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#1378fd] w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Cari artikel atau berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none font-['Alkatra:Regular',sans-serif] text-[#425166] transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
              Kategori
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-['Alkatra:Regular',sans-serif] transition-all duration-300 text-xs sm:text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#1378fd] to-[#2f8afd] text-white shadow-lg scale-105'
                      : 'bg-white text-[#1378fd] border-2 border-[#b6d5fe] hover:border-[#1378fd] hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Count */}
        <div className="mb-6 sm:mb-8 text-center">
          <p className="font-['Alkatra:SemiBold',sans-serif] text-[#425166] text-sm sm:text-base lg:text-lg">
            Menampilkan <span className="text-[#1378fd] text-lg sm:text-xl lg:text-2xl">{filteredArticles.length}</span> artikel
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl sm:rounded-2xl border-2 border-[#e1ecfb] hover:border-[#1378fd] hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="inline-block bg-[#1378fd] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-['Alkatra:SemiBold',sans-serif]">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-2 sm:mb-3 text-base sm:text-lg line-clamp-2 group-hover:text-[#2f8afd]">
                  {article.title}
                </h3>
                
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#425166] mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-['Alkatra:Regular',sans-serif]">
                      {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-['Alkatra:Regular',sans-serif]">{article.readTime}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#e1ecfb]">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 text-[#425166]">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-['Alkatra:Regular',sans-serif]">{article.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-['Alkatra:Regular',sans-serif]">{article.likes}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 sm:gap-2 text-[#1378fd] font-['Alkatra:SemiBold',sans-serif] group-hover:gap-3 transition-all text-xs sm:text-sm">
                    Baca <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => onNavigate?.('home')}
            className="bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-xl transition-all flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Kembali ke Beranda
          </button>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-56 sm:h-72 lg:h-96 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Title and Category */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <span className="inline-block bg-[#1378fd] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-['Alkatra:SemiBold',sans-serif] mb-3">
                  {selectedArticle.category}
                </span>
                <h2 className="font-['Alkatra:Bold',sans-serif] text-white text-xl sm:text-2xl lg:text-3xl">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8 max-h-[60vh] overflow-y-auto">
              {/* Author and Meta */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-[#e1ecfb]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd]" />
                  <span className="font-['Alkatra:SemiBold',sans-serif] text-[#425166] text-xs sm:text-sm">
                    {selectedArticle.author}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd]" />
                  <span className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                    {new Date(selectedArticle.date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#1378fd]" />
                  <span className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-sm sm:prose-base max-w-none mb-6 sm:mb-8">
                <div className="font-['Alkatra:Regular',sans-serif] text-[#425166] whitespace-pre-line text-sm sm:text-base leading-relaxed">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 text-sm sm:text-base">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-[#e1ecfb] text-[#1378fd] px-3 py-1 rounded-full text-xs sm:text-sm font-['Alkatra:Regular',sans-serif]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-red-50 text-red-500 border-2 border-red-200 px-4 py-2 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-red-100 transition-all text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  {selectedArticle.likes} Suka
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-blue-50 text-[#1378fd] border-2 border-blue-200 px-4 py-2 sm:py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-blue-100 transition-all text-sm sm:text-base">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Bagikan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
