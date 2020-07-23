import { Applicants } from "../dtos/applicants";

export const getApplicants = (): Applicants => {
  const data = {
    appointment_set: [
      {
        firstName: "Friderich",
        lastName: "Heinrich",
        contactNo: "+49 17674512555",
        email: "friderich.heinrich@gmail.com",
      },
      {
        firstName: "Swapnil",
        lastName: "Koche",
        contactNo: "+49 17674512556",
        email: "swapnil.koche@gmail.com",
      },
    ],
    property_viewed: [
      {
        firstName: "Oscar",
        lastName: "Moreno",
        contactNo: "+49 17674512557",
        email: "oscar.moreno@gmail.com",
        bid: 2300,
      },
      {
        firstName: "Ajanth",
        lastName: "Kathmu",
        contactNo: "+49 17674512559",
        email: "ajanth.kathmu@gmail.com",
        bid: 2500,
      },
    ],
    interested: [
      {
        firstName: "Marco",
        lastName: "Cruze",
        contactNo: "+49 17674512560",
        email: "marco.cruze@gmail.com",
      },
      {
        firstName: "Pikey",
        lastName: "Blinder",
        contactNo: "+49 17674512549",
        email: "picky.blinder@gmail.com",
      },
      {
        firstName: "Marco",
        lastName: "Cruze",
        contactNo: "+49 17674512560",
        email: "marco.cruze@gmail.com",
      },
      {
        firstName: "Pikey",
        lastName: "Blinder",
        contactNo: "+49 17674512549",
        email: "picky.blinder@gmail.com",
      },
      {
        firstName: "Marco",
        lastName: "Cruze",
        contactNo: "+49 17674512560",
        email: "marco.cruze@gmail.com",
      },
      {
        firstName: "Pikey",
        lastName: "Blinder",
        contactNo: "+49 17674512549",
        email: "picky.blinder@gmail.com",
      },
      {
        firstName: "Marco",
        lastName: "Cruze",
        contactNo: "+49 17674512560",
        email: "marco.cruze@gmail.com",
      },
      {
        firstName: "Pikey",
        lastName: "Blinder",
        contactNo: "+49 17674512549",
        email: "picky.blinder@gmail.com",
      },
    ],
    offer_accepted: [
      {
        firstName: "Jenny",
        lastName: "Markel",
        contactNo: "+49 17674512960",
        email: "jenny.marcle@gmail.com",
      },
      {
        firstName: "Hostin",
        lastName: "Axa",
        contactNo: "+49 17674514534",
        email: "hostin.axa@gmail.com",
      },
    ],
  };
  return data;
};
