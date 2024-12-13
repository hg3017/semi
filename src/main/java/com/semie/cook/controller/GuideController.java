package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.GuideDTO;
import com.semie.cook.service.GuideService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/guide")
public class GuideController {

    private final GuideService guideService;

    public GuideController(GuideService guideService) {
        this.guideService = guideService;
    }

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);


        model.addAttribute("list", guideService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));
        System.out.println("Guide/list---------------------------------------------");
        return "/guide/list";
    }

    @GetMapping("/guide_archive")
    public String archive(Model model) {
        System.out.println("guide/guide_archive---------------------------------------------");
        return "/guide/guide_archive";
    }
}
