package com.junewe04.fitztyle.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PostDTO {

    private String id;
    private String media;
    private String caption;
    private Date createdAt;
    private Date updatedAt;
}
