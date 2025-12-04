import { useState, useEffect } from "react";
import { Home, Calendar, Clock, ChevronDown, ChevronUp, Stethoscope, Users, Search, Phone, MapPin, Award, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PageTransition from "./PageTransition";

interface AllDoctorsPageProps {
  onNavigate?: (page: string) => void;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  schedule: {
    day: string;
    time: string;
    room: string;
  }[];
  phone: string;
  description?: string;
  rating?: number;
  patients?: number;
}

export default function AllDoctorsPage({ onNavigate }: AllDoctorsPageProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("Semua");
  const [expandedDoctor, setExpandedDoctor] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const toggleSchedule = (doctorId: number) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId);
  };

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ahmad Hidayat, Sp.JP",
      specialty: "Spesialis Jantung & Pembuluh Darah",
      phone: "(0355) 320119 ext. 101",
      description: "Ahli dalam penanganan penyakit jantung koroner dan gagal jantung",
      rating: 4.9,
      patients: 1250,
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Rabu", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik Jantung Lt.2" }
      ]
    },
    {
      id: 2,
      name: "Dr. Siti Nurhaliza, Sp.A",
      specialty: "Spesialis Anak",
      phone: "(0355) 320119 ext. 102",
      description: "Spesialis kesehatan anak dan imunisasi",
      rating: 4.8,
      patients: 980,
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
        { day: "Selasa", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik Anak Lt.1" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" }
      ]
    },
    {
      id: 3,
      name: "Dr. Budi Santoso, Sp.PD",
      specialty: "Spesialis Penyakit Dalam",
      phone: "(0355) 320119 ext. 103",
      description: "Menangani berbagai penyakit dalam dan metabolik",
      rating: 4.9,
      patients: 1450,
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Penyakit Dalam Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Penyakit Dalam Lt.2" }
      ]
    },
    {
      id: 4,
      name: "Dr. Rina Wijayanti, Sp.M",
      specialty: "Spesialis Mata",
      phone: "(0355) 320119 ext. 104",
      description: "Ahli dalam bedah katarak dan kelainan refraksi",
      rating: 4.7,
      patients: 890,
      schedule: [
        { day: "Senin", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
        { day: "Rabu", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" },
        { day: "Jumat", time: "08:00 - 13:00", room: "Poliklinik Mata Lt.1" }
      ]
    },
    {
      id: 5,
      name: "Dr. Hendra Gunawan, Sp.OG",
      specialty: "Spesialis Kandungan",
      phone: "(0355) 320119 ext. 105",
      description: "Spesialis kehamilan dan persalinan",
      rating: 4.8,
      patients: 1100,
      schedule: [
        { day: "Senin", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" },
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" },
        { day: "Jumat", time: "14:00 - 18:00", room: "Poliklinik Kandungan Lt.2" }
      ]
    },
    {
      id: 6,
      name: "Dr. Maya Puspita, Sp.KK",
      specialty: "Spesialis Kulit & Kelamin",
      phone: "(0355) 320119 ext. 106",
      description: "Menangani penyakit kulit dan kecantikan",
      rating: 4.6,
      patients: 750,
      schedule: [
        { day: "Selasa", time: "09:00 - 15:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Kamis", time: "09:00 - 15:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Poliklinik Kulit Lt.1" }
      ]
    },
    {
      id: 7,
      name: "Dr. Fajar Raharjo, Sp.THT-KL",
      specialty: "Spesialis THT",
      phone: "(0355) 320119 ext. 107",
      description: "Ahli penyakit telinga, hidung, dan tenggorokan",
      rating: 4.7,
      patients: 820,
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik THT Lt.2" },
        { day: "Jumat", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" }
      ]
    },
    {
      id: 8,
      name: "Dr. Dewi Lestari, Sp.S",
      specialty: "Spesialis Saraf",
      phone: "(0355) 320119 ext. 108",
      description: "Menangani gangguan sistem saraf pusat dan perifer",
      rating: 4.9,
      patients: 1340,
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Saraf Lt.2" }
      ]
    },
    {
      id: 9,
      name: "Dr. Agus Prasetyo, Sp.B",
      specialty: "Spesialis Bedah Umum",
      phone: "(0355) 320119 ext. 109",
      description: "Ahli bedah umum dan laparoskopi",
      rating: 4.8,
      patients: 1200,
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Bedah Lt.3" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik Bedah Lt.3" },
        { day: "Jumat", time: "13:00 - 17:00", room: "Poliklinik Bedah Lt.3" }
      ]
    },
    {
      id: 10,
      name: "Dr. Lina Kartika, Sp.KJ",
      specialty: "Spesialis Kedokteran Jiwa",
      phone: "(0355) 320119 ext. 110",
      description: "Menangani kesehatan mental dan psikiatri",
      rating: 4.7,
      patients: 680,
      schedule: [
        { day: "Selasa", time: "14:00 - 18:00", room: "Poliklinik Jiwa Lt.1" },
        { day: "Kamis", time: "14:00 - 18:00", room: "Poliklinik Jiwa Lt.1" },
        { day: "Sabtu", time: "10:00 - 14:00", room: "Poliklinik Jiwa Lt.1" }
      ]
    },
    {
      id: 11,
      name: "Dr. Rizki Firmansyah, Sp.U",
      specialty: "Spesialis Urologi",
      phone: "(0355) 320119 ext. 111",
      description: "Ahli penyakit saluran kemih dan reproduksi pria",
      rating: 4.6,
      patients: 590,
      schedule: [
        { day: "Senin", time: "09:00 - 13:00", room: "Poliklinik Urologi Lt.2" },
        { day: "Kamis", time: "09:00 - 13:00", room: "Poliklinik Urologi Lt.2" }
      ]
    },
    {
      id: 12,
      name: "Dr. Anita Sari, Sp.An",
      specialty: "Spesialis Anestesi",
      phone: "(0355) 320119 ext. 112",
      description: "Ahli pembiusan dan perawatan intensif",
      rating: 4.9,
      patients: 1500,
      schedule: [
        { day: "Setiap Hari", time: "On-Call 24 Jam", room: "Kamar Operasi" }
      ]
    },
    {
      id: 13,
      name: "Dr. Bambang Wijaya, Sp.OT",
      specialty: "Spesialis Orthopedi",
      phone: "(0355) 320119 ext. 113",
      description: "Menangani kelainan tulang dan sendi",
      rating: 4.8,
      patients: 1150,
      schedule: [
        { day: "Senin", time: "10:00 - 14:00", room: "Poliklinik Orthopedi Lt.3" },
        { day: "Rabu", time: "10:00 - 14:00", room: "Poliklinik Orthopedi Lt.3" },
        { day: "Jumat", time: "10:00 - 14:00", room: "Poliklinik Orthopedi Lt.3" }
      ]
    },
    {
      id: 14,
      name: "Dr. Citra Dewi, Sp.PA",
      specialty: "Spesialis Patologi Anatomi",
      phone: "(0355) 320119 ext. 114",
      description: "Ahli diagnosis penyakit melalui jaringan",
      rating: 4.7,
      patients: 450,
      schedule: [
        { day: "Senin - Jumat", time: "08:00 - 16:00", room: "Lab Patologi" }
      ]
    },
    {
      id: 15,
      name: "Dr. Dimas Prasetya, Sp.PK",
      specialty: "Spesialis Patologi Klinik",
      phone: "(0355) 320119 ext. 115",
      description: "Ahli diagnosis laboratorium klinik",
      rating: 4.6,
      patients: 520,
      schedule: [
        { day: "Senin - Sabtu", time: "07:00 - 15:00", room: "Lab Klinik" }
      ]
    },
    {
      id: 16,
      name: "Dr. Eka Putri, Sp.Rad",
      specialty: "Spesialis Radiologi",
      phone: "(0355) 320119 ext. 116",
      description: "Ahli pencitraan medis dan radiologi",
      rating: 4.8,
      patients: 1300,
      schedule: [
        { day: "Senin - Sabtu", time: "08:00 - 16:00", room: "Instalasi Radiologi" }
      ]
    },
    {
      id: 17,
      name: "Dr. Faisal Rahman, Sp.RM",
      specialty: "Spesialis Rehabilitasi Medik",
      phone: "(0355) 320119 ext. 117",
      description: "Ahli rehabilitasi dan fisioterapi",
      rating: 4.7,
      patients: 780,
      schedule: [
        { day: "Selasa", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" },
        { day: "Kamis", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Unit Rehabilitasi Medik" }
      ]
    },
    {
      id: 18,
      name: "Dr. Gita Maharani, Sp.GK",
      specialty: "Spesialis Gizi Klinik",
      phone: "(0355) 320119 ext. 118",
      description: "Ahli nutrisi dan diet medis",
      rating: 4.6,
      patients: 650,
      schedule: [
        { day: "Senin", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" },
        { day: "Rabu", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" }
      ]
    },
    {
      id: 19,
      name: "Dr. Hadi Susanto, Sp.BS",
      specialty: "Spesialis Bedah Saraf",
      phone: "(0355) 320119 ext. 119",
      description: "Ahli bedah otak dan tulang belakang",
      rating: 4.9,
      patients: 920,
      schedule: [
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Bedah Saraf Lt.3" },
        { day: "Jumat", time: "14:00 - 18:00", room: "Poliklinik Bedah Saraf Lt.3" }
      ]
    },
    {
      id: 20,
      name: "Dr. Indah Permata, Sp.KFR",
      specialty: "Spesialis Kedokteran Fisik & Rehabilitasi",
      phone: "(0355) 320119 ext. 120",
      description: "Menangani gangguan gerak dan fungsi tubuh",
      rating: 4.7,
      patients: 710,
      schedule: [
        { day: "Senin", time: "10:00 - 16:00", room: "Poliklinik KFR Lt.1" },
        { day: "Kamis", time: "10:00 - 16:00", room: "Poliklinik KFR Lt.1" }
      ]
    },
    {
      id: 21,
      name: "Dr. Joko Widodo, Sp.P",
      specialty: "Spesialis Paru",
      phone: "(0355) 320119 ext. 121",
      description: "Ahli penyakit pernapasan dan paru-paru",
      rating: 4.8,
      patients: 1050,
      schedule: [
        { day: "Selasa", time: "08:00 - 12:00", room: "Poliklinik Paru Lt.2" },
        { day: "Kamis", time: "08:00 - 12:00", room: "Poliklinik Paru Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Paru Lt.2" }
      ]
    },
    {
      id: 22,
      name: "Dr. Kartika Sari, Sp.PD-KGEH",
      specialty: "Spesialis Penyakit Dalam Gastroenterologi",
      phone: "(0355) 320119 ext. 122",
      description: "Ahli penyakit pencernaan dan hati",
      rating: 4.9,
      patients: 1180,
      schedule: [
        { day: "Senin", time: "14:00 - 17:00", room: "Poliklinik Gastro Lt.2" },
        { day: "Rabu", time: "14:00 - 17:00", room: "Poliklinik Gastro Lt.2" }
      ]
    },
    {
      id: 23,
      name: "Dr. Lukman Hakim, Sp.BP-RE",
      specialty: "Spesialis Bedah Plastik",
      phone: "(0355) 320119 ext. 123",
      description: "Ahli bedah rekonstruksi dan estetika",
      rating: 4.7,
      patients: 630,
      schedule: [
        { day: "Selasa", time: "10:00 - 14:00", room: "Poliklinik Bedah Plastik Lt.3" },
        { day: "Jumat", time: "10:00 - 14:00", room: "Poliklinik Bedah Plastik Lt.3" }
      ]
    },
    {
      id: 24,
      name: "Dr. Mega Wulandari, Sp.KGA",
      specialty: "Spesialis Kedokteran Gigi Anak",
      phone: "(0355) 320119 ext. 124",
      description: "Spesialis kesehatan gigi anak",
      rating: 4.8,
      patients: 890,
      schedule: [
        { day: "Senin", time: "09:00 - 15:00", room: "Poliklinik Gigi Anak Lt.1" },
        { day: "Rabu", time: "09:00 - 15:00", room: "Poliklinik Gigi Anak Lt.1" },
        { day: "Jumat", time: "09:00 - 15:00", room: "Poliklinik Gigi Anak Lt.1" }
      ]
    },
    {
      id: 25,
      name: "Dr. Nanda Pratama, Sp.PD-KR",
      specialty: "Spesialis Penyakit Dalam Ginjal",
      phone: "(0355) 320119 ext. 125",
      description: "Ahli penyakit ginjal dan hipertensi",
      rating: 4.9,
      patients: 1270,
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Ginjal Lt.2" },
        { day: "Kamis", time: "08:00 - 12:00", room: "Poliklinik Ginjal Lt.2" }
      ]
    },
    {
      id: 26,
      name: "Dr. Olivia Susanti, Sp.DV",
      specialty: "Spesialis Dermatologi & Venereologi",
      phone: "(0355) 320119 ext. 126",
      description: "Ahli penyakit kulit dan kelamin",
      rating: 4.7,
      patients: 810,
      schedule: [
        { day: "Selasa", time: "10:00 - 16:00", room: "Poliklinik Kulit Lt.1" },
        { day: "Jumat", time: "10:00 - 16:00", room: "Poliklinik Kulit Lt.1" }
      ]
    },
    {
      id: 27,
      name: "Dr. Panji Wibowo, Sp.B-KBD",
      specialty: "Spesialis Bedah Digestif",
      phone: "(0355) 320119 ext. 127",
      description: "Ahli bedah saluran pencernaan",
      rating: 4.8,
      patients: 740,
      schedule: [
        { day: "Rabu", time: "09:00 - 13:00", room: "Poliklinik Bedah Digestif Lt.3" },
        { day: "Sabtu", time: "09:00 - 13:00", room: "Poliklinik Bedah Digestif Lt.3" }
      ]
    },
    {
      id: 28,
      name: "Dr. Qonita Rahma, Sp.EM",
      specialty: "Spesialis Kedokteran Emergency",
      phone: "(0355) 320119 ext. 128",
      description: "Ahli penanganan kegawatdaruratan",
      rating: 4.9,
      patients: 1600,
      schedule: [
        { day: "Setiap Hari", time: "On-Call 24 Jam", room: "IGD" }
      ]
    },
    {
      id: 29,
      name: "Dr. Raden Surya, Sp.N",
      specialty: "Spesialis Neurologi",
      phone: "(0355) 320119 ext. 129",
      description: "Ahli penyakit saraf dan stroke",
      rating: 4.8,
      patients: 1320,
      schedule: [
        { day: "Senin", time: "13:00 - 17:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Rabu", time: "13:00 - 17:00", room: "Poliklinik Saraf Lt.2" },
        { day: "Jumat", time: "13:00 - 17:00", room: "Poliklinik Saraf Lt.2" }
      ]
    },
    {
      id: 30,
      name: "Dr. Sari Indah, Sp.GK",
      specialty: "Spesialis Gizi Klinik",
      phone: "(0355) 320119 ext. 130",
      description: "Konsultan nutrisi dan metabolisme",
      rating: 4.6,
      patients: 570,
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Gizi Lt.1" }
      ]
    },
    {
      id: 31,
      name: "Dr. Taufik Hidayat, Sp.OG-KFER",
      specialty: "Spesialis Kandungan Fertilitas",
      phone: "(0355) 320119 ext. 131",
      description: "Ahli kesuburan dan program hamil",
      rating: 4.9,
      patients: 950,
      schedule: [
        { day: "Senin", time: "14:00 - 18:00", room: "Poliklinik Fertilitas Lt.2" },
        { day: "Rabu", time: "14:00 - 18:00", room: "Poliklinik Fertilitas Lt.2" }
      ]
    },
    {
      id: 32,
      name: "Dr. Umi Kalsum, Sp.PK",
      specialty: "Spesialis Patologi Klinik",
      phone: "(0355) 320119 ext. 132",
      description: "Ahli diagnosis laboratorium medis",
      rating: 4.7,
      patients: 490,
      schedule: [
        { day: "Senin - Sabtu", time: "07:00 - 15:00", room: "Lab Klinik" }
      ]
    },
    {
      id: 33,
      name: "Dr. Vino Adriansyah, Sp.M",
      specialty: "Spesialis Mata",
      phone: "(0355) 320119 ext. 133",
      description: "Ahli bedah refraktif dan retina",
      rating: 4.8,
      patients: 1020,
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Mata Lt.1" },
        { day: "Kamis", time: "08:00 - 14:00", room: "Poliklinik Mata Lt.1" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik Mata Lt.1" }
      ]
    },
    {
      id: 34,
      name: "Dr. Winda Permata, Sp.A-K",
      specialty: "Spesialis Anak Konsultan",
      phone: "(0355) 320119 ext. 134",
      description: "Konsultan tumbuh kembang anak",
      rating: 4.9,
      patients: 1100,
      schedule: [
        { day: "Senin", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" },
        { day: "Rabu", time: "08:00 - 12:00", room: "Poliklinik Anak Lt.1" }
      ]
    },
    {
      id: 35,
      name: "Dr. Yoga Aditya, Sp.JP-FIHA",
      specialty: "Spesialis Jantung Konsultan",
      phone: "(0355) 320119 ext. 135",
      description: "Konsultan kardiologi intervensi",
      rating: 4.9,
      patients: 1380,
      schedule: [
        { day: "Selasa", time: "13:00 - 17:00", room: "Poliklinik Jantung Lt.2" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik Jantung Lt.2" }
      ]
    },
    {
      id: 36,
      name: "Dr. Zahra Amalia, Sp.THT-KL",
      specialty: "Spesialis THT",
      phone: "(0355) 320119 ext. 136",
      description: "Ahli gangguan pendengaran dan vertigo",
      rating: 4.7,
      patients: 860,
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik THT Lt.2" },
        { day: "Kamis", time: "13:00 - 17:00", room: "Poliklinik THT Lt.2" },
        { day: "Sabtu", time: "08:00 - 12:00", room: "Poliklinik THT Lt.2" }
      ]
    },
    {
      id: 37,
      name: "Dr. Arief Budiman, Sp.B-KV",
      specialty: "Spesialis Bedah Vaskular",
      phone: "(0355) 320119 ext. 137",
      description: "Ahli bedah pembuluh darah",
      rating: 4.8,
      patients: 670,
      schedule: [
        { day: "Rabu", time: "10:00 - 14:00", room: "Poliklinik Bedah Vaskular Lt.3" },
        { day: "Jumat", time: "10:00 - 14:00", room: "Poliklinik Bedah Vaskular Lt.3" }
      ]
    },
    {
      id: 38,
      name: "Dr. Bella Safitri, Sp.KFR",
      specialty: "Spesialis Kedokteran Fisik & Rehabilitasi",
      phone: "(0355) 320119 ext. 138",
      description: "Ahli terapi fisik dan rehabilitasi",
      rating: 4.7,
      patients: 720,
      schedule: [
        { day: "Senin", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" },
        { day: "Rabu", time: "09:00 - 15:00", room: "Unit Rehabilitasi Medik" }
      ]
    },
    {
      id: 39,
      name: "Dr. Cahyo Nugroho, Sp.PD-KEMD",
      specialty: "Spesialis Penyakit Dalam Endokrin",
      phone: "(0355) 320119 ext. 139",
      description: "Ahli diabetes dan gangguan hormon",
      rating: 4.9,
      patients: 1240,
      schedule: [
        { day: "Selasa", time: "08:00 - 14:00", room: "Poliklinik Endokrin Lt.2" },
        { day: "Jumat", time: "08:00 - 14:00", room: "Poliklinik Endokrin Lt.2" }
      ]
    },
    {
      id: 40,
      name: "Dr. Dina Mariana, Sp.PK",
      specialty: "Spesialis Patologi Klinik",
      phone: "(0355) 320119 ext. 140",
      description: "Ahli pemeriksaan laboratorium",
      rating: 4.6,
      patients: 530,
      schedule: [
        { day: "Senin - Jumat", time: "08:00 - 16:00", room: "Lab Klinik" }
      ]
    }
  ];

  const specialties = ["Semua", ...Array.from(new Set(doctors.map(d => d.specialty)))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchSpecialty = selectedSpecialty === "Semua" || doctor.specialty === selectedSpecialty;
    const matchSearch = searchQuery === "" || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSpecialty && matchSearch;
  });

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Hero Section with Parallax Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[300px] sm:h-[350px] lg:h-[400px] bg-gradient-to-br from-[#1378fd] via-[#2f8afd] to-[#4a9bfd] flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 left-20 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-10 right-32 w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full blur-xl"
            />
          </div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-white px-4 sm:px-8 z-10 max-w-4xl"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex items-center justify-center gap-4 mb-4 sm:mb-6"
            >
              <Users className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              <Stethoscope className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            </motion.div>
            <h1 className="font-['Alkatra:Bold',sans-serif] mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg">
              Tim Dokter Spesialis Kami
            </h1>
            <p className="font-['Alkatra:Regular',sans-serif] text-base sm:text-lg lg:text-xl mb-2 opacity-95">
              40 Dokter Spesialis Berpengalaman Siap Melayani Anda
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.4 }}
              className="font-['Alkatra:Regular',sans-serif] text-sm sm:text-base lg:text-lg"
            >
              RSUD dr. Iskak Tulungagung - Melayani dengan Sepenuh Hati
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Search & Filter Section with Glass Morphism */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-morphism rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl mb-8 sm:mb-10 lg:mb-12 border-2 border-white"
          >
            {/* Search Bar */}
            <div className="mb-6 sm:mb-8">
              <motion.div 
                whileFocus={{ scale: 1.02 }}
                className="relative group"
              >
                <Search className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-[#1378fd] w-5 h-5 sm:w-6 sm:h-6 group-focus-within:scale-110 transition-transform" />
                <input
                  type="text"
                  placeholder="Cari nama dokter atau spesialisasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-4 sm:py-5 rounded-2xl border-2 border-[#b6d5fe] focus:border-[#1378fd] focus:outline-none focus:ring-4 focus:ring-[#b6d5fe]/30 font-['Alkatra:Regular',sans-serif] text-[#425166] transition-all text-sm sm:text-base shadow-lg"
                />
              </motion.div>
            </div>

            {/* Filter Buttons */}
            <div>
              <h3 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                Filter Berdasarkan Spesialisasi
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {specialties.map((specialty, index) => (
                  <motion.button
                    key={specialty}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-['Alkatra:Regular',sans-serif] transition-all duration-300 text-xs sm:text-sm shadow-md btn-ripple ${
                      selectedSpecialty === specialty
                        ? 'bg-gradient-to-r from-[#1378fd] to-[#2f8afd] text-white shadow-xl scale-105'
                        : 'bg-white text-[#1378fd] border-2 border-[#b6d5fe] hover:border-[#1378fd] hover:shadow-lg'
                    }`}
                  >
                    {specialty}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Doctor Count with Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 sm:mb-10 text-center"
          >
            <motion.p 
              className="font-['Alkatra:SemiBold',sans-serif] text-[#425166] text-base sm:text-lg lg:text-xl"
            >
              Menampilkan{' '}
              <motion.span 
                key={filteredDoctors.length}
                initial={{ scale: 1.3, color: "#1378fd" }}
                animate={{ scale: 1, color: "#1378fd" }}
                className="text-2xl sm:text-3xl lg:text-4xl font-['Alkatra:Bold',sans-serif] inline-block mx-1"
              >
                {filteredDoctors.length}
              </motion.span>{' '}
              dokter
              {searchQuery && <span className="text-[#425166]"> untuk "{searchQuery}"</span>}
            </motion.p>
          </motion.div>

          {/* Doctors Grid with Stagger Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
            <AnimatePresence mode="wait">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#e1ecfb] hover:border-[#1378fd] hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Doctor Header with Gradient */}
                  <div className="relative bg-gradient-to-br from-[#1378fd] via-[#2f8afd] to-[#5ba3fd] p-5 sm:p-6 group-hover:from-[#0d5dd1] group-hover:via-[#1378fd] group-hover:to-[#2f8afd] transition-all duration-300">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                    
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-full p-3 sm:p-4 flex-shrink-0 shadow-lg"
                      >
                        <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-[#1378fd]" />
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="font-['Alkatra:Bold',sans-serif] text-white mb-2 sm:mb-3 text-base sm:text-lg leading-tight">
                          {doctor.name}
                        </h3>
                        <p className="font-['Alkatra:Regular',sans-serif] text-white/95 text-xs sm:text-sm mb-2">
                          {doctor.specialty}
                        </p>
                        {/* Rating */}
                        {doctor.rating && (
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                              <span className="font-['Alkatra:SemiBold',sans-serif] text-white text-sm">
                                {doctor.rating}
                              </span>
                            </div>
                            <span className="text-white/80 text-xs">
                              ({doctor.patients}+ pasien)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-5 sm:p-6">
                    {doctor.description && (
                      <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm mb-4 italic leading-relaxed">
                        "{doctor.description}"
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-[#425166] mb-4 sm:mb-5 group/phone">
                      <Phone className="w-4 h-4 text-[#1378fd] group-hover/phone:scale-110 transition-transform" />
                      <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm">{doctor.phone}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleSchedule(doctor.id)}
                      className="w-full bg-gradient-to-r from-[#1378fd] to-[#5ba3fd] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-['Alkatra:SemiBold',sans-serif] hover:shadow-2xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base btn-ripple group-hover:from-[#0d5dd1] group-hover:to-[#2f8afd]"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      {expandedDoctor === doctor.id ? 'Sembunyikan Jadwal' : 'Lihat Jadwal'}
                      <motion.div
                        animate={{ rotate: expandedDoctor === doctor.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedDoctor === doctor.id ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Schedule - Expandable with Animation */}
                  <AnimatePresence>
                    {expandedDoctor === doctor.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                          <div className="bg-gradient-to-br from-[#e1ecfb] via-white to-[#f0f7ff] rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-3 border border-[#b6d5fe]">
                            <h4 className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                              Jadwal Praktik
                            </h4>
                            {doctor.schedule.map((sch, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-3 sm:p-4 rounded-xl border-l-4 border-[#1378fd] hover:shadow-lg transition-all duration-300 group/schedule"
                              >
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">
                                    {sch.day}
                                  </span>
                                  <div className="flex items-center gap-1.5 sm:gap-2 text-[#425166]">
                                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/schedule:text-[#1378fd] transition-colors" />
                                    <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm">
                                      {sch.time}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1378fd]" />
                                  <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                                    {sch.room}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                            
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => onNavigate?.('janji-temu')}
                              className="w-full mt-4 bg-white text-[#1378fd] border-2 border-[#1378fd] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-['Alkatra:SemiBold',sans-serif] hover:bg-[#1378fd] hover:text-white transition-all shadow-md hover:shadow-xl text-sm sm:text-base"
                            >
                              Buat Janji Temu
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Info Section with Enhanced Design */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#1378fd] via-[#2f8afd] to-[#5ba3fd] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -mt-32 -ml-32 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mb-48 -mr-48 blur-3xl" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <Stethoscope className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-6 sm:mb-8 drop-shadow-2xl" />
            </motion.div>
            
            <h3 className="relative z-10 font-['Alkatra:Bold',sans-serif] mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg">
              Informasi & Pendaftaran
            </h3>
            
            <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {[
                { icon: Phone, title: "Hubungi Kami", desc: "(0355) 320119" },
                { icon: Clock, title: "Jam Operasional", desc: "Jadwal dapat berubah sewaktu-waktu" },
                { icon: Calendar, title: "Pendaftaran Online", desc: "Tersedia untuk kemudahan Anda" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/20 transition-all shadow-xl"
                >
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-3" />
                  <p className="font-['Alkatra:SemiBold',sans-serif] mb-2 text-base sm:text-lg">
                    {item.title}
                  </p>
                  <p className="font-['Alkatra:Regular',sans-serif] text-sm sm:text-base opacity-90">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('home')}
              className="relative z-10 bg-white text-[#1378fd] px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-100 transition-all flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl text-sm sm:text-base lg:text-lg btn-ripple"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              Kembali ke Beranda
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
