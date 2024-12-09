package com.semie.cook.mapper;

import com.semie.cook.model.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
    List<MemberDTO> selectAll();
}
