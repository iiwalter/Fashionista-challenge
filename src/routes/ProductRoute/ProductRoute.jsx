import React from 'react'
import Product from '../../pages/Product/Product'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
//import Loading from '../../components/Loading/Loading'

const ProductRoute = () => {
    const { productName } = useParams()
    const {colorCode} = useParams()
    const { products } = useSelector(state => state.products)

    const produto = products.filter((product) => {
        if (product.name === productName && product.code_color === colorCode) {
            return product
        }
        return '';
    })


    return (
        <Product
            key={`${produto[0].name}/${produto[0].code_color}`}
            data={produto}
        />
    )
}


export default ProductRoute;
