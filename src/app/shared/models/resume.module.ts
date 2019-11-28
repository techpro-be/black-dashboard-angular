 export interface Resume {
  id: string;
  name: string;
  surname: string;
  address: string;
  phone: number;
  email: string;
  personalBackground: string;
  experiences: {
    [key: string]: Experience
   };
  educations: {
    [key: string]: Education
   };
  languages: {
    [key: string]: Language
   };
   itKnowledge: {
    [key: string]: itKnowledge
   };
  profilePic: string;
  position: string;
 }
 export interface Experience {
    employer: string;
    position: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
}

 export interface itKnowledge {
  itSkill: string;
  itLevel: string;
}

 export interface Education {
    degree: string;
    college: string;
    passingYear: string;
    startingYear: number;
}

 export interface Language {
  languageName: string;
  level: string;
}

