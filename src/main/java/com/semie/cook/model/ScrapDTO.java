package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScrapDTO {
    private int member_scrap_id;
    private String board_id;
    private int member_id;
    private int scrap_post_id;

}
