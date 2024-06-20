import * as Yup from "yup";

const validations = Yup.object().shape({
	text: Yup.string().required("Bu Alan Zorunlu"),
});

export default validations;
