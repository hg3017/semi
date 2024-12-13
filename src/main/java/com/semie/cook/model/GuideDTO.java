package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GuideDTO {
    private int newbie_id;
    private String board_code;
    private String newbie_name;
    private String newbie_desc;
    private int tag_box_id;
    private int img_list_id;
    private Date create_date;
    private String poster;
    private String files;
}
