import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateUser } from '../queries/update-user';
import toast from 'react-hot-toast';

const UserEdit = ({ editBoxPos, id, preUserData, onClose }) => {
	const queryClient = useQueryClient();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: preUserData.firstName || '',
			lastName: preUserData.lastName || '',
			email: preUserData.email || '',
		},
	});

	useEffect(() => {
		reset({
			firstName: preUserData.firstName || '',
			lastName: preUserData.lastName || '',
			email: preUserData.email || '',
		});
	}, [preUserData, reset]);

	const userMutation = useMutation({
		mutationFn: updateUser,
		onSuccess: (data) => {
			toast.success("User Updated Successfully");
			queryClient.invalidateQueries(['GET_ALL_USER']);
			onClose();
		},
		onError: () => {
			toast.error("Error While Updating User");
		},
	});

	const onSubmit = (data) => {
		userMutation.mutate({ modifiedData: data, id });
	};

	return (
		<div className="edit-form" ref={editBoxPos}>
			<h3>Edit User</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
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

				<div className="form-actions">
					<button className="submit-button" type="submit">
						Save
					</button>
					<button className="cancel-button" type="button" onClick={onClose}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserEdit;