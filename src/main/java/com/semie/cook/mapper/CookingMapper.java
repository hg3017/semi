package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.CounselingDTO;
import com.semie.cook.model.RecipeLabDTO;
import com.semie.cook.model.RecipeLabStepDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface CookingMapper {
    List<CounselingDTO> selectAll(Pagination pg);
    int totalLab(Pagination pg);
    int insertCounsel(CounselingDTO dto);
}
