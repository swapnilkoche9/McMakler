import React, { FC } from "react";
import "./applicants-category.scss";
import { Applicant } from "../../../../dtos/applicants";
import Card from "../../../../components/Card";

type ApplicantsCategoryProps = {
  title: string;
  applicantList: Applicant[];
};

const ApplicantsCategory: FC<ApplicantsCategoryProps> = ({
  title,
  applicantList,
}) => {
  return (
    <div className="applicants-category_wrapper">
      <label className="category-title">
        {title} ({applicantList.length})
      </label>
      <div className="applicants_card-wrapper">
        {applicantList.map((applicant: Applicant) => (
          <div className="applicant-card">
            <Card>card</Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsCategory;
