package com.semie.cook.service;

import com.semie.cook.mapper.MemberMapper;
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
}
