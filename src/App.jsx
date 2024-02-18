import React, {useEffect, useState} from "react";
import "./App.css";
import Description from "./components/Description.jsx";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";
import Notification from "./components/Notification.jsx";

const localStorageKey = "options";

const defaultState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [options, setOptions] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || defaultState
  });

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(options));
  }, [options]);

  const reducePositiveFeedback = (options, total) => {
    const {good, neutral} = options;
    const positivePercent = Math.round(((good + neutral) / total) * 100);
    return total ? positivePercent : 0;
  }

  const reduceTotalFeedback = (options) => {
    const {good, neutral, bad} = options;
    return good + neutral + bad
  }

  const addOption = (type) => {
    setOptions({
      ...options,
      [type]: options[type] + 1
    });
  };

  const onReset = () => {
    setOptions(defaultState);
  };

  const totalFeedback = reduceTotalFeedback(options)
  const positiveFeedback = reducePositiveFeedback(options, totalFeedback)

  return (
    <>
      <div>
        <Description title="Sip Happens Café" desc="Please leave your feedback about our service by selecting one of the options below." />
        <Options
          options={Object.keys(options)}
          onFeedbackSelect={addOption}
          hasReset={!!totalFeedback}
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
            <Notification/>
            )}
        </div>


      </div>
    </>
  );
}

export default App;
