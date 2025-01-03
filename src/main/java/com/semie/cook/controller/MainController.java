package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.service.GuideService;
import com.semie.cook.service.RecipeLabService;
import com.semie.cook.service.SqlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Collections;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MainController {
    private final SqlService sqlService;

    private final GuideService guideService;
    private final RecipeLabService recipeLabService;

    @GetMapping("/")
    public String main(Model model) {
        System.out.println("---------------------------------------------");

        //요리연구소 레시피
        Pagination page = new Pagination();
        Map<String, String> map1 = Collections.singletonMap("labId", String.valueOf(0));
        page.setSearchMap(map1);
//        page.setPageSize(2);

        model.addAttribute("list1", recipeLabService.findAll(page));

        //요리연구소 솔루션
        Pagination page1 = new Pagination();
        Map<String, String> map2 = Collections.singletonMap("solId", String.valueOf(0));
        page1.setSearchMap(map2);
//        page1.setPageSize(2);

        model.addAttribute("list2", recipeLabService.findAll1(page1));

        return "main";
    }

    @GetMapping("/search")
    public String search(Model model) {
        System.out.println("search---------------------------------------------");

        //요리초보가이드
        Pagination pg = new Pagination();
        Map<String, String> map = Collections.singletonMap("GuideId", String.valueOf(0));
        pg.setSearchMap(map);
        pg.setPageSize(3);

        model.addAttribute("list", guideService.findAll(pg));

        //요리연구소 레시피
        Pagination page = new Pagination();
        Map<String, String> map1 = Collections.singletonMap("labId", String.valueOf(0));
        page.setSearchMap(map1);
        page.setPageSize(4);

        model.addAttribute("list1", recipeLabService.findAll(page));

        //요리연구소 솔루션
        Pagination page1 = new Pagination();
        Map<String, String> map2 = Collections.singletonMap("solId", String.valueOf(0));
        page1.setSearchMap(map2);
        page1.setPageSize(4);

        model.addAttribute("list2", recipeLabService.findAll1(page1));

        return "search";
    }

    @GetMapping("/execute-sql")
    public String executeSql(Model model) {
        sqlService.executeSql("create");
        sqlService.executeSql("insert");
        return "redirect:/";
    }
}
