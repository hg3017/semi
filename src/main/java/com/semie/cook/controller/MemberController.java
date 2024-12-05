package com.semie.cook.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {

    @GetMapping("/emailJoin")
    public String emailJoin() {
        System.out.println("member/emailJoin---------------------------------------------");
        return "/member/emailJoin";
    }

    @GetMapping("/emailJoin2")
    public String emailJoin2() {
        System.out.println("member/emailJoin2---------------------------------------------");
        return "/member/emailJoin2";
    }

    @GetMapping("/join")
    public String join() {
        System.out.println("member/join---------------------------------------------");
        return "/member/join";
    }

    @GetMapping("/joinComplete")
    public String joinComplete() {
        System.out.println("member/joinComplete---------------------------------------------");
        return "/member/joinComplete";
    }

    @GetMapping("/login")
    public String solution() {
        System.out.println("member/login---------------------------------------------");
        return "/member/login";
    }

    @GetMapping("/wait")
    public String waitpage() {
        System.out.println("member/wait---------------------------------------------");
        return "/member/wait";
    }
}
