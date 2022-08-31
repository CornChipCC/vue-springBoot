package com.handcoding.template.vo;

import lombok.Data;

@Data
public class UserVO {

    private String name;
    private String phone;
    private int age;

    public UserVO(String name, String phone, int age) {
        super();
        this.name = name;
        this.phone = phone;
        this.age = age;
    }

}