const BASE_URL = "http://127.0.0.1:8000";

export const createUser = async (newUser) => {
	return fetch(`${BASE_URL}/api/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	}).then((response) => {
		if (!response.ok) {
			throw new Error("error in create user",response.body);
		}
		return response.json();
	});
};