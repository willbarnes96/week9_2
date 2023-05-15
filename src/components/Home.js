import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [error, setError] =  React.useState(null);
    const [isLoaded, setIsLoaded] =  React.useState(false);
    const [books, setBooks] =  React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:8080/book/getall")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBooks(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

      const deleteBook=async(id)=>{
        console.log("id: " + id);

        await fetch(`http://localhost:8080/book/delete/${id}`, {
            method: "DELETE"     
        })
        .then(res => res.json)
        .then(json => console.log(json));
        window.location.reload();

     }

      const updateBook=()=>{
        console.log("Edit book info");
        }


if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div className='book-list-div'>
                <h1>Book List</h1>
            <table className='table'>
                <tbody>
                    {books.map(book =>(
                        <tr key={book.id}>
                            <th scope='row'>{book.id}</th>
                            <td>
                                <h5>{book.title}</h5>
                            </td>
                            <td>
                                <Link to={`book/${book.id}`}>
                                    <button className='btn btn-dark'>Show Details</button>
                                </Link>
                            </td>
                            <td>
                                <Link to={`edit/${book.id}`}>
                                    <button onClick={updateBook} className='btn btn-dark'>Edit</button>
                                </Link>
                                <button onClick={()=>deleteBook(book.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`create/`}>
                <button className='btn btn-dark'>Add New Book</button>
            </Link>
            </div>

        );
    }
}
export default Home;