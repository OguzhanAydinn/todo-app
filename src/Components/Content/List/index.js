import React from "react";
import { useTodo } from "../../../context/TodoContext";
import Item from "./Item";
let filtered = [];
function List() {
	const { todos, filter, setTodos } = useTodo();
	if (todos !== undefined) {
		filtered = todos;
		if (filter !== "all") {
			filtered = todos.filter((todo) =>
				filter === "active" ? todo.completed === false : todo.completed === true
			);
			// console.log(filtered);
		}
	}

	// console.log(todos);
	return (
		<ul className="todo-list">
			{filtered.map((todo) => (
				<Item key={todo.id} todo={todo} />
			))}
		</ul>
	);
}

export default List;
