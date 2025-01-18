export interface User {
  id: string;
  name: string;
}

export interface PersonalInfo {
  age: number;
  name: string;
  education: string;
  company_name: string;
  sex: string;
  location: string;
  job_title: string;
}

export interface UserDetails {
  user_info: {
    personal_info: PersonalInfo;
    questionnaire_responses: string[];
    chat_history: {
      user_id: string;
      messages: any[];
    };
  };
}