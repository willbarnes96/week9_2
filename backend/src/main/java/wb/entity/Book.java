package wb.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "books")
@Entity
public class Book {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
        
	private String title;
	private String year;
	
	public Book(String title, String year) {
            this.title = title;
            this.year = year;
	}
	
	
}
