import Rect, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // id olusturmak icin bir sinif
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [filter, setFilter] = useState("all");
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Learn React",
			completed: true,
		},
	]);
	const addTodo = (text) =>
		setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

	const deleteTodo = (id) => {
		const ctt = [...todos];
		const itemInd = ctt.findIndex((todo) => todo.id === id);
		ctt.splice(itemInd, 1);
		setTodos(ctt);
	};
	const toggleTodo = (id) => {
		const ct = [...todos];
		const itemIndex = ct.findIndex((todo) => todo.id === id);
		todos[itemIndex].completed = !todos[itemIndex].completed;
		setTodos(ct);
	};

	const values = {
		todos,
		setTodos,
		filter,
		setFilter,
		addTodo,
		toggleTodo,
		deleteTodo,
	};
	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
	const context = useContext(TodoContext);
	if (context === undefined) {
		throw new Error("useTodo hook must be call inside TodoProvider component");
	}
	return context;
};
