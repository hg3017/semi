package com.semie.cook.service;


import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.CookingMapper;
import com.semie.cook.model.CounselingDTO;
import com.semie.cook.model.RecipeLabDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CookingService {
    private final CookingMapper cookingMapper;

    public int insertCounsel(CounselingDTO counselingDTO) {
        return cookingMapper.insertCounsel(counselingDTO);
    }

    public List<CounselingDTO> findAll(Pagination pg) {
        pg.setTotalRecord(cookingMapper.totalLab(pg));
        return cookingMapper.selectAll(pg);
    }
}
