package com.semie.cook.service;

import com.semie.cook.mapper.ScrapMapper;
import com.semie.cook.model.ScrapDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScrapService {

    private final ScrapMapper scrapMapper;

    // 스크랩 추가
    public void addScrap(ScrapDTO scrap) {
        // 이미 스크랩된 게시물이 있는지 체크
        ScrapDTO existingScrap = scrapMapper.getScrapByMemberAndPost(scrap.getMember_id(), scrap.getScrap_post_id(), scrap.getBoard_id());
        if (existingScrap == null) {
            scrapMapper.addScrap(scrap);  // 없으면 새로 추가
        }
    }

    // 사용자의 스크랩 목록 조회
    public List<ScrapDTO> getScrapsForUser(int memberId) {
        return scrapMapper.getScrapsForUser(memberId);
    }

    // 스크랩 삭제
    public void deleteScrap(int memberId, int scrapPostId, String boardId) {
        scrapMapper.deleteScrap(memberId, scrapPostId, boardId);
    }
}

