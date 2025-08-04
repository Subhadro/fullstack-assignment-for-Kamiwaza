const BASE_URL = "http://127.0.0.1:8000";

export const updateUser = async ({modifiedData,id}) => {
	return fetch(`${BASE_URL}/api/users/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(modifiedData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error("error in update user",response.body);
		}
		return response.json();
	});
};