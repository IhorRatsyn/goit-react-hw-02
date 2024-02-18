import React from 'react';
import PropTypes from 'prop-types';

const Options = ({options, onFeedbackSelect, onReset, hasReset}) => {
    return (
        <div>
            {options.map(option => <button key={option} onClick={()=>onFeedbackSelect(option)}>{option}</button>)}
            {hasReset && <button onClick={onReset}>reset</button>}
        </div>
    );
};

Options.propTypes = {
    options: PropTypes.array.isRequired,
    onFeedbackSelect: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    hasReset: PropTypes.bool.isRequired,

};

export default Options;