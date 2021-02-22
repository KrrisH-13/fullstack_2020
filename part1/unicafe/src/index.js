import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickFeedback = (feedback)=>{
    switch (feedback) {
      case 1:
        setGood(good+1);
        break;
      case 2:
          setNeutral(neutral+1);
          break;
      case 3:
        setBad(bad+1);
        break;
    }
  }


  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
          <div>
            <button onClick={() => clickFeedback(1)}>
              good
            </button>
            <button onClick={() => clickFeedback(2)}>
              neutral
            </button>
            <button onClick={() => clickFeedback(3)}>
              bad
            </button>
          </div>
      </div>

      <div>
        <h1>Statistics</h1>
        <p>
          Good {good}
          <br/>
          Neutral {neutral}
          <br/>
          Bad {bad}
        </p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)