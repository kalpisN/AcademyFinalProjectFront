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
*/ //style={{backgroundColor: "green"}}
            //<nav className="navbar-dark bg-dark">

        <nav className="navbar navbar-dark bg-transparent justify-content-center" >

            <ul className="navBar">
                <li className={"link"}><Link to="/uusiresepti">Lisää uusi resepti</Link></li>
                <li className={"link"}><Link to="/kauppalista">Kauppalista</Link></li>
                <li className="link"><Link to="/">Kaikki reseptit</Link></li>
            </ul>
        </nav>

        //</Navbar>

    )
}

export default Navibar;