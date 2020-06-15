import React from 'react'
import './CartMenu.scss'
import { FiArrowLeft, FiTrash, FiPlus, FiMinus, FiMeh } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { setCart, minusAmountCart, sumAmountCart, deleteProductOfCart } from '../../redux/actions';


const CartMenu = () => {
    const { productsCart, totalCart, amountCart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <div className="content">
            <div className="cart__no-cliqued" onClick={() => dispatch(setCart(false))}></div>
            <div className='cart_menu'>
                <div className="cart__header">
                    <FiArrowLeft size={20} onClick={() => dispatch(setCart(false))} />
                    <div className="cart__title">
                        <h4>Carrinho:  {amountCart ? ` ${amountCart}` : 'nenhum'} produto{amountCart > 1 ? 's' : ''}</h4>
                    </div>
                </div>
                <div className="cart_container">
                    {productsCart.length > 0 ? productsCart.map((product, index) => (
                        <div key={`${product.name}-${index}`}>
                            <div className="product__cart" >

                                <figure className="icon__product">
                                    <img src={product.image} alt="" />
                                </figure>
                                <div className="product__informations-cart">
                                    <div className="product_content-cart">
                                        <span>{product.name}</span>
                                        <div className="product__size-cart"><span>Tam: {product.sizeSelected}</span></div>
                                    </div>
                                    <div className="product__values-cart">
                                        <span className="product__pricing"><strong>R$ {product.formatPrice}</strong></span>
                                    </div>
                                    <span className="product__parceled">{product.installments}</span>
                                    <div className="cart__icons">
                                        {product.amount === 1 ? <FiMinus size={15} cursor="pointer" /> : <FiMinus size={15} cursor="pointer" onClick={() => dispatch(minusAmountCart(index, product))} />}
                                        <span className="cart__increment"> {product.amount}</span>
                                        <FiPlus size={15} cursor="pointer" onClick={() => dispatch(sumAmountCart(index, product))} />
                                        <FiTrash className="icon__trash" size={15} cursor="pointer" color="red" onClick={() => dispatch(deleteProductOfCart(index, product))} />
                                    {console.log(product.totalWithAmount)}
                                    </div>
                                </div>
                            </div>
                            <div className="footer__cart">
                                <h4>Subtotal - R$: {totalCart ? totalCart.toFixed(2) : "0,00"}</h4>
                            </div>
                        </div>
                    ))
                        :
                        <div className="cart_without-products"><span>Carrinho vazio</span><FiMeh size={20} /></div>}
                </div>
            </div>
        </div>
    )
}
export default CartMenu