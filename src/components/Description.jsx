import React from "react";
import PropTypes from "prop-types";

const Description = ({ title, desc }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Description;
