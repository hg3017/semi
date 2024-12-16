package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.GuideDTO;
import com.semie.cook.service.GuideService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/guide")
public class GuideController {
    private final GuideService guideService;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        model.addAttribute("list", guideService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));

        return "/guide/list";
    }

    @GetMapping("/guide_archive/{guideId}")
    public String archive(@PathVariable int guideId, Model model) {
        System.out.println("guide/guide_archive---------------------------------------------" + guideId);
        model.addAttribute("guide", guideService.findById(guideId));
        return "/guide/guide_archive";
    }
}
