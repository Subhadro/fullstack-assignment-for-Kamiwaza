import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { createUser } from '../queries/create-user'
import toast from 'react-hot-toast'

const Userform = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const queryClient = useQueryClient();
	const userMutation = useMutation({
		mutationFn: createUser,
		onSuccess: (data) => {
			toast.success("User created successfully");
			queryClient.invalidateQueries(['GET_ALL_USER']);
		},
		onError: () => {
			toast.error("Check credentials | Error in user creation");
		}
	})
	const onSubmit = (data) => {
		userMutation.mutate(data);
	}
	return (
		<div className="edit-form">
			<h3>Add User</h3>
			<form className="user-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<input
						className={`form-input ${errors.firstName ? 'input-error' : ''}`}
						placeholder="Enter first name"
						{...register("firstName", { required: true, maxLength: 20 })}
					/>
					{errors.firstName && (
						<span className="error-message">
							{errors.firstName.type === 'required'
								? 'First name is required'
								: 'First name must be 20 characters or less'}
						</span>
					)}
				</div>

				<div className="form-group">
					<input
						className={`form-input ${errors.lastName ? 'input-error' : ''}`}
						placeholder="Enter last name"
						{...register("lastName", { required: true, maxLength: 20 })}
					/>
					{errors.lastName && (
						<span className="error-message">
							{errors.lastName.type === 'required'
								? 'Last name is required'
								: 'Last name must be 20 characters or less'}
						</span>
					)}
				</div>

				<div className="form-group">
					<input
						className={`form-input ${errors.email ? 'input-error' : ''}`}
						placeholder="Enter email"
						{...register("email", {
							required: true,
							pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
						})}
					/>
					{errors.email && (
						<span className="error-message">
							{errors.email.type === 'required'
								? 'Email is required'
								: 'Please enter a valid email'}
						</span>
					)}
				</div>

				<button className="submit-button" type="submit">
					Submit
				</button>
			</form>
		</div>
	)
}

export default Userform
