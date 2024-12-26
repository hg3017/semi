package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.GuideDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface GuideMapper {
    List<GuideDTO> selectAll(Pagination pg);
    int totalGuide(Pagination pg);
    List<Map<String, String>> selectGuide(int guide_id);
    List<Map<String, String>> selectGuide1(int guide_id);
    GuideDTO selectById(int guide_id);
}
