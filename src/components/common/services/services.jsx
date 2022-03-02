import React from "react";
import { ServiceItem } from "./service-item";
import { SERVICES } from "config";
import "./services.scss";

export const Services = () => {
  return (
    <>
      <div className="services">
        <h1>IT CLOUD SEA’S IT SERVICE </h1>
        {SERVICES.map((service) => (
          <ServiceItem
            key={service.id}
            img={service.img}
            title={service.title}
            group={service.group}
            isOdd={service.id % 2}
          />
        ))}
      </div>
    </>
  );
};
