import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // id olusturmak icin bir sinif
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [filter, setFilter] = useState("all");
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		axios
			.post("http://localhost/todoAppBackend/index.php")
			.then((response) => {
				setTodos(response.data.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	const addTodo = (data) => {
		axios
			.post("http://localhost/todoAppBackend/index.php?", { data, aid: 1 })
			.then((response) => {
				setTodos(response.data.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const deleteTodo = (id) => {
		axios
			.post("http://localhost/todoAppBackend/index.php?", {
				data: {
					status: 5,
					id,
				},
				aid: 2,
			})
			.then((response) => {
				setTodos(response.data.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const toggleTodo = (id) => {
		const ct = [...todos];
		const itemIndex = ct.findIndex((todo) => todo.id === id);
		axios
			.post("http://localhost/todoAppBackend/index.php?", {
				data: {
					status: todos[itemIndex].status == 1 ? 2 : 1,
					id,
				},
				aid: 2,
			})
			.then((response) => {
				setTodos(response.data.data);
			})
			.catch((error) => {
				console.error(error);
			});
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
