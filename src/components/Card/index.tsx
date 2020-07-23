import React, { FC } from "react";
import "./card.scss";

type CardProps = {
  children: React.ReactNode;
};
const Card: FC<CardProps> = ({ children }) => {
  return <div className="card-wrapper">{children}</div>;
};

export default Card;
