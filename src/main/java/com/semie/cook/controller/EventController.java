package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.EventDTO;
import com.semie.cook.service.EventService;
import com.semie.cook.service.GuideService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
        System.out.println("selectById" + eventService.findAll(pg));
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

    @GetMapping("/write")
    public void write() {}

    @PostMapping("/write")
    public String write(@ModelAttribute EventDTO event, Model model) {
        event.setBoard_id(60);
//        event.setEvent_name("새미");
//        event.setMain_poster("새미");
//        event.setPoster("새미");
//        event.setDesc_detail("rr");
        System.out.println("event = " + event);
        eventService.insertEvent(event);

        return "redirect:/event/list";
    }

    @GetMapping("/edit")
    public void edit() {}

    @PostMapping("/edit/{eventId}")
    public String edit(@ModelAttribute EventDTO event, Model model) {
        System.out.println("event = " + event);
        eventService.updateEvent(event);

        return "redirect:/event/event_archive/{eventId}";
    }

}
