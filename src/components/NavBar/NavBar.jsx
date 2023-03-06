import { Link } from 'react-router-dom';
import img from './MichiLaquiles.png';
import './NavBar.css';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img className="img-logo" src={img} alt="Michi logo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link"
								aria-current="page"
								href="#"
							>
								Menu
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Reservas
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
