import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map(()=> 0));

  const selectNext = (max, currentIndex)=>{
    var randomIndex = currentIndex;
    // console.log('current',current)
    // Select a next anecdote which is not same as the current selected anecdote.
    do {
      randomIndex = Math.floor(Math.random()*max);
    } while (randomIndex==currentIndex);
    
    // console.log('selected', randomIndex)
    setSelected(randomIndex);
  }
  
  // Function to update votes cast for anecdotes
  const castVote = (currentIndex)=>{
    var updatedVotes = [...votes];
    updatedVotes[currentIndex] += 1;
    setVotes(updatedVotes);
    // console.log(votes)
    // console.log(updatedVotes)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <button onClick={() => selectNext(anecdotes.length, selected)}>Next anecdote</button>
      <button onClick={() => castVote(selected)}>Vote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)