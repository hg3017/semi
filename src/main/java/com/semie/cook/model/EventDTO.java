package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private int event_id;
    private int board_id;
    private String event_name;
    private String main_poster;
    private String poster;
    private String desc_detail;
    private Date create_date;
    private Date modify_date;
    private String event_start;
    private String event_end;
    private String hashnames;
}
