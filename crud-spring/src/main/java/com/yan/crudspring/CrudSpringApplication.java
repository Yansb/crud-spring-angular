package com.yan.crudspring;

import com.yan.crudspring.model.Course;
import com.yan.crudspring.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudSpringApplication implements CommandLineRunner {

    @Autowired
    private CourseRepository courseRepository;

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        courseRepository.deleteAll();
        final var course = new Course();
        course.setName("Spring Boot");
        course.setCategory("back-end");

        courseRepository.save(course);
    }
}
