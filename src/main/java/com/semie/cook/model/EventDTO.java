package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private int event_id;
    private String event_name;
    private int board_code;
    private String desc_detail;
    private int img_list_id;
    private int tag_box_id;
    private Date create_date;
    private Date modify_date;
    private Date event_start;
    private Date event_end;
    private String file_path;
}
