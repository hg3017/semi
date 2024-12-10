package com.semie.cook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/event")
public class EventController {

    @GetMapping("/event")
    public String list(Model model) {
        System.out.println("event/event---------------------------------------------");
        return "/event/event";
    }

    @GetMapping("/event_archive")
    public String archive(Model model) {
        System.out.println("event/event_archive---------------------------------------------");
        return "/event/event_archive";
    }
}
