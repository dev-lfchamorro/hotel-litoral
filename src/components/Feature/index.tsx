import React from "react";
import "./styles.scss";
import { FeatureProps } from "./types";

const Feature: React.FC<{ features: FeatureProps[] }> = ({ features }) => {
  return (
    <div className="features-container">
      {features.map((feature, idx) => (
        <div className="feature-element" key={idx + 1}>
          <feature.icon className="feature-img" />

          <span className="feature-title">{feature.title}</span>

          <span className="feature-description">{feature.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Feature;
