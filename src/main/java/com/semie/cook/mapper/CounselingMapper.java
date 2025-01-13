package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.CounselingDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CounselingMapper {
    List<CounselingDTO> selectAll1(Pagination pg);
    int totalLab(Pagination pg);
    int insertCounsel(CounselingDTO dto);
}
