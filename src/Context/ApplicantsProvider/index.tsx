import React, { FC, useState, useEffect } from "react";
import { getApplicants, groupApplicantsBycategory } from "../../modules/utils";
import { Applicants, Applicant } from "../../dtos/applicants";

type ApplicantsProviderProps = {
  children: React.ReactNode;
};

export const ApplicantsContext = React.createContext<any>(null);

const ApplicantsProvider: FC<ApplicantsProviderProps> = ({ children }) => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [groupedApplicants, setGroupedApplicants] = useState<
    Map<string, Applicant[]>
  >(new Map<string, Applicant[]>());
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const result = getApplicants();
    setApplicants(result.data);
  }, []);

  useEffect(() => {
    const groupedData = groupApplicantsBycategory(applicants);
    setGroupedApplicants(groupedData);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [applicants]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
  };

  return (
    <ApplicantsContext.Provider
      value={{
        applicants,
        groupedApplicants,
        isLoading,
        handleInputChange,
      }}
    >
      {children}
    </ApplicantsContext.Provider>
  );
};

export default ApplicantsProvider;
