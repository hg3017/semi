package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/cooking")
public class CookingController {

    @GetMapping("/cooking")
    public String list(Model model) {
        System.out.println("cooking/list---------------------------------------------");
        return "cooking/cooking";
    }

    @GetMapping("/counseling")
    public String counseling(Model model) {
        System.out.println("cooking/counseling---------------------------------------------");
        return "/cooking/counseling";
    }
}
