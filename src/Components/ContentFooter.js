import React from "react";
import { useTodo } from "../context/TodoContext";

function ContentFooter() {
	const { todos, filter, setFilter, setTodos } = useTodo();
	const clearCompeted = () =>
		setTodos((prev) => prev.filter((todo) => !todo.completed));

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{todos.length} </strong>
				item{todos.lenght > 1 && "s"} left
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
