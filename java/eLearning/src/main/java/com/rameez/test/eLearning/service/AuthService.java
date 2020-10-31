package com.rameez.test.eLearning.service;

import com.rameez.test.eLearning.forms.ApiResponse;
import com.rameez.test.eLearning.forms.UserForms;
import org.springframework.http.ResponseEntity;

import javax.xml.ws.Response;

public interface AuthService {

    ResponseEntity<?> registerUser(UserForms userForms);

    ResponseEntity<?> loginUser(UserForms userForms);

    ResponseEntity<?> registerStudent(UserForms userForms);

    ResponseEntity<?> loginStudent(UserForms userForms);
}
