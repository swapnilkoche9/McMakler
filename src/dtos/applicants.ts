export interface Applicant {
  type: string;
  firstName: string;
  lastName: string;
  contactNo: string;
  email: string;
  bid?: number;
  date: number;
}

export interface Applicants {
  appointment_set: Applicant[];
  property_viewed: Applicant[];
  interested: Applicant[];
  offer_accepted: Applicant[];
}

export interface CategoryMapper {
  [key: string]: { title: string; label: string };
}
