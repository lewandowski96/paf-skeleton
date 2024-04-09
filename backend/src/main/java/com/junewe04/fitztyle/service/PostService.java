package com.junewe04.fitztyle.service;

import com.junewe04.fitztyle.dto.PostDTO;
import com.junewe04.fitztyle.model.Post;
import com.junewe04.fitztyle.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public ResponseEntity<?> getPosts(){
        List<Post> posts = postRepository.findAll();

        List<PostDTO> postDTOList = new ArrayList<>();

        for (Post post:posts) {
            PostDTO postDTO = new PostDTO();
            postDTO.setId(post.getId());
            postDTO.setCaption(post.getCaption());
            System.out.println(post.getCaption());
            postDTO.setMedia(post.getMedia());
            postDTO.setCreatedAt(post.getCreatedAt());
            postDTO.setUpdatedAt(post.getUpdatedAt());

            postDTOList.add(postDTO);
        }

        return new ResponseEntity<>(postDTOList, HttpStatus.OK);
    }
}
