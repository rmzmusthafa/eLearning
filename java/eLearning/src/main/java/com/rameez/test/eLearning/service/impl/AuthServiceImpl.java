package com.rameez.test.eLearning.service.impl;

import com.rameez.test.eLearning.entity.Student;
import com.rameez.test.eLearning.entity.User;
import com.rameez.test.eLearning.forms.ApiResponse;
import com.rameez.test.eLearning.forms.LoginResponse;
import com.rameez.test.eLearning.forms.UserForms;
import com.rameez.test.eLearning.repo.StudentRepo;
import com.rameez.test.eLearning.repo.UserRepository;
import com.rameez.test.eLearning.service.AuthService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepo studentRepo;

    @Override
    public ResponseEntity<?> registerUser(UserForms userForms) {

        if (userRepository.existsByMobile(userForms.getMobile())){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false ,"Mobile already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail(userForms.getEmail())){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false ,"email already taken!"),
                    HttpStatus.BAD_REQUEST);        }

        User user = new User();
        BeanUtils.copyProperties(userForms,user);
        userRepository.save(user);

        return new ResponseEntity<ApiResponse>(new ApiResponse(true ,"User added!"),
                HttpStatus.OK);     }

    @Override
    public ResponseEntity<?> loginUser(UserForms userForms) {
       if (userRepository.existsByEmailAndPassword(userForms.getEmail(),userForms.getPassword())){
           User user = userRepository.findByEmail(userForms.getEmail());

           return new ResponseEntity<LoginResponse>(new LoginResponse(user.getRoleId(),user.getId(),true ,"Authenticated!"),
                   HttpStatus.OK);
       }
        return new ResponseEntity<ApiResponse>(new ApiResponse(false ,"Not autheticated!"),
                HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<?> registerStudent(UserForms userForms) {
        if (studentRepo.existsByMobile(userForms.getMobile())){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false ,"Mobile already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (studentRepo.existsByEmail(userForms.getEmail())){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false ,"email already taken!"),
                    HttpStatus.BAD_REQUEST);        }

        Student student= new Student();
        BeanUtils.copyProperties(userForms,student);
        studentRepo.save(student);

        return new ResponseEntity<ApiResponse>(new ApiResponse(true ,"Student added!"),
                HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> loginStudent(UserForms userForms) {
        if (studentRepo.existsByEmailAndPassword(userForms.getEmail(),userForms.getPassword())){
            Student student = studentRepo.findByEmail(userForms.getEmail());

            return new ResponseEntity<LoginResponse>(new LoginResponse(student.getRoleId(),student.getId(),true ,"Authenticated!"),
                    HttpStatus.OK);
        }
        return new ResponseEntity<ApiResponse>(new ApiResponse(false ,"Not autheticated!"),
                HttpStatus.UNAUTHORIZED);
    }


}
