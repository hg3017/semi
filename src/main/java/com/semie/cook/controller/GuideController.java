package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/guide")
public class GuideController {

    @GetMapping("/list")
    public String list(Model model) {
        System.out.println("Guide/list---------------------------------------------");
        return "/guide/list";
    }

    @GetMapping("/guide_archive")
    public String archive(Model model) {
        System.out.println("guide/guide_archive---------------------------------------------");
        return "/guide/guide_archive";
    }
}
