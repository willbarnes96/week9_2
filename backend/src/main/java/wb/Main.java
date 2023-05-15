package wb;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import wb.entity.Book;
import wb.repository.BookRepository;

@SpringBootApplication
public class Main {

	@Autowired
	BookRepository bRepo;
	
	
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	@PostConstruct
	public void initBooks() {
            List<Book> books = Stream.of(
                new Book("moby dick","1851"),
                new Book("sound and the fury","1931")
            ).collect(Collectors.toList());
            bRepo.saveAll(books);
        
	}
}
