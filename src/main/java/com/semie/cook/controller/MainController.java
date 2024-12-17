package com.semie.cook.controller;

import com.semie.cook.service.SqlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class MainController {
    private final SqlService sqlService;

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

    @GetMapping("/execute-sql")
    public String executeSql(Model model) {
        sqlService.executeSql("create");
        sqlService.executeSql("insert");
        return "redirect:/";
    }
}
