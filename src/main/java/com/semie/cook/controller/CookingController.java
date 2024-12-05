package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("cooking")
public class CookingController {

    @GetMapping("/cooking")
    public String list() {
        System.out.println("cooking/list---------------------------------------------");
        return "/cooking/cooking";
    }

    @GetMapping("/counseling")
    public String counseling() {
        System.out.println("cooking/counseling---------------------------------------------");
        return "/cooking/counseling";
    }
}
