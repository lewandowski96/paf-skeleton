package com.junewe04.fitztyle.controller;

import com.junewe04.fitztyle.dto.LoginDTO;
import com.junewe04.fitztyle.dto.SignUpDTO;
import com.junewe04.fitztyle.model.User;
import com.junewe04.fitztyle.repository.UserRepository;
import com.junewe04.fitztyle.security.TokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users/")
public class UserController {

    @Autowired
    private UserDetailsManager userDetailsManager;

    @Autowired
    TokenGenerator tokenGenerator;

    @Autowired
    DaoAuthenticationProvider daoAuthenticationProvider;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody SignUpDTO signupDTO) {
        User user = new User(signupDTO.getUsername(), signupDTO.getPassword());
        userDetailsManager.createUser(user);

        System.out.println(user);

        Authentication authentication = UsernamePasswordAuthenticationToken.authenticated(user, signupDTO.getPassword(), Collections.EMPTY_LIST);

        return ResponseEntity.ok(tokenGenerator.createToken(authentication));
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO loginDTO) {
        Authentication authentication = daoAuthenticationProvider.authenticate(UsernamePasswordAuthenticationToken.unauthenticated(loginDTO.getUsername(), loginDTO.getPassword()));
        System.out.println(authentication);
        Optional<User> existingUser = userRepository.findByUsername(loginDTO.getUsername());
//        if(existingUser.isPresent()) {
//            if (existingUser.get().isDeleted() == true) {
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Account deleted");
//            }
//        }
        return ResponseEntity.ok(tokenGenerator.createToken(authentication));
    }

    @GetMapping("/{id}")
    @PreAuthorize("#user.id == #id")
    public ResponseEntity user(@AuthenticationPrincipal User user, @PathVariable String id) {
        return ResponseEntity.ok(userRepository.findById(id).orElseThrow());
    }
}
