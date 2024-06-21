import React from "react";
import { useTodo } from "../context/TodoContext";

let filtered = [];
function ContentFooter() {
	const { todos, filter, setFilter, setTodos } = useTodo();
	if (todos !== undefined) {
		filtered = todos;
		if (filter !== "all") {
			filtered = todos.filter((todo) =>
				filter === "active" ? todo.completed === false : todo.completed === true
			);
		}
	}
	const clearCompeted = () =>
		setTodos((prev) => prev.filter((todo) => !todo.completed));

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{filtered.length} </strong>
				item{filtered.lenght > 1 && "s"} left
			</span>

			<ul className="filters">
				<li>
					<a
						href="#/"
						onClick={() => setFilter("all")}
						className={filter === "all" ? "selected" : ""}
					>
						All
					</a>
				</li>
				<li>
					<a
						href="#/"
						onClick={() => setFilter("active")}
						className={filter === "active" ? "selected" : ""}
					>
						Active
					</a>
				</li>
				<li>
					<a
						href="#/"
						onClick={() => setFilter("completed")}
						className={filter === "completed" ? "selected" : ""}
					>
						Completed
					</a>
				</li>
			</ul>

			<button className="clear-completed" onClick={() => clearCompeted()}>
				Clear completed
			</button>
		</footer>
	);
}

export default ContentFooter;
