package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CookDTO {
    private int cook_id;
    private int board_id;
    private String cook_name;
    private String desc_detail;
    private int creater;
    private Date CREATE_DATE;
    private Date MODIFY_DATE;
    private int cook_detail_id;
    private int cook_priority;
    private String cook_ingredient_name;
    private String cook_ingredient_detail;
    private int servings;
    private int preparation;
    private int cookingtime;
    private String poster;
    private String file_path;
    private String files;
}
