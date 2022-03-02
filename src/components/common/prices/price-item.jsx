import React from "react";
import "./prices.scss";

export const PriceItem = ({ desc, title, price, unit, isSpecial }) => {
  return (
    <div className={`price-item ${isSpecial ? "special" : ""}`}>
      <h3>{title}</h3>
      <p className={"price-desc"}>{desc}</p>
      <div className={"price-wrapper"}>
        <span className={"price-number"}>
          {price.toLocaleString("en").replace(",", ".")}
        </span>
        <div className={"price-detail"}>
          <div className={"price-unit"}>{unit}</div>
          <div className={"price-time"}>Per Month</div>
        </div>
      </div>
    </div>
  );
};
