package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Lab_detail_ingredientDTO {
    private int lab_detail_id;
    private int lab_id;
    private int lab_priority;
    private String lab_ingredient_name;
    private String lab_ingredient_detail;
    private int servings;
    private int preparation;
    private int cookingtime;
    private String poster;
    private String file_path;
    private String files;
}
