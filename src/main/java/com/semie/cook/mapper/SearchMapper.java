package com.semie.cook.mapper;

import com.semie.cook.model.CounselingDTO;
import com.semie.cook.model.SearchDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SearchMapper {
    List<SearchDTO> findByCont(String SearchKeyword);
}
