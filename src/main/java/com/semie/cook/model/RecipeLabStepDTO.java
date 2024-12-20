package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeLabStepDTO {
    private int lab_step_id;
    private int board_id;
    private int lab_id;
    private int lab_step;
    private String lab_step_name;
    private String lab_step_desc;
    private String lab_step_tip1;
    private String lab_step_tip2;
    private String lab_step_tip3;
    private String lab_step_tip4;
}
