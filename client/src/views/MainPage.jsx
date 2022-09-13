import React, { useEffect, useState} from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import CreateForm from '../components/CreateForm'

const MainPage = () => {
    const [products, setProducts] = useState([])

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }

    const filterList = (deleteId) =>{
        const updatedList = products.filter(
            (eachProduct)=>deleteId!== eachProduct._id)
        setProducts(updatedList)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then(response=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
    <div>
        <CreateForm onCreate={addProduct} />
        {
        products?
        <ProductList products={products} onDelete={filterList}/>:
        <h1> No products available</h1>
        }
    </div>
    )
}

export default MainPage