package com.rameez.test.eLearning.enums;

public enum  StatusEnum {

    ACTIVE(1,"ACTIVE"),INACTIVE(2,"INACTIVE");

    Long id;

    String name;

    StatusEnum(long id, String name) {
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
