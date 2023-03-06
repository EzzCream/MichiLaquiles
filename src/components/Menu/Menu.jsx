import { useEffect, useState } from 'react';
import { getDocuments } from '../../service/callFirebase.js';
import { Loading } from '../Loading/Loading.jsx';
import './menu.css';
import 'animate.css';
import { MenuList } from './MenuList.jsx';

export const Menu = () => {
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(1);

	useEffect(() => {
		const call = async () => {
			const data = await getDocuments();
			const arr = [];
			data.forEach((doc) => {
				arr.push(doc.data());
			});
			setMenu(arr);
			setLoading(0);
		};
		call();
	}, []);

	let i = 1;

	if (loading) return <Loading />;

	return (
		<div className="menu">
			<h2 className="titulo display-3 animate__animated animate__fadeInDown">
				Michi menu
			</h2>
			<div className="menu-contenido animate__animated animate__fadeInDown">
				{menu.map((comida) => (
					<MenuList key={i++} {...comida} />
				))}
			</div>
		</div>
	);
};
