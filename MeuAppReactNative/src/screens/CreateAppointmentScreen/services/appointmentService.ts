import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appointment } from "../../../types/appointments";

export class AppointmentService {
  private static readonly STORAGE_KEY = "@MedicalApp:appointments";

  static async createAppointment(
    appointmentData: Omit<Appointment, "id">
  ): Promise<Appointment> {
    try {
      const newAppointment: Appointment = {
        ...appointmentData,
        id: Date.now().toString(),
      };

      const existingAppointments = await this.getAllAppointments();
      const updatedAppointments = [...existingAppointments, newAppointment];

      await AsyncStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(updatedAppointments)
      );

      return newAppointment;
    } catch (error) {
      console.error("Erro ao criar consulta:", error);
      throw error;
    }
  }

  static async getAllAppointments(): Promise<Appointment[]> {
    try {
      const storedAppointments = await AsyncStorage.getItem(this.STORAGE_KEY);
      if (storedAppointments) {
        return JSON.parse(storedAppointments);
      }
      return [];
    } catch (error) {
      console.error("Erro ao carregar consultas:", error);
      return [];
    }
  }

  static async checkTimeSlotAvailability(
    doctorId: string,
    date: string,
    time: string
  ): Promise<boolean> {
    try {
      const appointments = await this.getAllAppointments();
      const isBooked = appointments.some(
        (appointment) =>
          appointment.doctorId === doctorId &&
          appointment.date === date &&
          appointment.time === time &&
          appointment.status !== "cancelled"
      );
      return !isBooked;
    } catch (error) {
      console.error("Erro ao verificar disponibilidade:", error);
      return false;
    }
  }
}
