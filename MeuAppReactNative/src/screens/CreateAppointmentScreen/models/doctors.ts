export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export const availableDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. João Silva",
    specialty: "Cardiologia",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Dra. Maria Santos",
    specialty: "Dermatologia",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Dr. Carlos Oliveira",
    specialty: "Neurologista",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Dra. Ana Costa",
    specialty: "Pediatria",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "Dr. Pedro Lima",
    specialty: "Ortopedia",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

export const getDoctorById = (doctorId: string): Doctor | undefined => {
  return availableDoctors.find((doctor) => doctor.id === doctorId);
};
