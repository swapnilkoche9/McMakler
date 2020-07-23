import React, { FC, useState, useRef, useEffect } from "react";
import "./dropdown.scss";

type DropdownProps = {
  icon?: React.ReactNode;
  itemList: string[];
  defaultValue: string;
  isOpen: boolean;
};

const Dropdown: FC<DropdownProps> = ({
  icon,
  defaultValue,
  itemList,
  isOpen,
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const [isListOpen, setIsListOpen] = useState(isOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: Node | any }) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsListOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (e: any) => {
    setSelectedItem(e.target.id);
    setIsListOpen((isListOpen) => !isListOpen);
  };

  const handleButtonClick = () => {
    setIsListOpen((isListOpen) => !isListOpen);
  };

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>
      <div className="button-wrapper">
        <button className="button text-sm" onClick={handleButtonClick}>
          {selectedItem}
          <span className="icon">{icon}</span>
        </button>
      </div>
      {isListOpen && (
        <ul className="list-wrapper">
          {itemList.map((entry: string) => (
            <li
              key={entry}
              id={entry}
              className="list text-sm"
              onClick={handleSelect}
            >
              {entry}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
