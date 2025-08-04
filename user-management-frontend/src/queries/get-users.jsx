import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://127.0.0.1:8000";

export const GetAllUsers = () => {
	const { isLoading, error, data, isSuccess } = useQuery({
		queryKey: ['GET_ALL_USER'],
		queryFn: () =>
			fetch(`${BASE_URL}/api/users`).then((res) =>
				res.json(),
			),
	})
	return { isLoading, error, data, isSuccess };
}
export const GetSingleUser = ({id}) => {
	const { isLoading,isError, error, data, isSuccess } = useQuery({
		queryKey: ['GET_SINGLE_USER',id],
		queryFn: () =>
			fetch(`${BASE_URL}/api/users/${id}`).then((res) =>
				res.json(),
			),
	})
	return { isLoading,isError, error, data, isSuccess };
}