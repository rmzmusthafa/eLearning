package com.rameez.test.eLearning.repo;

import com.rameez.test.eLearning.entity.Student;
import com.rameez.test.eLearning.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends CrudRepository<Student,Long> {
   
    boolean existsByMobile(String mobile);

    boolean existsByEmail(String email);

    boolean existsByEmailAndPassword(String email, String password);

    Student findByEmail(String email);
}
