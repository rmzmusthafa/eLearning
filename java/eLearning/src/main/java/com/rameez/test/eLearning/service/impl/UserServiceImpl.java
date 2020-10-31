package com.rameez.test.eLearning.service.impl;

import com.rameez.test.eLearning.entity.Schedule;
import com.rameez.test.eLearning.entity.Student;
import com.rameez.test.eLearning.entity.User;
import com.rameez.test.eLearning.enums.StatusEnum;
import com.rameez.test.eLearning.enums.UserType;
import com.rameez.test.eLearning.forms.ApiResponse;
import com.rameez.test.eLearning.forms.ScheduleForm;
import com.rameez.test.eLearning.forms.UserForms;
import com.rameez.test.eLearning.repo.ScheduleRepository;
import com.rameez.test.eLearning.repo.StudentRepo;
import com.rameez.test.eLearning.repo.UserRepository;
import com.rameez.test.eLearning.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.xml.ws.soap.Addressing;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public List<UserForms> listAllTuto() {
        List<User> users = new ArrayList<>();
                userRepository.findAll().forEach(users::add);
        List<UserForms> userForms = new ArrayList<>();
        for (User user: users) {
            UserForms userForm = new UserForms();
            BeanUtils.copyProperties(user,userForm);
            userForms.add(userForm);
        }
        return userForms;
    }

    @Override
    public ResponseEntity<?> ScheduleSession(ScheduleForm scheduleForm) {
        Schedule schedule = new Schedule();
        BeanUtils.copyProperties(scheduleForm,schedule);
        schedule.setStatusId(StatusEnum.ACTIVE.getId());
        schedule.setTurorId(scheduleForm.getTutorId());
        scheduleRepository.save(schedule);
        return new ResponseEntity<ApiResponse>(new ApiResponse(true ,"Session scheduled!"),
                HttpStatus.OK);
    }

    @Override
    public List<ScheduleForm> listSessionForStudent(Long studentId) {
        List<ScheduleForm> scheduleForms = new ArrayList<>();
        List<Schedule> schedules = scheduleRepository.findByStudentIdAndStatusId(studentId,StatusEnum.ACTIVE.getId());
        for (Schedule schedule : schedules){
            ScheduleForm scheduleForm = new ScheduleForm();
            User user = userRepository.findById(schedule.getTurorId()).get();
            scheduleForm.setTutorName(user.getFirstName() +" "+user.getLastName());
            scheduleForm.setTime(schedule.getTime());
            scheduleForms.add(scheduleForm);
        }
        return scheduleForms;
    }

    @Override
    public List<UserForms> listAllStudent() {
        List<Student> students = new ArrayList<>();
        studentRepo.findAll().forEach(students::add);
        List<UserForms> userForms = new ArrayList<>();
        for (Student user: students) {
            UserForms userForm = new UserForms();
            BeanUtils.copyProperties(user,userForm);
            userForms.add(userForm);
        }
        return userForms;
    }

    @Override
    public List<ScheduleForm> listSessionForTutor(Long tutorId) {
        List<ScheduleForm> scheduleForms = new ArrayList<>();
        List<Schedule> schedules = scheduleRepository.findByTurorIdAndStatusId(tutorId,StatusEnum.ACTIVE.getId());
        for (Schedule schedule : schedules){
            ScheduleForm scheduleForm = new ScheduleForm();
            Student user = studentRepo.findById(schedule.getStudentId()).get();
            scheduleForm.setTutorName(user.getFirstName() +" "+user.getLastName());
            scheduleForm.setTime(schedule.getTime());
            scheduleForms.add(scheduleForm);
        }
        return scheduleForms;
    }


}
