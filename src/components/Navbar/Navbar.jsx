import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'

import './Navbar.scss'
import { setSearch, setCart} from '../../redux/actions';

const Navbar = () => {
    const { cartMenu } = useSelector(state => state.products)
    const { searchMenu } = useSelector(state => state.products)
    const { amountCart } = useSelector(state => state.cart)
    const dispatch = useDispatch()


    function handleClick(buttonName) {
        if (buttonName === "Buscar") {
            searchMenu === false ? dispatch(setSearch(true)) : dispatch(setSearch(false))
        } else if (buttonName === "Carrinho") {
            cartMenu === false ? dispatch(setCart(true)) : dispatch(setCart(false))
        }
        return;
    }


    return (
        <header className="navbar">
            <div className="container">
                <Link to="/">
                    <span className="navbar__logo-title">FASHIONISTA</span>
                </Link>
                <div className="topbar__icons">
                    <button className="topbar__icon-search" onClick={() => handleClick("Buscar")}>
                        <FiSearch size={18} />
                        <span>Buscar</span>
                    </button>
                    <button className="topbar__icon-bag" onClick={() => handleClick("Carrinho")}>
                        <span className="topbar__icon-bag--amount">{amountCart}</span><FiShoppingBag size={18} />
                        <span>Carrinho</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
