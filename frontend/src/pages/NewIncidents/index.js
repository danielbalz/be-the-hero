import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function NewIncidents() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                
                <form>
                    <input placeholder="Título do caso"></input>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em reais"></input>
                    <button className="button" type="submit">Cadastrar</button>


                </form>
            </div>
        </div>
    );
}