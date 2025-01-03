package com.semie.cook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchDTO {
    private String nameKeyword;
    private String descriptionKeyword;
//    private String title;
//    private String ingredient;
}
