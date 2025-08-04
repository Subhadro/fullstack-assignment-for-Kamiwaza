import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-brand">User App</div>
			<div className="navbar-links">
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
				<Link to="/">Services</Link>
				<Link to="/">Contact</Link>
			</div>
		</div>
	)
}

export default Navbar