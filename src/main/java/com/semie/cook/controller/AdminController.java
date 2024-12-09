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
        return "admin/adminGuide";
    }

    @GetMapping("/recipe")
    public String recipe(Model model) {
        System.out.println("admin/recipe---------------------------------------------");
        return "/admin/adminRecipe";
    }

    @GetMapping("/solution")
    public String solution(Model model) {
        System.out.println("admin/solution---------------------------------------------");
        return "/admin/adminSolution";
    }

    @GetMapping("/cooking")
    public String cooking(Model model) {
        System.out.println("admin/cooking---------------------------------------------");
        return "/admin/adminCooking";
    }

    @GetMapping("/counseling")
    public String counseling(Model model) {
        System.out.println("admin/counseling---------------------------------------------");
        return "/admin/adminCounseling";
    }

    @GetMapping("/wow")
    public String wow(Model model) {
        System.out.println("admin/wow---------------------------------------------");
        return "/admin/adminWow";
    }

    @GetMapping("/user")
    public String member(Model model) {
        System.out.println("admin/user---------------------------------------------");
        return "/admin/adminUser";
    }

}
