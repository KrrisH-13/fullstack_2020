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
  
  export default Course;