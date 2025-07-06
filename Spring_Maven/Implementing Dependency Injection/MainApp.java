package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp{
    public static void main(String[] args) {
        // Load Spring Context from applicationContext.xml
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService Bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Test Dependency Injection
        bookService.addBook("Effective Java");

        // Close Spring Context
        ((ClassPathXmlApplicationContext) context).close();
    }
}
