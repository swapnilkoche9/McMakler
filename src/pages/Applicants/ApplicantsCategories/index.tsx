import React from "react";
import "./applicants-categories.scss";
import { ApplicantsContext } from "../../../Context/ApplicantsProvider";
import ApplicantsCategory from "./ApplicantsCategory";

const ApplicantsCategories = () => {
  const { applicants, isLoading } = React.useContext(ApplicantsContext);
  const categories = applicants && Object.keys(applicants);
  return (
    <div className="applicants-categories_wrapper">
      {!isLoading && applicants ? (
        categories.map((category: string) => (
          <ApplicantsCategory
            title="Dummy category"
            applicantList={applicants[category]}
          />
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ApplicantsCategories;
