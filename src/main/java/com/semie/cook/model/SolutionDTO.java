package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SolutionDTO {
    private int solution_id;
    private int board_id;
    private String solution_name;
    private String solution_desc;
    private String desc_detail;
    private Date create_date;
    private Date modify_date;
    private String poster;
    private String file_path;
    private String files;
}