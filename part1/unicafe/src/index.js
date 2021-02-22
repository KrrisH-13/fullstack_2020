import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text,value,ending}) => {
  return(
    <tr>
      <td>
        {text} 
      </td>
      <td>
        {value}{ending}
      </td>
    </tr>
  )
}


const Button = ({text,giveFeedback}) =>{
  return(
    <>
      <button onClick={giveFeedback}>
        {text}
      </button>
    </>
  )
}



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
      <>
        <h1>Statistics</h1>
        <p>
          No feedback given. 
        </p>
      </>
    )
  }

  return(      
  <div>
    <h1>Statistics</h1>
    <div>
      <table>
        <tbody>
          <Statistic text='Good' value={good}/>
          <Statistic text='Neutral' value={neutral}/>
          <Statistic text='Bad' value={bad}/>
          <Statistic text='All' value={total}/>
          <Statistic text='Average' value={total==0?0:average.toFixed(3)}/>
          <Statistic text='Positive' value={total==0?0:postitivePercent.toFixed(2)} ending='%'/> 
        </tbody>
      </table>
    </div>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
          <div>
            <Button text='Good' giveFeedback={()=>setGood(good+1)}/>
            <Button text='Neutral' giveFeedback={()=>setNeutral(neutral+1)}/>
            <Button text='Bad' giveFeedback={()=>setBad(bad+1)}/>
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