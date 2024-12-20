package com.semie.cook.controller;


import com.semie.cook.model.MemberDTO;
import com.semie.cook.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;

@Controller
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/emailJoin")
    public String emailJoin(Model model) {
        System.out.println("member/emailJoin---------------------------------------------");
        return "/member/emailJoin";
    }

    @GetMapping("/emailJoinDetail")
    public String emailJoinDetail(Model model) {
        System.out.println("member/emailJoinDetail---------------------------------------------");
        return "/member/emailJoinDetail";
    }

    @GetMapping("/join")
    public String join(Model model) {
        System.out.println("member/join---------------------------------------------");
        return "/member/join";
    }

    @PostMapping("/existsEmail")
    public Map<String, Boolean>  checkEmail(@RequestBody String email) {
        System.out.println(email + "/member/existsEmail--------------------------------------------");
        boolean exists = memberService.existsEmail(email);
        System.out.println(exists + " : exists");

        Map<String, Boolean> response = new HashMap<>();
        response.put("exists", exists);
        return response; // JSON 형식으로 반환
    }

    @PostMapping("/joinComplete")
    public String joinComplete(@ModelAttribute MemberDTO memberDto, Model model) {

        System.out.println("MemberController: joinComplete" + memberDto );

        memberService.insertMember(memberDto);

        model.addAttribute("email", memberDto.getMember_email());
        System.out.println("member/joinComplete---------------------------------------------");
        return "/member/joinComplete";
    }

    @GetMapping("/login")
    public String solution(Model model) {
        System.out.println("member/login---------------------------------------------");
        return "/member/login";
    }

    @GetMapping("/wait")
    public String waitpage(Model model) {
        System.out.println("member/wait---------------------------------------------");
        return "/member/wait";
    }
}
