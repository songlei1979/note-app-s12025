import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>

            </ul>

        </div>
    );
}

export default Home;