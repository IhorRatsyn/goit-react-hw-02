import React from "react";
import PropTypes from "prop-types";

const Feedback = ({neutral, good, bad, totalFeedback, positiveFeedback}) => {
    return (
        <div className="feedback-setting">
            <div>Good: {good}</div>
            <div>Bad: {bad}</div>
            <div>Neutral: {neutral}</div>
            <div>Total: {totalFeedback}</div>
            <div>Positive: {positiveFeedback}%</div>
        </div>
    );
};

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
