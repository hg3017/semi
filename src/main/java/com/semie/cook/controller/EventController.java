package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.service.EventService;
import com.semie.cook.service.GuideService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
@RequestMapping("/event")
public class EventController {

//    @Autowired private EventService eventService;
    private final EventService eventService;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);
        model.addAttribute("list", eventService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));

        System.out.println("event/list---------------------------------------------");
        return "/event/list";
    }

    @GetMapping("/event_archive/{eventId}")
    public String archive(@PathVariable int eventId, Model model) {
        model.addAttribute("event", eventService.selectById(eventId));
        System.out.println("selectById" + eventService.selectById(eventId));
        System.out.println("event/event_archive---------------------------------------------" +eventId);
        return "/event/event_archive";
    }

}
