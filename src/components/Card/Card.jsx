import React from 'react'
//import { Link } from 'react-router-dom'
import './Card.scss'
import { Link } from 'react-router-dom'
import withoutImage from '../../image/Produto-sem-imagem.jpg'


const Card = ({ nome, promocao, preco, precoAntigo, porcentagem, imagem, code_color}) => (
    <>
        <div className="product__card">
            <Link to={`/produto/${nome.split('/')}/${code_color.split('/')}`} key={nome, code_color} className="product">
                <figure className="product__image">
                    {porcentagem? <span className="product__promotion">{porcentagem}</span> : ''}
                    {imagem ? <img src={imagem} alt="" /> : <img src={withoutImage} alt="" /> }
                </figure>

                <div className="product__dados">
                    <span className="product__name">{nome}</span>
                    <div className="product__prices">
                        {promocao ? <span className="product__price-before">{precoAntigo}</span> : ''}  <span className="product__price">{preco}</span>
                    </div>
                </div>
            </Link>
        </div>
    </>
)

export default Card
