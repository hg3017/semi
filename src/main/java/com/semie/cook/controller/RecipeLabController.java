package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/recipeLab")
public class RecipeLabController {

    @GetMapping("/list")
    public String list(Model model) {
        System.out.println("recipe_lab/list---------------------------------------------");
        return "/recipeLab/recipe_lab";
    }

    @GetMapping("/solution")
    public String solution(Model model) {
        System.out.println("recipe_lab/solution---------------------------------------------");
        return "/recipeLab/solution";
    }

    @GetMapping("/counseling")
    public String counseling(Model model) {
        System.out.println("recipe_lab/counseling---------------------------------------------");
        return "/recipeLab/counseling";
    }

    @GetMapping("/cooking")
    public String cooking(Model model) {
        System.out.println("recipe_lab/cooking---------------------------------------------");
        return "/recipeLab/cooking";
    }

    @GetMapping("/archive_rep")
    public String archive(Model model) {
        System.out.println("recipe_lab/archive-----------------------------------------------");
        return "/recipeLab/archive_rep";
    }

    @GetMapping("/archive_sol")
    public String archive_sol(Model model) {
        System.out.println("recipe_lab/archive_sol-----------------------------------------------");
        return "/recipeLab/archive_sol";
    }


}
