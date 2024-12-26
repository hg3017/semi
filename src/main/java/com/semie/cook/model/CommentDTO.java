package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
    private int comment_id;
    private int board_id;
    private int comment_board_id;
    private int comment_post_id;
    private String desc_detail;
    private int creater;
    private String member_name;
    private int parent_comment_id;
    private Date create_date;
    private Date modify_date;
}
