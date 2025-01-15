package com.semie.cook.mapper;

import com.semie.cook.model.ScrapDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ScrapMapper {

    // 스크랩 추가
    @Insert("INSERT INTO MEMBER_SCRAP (MEMBER_SCRAP_ID, BOARD_ID, MEMBER_ID, SCRAP_POST_ID) " +
            "VALUES (SEQ_MEMBER_SCRAP_ID.NEXTVAL, #{board_id}, #{member_id}, #{scrap_post_id})")
    void addScrap(ScrapDTO scrap);

    // 특정 회원과 게시글에 대한 스크랩이 있는지 확인
    @Select("SELECT * FROM MEMBER_SCRAP WHERE MEMBER_ID = #{member_id} AND SCRAP_POST_ID = #{scrap_post_id} AND BOARD_ID = #{board_id}")
    ScrapDTO getScrapByMemberAndPost(@Param("member_id") int memberId, @Param("scrap_post_id") int scrapPostId, @Param("board_id") String boardId);

    // 특정 사용자가 스크랩한 게시물 목록 조회
    @Select("SELECT * FROM MEMBER_SCRAP WHERE MEMBER_ID = #{member_id}")
    List<ScrapDTO> getScrapsForUser(int memberId);

    // 스크랩 삭제
    @Delete("DELETE FROM MEMBER_SCRAP WHERE MEMBER_ID = #{member_id} AND SCRAP_POST_ID = #{scrap_post_id} AND BOARD_ID = #{board_id}")
    void deleteScrap(@Param("member_id") int memberId, @Param("scrap_post_id") int scrapPostId, @Param("board_id") String boardId);
}

