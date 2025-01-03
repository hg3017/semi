package com.semie.cook.controller;

import com.semie.cook.model.CounselingDTO;
import com.semie.cook.service.CookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/cooking")
public class CookingController {

    @Autowired
    private CookingService cookingService;

//    public CookingController(CookingService cookingService) {
//        this.cookingService = cookingService;
//    }

    @GetMapping("/cooking")
    public String list(Model model) {
        System.out.println("cooking/list---------------------------------------------");
        return "cooking/cooking";
    }

    @GetMapping("/counseling")
    public String counseling(Model model) {
        System.out.println("cooking/counseling---------------------------------------------");
        return "/cooking/counseling";
    }

    @GetMapping("/cooking_write")
    public String archiveWrite() {
        return "/cooking/cooking_write";
    }

    @PostMapping ("/cooking_write")
    public String archive_write(@ModelAttribute CounselingDTO dto) {
        cookingService.insertCounsel(dto);
        System.out.println("recipeLab/archive_write-----------------------------------------------");
        return "redirect:/cooking/cooking_write";
    }
    @GetMapping("/counseling_write")
    public String counselingWrite() {
        return "/cooking/counseling_write";
    }
    @PostMapping ("/counseling_write")
    public String counselingWrite(@ModelAttribute CounselingDTO dto) {
        cookingService.insertCounsel(dto);
        System.out.println("cooking/counseling_write-----------------------------------------------");
        return "redirect:/cooking/counseling_write";
    }
}
