import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AdminMenu } from './components/AdminMenu/AdminMenu';
import { RolesList } from './Pages/Roles/RolesList';
import { RolesCreate } from './Pages/Roles/RolesCreate';
import { ClientesCreate } from './Pages/Clientes/ClientesCreate';
import { ClienteList } from './Pages/Clientes/ClientesList';

export default function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<AdminMenu />
				<div className='appContent'>
					<Routes>
						<Route path='/home' element={<h1>Some</h1>} />
						<Route path='/roles' element={<RolesList />} />
						<Route path='/roles/create' element={<RolesCreate />} />
						<Route path='/clientes/create' element={<ClientesCreate />} />
						<Route path='/clientes' element={<ClienteList />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
