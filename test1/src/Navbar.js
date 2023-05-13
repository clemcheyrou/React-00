import { Link } from 'react-router-dom'

const Navbar = () => {
	return ( 
		<nav className="navbar">
			<ul className="liens">
				<li><Link to="/" className="lien">Accueil</Link></li>
				<li><Link to="/ajouter" className="lien">Creer un article</Link></li>
			</ul>
		</nav>
	 );
}
 
export default Navbar;