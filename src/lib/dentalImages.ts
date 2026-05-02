// Jamuna Family Dental Care - Image library for dental clinic
import stockDentalClinic from '@/assets/stock-dental-clinic.jpg';
import stockTreatmentRoom from '@/assets/stock-treatment-room.jpg';
import stockDentalExam from '@/assets/stock-dental-exam.jpg';
import stockTeethWhitening from '@/assets/stock-teeth-whitening.jpg';
import stockDentalImplants from '@/assets/stock-dental-implants.jpg';
import stockOrthodontics from '@/assets/stock-orthodontics.jpg';
import stockPediatric from '@/assets/stock-pediatric.jpg';
import stockDentistPortrait from '@/assets/stock-dentist-portrait.jpg';
import stockDentistPortrait2 from '@/assets/stock-dentist-portrait-2.jpg';
import stockHygienist from '@/assets/stock-hygienist.jpg';
import stockHappyFamily from '@/assets/stock-happy-family.jpg';
import stockBeautifulSmile from '@/assets/stock-beautiful-smile.jpg';
import stockEmergencyDental from '@/assets/stock-emergency-dental.jpg';
import stockDentalCrowns from '@/assets/stock-dental-crowns.jpg';
import stockClinicExterior from '@/assets/stock-clinic-exterior.jpg';

export const dentalImages = {
  // Clinic & Facilities
  clinic: {
    reception: stockDentalClinic.src,
    treatmentRoom: stockTreatmentRoom.src,
    exterior: stockClinicExterior.src,
  },

  // Services
  services: {
    generalExam: stockDentalExam.src,
    whitening: stockTeethWhitening.src,
    implants: stockDentalImplants.src,
    orthodontics: stockOrthodontics.src,
    pediatric: stockPediatric.src,
    emergency: stockEmergencyDental.src,
    crowns: stockDentalCrowns.src,
  },

  // Team
  team: {
    dentist1: stockDentistPortrait.src,
    dentist2: stockDentistPortrait2.src,
    hygienist: stockHygienist.src,
  },

  // Patients & Results
  patients: {
    family: stockHappyFamily.src,
    smile: stockBeautifulSmile.src,
  },

  // Hero images
  hero: {
    main: stockDentalClinic.src,
    secondary: stockBeautifulSmile.src,
  },
};

export default dentalImages;
