package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {
    private int member_id;
    private int board_id;
    private String member_email;
    private String password;
    private String member_name;
    private String member_phone;
    private String member_desc;
}
