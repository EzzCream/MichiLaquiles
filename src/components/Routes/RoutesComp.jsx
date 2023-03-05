import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main.jsx';
import { NavBar } from '../NavBar/NavBar.jsx';

export const RoutesComp = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="*" element={<h1>Page not found.</h1>} />
				<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};
