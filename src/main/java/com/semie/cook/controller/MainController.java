package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class MainController {

    @GetMapping("/")
    public String main(Model model) {
        System.out.println("---------------------------------------------");
        return "main";
    }

    @GetMapping("/search")
    public String search(Model model) {
        System.out.println("search---------------------------------------------");
        return "search";
    }
}
