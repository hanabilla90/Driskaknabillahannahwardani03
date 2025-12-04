import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Users, Award, Heart, Home } from "lucide-react";

interface ProfilePageProps {
  onNavigate?: (page: string) => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="font-['Alkatra:Bold',sans-serif] mb-6">Profile RSUD dr.Iskak</h1>
          <p className="font-['Alkatra:Regular',sans-serif] max-w-2xl mx-auto">
            Rumah Sakit Umum Daerah dr.Iskak Tulungagung adalah rumah sakit rujukan tipe B yang berkomitmen memberikan pelayanan kesehatan terbaik untuk masyarakat Tulungagung dan sekitarnya.
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

      {/* Visi & Misi */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#e1ecfb] p-8 rounded-3xl shadow-lg">
            <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Visi</h2>
            <p className="font-['Alkatra:Regular',sans-serif] text-black">
              Terwujudnya rumah sakit rujukan dan pendidikan yang handal dan terjangkau dalam pelayanan
            </p>
          </div>
          <div className="bg-[#e1ecfb] p-8 rounded-3xl shadow-lg">
            <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Misi</h2>
            <ul className="font-['Alkatra:Regular',sans-serif] text-black space-y-2">
              <li>• Meningkatkan mutu dan akses pelayanan kesehatan</li>
              <li>• Menyelenggarakan pendidikan dan penelitian yang bermutu dibidang kesehatan dan kedokteran</li>
              <li>• Mewujudkan manajemen rumah sakit yang akuntabel</li>
            </ul>
          </div>
        </div>

        {/* Nilai-nilai */}
        <div className="mb-16">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] text-center mb-8">Nilai-nilai Kami</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-[#b6d5fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#1378fd]" />
              </div>
              <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-2">Compassion</h3>
              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Peduli dengan kasih sayang</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-[#b6d5fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#1378fd]" />
              </div>
              <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-2">Excellence</h3>
              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Keunggulan dalam layanan</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-[#b6d5fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1378fd]" />
              </div>
              <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-2">Teamwork</h3>
              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Kolaborasi tim solid</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-[#b6d5fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#1378fd]" />
              </div>
              <h3 className="font-['Alkatra:SemiBold',sans-serif] mb-2">Integrity</h3>
              <p className="font-['Alkatra:Regular',sans-serif] text-[#425166]">Integritas terpercaya</p>
            </div>
          </div>
        </div>

        {/* Sejarah Singkat */}
        <div className="bg-gradient-to-br from-[#e1ecfb] to-white p-8 rounded-3xl shadow-lg">
          <h2 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-4">Sejarah Singkat</h2>
          <p className="font-['Alkatra:Regular',sans-serif] text-black mb-4">
            RSUD dr.Iskak Tulungagung didirikan pada tahun 1920 dengan nama Algemeen Ziekenhuis. Nama dr.Iskak diambil dari nama pahlawan nasional yang berasal dari Tulungagung, yaitu dr.Iskak Tjokroadisurjo.
          </p>
          <p className="font-['Alkatra:Regular',sans-serif] text-black">
            Kini RSUD dr.Iskak telah berkembang menjadi rumah sakit rujukan dengan kapasitas 1500 pasien, dilengkapi dengan 41 dokter spesialis dan 20 ruang survey yang modern.
          </p>
        </div>
      </div>
    </div>
  );
}
