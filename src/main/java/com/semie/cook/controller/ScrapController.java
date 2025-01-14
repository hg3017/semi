package com.semie.cook.controller;

import com.semie.cook.service.ScrapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScrapController {
    @Autowired
    private ScrapService scrapService;

//    @GetMapping("/page")
//    public String getPage(Model model, HttpSession session) {
//        boolean isLoggedIn = session.getAttribute("user") != null;
//        model.addAttribute("isLoggedIn", isLoggedIn);
//        return "page";
//    }
//
//    @GetMapping("/isLoggedIn")
//    public ResponseEntity<Map<String, Object>> isLoggedIn(HttpSession session) {
//        Map<String, Object> response = new HashMap<>();
//        Object user = session.getAttribute("user");
//
//        if (user != null) {
//            response.put("isLoggedIn", true);
//            response.put("user", user);
//        } else {
//            response.put("isLoggedIn", false);
//        }
//
//        return ResponseEntity.ok(response);
//    }
//
//    @PostMapping("/scrap")
//    public ResponseEntity<Map<String, Object>> addScrap(HttpSession session) {
//        Map<String, Object> response = new HashMap<>();
//        if (session.getAttribute("user") == null) {
//            response.put("success", false);
//            response.put("message", "로그인이 필요합니다.");
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
//        }
//
//        // 스크랩 로직 실행
//        response.put("success", true);
//        return ResponseEntity.ok(response);
//    }
}
