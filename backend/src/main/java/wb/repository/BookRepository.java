package wb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import wb.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{

}