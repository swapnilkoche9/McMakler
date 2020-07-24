import React from "react";
import "./applicants-categories.scss";
import { ApplicantsContext } from "../../../Context/ApplicantsProvider";
import ApplicantsCategory from "./ApplicantsCategory";

const ApplicantsCategories = () => {
  const { groupedApplicants, isLoading } = React.useContext(ApplicantsContext);
  const groupedCategories =
    groupedApplicants && Array.from(groupedApplicants.entries());

  return (
    <div className="applicants-categories_wrapper">
      {!isLoading && groupedApplicants ? (
        groupedCategories.map((categoryData: any) => (
          <ApplicantsCategory
            key={categoryData[0]}
            title={categoryData[0]}
            applicantList={categoryData[1]}
          />
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ApplicantsCategories;
