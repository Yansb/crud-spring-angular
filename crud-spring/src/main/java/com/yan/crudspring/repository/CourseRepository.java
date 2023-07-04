package com.yan.crudspring.repository;

import com.yan.crudspring.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
