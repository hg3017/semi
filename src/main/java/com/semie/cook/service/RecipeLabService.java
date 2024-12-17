package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.RecipeLabMapper;
import com.semie.cook.model.Lab_detail_ingredientDTO;
import com.semie.cook.model.RecipeLabDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class RecipeLabService {
    private final RecipeLabMapper recipeLabMapper;

    public List<RecipeLabDTO> findAll(Pagination pg) {
        pg.setTotalRecord(recipeLabMapper.totalLab(pg));
        return recipeLabMapper.selectAll(pg);
    }

    public RecipeLabDTO selectById(int lab_id) {
        System.out.println("RecipeLabService" + recipeLabMapper.selectById(lab_id));
        return recipeLabMapper.selectById(lab_id);
    }

    public List<Map<String, String>> selectIngredientById(int lab_id) {
        return recipeLabMapper.selectIngredientById(lab_id);
    }
}
