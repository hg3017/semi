package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/recipe_lab")
public class RecipeLabController {

    @GetMapping("/list")
    public String list() {
        System.out.println("recipe_lab/list---------------------------------------------");
        return "/recipeLab/recipe_lab";
    }

    @GetMapping("/solution")
    public String solution() {
        System.out.println("recipe_lab/solution---------------------------------------------");
        return "/recipeLab/solution";
    }

    @GetMapping("/archive")
    public String archive() {
        System.out.println("recipe_lab/archive-----------------------------------------------");
        return "/recipeLab/archive";
    }
}
