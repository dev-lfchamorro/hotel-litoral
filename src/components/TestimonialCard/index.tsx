import { motion } from "framer-motion";
import React from "react";
import { ReactComponent as IconStartFill } from "../../assets/icons/star-fill.svg";
import { ReactComponent as IconStart } from "../../assets/icons/star.svg";
import { getImgNameByPath } from "../../helpers";
import "./styles.scss";
import { TestimonialCardProps } from "./types";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  country,
  description,
  starRating,
  title,
  author,
}) => {
  return (
    <motion.div className="testimonial-item">
      <span className="star-rating">
        {Array.from({ length: 5 }, (_, idx) => {
          return idx + 1 > starRating ? (
            <IconStart className="star-icon" key={idx + 1} />
          ) : (
            <IconStartFill className="star-icon" key={idx + 1} />
          );
        })}
      </span>

      <span className="title">{title.slice(0, 65)}</span>
      <span className="description" title={description}>
        “{description?.slice(0, 228)}”
      </span>

      <div className="avatar">
        <img src={avatar} alt={getImgNameByPath(avatar)} />
      </div>

      <span className="author">
        {author}, {country}
      </span>
    </motion.div>
  );
};

export default TestimonialCard;
