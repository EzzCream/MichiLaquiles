export const MenuList = ({ nombre, precio, link }) => {
	return (
		<div>
			<div className="card">
				<div className="card-image">
					<img className="img-list" src={link} alt="" />
				</div>
				<div className="category"> {nombre} </div>
				<div className="heading">
					{' '}
					<p>Precio: {precio}</p>
				</div>
			</div>
		</div>
	);
};
