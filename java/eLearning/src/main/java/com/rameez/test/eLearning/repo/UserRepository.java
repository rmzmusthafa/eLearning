package com.rameez.test.eLearning.repo;

import com.rameez.test.eLearning.entity.User;
import com.rameez.test.eLearning.enums.UserType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {


    boolean existsByMobile(String mobile);

    boolean existsByEmail(String email);

    boolean existsByEmailAndPassword(String email, String password);

    User findByEmail(String email);

    List<User> findAllByRoleId(Long student);
}
