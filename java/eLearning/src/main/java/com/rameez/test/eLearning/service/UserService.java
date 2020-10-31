package com.rameez.test.eLearning.service;

import com.rameez.test.eLearning.forms.ScheduleForm;
import com.rameez.test.eLearning.forms.UserForms;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

    List<UserForms> listAllTuto();

    ResponseEntity<?> ScheduleSession(ScheduleForm scheduleForm);

    List<ScheduleForm> listSessionForStudent(Long studentId);

    List<UserForms> listAllStudent();

    List<ScheduleForm> listSessionForTutor(Long tutorId);
}
