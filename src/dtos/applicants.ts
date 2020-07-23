export interface Applicant {
  firstName: string;
  lastName: string;
  contactNo: string;
  email: string;
  bid?: number;
}

export interface Applicants {
  appointment_set: Applicant[];
  property_viewed: Applicant[];
  interested: Applicant[];
  offer_accepted: Applicant[];
}
