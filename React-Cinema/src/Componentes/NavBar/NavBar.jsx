import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='sobre'>SOBRE</Link></li>
                    <li><Link to='filmes'>FILMES</Link></li>
                    <li><Link to='contato'>CONTATO</Link></li>
                </ul>
            </nav>
        </>
     );
}

export default NavBar;