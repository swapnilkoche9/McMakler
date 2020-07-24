import { CategoryMapper } from "../dtos/applicants";

export const monthMapper = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

export const categoryMapper: CategoryMapper = {
  appointment_set: {
    title: "Appointment Set",
    label: "Appointment",
  },
  property_viewed: {
    title: "Property Viewed",
    label: "Viewed",
  },
  interested: {
    title: "Interested",
    label: "Interested",
  },
  offer_accepted: {
    title: "Offer Accepted",
    label: "Accepted",
  },
};
