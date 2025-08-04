import { MinusCircle, PlusCircle } from 'lucide-react'
import React from 'react'

const AddButton = ({ handleAdd ,open}) => {

	return (
		<div className='container'>
			<button
				onClick={handleAdd}
				className="add-button"
				aria-label="Add more users"
			>
				{!open ? <PlusCircle /> : <MinusCircle/>}
				Add Users
			</button>
		</div>
	)
}

export default AddButton