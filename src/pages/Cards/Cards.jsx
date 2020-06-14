import React from 'react'
//import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'

import './Cards.scss'

const Cards = ({ data, isLoading }) => {
    const { products } = data

    return (< div className="products__list" >
        {
            isLoading ? <span>Carregando</span> :
                products.length && products.map(product => (
                    <Card
                        key={product.image}
                        nome={product.name}
                        promocao={product.on_sale}
                        preco={product.actual_price}
                        precoAntigo={product.regular_price}
                        porcentagem={product.discount_percentage}
                        imagem={product.image}
                        code_color={product.code_color}
                    />
                ))
        }
    </div >
    )
}

export default Cards
