package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.service.EventService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/event")
public class EventController {

    @Autowired private EventService eventService;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);
        model.addAttribute("list", eventService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));

        System.out.println("event/list---------------------------------------------");
        return "/event/list";
    }

    @GetMapping("/event_archive")
    public String archive(Model model) {
        System.out.println("event/event_archive---------------------------------------------");
        return "/event/event_archive";
    }

}
