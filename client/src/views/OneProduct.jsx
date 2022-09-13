import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const OneProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const updateLink = (e) => {
        e.preventDefault();
        navigate(`/${product._id}/edit`)
    }

    return (
    <div className='product'>
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={updateLink}>Edit</button>
    </div>
    )
}

export default OneProduct
