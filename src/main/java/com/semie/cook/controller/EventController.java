package com.semie.cook.controller;

import com.semie.cook.common.FileStorage;
import com.semie.cook.common.FileVO;
import com.semie.cook.common.Pagination;
import com.semie.cook.model.EventDTO;
import com.semie.cook.service.EventService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;


@Controller
@RequiredArgsConstructor
@RequestMapping("/event")
public class EventController {

    private final EventService eventService;
    private final FileStorage fileStorage;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);
        model.addAttribute("list", eventService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));
//        System.out.println("selectById" + eventService.findAll(pg));
        System.out.println("event/list---------------------------------------------");
        return "/event/list";
    }

    @GetMapping("/event_archive/{eventId}")
    public String archive(@PathVariable int eventId, Model model) {
        model.addAttribute("event", eventService.selectById(eventId));
//        System.out.println("selectById" + eventService.selectById(eventId));
        System.out.println("event/event_archive---------------------------------------------" +eventId);
        return "/event/event_archive";
    }

    @GetMapping("/write")
    public void write() {}

    @PostMapping("/write")
    public String write(@ModelAttribute EventDTO event,
                        @RequestParam("file_main_poster") MultipartFile[] main_poster,
                        @RequestParam("file_poster") MultipartFile[] poster) {

        List<FileVO> mainPosterList = fileStorage.uploadFiles(main_poster,"upload/");
        event.setMain_poster(mainPosterList.get(0).getNfile());
        List<FileVO> posterList = fileStorage.uploadFiles(poster,"upload/");
        event.setPoster(posterList.get(0).getNfile());

        int re = eventService.insertEvent(event);
        if(re > 0) {
            return "redirect:/event/list";

        }else {
            return "redirect:/event/write";
        }

    }

    @GetMapping("/uploads/{fileName:.+}")
    public @ResponseBody Resource getFile(@PathVariable String fileName) {
        File file = new File("upload/" + fileName);
        return new FileSystemResource(file);
    }

    @GetMapping("/edit/{eventId}")
    public String edit(Model model, @PathVariable int eventId) {
        model.addAttribute("event", eventService.selectById(eventId));

        return "/event/edit";
    }

//    @PostMapping("/edit")
//    public String edit(@ModelAttribute EventDTO event,
//                       @RequestParam("file_main_poster") MultipartFile[] main_poster,
//                       @RequestParam("file_poster") MultipartFile[] poster) {
//
//        List<FileVO> mainPosterList = fileStorage.uploadFiles(main_poster,"upload/");
//        event.setMain_poster(mainPosterList.get(0).getNfile());
//        List<FileVO> posterList = fileStorage.uploadFiles(poster,"upload/");
//        event.setPoster(posterList.get(0).getNfile());
//
////        System.out.println("event" + event);
//        eventService.updateEvent(event);
//
//        return "redirect:/event/list";
//    }

    @PostMapping("/edit")
    public String edit(@ModelAttribute EventDTO event) {
        System.out.println("event = " + event);
        eventService.updateEvent(event);

        return "redirect:/event/list";
    }

}
