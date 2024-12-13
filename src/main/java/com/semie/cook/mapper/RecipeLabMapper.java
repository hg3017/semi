package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.RecipeLabDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RecipeLabMapper {
    List<RecipeLabDTO> selectAll(Pagination pg);
    int totalEvent(Pagination pg);
}
