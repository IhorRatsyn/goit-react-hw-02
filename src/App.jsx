import {useState} from 'react'
import './App.css'
import Descriptions from "./components/Descriptions.jsx";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";

const localStorageKey = 'options'

const defaultState = {
    good: 0,
    neutral: 0,
    bad: 0,
}

const getStorage = () => JSON.parse(localStorage.getItem(localStorageKey)) || defaultState
const setStorage = (val) => localStorage.setItem(localStorageKey, JSON.stringify(val))

function App() {
    const title = 'Sip Happens Café'
    const desc = 'Please leave your feedback about our service by selecting one of the options below.'

    const [options, setOptions] = useState(getStorage)

    const onOptionsClick = (type) => {
        const newOptions = {...options}
        newOptions[type] += 1
        setOptions(newOptions)
        setStorage(newOptions)
    }

    const onReset = () => {
        setOptions(defaultState)
    }

    return (
        <>
            <div>
                <Descriptions title={title} desc={desc}/>
                <Options options={Object.keys(options)} handlerClick={onOptionsClick} onReset={onReset}/>
                <Feedback good={options.good} bad={options.bad} neutral={options.neutral}/>
            </div>
        </>
    )
}

export default App
