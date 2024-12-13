package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.RecipeLabMapper;
import com.semie.cook.model.RecipeLabDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeLabService {
    @Autowired
    private RecipeLabMapper recipeLabMapper;

    public List<RecipeLabDTO> findAll(Pagination pg) {
        pg.setTotalRecord(recipeLabMapper.totalEvent(pg));
        return recipeLabMapper.selectAll(pg);
    }
}
