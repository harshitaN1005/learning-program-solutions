package com.cognizant.spring_learn.service;

@SuppressWarnings("serial")
public class CountryNotFoundException extends RuntimeException {
    public CountryNotFoundException(String message) {
        super(message);
    }
}
