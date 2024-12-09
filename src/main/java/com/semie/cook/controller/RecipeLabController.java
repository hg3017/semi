package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/recipe_lab")
public class RecipeLabController {

    @GetMapping("/list")
    public String list(Model model) {
        System.out.println("recipe_lab/list---------------------------------------------");
        model.addAttribute("cssFiles", List.of("cooking.css"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "/recipeLab/recipe_lab";
    }

    @GetMapping("/solution")
    public String solution(Model model) {
        System.out.println("recipe_lab/solution---------------------------------------------");
        model.addAttribute("cssFiles", List.of("cooking.css"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "/recipeLab/solution";
    }

//    @GetMapping("/counseling")
//    public String counseling() {
//        System.out.println("recipe_lab/counseling---------------------------------------------");
//        return "/recipe_lab/counseling";
//    }
//
//    @GetMapping("/cooking")
//    public String cooking() {
//        System.out.println("recipe_lab/cooking---------------------------------------------");
//        return "/recipe_lab/cooking";
//    }

    @GetMapping("/archive_rep")
    public String archive(Model model) {
        System.out.println("recipe_lab/archive-----------------------------------------------");
        model.addAttribute("cssFiles", List.of("cooking.css"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "/recipeLab/archive_rep";
    }

    @GetMapping("/archive_sol")
    public String archive_sol(Model model) {
        System.out.println("recipe_lab/archive_sol-----------------------------------------------");
        model.addAttribute("cssFiles", List.of("archive.css"));
        return "/recipeLab/archive_sol";
    }
}
