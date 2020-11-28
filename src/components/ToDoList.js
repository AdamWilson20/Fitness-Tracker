import React from "react"
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
	
	render() {
		return (
			<div>
				{this.props.todos.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</div>
		)
	}
}
export default ToDoList