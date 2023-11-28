// export interface AllInterface {
// }

// user (formateur or candidat)
interface User {
    nom: string;
    prenom: string;
    email: string;
    numeroCarteIdentite: string;
    motDePasse: string;
  }
  
  // formateur
  interface Formateur extends User {
    numeroTelephone: string;
    specialites: string[]; // Array of specialties
  }
  
  // formation
  interface Formation {
    titre: string;
    description: string;
    chargeHoraire: number;
    programme: string;
    niveauDifficulte: 'débutant' | 'intermédiaire' | 'avancé';
    motsCles: string[]; // tags
    categories: string[]; // categories
  }
  
  // candidat
  interface Candidat extends User {

  }
  
  // session de formation
  interface SessionFormation {
    formation: Formation;
    formateurs: Formateur[];
    candidats: Candidat[];
    dateDebut: Date;
    dateFin: Date;
    planningSeances: string; // Replace with the actual structure
  }
  
  // Service interface for managing data
//   interface DataService {
//     getFormateurs(): Formateur[];
//     addFormateur(formateur: Formateur): void;
//     getFormations(): Formation[];
//     addFormation(formation: Formation): void;
//     getCandidats(): Candidat[];
//     addCandidat(candidat: Candidat): void;
//     getSessionsFormations(): SessionFormation[];
//     addSessionFormation(sessionFormation: SessionFormation): void;
//   }
  
  