package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/guide")
    public String list() {
        System.out.println("admin/guide---------------------------------------------");
        return "/admin/adminGuide";
    }

    @GetMapping("/recipe")
    public String recipe() {
        System.out.println("admin/recipe---------------------------------------------");
        return "/admin/adminRecipe";
    }

    @GetMapping("/solution")
    public String solution() {
        System.out.println("admin/solution---------------------------------------------");
        return "/admin/adminSolution";
    }

    @GetMapping("/cooking")
    public String cooking() {
        System.out.println("admin/cooking---------------------------------------------");
        return "/admin/adminCooking";
    }

    @GetMapping("/counseling")
    public String counseling() {
        System.out.println("admin/counseling---------------------------------------------");
        return "/admin/adminCounseling";
    }

    @GetMapping("/wow")
    public String wow() {
        System.out.println("admin/wow---------------------------------------------");
        return "/admin/adminWow";
    }

    @GetMapping("/user")
    public String member() {
        System.out.println("admin/user---------------------------------------------");
        return "/admin/adminUser";
    }

}
