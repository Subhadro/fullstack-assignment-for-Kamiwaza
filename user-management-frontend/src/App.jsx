import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import { Toaster } from 'react-hot-toast';
import UserDetails from './components/UserDetails';
import Layout from './Layout';

function App() {
	return (
		// <div>
		// 	<UserList/>
		// 	<Userform/>
		// </div>
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<UserList />} />
						<Route path='/user' element={<UserDetails />} />	
					</Route>
				</Routes>
			</Router>
			<Toaster />
		</>
	);
}

export default App;
