import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

export const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	return (
		<FormDataContext.Provider value={[formData, setFormData]}>
			{children}
		</FormDataContext.Provider>
	);
};
