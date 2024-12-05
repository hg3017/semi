package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/guide")
public class GuideController {

    @GetMapping("/list")
    public String list() {
        System.out.println("Guide/list---------------------------------------------");
        return "/guide/list";
    }

    @GetMapping("/archive")
    public String archive() {
        System.out.println("Guide/archive---------------------------------------------");
        return "/guide/archive";
    }
}
