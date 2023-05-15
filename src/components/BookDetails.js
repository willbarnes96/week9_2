import {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
function BookDetails(){
    //const id = useParams();
    const {id} = useParams();
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

    return(
        <div className='books'>
            <h1>{book.title}'s Details</h1>
            <ul className="list-group">
                <li className='list-group-item'>{book.year}</li>
            </ul>
        
                

        <Link to={`/`}>
            <button className="btn">Home</button>
        </Link>
        </div>
    );
}

export default BookDetails;