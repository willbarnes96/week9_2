import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails"
import BookCreate from "./components/Create";
import BookUpdate from "./components/Edit";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<BookCreate/>}/>
        <Route path="/edit/:id" element={<BookUpdate/>}/>
        <Route path="/book/:id" element={<BookDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
