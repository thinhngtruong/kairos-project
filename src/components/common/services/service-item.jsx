import React from "react";
import "./services.scss";

export const ServiceItem = ({ img, title, group, isOdd }) => {
  return (
    <div className={`service-item ${isOdd ? "left" : ""}`}>
      <img src={img} alt={""} />
      <div className="service-detail">
        <h3>{title}</h3>
        <div className="group-btn-wrapper">
          {group.map((item) => (
            <div key={item.name}>
              <div className="group-name">{item.name}</div>
              <button className="group-btn">{item.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
