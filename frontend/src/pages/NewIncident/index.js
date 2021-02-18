import React from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Cadastre um novo caso</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16" color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do Caso" />
                    <textarea placeholder="Descriçao" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident