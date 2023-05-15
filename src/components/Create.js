import {useState} from "react";
import {Link} from 'react-router-dom';

function BookCreate(){
    const[inputs, setInputs] = useState([]);

    const addBook=(evt)=>{
        evt.preventDefault();
        fetch(`http://localhost:8080/book/add`, {
            method: "POST",
            body: JSON.stringify({
                title: inputs.title,
                year: inputs.year
            }),
            headers: {
                "Content-Type": "application/json; chardet-UTF-8",
            }
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }

    const handleChange = e =>{
        e.persist();
        setInputs(inputs =>({
            ...inputs,
            [e.target.name]: e.target.value
        }));
    }

    return(
        <>
            <form onSubmit={addBook}>
                <h3>Create Book</h3>
                <div className="mb-3">
                    <label>Title: </label>
                    <input 
                        type="text"
                        name='title'
                        className='form-control'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label>Year: </label>
                    <input 
                        type="text"
                        name='year'
                        className='form-control'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='d-grid'>
                    
                    <button type="submit" className='btn btn-primary'>Submit</button>
                    <Link to={`/`}>
                        <button className="btn">Home</button>
                    </Link>
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
        </>
    );
}

export default BookCreate;