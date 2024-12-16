package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.GuideDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GuideMapper {
    List<GuideDTO> selectAll(Pagination pg);
    int totalGuide(Pagination pg);
    GuideDTO selectById(int guide_id);
}
