import React, { useState } from 'react'
import { sendProductToCart, countTotalProducts } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import withoutImage from '../../image/Produto-sem-imagem.jpg'
import './Product.scss'
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage'

const Product = ({ data }) => {
    const { actual_price, code_color, image, installments, name, on_sale, regular_price,
        sizes } = data[0];

    const dispatch = useDispatch();
    const [sizeSelected, setSizeSelected] = useState('')
    const [envio, setEnvio] = useState(false)

    const addToCart = () => {
        const amount = 1
        const formatPrice = Number.parseFloat(actual_price.toString().replace("R$", "").replace(',', '.'))
        const totalWithAmount = formatPrice * amount
        const productSelected = { image, name, formatPrice, installments, sizeSelected, on_sale, regular_price, code_color, amount, totalWithAmount }
        if(sizeSelected !== ''){
            dispatch(sendProductToCart(productSelected))
            dispatch(countTotalProducts())
            setEnvio(true)
            setSizeSelected('')
        }
    }



    return (
        <div>
            <div className="product__selected" >
                {image ? <figure className="product__selected-image"><img src={image} alt="" /></figure>
                    : <figure className="product__selected-image"><img src={withoutImage} alt="" /></figure>
                }
                <div className="product__informations">
                    {on_sale ? <div className="product__promo"><strong >Promoção</strong></div> : ''}
                    <h3>{name}</h3>
                    <div className="product__payment">
                        {on_sale ? <><span className="product__value--before">{regular_price}</span>
                            <span className="product__value--after"><strong>{actual_price}</strong></span></>
                            :
                            <span className="product__value"><strong>{actual_price}</strong></span>}
                        <span>em até {installments} </span>
                    </div>
                    <div className="product__size">
                        <span >Tamanho:</span>
                        {sizes.length && sizes.map(size => size.available === true ? <button className="product__with-size" type="button"
                            key={`${size.sku}/${size.available}/${size.size}`}
                            onClick={() => setSizeSelected(size.size)}>{size.size}</button>
                            : <span className="product__without-size">{size.size}</span>)}
                    </div>
                    {sizeSelected === '' ? <div className="product__size--required"><span >*tamanho é obrigatorio</span> </div>: ''}
                    <button className="product__includes" onClick={() => addToCart()}>Comprar</button>
                </div>
            </div>
            {envio &&  <SuccessMessage />}
        </div>
    )
}



export default Product;
