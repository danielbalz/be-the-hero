import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'; 

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    function handleRegister(e) {
        e.preventDefault();
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value= {name}
                        onChange= {e => setName(e.target.value)}
                    >
                    </input>
                    <input 
                        type="email" placeholder="E-mail"
                    >

                    </input>
                    <input placeholder="Whatsapp"></input>
                    <div className="input-group">
                        <input placeholder="Cidade"></input>
                        <input placeholder="UF" style={{width: 80}}></input>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>


                </form>
            </div>
        </div>
    );
}