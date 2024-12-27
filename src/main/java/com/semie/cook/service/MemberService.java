package com.semie.cook.service;

import com.semie.cook.mapper.MemberMapper;
import com.semie.cook.model.CommentDTO;
import com.semie.cook.model.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
    @Autowired private MemberMapper memberMapper;

    public List<MemberDTO> findAll() {
        return memberMapper.selectAll();
    }

    public void insertMember(MemberDTO memberDTO) {
        memberMapper.insertMember(memberDTO);
    }

    public boolean existsEmail(String email) {
        return memberMapper.existsEmail(email);
    }

    public MemberDTO checkLogin(String email, String password) {
        return memberMapper.checkLogin(email, password);
    }

    public void resetPassword(String email, String password) {
        memberMapper.resetPassword(email, password);
    }

    public void createComment(CommentDTO commentDTO) {
        memberMapper.createComment(commentDTO);
    }

    public List<CommentDTO> findPostComment(int comment_board_id, int comment_post_id) {
        System.out.println("comment_board_id : " + comment_board_id);
        System.out.println("comment_post_id : " + comment_post_id);

        return memberMapper.findPostComment(comment_board_id, comment_post_id);
    }
}
