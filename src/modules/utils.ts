import { Applicant } from "../dtos/applicants";
import { monthMapper } from "../Constants/constant";

export const getApplicants = (): any => {
  const data = {
    data: [
      {
        type: "appointment_set",
        firstName: "Friderich",
        lastName: "Heinrich",
        contactNo: "+49 17674512555",
        email: "friderich.heinrich@gmail.com",
        date: 1595529383027,
      },
      {
        type: "appointment_set",
        firstName: "Swapnil",
        lastName: "Koche",
        contactNo: "+49 17674512556",
        email: "swapnil.koche@gmail.com",
        date: 1595529393945,
      },

      {
        type: "property_viewed",
        firstName: "Oscar",
        lastName: "Moreno",
        contactNo: "+49 17674512557",
        email: "oscar.moreno@gmail.com",
        bid: 2300,
        date: 1598529993045,
      },
      {
        type: "property_viewed",
        firstName: "Ajanth",
        lastName: "Kathmu",
        contactNo: "+49 17674512559",
        email: "ajanth.kathmu@gmail.com",
        bid: 2500,
        date: 1508529003045,
      },
    ],
    // interested: [
    //   {
    //     firstName: "Marco",
    //     lastName: "Cruze",
    //     contactNo: "+49 17674512560",
    //     email: "marco.cruze@gmail.com",
    //   },
    //   {
    //     firstName: "Pikey",
    //     lastName: "Blinder",
    //     contactNo: "+49 17674512549",
    //     email: "picky.blinder@gmail.com",
    //   },

    // ],
    // offer_accepted: [
    //   {
    //     firstName: "Jenny",
    //     lastName: "Markel",
    //     contactNo: "+49 17674512960",
    //     email: "jenny.marcle@gmail.com",
    //   },
    //   {
    //     firstName: "Hostin",
    //     lastName: "Axa",
    //     contactNo: "+49 17674514534",
    //     email: "hostin.axa@gmail.com",
    //   },
    // ],
  };
  return data;
};

export const groupApplicantsBycategory = (
  applicants: Applicant[]
): Map<string, Applicant[]> => {
  console.log(applicants);
  const map = new Map<string, Applicant[]>();
  applicants.forEach((applicant: Applicant) => {
    const key = applicant.type;
    if (map.has(key)) {
      const arr = map.get(key);
      arr?.push(applicant);
    } else {
      map.set(key, [applicant]);
    }
  });
  return map;
};

export const getShortName = (firstName: string, lastName: string): string => {
  return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
};

export const getFormattedDate = (date: number) => {
  const d = new Date(date);
  const day = d.getDay();
  const month = d.getMonth();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const formattedMinutes = minutes <= 9 ? "0" + minutes : minutes;
  return day + " " + monthMapper[month] + " " + hour + ":" + formattedMinutes;
};
