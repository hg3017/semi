package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import org.springframework.ui.Model;

@Controller
@RequestMapping("admin")
public class AdminController {

    @GetMapping("/guide")
    public String list(Model model) {
        System.out.println("admin/guide---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/guide.css"));
        return "admin/adminGuide";
    }

    @GetMapping("/recipe")
    public String recipe(Model model) {
        System.out.println("admin/recipe---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/recipe.css"));
        return "/admin/adminRecipe";
    }

    @GetMapping("/solution")
    public String solution(Model model) {
        System.out.println("admin/solution---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/solution.css"));
        return "/admin/adminSolution";
    }

    @GetMapping("/cooking")
    public String cooking(Model model) {
        System.out.println("admin/cooking---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/cooking.css"));
        return "/admin/adminCooking";
    }

    @GetMapping("/counseling")
    public String counseling(Model model) {
        System.out.println("admin/counseling---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/counseling.css"));
        return "/admin/adminCounseling";
    }

    @GetMapping("/wow")
    public String wow(Model model) {
        System.out.println("admin/wow---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/wow.css"));
        return "/admin/adminWow";
    }

    @GetMapping("/user")
    public String member(Model model) {
        System.out.println("admin/user---------------------------------------------");
        model.addAttribute("cssFiles", List.of("admin/user.css"));
        return "/admin/adminUser";
    }

}
