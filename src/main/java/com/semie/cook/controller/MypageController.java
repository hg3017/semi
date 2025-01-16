package com.semie.cook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.MemberDTO;
import com.semie.cook.service.MemberService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.util.List;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/mypage")
public class MypageController {

    @Autowired
    private MemberService memberService;

    /*
     * 
     *     public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        //페이지네이션
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);
     */
    
    @GetMapping("/mypageComment")
    public String commentList(HttpServletRequest request, Model model, @RequestParam(defaultValue = "1") int pageNum, HttpSession session) {
        System.out.println("mypage/commentList---------------------------------------------");
    
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        System.out.println("member/findUserComment--------------------------------------------");
        MemberDTO user = (MemberDTO) session.getAttribute("user");
        System.out.println(user.getMember_id());
        memberService.findUserComment(user.getMember_id());
        model.addAttribute("paging", pg.paging(request));
        model.addAttribute("commentList", memberService.findUserComment(user.getMember_id()));

        System.out.println(memberService.findUserComment(user.getMember_id()));

        return "/mypage/mypageComment";
    }

    @GetMapping("/mypageEvent")
    public String eventList(Model model)  {
        System.out.println("mypage/eventList---------------------------------------------");
        return "/mypage/mypageEvent";
    }

    @GetMapping("/scrap")
    public String mainpage(Model model)  {
        System.out.println("mypage/scrap---------------------------------------------");
        return "/mypage/mypageScrap";
    }

    @GetMapping("/mypageProfile")
    public String mypage(Model model)  {
        System.out.println("mypage/profile---------------------------------------------");
        return "/mypage/mypageProfile";
    }

    @GetMapping("/mypageWrite")
    public String writeList(Model model)  {
        System.out.println("mypage/write---------------------------------------------");
        return "/mypage/mypageWrite";
    }


}
