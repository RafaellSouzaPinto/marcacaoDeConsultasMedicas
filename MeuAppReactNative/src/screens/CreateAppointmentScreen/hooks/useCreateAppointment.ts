import { useState } from "react";
import { AppointmentService } from "../services/appointmentService";
import { Doctor } from "../models/doctors";
import { useAuth } from "../../../contexts/AuthContext";

export const useCreateAppointment = () => {
  const { user } = useAuth();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const checkAvailability = async (doctorId: string, date: string) => {
    setLoading(true);
    try {
      const slots = [
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

      const available = [];
      for (const time of slots) {
        const isAvailable = await AppointmentService.checkTimeSlotAvailability(
          doctorId,
          date,
          time
        );
        if (isAvailable) {
          available.push(time);
        }
      }
      setAvailableSlots(available);
    } catch (error) {
      console.error("Erro ao verificar disponibilidade:", error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const createAppointment = async (): Promise<boolean> => {
    if (!selectedDoctor || !selectedDate || !selectedTime || !user) {
      return false;
    }

    setLoading(true);
    try {
      await AppointmentService.createAppointment({
        doctorId: selectedDoctor.id,
        date: selectedDate,
        time: selectedTime,
        description,
        status: "pending",
      });

      // Reset form
      setSelectedDoctor(null);
      setSelectedDate("");
      setSelectedTime("");
      setDescription("");
      setAvailableSlots([]);

      return true;
    } catch (error) {
      console.error("Erro ao criar consulta:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedDoctor(null);
    setSelectedDate("");
    setSelectedTime("");
    setDescription("");
    setAvailableSlots([]);
  };

  return {
    selectedDoctor,
    setSelectedDoctor,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    description,
    setDescription,
    loading,
    availableSlots,
    checkAvailability,
    createAppointment,
    resetForm,
  };
};
