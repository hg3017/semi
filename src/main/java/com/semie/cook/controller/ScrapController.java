package com.semie.cook.controller;

import com.semie.cook.model.ScrapDTO;
import com.semie.cook.service.ScrapService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scraps")
public class ScrapController {

    private final ScrapService scrapService;

    public ScrapController(ScrapService scrapService) {
        this.scrapService = scrapService;
    }

    // 스크랩 추가
    @PostMapping
    public ResponseEntity<String> addScrap(@RequestBody ScrapDTO scrap, HttpSession session) {
        Integer memberId = (Integer) session.getAttribute("member_id");
        if (memberId == null) {
            return ResponseEntity.status(401).body("로그인 후 스크랩할 수 있습니다.");
        }

        scrap.setMember_id(memberId); // 로그인된 사용자 ID 설정
        scrapService.addScrap(scrap);
        return ResponseEntity.ok("스크랩이 추가되었습니다.");
    }

    // 사용자의 스크랩 목록 조회
    @GetMapping("/mypage")
    public ResponseEntity<List<ScrapDTO>> getScrapsForUser(HttpSession session) {
        Integer memberId = (Integer) session.getAttribute("member_id");
        if (memberId == null) {
            return ResponseEntity.status(401).body(null);
        }

        List<ScrapDTO> scraps = scrapService.getScrapsForUser(memberId);
        return ResponseEntity.ok(scraps);
    }

    // 스크랩 삭제
    @DeleteMapping("/{scrapPostId}/{boardId}")
    public ResponseEntity<String> deleteScrap(@PathVariable int scrapPostId, @PathVariable String boardId, HttpSession session) {
        Integer memberId = (Integer) session.getAttribute("member_id");
        if (memberId == null) {
            return ResponseEntity.status(401).body("로그인 후 스크랩을 삭제할 수 있습니다.");
        }

        scrapService.deleteScrap(memberId, scrapPostId, boardId);
        return ResponseEntity.ok("스크랩이 삭제되었습니다.");
    }
}


