package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GuideDTO {
    private int guide_id;
    private String board_code;
    private String guide_name;
    private String guide_desc;
    private Date create_date;
    private String poster;
    private String files;
    private String file_path;
    private String guide_detail;
}