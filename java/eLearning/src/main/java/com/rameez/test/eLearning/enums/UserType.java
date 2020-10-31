package com.rameez.test.eLearning.enums;

public enum  UserType {

    TUTOR(1,"TUTOR"),STUDENT(2,"STUDENT");

    Long id;

    String name;

    UserType(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
