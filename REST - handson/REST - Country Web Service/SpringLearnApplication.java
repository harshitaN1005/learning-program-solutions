package com.cognizant.spring_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.spring_learn.Country;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        displayCountries(context);
    }

    public static void displayCountries(ApplicationContext context) {
        LOGGER.info("START");

        // Fetch the countryList bean from XML
        @SuppressWarnings("unchecked")
        List<Country> countries = (List<Country>) context.getBean("countryList");

        // Print the list of countries at INFO level
        LOGGER.info("Countries: {}", countries);

        LOGGER.info("END");
    }
}
