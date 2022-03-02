import React from "react";
import { PriceItem } from "./price-item";
import { PRICES } from "config";
import "./prices.scss";

export const Prices = () => {
  return (
    <div className="prices">
      {PRICES.map((price) => (
        <PriceItem
          key={price.id}
          title={price.title}
          desc={price.desc}
          price={price.price}
          unit={price.unit}
          isSpecial={price.isSpecial}
        />
      ))}
    </div>
  );
};
