import React from "react";
import {Link} from "react-router-dom";


function Navbar() {

    return(

        <nav>
            <ul className={"navBar"}>
                <li className={"link"}><Link to="/">Kaikki reseptit tänne alle pinterest-tyyliin (home)</Link></li>
                <li className={"link"}><Link to="/uusiresepti">Lisää uusi resepti ja ainesosa täällä</Link></li>
                <li className={"link"}><Link to="/kauppalista">Kauppalista löytyy täältä</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar;