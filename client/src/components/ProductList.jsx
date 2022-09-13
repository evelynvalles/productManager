import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${deleteId}`)
            .then(response=>{
                props.onDelete(deleteId)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
        <h1>All Products: </h1>
        {
        props.products.map((eachProduct, i)=>{
            return(
                <div className='list' key={i}>
                <Link to={`/${eachProduct._id}`}><p key={i}>{eachProduct.title}</p></Link>
                <button onClick={()=>handleDelete(eachProduct._id)}>Delete</button>
                </div>
            )})
        }
        </div>
    )
}

export default ProductList