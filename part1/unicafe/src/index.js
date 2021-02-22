import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistics = ({good, neutral, bad}) =>{
  // Total number of feedbacks received
  const total = good + bad + neutral;
  // Average feedback score between -1 and 1. 
  // Good = +1; Neutral = 0; Bad = -1;
  const average = (good-bad)/total;
  // Percentage of positive feedback to total feedback provided.
  const postitivePercent = good/total*100;

  if(total == 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>
          No feedback given. 
        </p>
      </div>
    )
  }

  return(      
  <div>
    <h1>Statistics</h1>
    <p>
      Good {good}
      <br/>
      Neutral {neutral}
      <br/>
      Bad {bad}
      <br/>
      All {total}
      <br/>
      Average {total==0?0:average}
      <br/>
      Positive {total==0?0:postitivePercent} %

    </p>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <br/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)