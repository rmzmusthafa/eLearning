package com.rameez.test.eLearning.controllers;

import com.rameez.test.eLearning.forms.ScheduleForm;
import com.rameez.test.eLearning.forms.UserForms;
import com.rameez.test.eLearning.repo.StudentRepo;
import com.rameez.test.eLearning.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping("/listAllTutor")
    public List<UserForms> listAllTutor(){

        return userService.listAllTuto();
    }

    @GetMapping("/listAllStudent")
    public List<UserForms> listAllStudent(){

        return userService.listAllStudent();
    }

    @PostMapping ("/scheduleSession")
    public ResponseEntity<?> ScheduleSession(@RequestBody ScheduleForm scheduleForm){

        return userService.ScheduleSession(scheduleForm);
    }

    @GetMapping ("/listSessionForStudent/{studentId}")
    public List<ScheduleForm> listSessionForStudent(@PathVariable("studentId") Long studentId){

        return userService.listSessionForStudent(studentId);
    }

    @GetMapping ("/listSessionForTutor/{tutorId}")
    public List<ScheduleForm> listSessionForTutor(@PathVariable("tutorId") Long tutorId){

        return userService.listSessionForTutor(tutorId);
    }


}
