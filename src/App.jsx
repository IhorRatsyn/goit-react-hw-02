import React, {useEffect, useState} from "react";
import "./App.css";
import Description from "./components/Description.jsx";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";

const localStorageKey = "options";

const defaultState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [options, setOptions] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || defaultState
  });

  useEffect(() => {
    const {good, neutral, bad} = options;
    const allSum = good + neutral + bad;
    setTotalFeedback(allSum);

    const positivePercent = Math.round(((good + neutral) / allSum) * 100);
    setPositiveFeedback(allSum ? positivePercent : 0);

    window.localStorage.setItem(localStorageKey, JSON.stringify(options));
  }, [options]);

  const onOptionsClick = (type) => {
    setOptions({
      ...options,
      [type]: options[type] + 1
    });
  };

  const onReset = () => {
    setOptions(defaultState);
  };

  return (
    <>
      <div>
        <Description title="Sip Happens Café" desc="Please leave your feedback about our service by selecting one of the options below." />
        <Options
          options={Object.keys(options)}
          handlerClick={onOptionsClick}
          onReset={onReset}
        />
        <div className="options">
          {totalFeedback ? (
                 <div>
                   <Feedback
                       good={options.good}
                       bad={options.bad}
                       neutral={options.neutral}
                       positiveFeedback={positiveFeedback}
                       totalFeedback={totalFeedback}
                   />

                 </div>
            ) : (
            <div>No feedback yet</div>
            )}
        </div>


      </div>
    </>
  );
}

export default App;
