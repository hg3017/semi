package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CounselingDTO {
    private int counseling_id;
    private int board_id;
    private String counseling_name;
    private String desc_detail;
    private int creater;
    private Date create_date;
    private Date modify_date;
    private String poster;
}
