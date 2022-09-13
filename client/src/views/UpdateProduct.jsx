import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => {
                const product = response.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate(`/${res.data._id}`)
            })
            .catch(err => console.log(err))
        clearForm();
    }

    const clearForm = () => {
        setTitle(""); setPrice(""); setDescription("")
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <div className="formBox">
                <form onSubmit={submitHandler}>
                    <div className="inputBox">
                        <label>Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                    </div>
                    <div className="inputBox">
                        <label>Price</label>
                        <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}></input>
                    </div>
                    <div className="inputBox">
                        <label>Description</label>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                    </div>
                    <button>Edit Product</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct