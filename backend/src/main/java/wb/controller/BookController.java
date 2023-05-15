package wb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import wb.entity.Book;
import wb.service.BookService;

@CrossOrigin("*")
@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	private BookService btr;

	@GetMapping("/")
	public String home() {
		return "This is home";
	}

        //add
        @PostMapping("/add")
        public Book addBook(@RequestBody @Validated Book b) {
            return btr.update(b);
        }
        
        //deletebyID
        @DeleteMapping(value={"/delete/{id}"})
        public void deleteBookById(@PathVariable("id") Integer id) {
            Optional<Book> q = btr.getById(id);
            btr.delete(q.get());
//            return "Question id "+id+" deleted successfully";
	}
        
        //getall
        @GetMapping("/getall")
        public List<Book> getAllBooks() {
            return btr.getAll();
        }
        
        //getbyid
        @GetMapping("/getbyid/{id}")
        public Optional<Book> getById(@PathVariable("id") Integer id) {
            return btr.getById(id);
        }
        
        //update
	@PutMapping("/update")
	public Book updateBook(@RequestBody Book book) {
            System.out.println("Book updated");
            return btr.update(book);
            
	}

}
