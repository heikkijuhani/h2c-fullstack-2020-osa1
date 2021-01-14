import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      Number of exercises {exercises1 + exercises2 + exercises3}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
