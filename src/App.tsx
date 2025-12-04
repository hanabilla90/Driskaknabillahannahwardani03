import { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import JanjiTemuPage from "./components/JanjiTemuPage";
import PatientCarePage from "./components/PatientCarePage";
import LayananKesehatanPage from "./components/LayananKesehatanPage";
import KabarTerbaruPage from "./components/KabarTerbaruPage";
import SurveyPage from "./components/SurveyPage";
import SemuaKlinikPage from "./components/SemuaKlinikPage";
import KonsultasiOnlinePage from "./components/KonsultasiOnlinePage";
import SemuaDokterPage from "./components/SemuaDokterPage";
import DaftarDokterPage from "./components/DaftarDokterPage";
import AllDoctorsPage from "./components/AllDoctorsPage";
import FasilitasUmumPage from "./components/FasilitasUmumPage";
import OnlineRegisterPage from "./components/OnlineRegisterPage";
import BlogNewsPage from "./components/BlogNewsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'janji-temu':
        return <JanjiTemuPage onNavigate={handleNavigate} />;
      case 'patient-care':
        return <PatientCarePage onNavigate={handleNavigate} />;
      case 'layanan':
        return <LayananKesehatanPage onNavigate={handleNavigate} />;
      case 'kabar':
        return <KabarTerbaruPage onNavigate={handleNavigate} />;
      case 'survey':
        return <SurveyPage onNavigate={handleNavigate} />;
      case 'semua-klinik':
        return <SemuaKlinikPage onNavigate={handleNavigate} />;
      case 'konsultasi-online':
        return <KonsultasiOnlinePage onNavigate={handleNavigate} />;
      case 'semua-dokter':
        return <SemuaDokterPage onNavigate={handleNavigate} />;
      case 'daftar-dokter':
        return <DaftarDokterPage onNavigate={handleNavigate} />;
      case 'all-doctors':
        return <AllDoctorsPage onNavigate={handleNavigate} />;
      case 'fasilitas-umum':
        return <FasilitasUmumPage onNavigate={handleNavigate} />;
      case 'online-register':
        return <OnlineRegisterPage onNavigate={handleNavigate} />;
      case 'blog-news':
        return <BlogNewsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-[1280px] relative">
        {currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} />
        ) : (
          <>
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <div className="pt-[276px]">
              {renderPage()}
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}