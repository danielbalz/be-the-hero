import React from 'react';
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (       
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"></img>

                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua Id"/>
                    <button className="button" type="Submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}