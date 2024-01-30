import React from "react";
import TextContent from "../TextContent";
import "./styles.scss";
import { FeatureProps } from "./types";

const Feature: React.FC<{ features: FeatureProps[] }> = ({ features }) => {
  return (
    <div className="features-container">
      {features.map((feature, idx) => (
        <div className="feature-element" key={idx + 1}>
          <feature.icon className="feature-img" />

          <TextContent orientation="center" size="medium" title={feature.title}>
            {feature.description}
          </TextContent>
        </div>
      ))}
    </div>
  );
};

export default Feature;
