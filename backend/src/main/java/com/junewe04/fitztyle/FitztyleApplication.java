package com.junewe04.fitztyle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class FitztyleApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitztyleApplication.class, args);
	}

}