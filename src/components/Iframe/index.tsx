import React from "react";
import "./styles.scss";
import { IframeProps } from "./types";

const Iframe: React.FC<IframeProps> = ({ url, title }) => {
  return (
    <iframe
      allowFullScreen
      className="iframe-container"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={url}
      title={title}
    />
  );
};

export default Iframe;
