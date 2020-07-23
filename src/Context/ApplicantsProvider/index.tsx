import React, { FC, useState, useEffect } from "react";
import { getApplicants } from "../../modules/utils";
import { Applicants } from "../../dtos/applicants";

type ApplicantsProviderProps = {
  children: React.ReactNode;
};

export const ApplicantsContext = React.createContext<any>(null);

const ApplicantsProvider: FC<ApplicantsProviderProps> = ({ children }) => {
  const [applicants, setApplicants] = useState<Applicants | null>();
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const data = getApplicants();
    setApplicants(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
  };

  return (
    <ApplicantsContext.Provider
      value={{
        applicants,
        isLoading,
        handleInputChange,
      }}
    >
      {children}
    </ApplicantsContext.Provider>
  );
};

export default ApplicantsProvider;
