import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { GetSingleUser } from '../queries/get-users';
import ErrorState from '../reusable-components/ErrorState';
import { LoaderCircle } from 'lucide-react';

const UserDetails = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { isLoading, error, data, isSuccess } = GetSingleUser({ id: searchParams.get('id') ?? "" });

	if (isLoading) return <div className="loading-message"><LoaderCircle className='loading'/></div>
	if (error) return
	<ErrorState
		message={error?.message ?? "Error Fetching Users"}
		description="No Data Found | Try To Check Your Network"
	/>

	return (
		<div className="user-card">
			<div className="user-avatar">
				{data?.firstName?.[0]}{data?.lastName?.[0]}
			</div>
			<div className="user-info">
				<h2 className="user-name">{data?.firstName} {data?.lastName}</h2>
				<p className="user-email">{data?.email}</p>
				<div className="user-meta">
					<div className="meta-item">
						<span className="meta-label">Created At:</span>
						<span className="meta-value">{new Date(data?.created_at).toLocaleDateString()}</span>
					</div>
					<div className="meta-item">
						<span className="meta-label">Updated At:</span>
						<span className="meta-value">{new Date(data?.updated_at).toLocaleDateString()}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDetails
