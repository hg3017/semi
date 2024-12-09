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
}
