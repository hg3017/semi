package com.semie.cook.mapper;

import com.semie.cook.model.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
    List<MemberDTO> selectAll();

    void insertMember(MemberDTO memberDTO);

    boolean existsEmail(String email);
    MemberDTO checkLogin(String email, String password);
    void resetPassword(String email, String password);
}
