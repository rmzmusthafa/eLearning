package com.rameez.test.eLearning.repo;

import com.rameez.test.eLearning.entity.Schedule;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends CrudRepository<Schedule,Long> {

    List<Schedule> findByStudentIdAndStatusId(Long studentId, Long id);

    List<Schedule> findByTurorIdAndStatusId(Long tutorId, Long id);
}
