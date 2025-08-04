import React, { useEffect, useRef, useState } from 'react';
import { GetAllUsers } from '../queries/get-users';
import ErrorState from '../reusable-components/ErrorState';
import { Edit2, LoaderCircle, Trash2 } from 'lucide-react';
import UserEdit from './UserEdit';
import AddButton from '../reusable-components/AddButton';
import Userform from './UserForm';
import { deleteUser } from '../queries/delete-user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
	const queryClient = useQueryClient();
	const editBoxPos = useRef();
	const navigate = useNavigate();
  const { isLoading, error, data, isSuccess } = GetAllUsers();
	const [addBoxOpen,setAddBoxOpen] = useState(false);
	const [open,setIsOpen] = useState(false);
	const [editId,setEditId] = useState(null);
	const [userToEdit,setUserToEdit] = useState(null);
	const handleUpdate = (id,user) => {
		setIsOpen(true);
		setEditId(id);
		setUserToEdit(user);
	}
	const handleClose = () => {
    setIsOpen(false);
    setEditId(null);
    setUserToEdit(null);
  };
	const handleAdd = ()=>{
		setAddBoxOpen(prev=>!prev);
	}
	const deleteMutation = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			toast.success("User Deleted successfully");
			queryClient.invalidateQueries(['GET_ALL_USER']);
		},
		onError: () => {
			toast.error("User can not deleted");
		}
	})
	const handleDelete = (id)=>{
		deleteMutation.mutate(id);
	}
	const executeScroll = () => {
		if (editBoxPos.current) {
			editBoxPos.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	useEffect(()=>{
		executeScroll()
	},[open])
  return (
		<>
    <div className="user-list-container">
      <h2>Users</h2>
      {isLoading && <div className="loading-message"><LoaderCircle className='loading'/></div>}
      {error && (
        <ErrorState
          message={error?.message ?? "Error Fetching Users"}
          description="No Data Found | Try To Check Your Network"
        />
      )}
      {isSuccess && data?.length > 0 && (
        <div className="user-table">
          <div className="user-table-header">
            <span>Name</span>
            <span>Email</span>
            <span>Created At</span>
            <span>Edit</span>
            <span>Delete</span>
          </div>
          <ul className="user-list">
            {data.map((user, index) => (
              <li key={index} className="user-item">
                <span className='pointer' onClick={()=>navigate(`/user?id=${user.id}`)}>{user.firstName} {user.lastName}</span>
                <span>{user.email}</span>
                <span>{new Date(user.created_at).toLocaleDateString()}</span>
                <span className="edit-icon">
                  <Edit2 onClick={()=>handleUpdate(user.id,user)} size={20} />
                </span>
                <span className="delete-icon">
                  <Trash2 color='red' onClick={()=>handleDelete(user.id)} size={20} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isSuccess && !data?.length && <div className="no-data">No users found.</div>}
			<AddButton handleAdd={handleAdd} open={addBoxOpen} />
			{addBoxOpen && <Userform/>}
			{open && <UserEdit editBoxPos={editBoxPos} id={editId} preUserData={userToEdit} onClose={handleClose}/>}
    </div>
		</>
  );
};

export default UserList;