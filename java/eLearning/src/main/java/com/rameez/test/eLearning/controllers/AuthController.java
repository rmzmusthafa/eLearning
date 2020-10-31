package com.rameez.test.eLearning.controllers;

import com.rameez.test.eLearning.forms.ApiResponse;
import com.rameez.test.eLearning.forms.UserForms;
import com.rameez.test.eLearning.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.RequestWrapper;
import javax.xml.ws.Response;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/registerTutor")
    public ResponseEntity<?> registerUser(@RequestBody UserForms userForms){
        return authService.registerUser(userForms);
    }

    @PostMapping("/loginTutor")
    public ResponseEntity<?> loginUser(@RequestBody UserForms userForms){
        return authService.loginUser(userForms);
    }

    @PostMapping("/registerStudent")
    public ResponseEntity<?> registerStudent(@RequestBody UserForms userForms){
        return authService.registerStudent(userForms);
    }

    @PostMapping("/loginStudent")
    public ResponseEntity<?> loginStudent(@RequestBody UserForms userForms){
        return authService.loginStudent(userForms);
    }


}
