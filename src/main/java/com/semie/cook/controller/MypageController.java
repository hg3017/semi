package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mypage")
public class MypageController {

    @GetMapping("/commentList")
    public String commentList() {
        System.out.println("mypage/commentList---------------------------------------------");
        return "/mypage/mypageComment";
    }

    @GetMapping("/eventList")
    public String eventList() {
        System.out.println("mypage/eventList---------------------------------------------");
        return "/mypage/mypageEvent";
    }

    @GetMapping("/scrapList")
    public String mainpage() {
        System.out.println("mypage/scrap---------------------------------------------");
        return "/mypage/scrap";
    }

    @GetMapping("/profile")
    public String mypage() {
        System.out.println("mypage/profile---------------------------------------------");
        return "/mypage/mypageProfile";
    }

    @GetMapping("/writeList")
    public String writeList() {
        System.out.println("mypage/write---------------------------------------------");
        return "/mypage/mypageWrite";
    }



}
