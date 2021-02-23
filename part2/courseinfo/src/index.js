import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ courseName }) => {
  return (
    <h2>{courseName}</h2>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((sum,part)=>sum + part.exercises, 0)
  return(
    <p style={{fontWeight:'bold'}}>
      Total number of exercises {sum}
    </p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part)=><Part key={part.id} part = {part}/>)}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Header courseName={course.name} />
    <Content course={course} />
    <Total course={course}/>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
    <h1>Web development curriculum</h1>
    {courses.map((course)=> <Course key={course.id} course={course} />)}
    </>
  )
  // <Course course={course} />
}



ReactDOM.render(<App />, document.getElementById('root'))