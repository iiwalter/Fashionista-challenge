import React, { useEffect } from 'react'
import Cards from '../../pages/Cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions'
import { request } from '../../redux/modules/request'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'



const HomeRoute = () => {

    const { products } = useSelector(state => state)
    const { loading } = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const prods = await request()
            const productsSort = prods.sort((a, b) => { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) })
            dispatch(getProducts(productsSort))
        }
        fetchData()
    }, [dispatch])

    return (
        <>
            {loading ? <Loading /> : <Cards data={products} />}
            <Footer />
        </>
    )
}
export default HomeRoute