package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.Lab_detail_ingredientDTO;
import com.semie.cook.model.RecipeLabDTO;
import com.semie.cook.model.RecipeLabStepDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface RecipeLabMapper {
    List<RecipeLabDTO> selectAll(Pagination pg);
    int totalLab(Pagination pg);

    RecipeLabDTO selectById(int lab_id);

    List<Map<String, String>> selectIngredientById(int lab_id);

    RecipeLabStepDTO selectStepById(int lab_id);

}
