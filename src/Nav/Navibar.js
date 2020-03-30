import React from "react";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";


function Navibar() {

    return(
     /*  <Navbar pg="dark" variant="dark">

            <Nav className="navbar">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="uusiresepti">Lisää uusi resepti täällä</Nav.Link>
                <Nav.Link href="kauppalista">Kauppalista</Nav.Link>
            </Nav>
*/
            <nav className="navbar navbar-dark bg-dark" >
            <ul className={"navBar"}>
                <li className="link"><Link to="/">Kaikki reseptit tänne alle pinterest-tyyliin (home)</Link></li>
                <li className={"link"}><Link to="/uusiresepti">Lisää uusi resepti ja ainesosa täällä</Link></li>
                <li className={"link"}><Link to="/kauppalista">Kauppalista löytyy täältä</Link></li>
            </ul>
            </nav>
        //</Navbar>

    )
}

export default Navibar;