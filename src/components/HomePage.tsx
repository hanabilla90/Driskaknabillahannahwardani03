import { useState, useEffect, useRef } from "react";
import WebsiteDrIskakTulungagung from "../imports/WebsiteDrIskakTulungagung";
import DoctorScheduleModal from "./DoctorScheduleModal";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

interface DoctorData {
  name: string;
  specialty: string;
  schedule: { day: string; time: string; room: string }[];
  phone: string;
  email: string;
}

// Data dokter yang ditampilkan di homepage (berdasarkan urutan gambar dokter)
const homeDoctors: DoctorData[] = [
  {
    name: "Dr. Ahmad Hidayat, Sp.JP",
    specialty: "Spesialis Jantung & Pembuluh Darah",
    phone: "(0355) 320119 ext. 101",
    email: "ahmad.hidayat@rsudiskak.com",
    schedule: [
      { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
      { day: "Rabu", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
      { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" }
    ]
  },
  {
    name: "Dr. Siti Nurhaliza, Sp.A",
    specialty: "Spesialis Anak",
    phone: "(0355) 320119 ext. 102",
    email: "siti.nurhaliza@rsudiskak.com",
    schedule: [
      { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
      { day: "Selasa", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" },
      { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
      { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" }
    ]
  },
  {
    name: "Dr. Budi Santoso, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    phone: "(0355) 320119 ext. 103",
    email: "budi.santoso@rsudiskak.com",
    schedule: [
      { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
      { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
      { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Penyakit Dalam Lt.2" }
    ]
  },
  {
    name: "Dr. Rina Wijayanti, Sp.M",
    specialty: "Spesialis Mata",
    phone: "(0355) 320119 ext. 104",
    email: "rina.wijayanti@rsudiskak.com",
    schedule: [
      { day: "Senin", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
      { day: "Rabu", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
      { day: "Jumat", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" }
    ]
  }
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add click listeners to all "Lihat Jadwal" buttons after component mounts
    const addClickListeners = () => {
      if (!containerRef.current) return;

      const allElements = containerRef.current.querySelectorAll('*');
      let scheduleButtonCount = 0;

      allElements.forEach((element) => {
        const textContent = element.textContent?.trim();
        
        // Find "Lihat Jadwal" buttons
        if (textContent === 'Lihat Jadwal') {
          const button = element.closest('div[class*="gap"]');
          if (button && !button.hasAttribute('data-schedule-listener')) {
            button.setAttribute('data-schedule-listener', 'true');
            button.setAttribute('data-doctor-index', scheduleButtonCount.toString());
            
            const doctorIndex = scheduleButtonCount;
            button.addEventListener('click', (e) => {
              e.stopPropagation();
              console.log('Clicked Lihat Jadwal button #', doctorIndex + 1);
              if (homeDoctors[doctorIndex]) {
                console.log('Opening modal for:', homeDoctors[doctorIndex].name);
                setSelectedDoctor(homeDoctors[doctorIndex]);
                setModalOpen(true);
              }
            });
            
            // Make it look clickable with better styling
            const buttonElement = button as HTMLElement;
            buttonElement.style.cursor = 'pointer';
            buttonElement.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            
            // Add hover effect
            buttonElement.addEventListener('mouseenter', () => {
              buttonElement.style.transform = 'scale(1.05)';
              buttonElement.style.boxShadow = '0 4px 12px rgba(19, 120, 253, 0.3)';
            });
            
            buttonElement.addEventListener('mouseleave', () => {
              buttonElement.style.transform = 'scale(1)';
              buttonElement.style.boxShadow = 'none';
            });
            
            scheduleButtonCount++;
          }
        }
      });
      
      console.log(`✅ Found ${scheduleButtonCount} "Lihat Jadwal" buttons`);
      console.log('📋 Available doctors:', homeDoctors.map((d, i) => `${i + 1}. ${d.name}`));
    };

    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(addClickListeners, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const textContent = target.textContent?.trim();
    
    // Map navbar text to page IDs
    if (textContent === 'Profile') {
      onNavigate('profile');
    } else if (textContent === 'Janji Temu Dokter') {
      onNavigate('janji-temu');
    } else if (textContent === 'Patient Care') {
      onNavigate('patient-care');
    } else if (textContent === 'Layanan Kesehatan') {
      onNavigate('layanan');
    } else if (textContent === 'Kabar Terbaru') {
      onNavigate('kabar');
    } else if (textContent === 'Survey Kepuasan') {
      onNavigate('survey');
    } else if (textContent === 'View All') {
      onNavigate('semua-klinik');
    } else if (textContent === 'Start Now Your Consultant Your Health') {
      onNavigate('konsultasi-online');
    } else if (textContent === "View Our Doctor's") {
      onNavigate('all-doctors');
    } else if (textContent === 'Semua Dokter') {
      onNavigate('semua-dokter');
    } else if (textContent === 'Fasilitas Umum') {
      onNavigate('fasilitas-umum');
    } else if (textContent === 'Search News') {
      onNavigate('blog-news');
    } else if (textContent === 'Online Register') {
      onNavigate('online-register');
    } else if (textContent === 'View Our Blog') {
      onNavigate('blog-news');
    }
  };

  return (
    <>
      <div 
        ref={containerRef}
        onClick={handleClick}
        className="cursor-auto"
      >
        <WebsiteDrIskakTulungagung />
      </div>

      {/* Doctor Schedule Modal */}
      {selectedDoctor && (
        <DoctorScheduleModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedDoctor(null);
          }}
          doctorName={selectedDoctor.name}
          specialty={selectedDoctor.specialty}
          schedule={selectedDoctor.schedule}
          phone={selectedDoctor.phone}
          email={selectedDoctor.email}
          onBookAppointment={() => onNavigate('janji-temu')}
        />
      )}
    </>
  );
}