import React, { FC } from "react";
import "./input.scss";

type InputProps = {
  id: string;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
  id,
  type,
  disabled,
  placeholder,
  icon,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <input
        className="input text-md"
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className="icon">{icon}</span>
    </div>
  );
};

export default Input;
