package com.semie.cook.controller;


import com.semie.cook.model.CommentDTO;
import com.semie.cook.model.MemberDTO;
import com.semie.cook.service.MemberService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

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

    Map<String, Object> response = new HashMap<>();


    @GetMapping("/join")
    public String join(Model model) {
        System.out.println("member/join---------------------------------------------");
        return "/member/join";
    }

    @GetMapping("/emailFind")
    public String emailFind(Model model) {
        System.out.println("member/emailFind---------------------------------------------");
        return "/member/emailFind";
    }

    @PostMapping("/checkLogin")
    public ResponseEntity<Map<String, Object>> checkLogin(Model model, @RequestBody MemberDTO memberDTO, HttpSession session) {

        System.out.println("member/checkLogin---------------------------------------------");

        System.out.println(memberDTO.getMember_email() + " : Controller Email");
        System.out.println(memberDTO.getPassword() + " : Controller Password");

        MemberDTO user = memberService.checkLogin(memberDTO.getMember_email(), memberDTO.getPassword());

        System.out.println(user + " : Controller Return DTO");


        if (user != null) {
            session.setAttribute("user", user); // 세션에 사용자 정보 저장
            response.put("success", true);
            response.put("user", user);

            model.addAttribute("user", user);
//            return ResponseEntity.ok(response);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return "/main"; // 로그아웃 후 메인 페이지로 리다이렉트
    }


    @PostMapping("/existsEmail")
    public ResponseEntity<Map<String, Boolean>> checkEmail(@RequestParam String email) {
        System.out.println(email + "/member/existsEmail--------------------------------------------");
        boolean exists = memberService.existsEmail(email);

        Map<String, Boolean> response = new HashMap<>();
        response.put("exists", exists);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/resetPassword")
    public ResponseEntity<Map<String, Object>> resetPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        Map<String, Object> response = new HashMap<>();

        // 이메일로 회원 존재 여부 확인
        if (memberService.existsEmail(email)) {
            // 임시 비밀번호 생성
            String tempPassword = UUID.randomUUID().toString().substring(0, 8); // 8자리 임시 비밀번호

            // 비밀번호 업데이트
            memberService.resetPassword(email, tempPassword);

            // 응답 데이터에 임시 비밀번호 포함
            response.put("success", true);
            response.put("tempPassword", tempPassword);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "입력한 이메일로 가입된 회원이 없습니다.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @PostMapping("/joinComplete")
    public String joinComplete(@ModelAttribute MemberDTO memberDto, Model model) {

        System.out.println("MemberController: joinComplete" + memberDto);

        memberService.insertMember(memberDto);

        model.addAttribute("email", memberDto.getMember_email());
        System.out.println("member/joinComplete---------------------------------------------");
        return "/member/joinComplete";
    }

    @GetMapping("/login")
    public String solution(Model model, HttpSession session) {
        System.out.println("member/login---------------------------------------------");
        return "/member/login";
    }

    @GetMapping("/wait")
    public String waitpage(Model model) {
        System.out.println("member/wait---------------------------------------------");
        return "/member/wait";
    }

    // 코맨트 작성
    @PostMapping("/createComment")
    public ResponseEntity<Map<String, Object>> createComment(@RequestBody CommentDTO commentDTO, Model model) {

        System.out.println("MemberController: createComment" + commentDTO);
        System.out.println("member/createComment---------------------------------------------");

        try {
            // 댓글 저장 로직
            memberService.createComment(commentDTO);

            response.put("success", true);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // 게시판의 코맨트 조회
//    @GetMapping("/readPostComment")
//    public void readPostComment(@RequestParam String commentBoard_id, @RequestParam String commentPost_id,  Model model) {
//        System.out.println("member/readPostComment---------------------------------------------");
//
//        System.out.println(memberService.findPostComment(commentBoard_id, commentPost_id));
//
//        model.addAttribute("postCommentlist", memberService.findPostComment(commentBoard_id, commentPost_id));
//    }
}