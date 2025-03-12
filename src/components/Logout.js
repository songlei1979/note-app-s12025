import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Logout(props) {
    const [token, setToken] = useState("")
    const [Err, setErr] = useState("")

    useEffect(() => {
        setToken(localStorage.getItem("Token"));
    }, [token]);

    function logout() {
        let data = '';

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl+'/api/logout/',
            headers: {
                'Authorization': 'Token ' + token
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                localStorage.removeItem("Token");
                window.location.href = "/login";
            })
            .catch((error) => {
                console.log(error);
                setErr(error.response.data);
            });

    }

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={logout}>Logout</button>
            <p>{Err}</p>
        </div>
    );
}

export default Logout;