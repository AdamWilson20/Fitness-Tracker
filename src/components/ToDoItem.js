import React from "react"


function ToDoItem(props){
	

	<input type="checkbox"
	checked={this.props.todo.completed}
	onChange={() => console.log("clicked")}/>

	return <li>{props.todo.title}</li>

}

export default ToDoItem