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
    private String creater;
    private Date CREATE_DATE;
    private Date MODIFY_DATE;
}
