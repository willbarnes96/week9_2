package wb.service;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import wb.entity.Book;
import wb.repository.BookRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author willbarnes
 */
@Service
public class BookService {
    @Autowired
    BookRepository btr;
    
    //Get all books
    public List<Book> getAll(){
        return btr.findAll();
    }

    //Single Book get
    public Optional<Book> getById(int bId){
        return btr.findById(bId);
    }
    
    //Update/create b
    public Book update(Book b) {
            return btr.save(b);
    }
    
    //Delete b
    public void delete(Book b) {
            btr.delete(b);
    }
    
    
}
