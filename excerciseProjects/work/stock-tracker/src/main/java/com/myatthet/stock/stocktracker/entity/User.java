package com.myatthet.stock.stocktracker;

import java.util.Date;
import java.util.List;


public class User {
    private int id;
    private String name;
    private Date dob;
    private List<Profile> profileList;

    public User(int id, String name, Date dob, List<Profile> profileList) {
        this.id = id;
        this.name = name;
        this.dob = dob;

        this.profileList = profileList;
    }

    private void createUser(User user) {

    }

//    private User getUser(int userId) {
//        return;
//    }

    private void updateUser(User updateUser) {

    }

    private void removeUser(int userId) {

    }
}
