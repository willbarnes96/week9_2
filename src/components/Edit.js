import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

function BookUpdate(){
    const {id} = useParams();
    const[inputs, setInputs] = useState([]);
    const[book, setBook] = useState('');
    
    useEffect(()=>{
        console.log("Id: "+id);
        fetch(`http://localhost:8080/book/getbyid/${id}`)
        .then(res => res.json())
        .then(
            (data)=>{
                setBook(data);
            }
        )
    }, [])

    const updateBook=(evt)=>{
        evt.preventDefault();
        fetch(`http://localhost:8080/book/update`, {
            method: "PUT",
            body: JSON.stringify({
                id: book.id,
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

    const handleChange=(e)=>{
        e.persist();
        setInputs(inputs =>({
            ...inputs,
            [e.target.name]: e.target.value
        }));
    }

    return(
        <>
            <form onSubmit={updateBook}>
                <h3>Update Book</h3>
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
            </form>
        </>
    );
}

export default BookUpdate;