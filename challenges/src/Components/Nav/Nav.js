import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/reto1">Reto 1</Link>
                </li>
                <li>
                    <Link to="/reto2">Reto 2</Link>
                </li>
            </ul>
        </nav>
    )
}