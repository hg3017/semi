package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/mypage")
public class MypageController {

    @GetMapping("/mypageComment")
    public String commentList(Model model) {
        System.out.println("mypage/commentList---------------------------------------------");
        model.addAttribute("cssFiles", List.of("mypage/commentList.css"));
        return "/mypage/mypageComment";
    }

    @GetMapping("/mypageEvent")
    public String eventList(Model model)  {
        System.out.println("mypage/eventList---------------------------------------------");
        model.addAttribute("cssFiles", List.of("mypage/commentList.css"));
        return "/mypage/mypageEvent";
    }

    @GetMapping("/scrap")
    public String mainpage(Model model)  {
        System.out.println("mypage/scrap---------------------------------------------");
        model.addAttribute("cssFiles", List.of("mypage/scrap.css"));
        return "/mypage/mypageScrap";
    }

    @GetMapping("/mypageProfile")
    public String mypage(Model model)  {
        System.out.println("mypage/profile---------------------------------------------");
        model.addAttribute("cssFiles", List.of("mypage/profile.css"));
        return "/mypage/mypageProfile";
    }

    @GetMapping("/mypageWrite")
    public String writeList(Model model)  {
        System.out.println("mypage/write---------------------------------------------");
        model.addAttribute("cssFiles", List.of("mypage/writeList.css"));
        return "/mypage/mypageWrite";
    }


}
