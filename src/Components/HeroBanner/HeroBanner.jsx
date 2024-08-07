import React from "react";
import { enums } from "../../Enums/Enums";
import "./HeroBanner.css";

const HeroBanner = ({ className }) => {
  return (
    <div className="Hero">
      <div className="Hero-Banner">
        <div className="Hero-Text">
          <p className="Arrival-Text">{enums.newArrival}</p>
          <p>{enums.largestWeb}</p>
          <p>{enums.minimumPrice}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            className={className}
            src="https://static.semrush.com/blog/uploads/media/e4/81/e4815bb11c067c2e423effe13fbf2e04/ecommerce-content-marketing-strategy.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
