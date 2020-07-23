import React from "react";
import "./applicants.scss";
import ApplicantsProvider from "../../Context/ApplicantsProvider";
import ApplicantsHeader from "./ApplicantsHeader";
import FilterPanel from "./FilterPanel";
import ApplicantsCategories from "./ApplicantsCategories";

const Applicants = () => {
  return (
    <div className="applicants-wrapper">
      <ApplicantsProvider>
        <ApplicantsHeader />
        <div className="filter-panel_container">
          <FilterPanel />
        </div>
        <ApplicantsCategories />
      </ApplicantsProvider>
    </div>
  );
};

export default Applicants;
