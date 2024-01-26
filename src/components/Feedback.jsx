import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import options from "./Options.jsx";

const Feedback = ({neutral, good, bad}) => {
    const [totalFeedback, setTotalFeedback] = useState(0)
    const [positiveFeedback, setPositiveFeedback] = useState(0)

    useMemo(() => {
        const allSum = good + neutral + bad
        setTotalFeedback(allSum)

        const positivePercent = Math.round(((good + neutral) / allSum) * 100)
        setPositiveFeedback(allSum  ? positivePercent : 0)
    }, [neutral, good, bad])

    return <div className='options'>
        {
            totalFeedback
                ?
                    <div className='feedback-setting'>
                      <div>Good: {good}</div>
                      <div>Bad: {bad}</div>
                      <div>Neutral: {neutral}</div>
                      <div>Total: {totalFeedback}</div>
                      <div>Positive: {positiveFeedback}%</div>
                    </div>
                : <div>No feedback yet</div>
        }
    </div>
};

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
};

export default Feedback;