import React from 'react';
import PropTypes from 'prop-types';

const Options = ({options, handlerClick, onReset}) => {
    return (
        <div>
            {options.map(option => <button key={option} onClick={()=>handlerClick(option)}>{option}</button>)}
            <button onClick={()=>onReset()}>reset</button>
        </div>
    );
};

Options.propTypes = {
    options: PropTypes.array.isRequired,
    handlerClick: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,

};

export default Options;