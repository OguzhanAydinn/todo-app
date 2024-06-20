import React from "react";
import { Formik, Field, Form } from "formik";
import validations from "./validations";
import { useTodo } from "../../../context/TodoContext";
function NewTForm() {
	const { addTodo } = useTodo();
	return (
		<Formik
			initialValues={{
				text: "",
			}}
			validationSchema={validations}
			onSubmit={(values, bag) => {
				// console.log("burda", values);
				addTodo(values.text);
				bag.resetForm();
			}}
		>
			<Form>
				<Field
					id="text"
					name="text"
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
				/>
			</Form>
		</Formik>
	);
}

export default NewTForm;
