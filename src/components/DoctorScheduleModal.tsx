import { X, Calendar, Clock, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface Schedule {
  day: string;
  time: string;
  room: string;
}

interface DoctorScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
  specialty?: string;
  schedule?: Schedule[];
  phone?: string;
  email?: string;
  onBookAppointment?: () => void;
  doctor?: any;
}

export default function DoctorScheduleModal({
  isOpen,
  onClose,
  doctorName,
  specialty,
  schedule,
  phone,
  email,
  onBookAppointment,
  doctor
}: DoctorScheduleModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Use doctor object if available, otherwise use individual props
  const name = doctor?.name || doctorName || "";
  const spec = doctor?.specialty || specialty || "";
  const sched = doctor?.schedule || schedule || [];
  const phoneNum = doctor?.phone || phone || "";
  const emailAddr = doctor?.email || email || "";

  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          
          <h2 className="font-['Alkatra:Bold',sans-serif] text-white mb-2 text-xl sm:text-2xl pr-10">
            {name}
          </h2>
          <p className="font-['Alkatra:SemiBold',sans-serif] text-white/90 text-sm sm:text-base">
            {spec}
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Contact Info */}
          {(phoneNum || emailAddr) && (
            <div className="mb-4 sm:mb-6 bg-gradient-to-r from-[#e1ecfb] to-white p-3 sm:p-4 rounded-xl">
              {phoneNum && (
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-[#1378fd]" />
                  <span className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                    {phoneNum}
                  </span>
                </div>
              )}
              {emailAddr && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1378fd]" />
                  <span className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm break-all">
                    {emailAddr}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Schedule */}
          <h3 className="font-['Alkatra:Bold',sans-serif] text-[#1378fd] mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            Jadwal Praktik
          </h3>
          
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {sched.map((sch, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-[#e1ecfb] to-white p-3 sm:p-4 rounded-xl border-l-4 border-[#1378fd] hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <span className="font-['Alkatra:SemiBold',sans-serif] text-[#1378fd] text-sm sm:text-base">
                    {sch.day}
                  </span>
                  <div className="flex items-center gap-2 text-[#425166]">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="font-['Alkatra:Regular',sans-serif] text-xs sm:text-sm">
                      {sch.time}
                    </span>
                  </div>
                </div>
                <p className="font-['Alkatra:Regular',sans-serif] text-[#425166] text-xs sm:text-sm">
                  📍 {sch.room}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onBookAppointment?.();
                onClose();
              }}
              className="flex-1 bg-gradient-to-r from-[#1378fd] to-[#b6d5fe] text-white px-6 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Buat Janji Temu
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-white text-[#425166] border-2 border-[#e1ecfb] px-6 py-3 rounded-full font-['Alkatra:SemiBold',sans-serif] hover:bg-gray-50 transition-all text-sm sm:text-base"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}