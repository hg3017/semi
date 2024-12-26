package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.service.RecipeLabService;
import com.semie.cook.service.SqlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MainController {
    private final SqlService sqlService;

    private final RecipeLabService recipeLabService;

    @GetMapping("/")
    public String main(Model model) {
        System.out.println("---------------------------------------------");

        //요리연구소
        Pagination pg = new Pagination();
        Map<String, String> map = Collections.singletonMap("labId", String.valueOf(0));
        pg.setSearchMap(map);

        model.addAttribute("list", recipeLabService.findAll(pg));

        return "main";
    }

    @GetMapping("/search")
    public String search(Model model) {
        System.out.println("search---------------------------------------------");

        //요리연구소
        Pagination pg = new Pagination();
        Map<String, String> map = Collections.singletonMap("labId", String.valueOf(0));
        pg.setSearchMap(map);

        model.addAttribute("list", recipeLabService.findAll(pg));

        return "search";
    }

    @GetMapping("/execute-sql")
    public String executeSql(Model model) {
        sqlService.executeSql("create");
        sqlService.executeSql("insert");
        return "redirect:/";
    }
}
