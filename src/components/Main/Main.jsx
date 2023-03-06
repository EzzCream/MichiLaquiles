import './main.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import { getDocument } from '../../service/callFirebase.js';
import { Loading } from '../Loading/Loading.jsx';

export const Main = () => {
	const [fav, setFav] = useState();
	const [loading, setLoading] = useState(1);

	useEffect(() => {
		const getData = async () => {
			const data = await getDocument('Eia5lHKzStPDkk2TXeT0');
			if (data) {
				setFav(data);
				setLoading(0);
			}
		};
		getData();
	}, []);

	if (loading) return <Loading />;

	return (
		<div className="">
			<div className="principal">
				<h1 className="michinombre display-1 animate__animated animate__fadeInDown">
					MichiLaquiles
				</h1>
				<h2 className="michinombre display-5 animate__animated animate__fadeInDown">
					Los mejores chilaquiles de todo el condado.
				</h2>
			</div>
			<div className="contenido">
				<h2 className="titulo display-3">Favorito de la casa</h2>
				<div className="m-3 contenido-2">
					<img className="favImg" src={fav.link} alt="chilaquiles" />
					<div className="info">
						<h3 className="titulo display-6">{fav.nombre}</h3>
						<p>{fav.descripcion}</p>
						<p>Precio: {fav.precio}</p>
					</div>
				</div>
			</div>
			<div className="contenido">
				<h2 className="titulo display-3">Ubicacion</h2>
				<div className="mapa">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.6849574581!2d-99.28369721792768!3d19.391003836994617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1678085409826!5m2!1ses-419!2smx"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			<div>Oscar Antonio Rodriguez Carmona</div>
		</div>
	);
};
