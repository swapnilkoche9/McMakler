import React from "react";
import { ReactComponent as SearchIcon } from "../../../material/icons/search.svg";
import { ReactComponent as ArrowDropDown } from "../../../material/icons/arrow_drop_down.svg";
import Input from "../../../components/Input";
import "./filter-panel.scss";
import Dropdown from "../../../components/Dropdown";
import { ApplicantsContext } from "../../../Context/ApplicantsProvider";

const list = [
  "Appointment_Set",
  "Property_Viewed",
  "Interested",
  "Offer_Accepted",
];

const FilterPanel = () => {
  const { handleInputChange } = React.useContext(ApplicantsContext);

  return (
    <div className="filter-panel_wrapper">
      <div className="search-input">
        <Input
          id="search"
          type="text"
          icon={<SearchIcon />}
          placeholder="Search for applicants"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="bid-dropdown">
        <Dropdown
          icon={<ArrowDropDown />}
          itemList={list}
          defaultValue="Bids"
          isOpen={false}
        />
      </div>
      <div className="status-dropdown">
        <Dropdown
          icon={<ArrowDropDown />}
          itemList={list}
          defaultValue="Status"
          isOpen={false}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
