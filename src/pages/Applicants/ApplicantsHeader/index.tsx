import React from "react";
import { ReactComponent as Back } from "../../../material/icons/back.svg";
import "./applicants-header.scss";

const ApplicantsHeader = () => {
  return (
    <div className="applicants_header_wrapper">
      <div className="applicants-title_wrapper">
        <Back />
        <label className="title text-xl text-bold">Applicants</label>
      </div>
      <div className="applicants-count_wrapper"></div>
    </div>
  );
};

export default ApplicantsHeader;
