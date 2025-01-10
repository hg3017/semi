package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.CookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface CookMapper {
    List<CookDTO> selectAll(Pagination pg);
    int totalCook(Pagination pg);
}
