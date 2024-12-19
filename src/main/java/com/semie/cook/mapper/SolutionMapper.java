package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.SolutionDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SolutionMapper {
    List<SolutionDTO> selectAll1(Pagination page);
    int totalLab1(Pagination page);

    SolutionDTO selectById1(int solution_id);

//    List<Map<String, String>> selectIngredientById1(int solution_id);


}
