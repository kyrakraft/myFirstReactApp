//alert('yay')

// var React = require('react')
// var ReactDOM = require('react-dom')
import React from 'react'
import ReactDOM from 'react-dom'


let dummyData = [
  {taskText: "a", completed: false}, {taskText: "b", completed: true}, {taskText: "c", completed: false}
]

class TodoList extends React.Component{

  render(){
    return(
      <ul>
        {dummyData.map((item) => <Todo task={item}/>)}
      </ul>
    )
  }
}

class Todo extends React.Component{

  render(){
    console.log(this.props.task.completed);

return(
  <div>
    {this.props.task.completed ?
        <li> <button className="x">X</button> {this.props.task.taskText} </li>
     :
      <li> <button className="x">X</button> <strike> {this.props.task.taskText} </strike> </li> }
    </div>
  )

  }
}

class InputLine extends React.Component{

  render(){
    return(
    <div className="inputGroup">
      <input type="text" value="asdf" className="newInput"/>
      <button className="addButton">Add todo</button>
    </div>

  )}
}

class TodoApp extends React.Component{
  render() {
    return(
    <div className="todoApp">
      <InputLine/>
      <TodoList/>
    </div>
  )}
}



ReactDOM.render(<TodoApp />, document.getElementById('root'));
