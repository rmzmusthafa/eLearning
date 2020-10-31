package com.rameez.test.eLearning.forms;

import com.sun.org.apache.xpath.internal.operations.Bool;

public class LoginResponse {

    private Long roleId;

    private Long userId;

    private Boolean success;

    private String message;

    public LoginResponse(Long roleId, Long userId, Boolean success, String message) {
        this.roleId = roleId;
        this.userId = userId;
        this.success = success;
        this.message = message;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
