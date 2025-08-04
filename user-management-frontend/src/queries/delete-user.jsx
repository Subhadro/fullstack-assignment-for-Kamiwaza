const BASE_URL = "http://127.0.0.1:8000";

export const deleteUser = async (id) => {
	return fetch(`${BASE_URL}/api/users/${id}`, {
		method: "DELETE",
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Error in delete user", response.body);
		}
		return response.json();
	});
};