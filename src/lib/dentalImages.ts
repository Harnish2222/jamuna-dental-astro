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
    reception: stockDentalClinic,
    treatmentRoom: stockTreatmentRoom,
    exterior: stockClinicExterior,
  },
  
  // Services
  services: {
    generalExam: stockDentalExam,
    whitening: stockTeethWhitening,
    implants: stockDentalImplants,
    orthodontics: stockOrthodontics,
    pediatric: stockPediatric,
    emergency: stockEmergencyDental,
    crowns: stockDentalCrowns,
  },
  
  // Team
  team: {
    dentist1: stockDentistPortrait,
    dentist2: stockDentistPortrait2,
    hygienist: stockHygienist,
  },
  
  // Patients & Results
  patients: {
    family: stockHappyFamily,
    smile: stockBeautifulSmile,
  },
  
  // Hero images
  hero: {
    main: stockDentalClinic,
    secondary: stockBeautifulSmile,
  },
};

export default dentalImages;
