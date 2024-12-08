package com.semie.cook.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.ui.Model;

@Controller
@RequestMapping("/member")
public class MemberController {

    @GetMapping("/emailJoin")
    public String emailJoin(Model model) {
        System.out.println("member/emailJoin---------------------------------------------");
        model.addAttribute("cssFiles", List.of("member/emailJoin.css"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "/member/emailJoin";
    }

    @GetMapping("/emailJoinDetail")
    public String emailJoinDetail(Model model) {
        System.out.println("member/emailJoin2---------------------------------------------");
        model.addAttribute("cssFiles", List.of("member/emailJoinDetail.css"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "/member/emailJoinDetail";
    }

    @GetMapping("/join")
    public String join(Model model) {
        System.out.println("member/join---------------------------------------------");
        model.addAttribute("cssFiles", List.of("member/join.css"));
//        model.addAttribute("extraJsFiles", List.of("member.js", "ui-common.js"));
        model.addAttribute("extraJsFiles", List.of("member.js"));
        return "/member/join";
    }

    @GetMapping("/joinComplete")
    public String joinComplete(Model model) {
        System.out.println("member/joinComplete---------------------------------------------");
        model.addAttribute("cssFiles", List.of("member/joinComplete.css"));
        return "/member/joinComplete";
    }

    @GetMapping("/login")
    public String solution(Model model) {
        System.out.println("member/login---------------------------------------------");
        model.addAttribute("cssFiles", List.of("member/login.css"));

        return "/member/login";
    }

    @GetMapping("/wait")
    public String waitpage(Model model) {
        System.out.println("member/wait---------------------------------------------");
        model.addAttribute("cssFiles", List.of("member/wait.css"));
        return "/member/wait";
    }
}
