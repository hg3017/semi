package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeLabDTO {
    private int lab_id;
    private int board_id;
    private String lab_name;
    private String lab_name_desc;
    private String desc_detail;
    private Date create_date;
    private Date modify_date;
    private String poster;
    private String file_path;
    private String files;
    private int lab_priority;
    private String lab_ingredient_name;
    private String lab_ingredient_detail;
    private int servings;
    private int preparation;
    private int cookingtime;
}
