package com.junewe04.fitztyle.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@Document(collection = "posts")
public class Post {

    @Id
    private String id;
    private String media;
    private String caption;
    private Date createdAt;
    private Date updatedAt;
}
