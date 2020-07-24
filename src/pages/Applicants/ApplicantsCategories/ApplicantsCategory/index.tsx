import React, { FC } from "react";
import "./applicants-category.scss";
import { Applicant } from "../../../../dtos/applicants";
import Card from "../../../../components/Card";
import { getShortName, getFormattedDate } from "../../../../modules/utils";
import { categoryMapper } from "../../../../Constants/constant";

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
        {categoryMapper[title].title} ({applicantList.length})
      </label>
      <div className="applicants_card-wrapper">
        {applicantList.map((applicant: Applicant) => (
          <div className="applicant-card" key={applicant.email}>
            <Card>
              <div className="card-details_wrapper">
                <div className="short-name text-md text-bold">
                  {getShortName(applicant.firstName, applicant.lastName)}
                </div>
                <div className="full-name text-md text-bold">
                  {applicant.firstName + " " + applicant.lastName}
                </div>
                <div className="phone-number text-md">
                  {applicant.contactNo}
                </div>
                <div className="email text-md">{applicant.email}</div>
                <div className="date text-vsm text-bold">
                  {categoryMapper[title].label +
                    " " +
                    getFormattedDate(applicant.date)}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsCategory;
