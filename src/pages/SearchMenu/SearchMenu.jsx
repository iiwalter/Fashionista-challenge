import React, { useState } from 'react'
import './SearchMenu.scss'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiMeh } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/actions';
import withoutImage from '../../image/Produto-sem-imagem.jpg'


const SearchMenu = () => {
    const { products } = useSelector(state => state.products)
    const [itemsFound, setItemsFound] = useState(products)
    const dispatch = useDispatch()

    const find = (pesquisa) => {
        const nomeInputado = pesquisa.toLowerCase()
        const items = products.filter(item => item.name.toLowerCase().indexOf(nomeInputado) > -1)
        setItemsFound(items)
    }
    return (
        <>
            <div className="Search_menu">
                <div className="search__header">
                    <div className="search__header--title">
                        <FiArrowLeft size={20} onClick={() => dispatch(setSearch(false))} />
                        <div className="search__title">
                            <h4>Buscar Produtos</h4>
                        </div>
                    </div>
                    <div className="search__input">
                        <input type="text" placeholder="Buscar produto" onChange={e => find(e.target.value)} />
                    </div>
                </div>
                <div className="search_container">
                    {itemsFound.length > 0 ?
                        itemsFound.map((product) => (
                            <Link to={`/produto/${product.name.split('/')}/${product.code_color.split('/')}`} key={product.name, product.code_color} className="product"
                                onClick={() => dispatch(setSearch(false))}
                            >
                                <div className="search__product-found" >
                                    <figure className="icon__product">
                                       {product.image? <img src={product.image} alt="" /> : <img src={withoutImage} alt="" />}
                                    </figure>
                                    <div className="search_informations-product">
                                        <div className="product_name">
                                            <span>{product.name}</span>
                                        </div>
                                        <div className="product__values">
                                            {product.on_sale ? <><span className="product__pricing-before">{product.regular_price}</span> <strong className="product__pricing">{product.actual_price}</strong></>
                                                : <strong className="product__pricing">{product.actual_price}</strong>
                                            }
                                            <span className="search__parceled">{product.installments}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                        : itemsFound.length === 0 ? <div className="search__not-found">
                            <span>Nenhum produto encontrado </span>
                            <FiMeh size={20} />
                        </div>
                            : ''
                    }
                </div>
            </div>
        </>
    )
}

export default SearchMenu