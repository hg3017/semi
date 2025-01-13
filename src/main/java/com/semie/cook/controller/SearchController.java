package com.semie.cook.controller;

import com.semie.cook.model.SearchDTO;
import com.semie.cook.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/cooking")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("/search")
    public String list(String SearchKeyword ,Model model) {
        System.out.println("/search---------------------------------------------");
        List<SearchDTO> list = null;
        if(SearchKeyword == null) {
            list = searchService.search(SearchKeyword);
        }else {
            list = searchService.search(SearchKeyword);
        }
        return "/search";
    }

}
