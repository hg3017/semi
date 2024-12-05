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
        return "/mypage/commentList";
    }

    @GetMapping("/eventList")
    public String eventList() {
        System.out.println("mypage/eventList---------------------------------------------");
        return "/mypage/eventList";
    }

    @GetMapping("/mainpage")
    public String mainpage() {
        System.out.println("mypage/mainpage---------------------------------------------");
        return "/mypage/mainpage";
    }

    @GetMapping("/mypage")
    public String mypage() {
        System.out.println("mypage/mypage---------------------------------------------");
        return "/mypage/mypage";
    }

    @GetMapping("/writeList")
    public String writeList() {
        System.out.println("mypage/writeList---------------------------------------------");
        return "/mypage/writeList";
    }



}
