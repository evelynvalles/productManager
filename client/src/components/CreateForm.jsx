import React, {useState} from "react";
import axios from "axios"

const CreateForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res)
                props.onCreate(res.data);
            })
            .catch(err=>console.log(err))
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
                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default CreateForm;