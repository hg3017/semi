package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(Model model) {
        System.out.println("---------------------------------------------");
        model.addAttribute("cssFiles", List.of("cooking.css"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "main";
    }
}
