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
    private String board_code;
    private String lab_name;
    private String lab_name_desc;
    private String desc_detail;
    private int img_list_id;
    private int tag_box_id;
    private Date create_date;
    private Date modify_date;
    private String file_path;
}
