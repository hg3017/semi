package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.Lab_detail_ingredientDTO;
import com.semie.cook.service.GuideService;
import com.semie.cook.service.RecipeLabService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/recipeLab")
public class RecipeLabController {

   private final RecipeLabService recipeLabService;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        model.addAttribute("list", recipeLabService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));
        System.out.println("recipeLab/list---------------------------------------------");
        System.out.println(" recipeLabService.findAll(pg)" +  recipeLabService.findAll(pg));
        return "/recipeLab/recipe_lab";
    }

    @GetMapping("/solution")
    public String solution(HttpServletRequest request,@RequestParam(defaultValue = "1") int pageNum ,Model model) {
        Pagination page = new Pagination();
        page.setPageNum(pageNum);
        model.addAttribute("list", recipeLabService.findAll1(page));
        model.addAttribute("paging", page.paging(request));
        System.out.println("recipeLab/solution---------------------------------------------");
        return "/recipeLab/solution";
    }

    @GetMapping("/counseling")
    public String counseling(Model model) {
        System.out.println("recipeLab/counseling---------------------------------------------");
        model.addAttribute("state", "counseling");
        return "/recipeLab/counseling";
    }

    @GetMapping("/cooking")
    public String cooking(Model model) {
        System.out.println("recipeLab/cooking---------------------------------------------");
        model.addAttribute("state", "cooking");
        return "/recipeLab/cooking";
    }

    @GetMapping("/archive_rep/{labId}")
    public String archive(@PathVariable int labId, Model model) {
        model.addAttribute("lab", recipeLabService.selectById(labId));
        model.addAttribute("ldi", recipeLabService.selectIngredientById(labId));
        System.out.println(recipeLabService.selectStepById(labId));
        model.addAttribute("lds", recipeLabService.selectStepById(labId));
        System.out.println("selectById" + recipeLabService.selectById(labId));
        System.out.println("recipeLab/archive-----------------------------------------------");
        return "/recipeLab/archive_rep";
    }

    @GetMapping("/archive_sol/{solId}")
    public String archive_sol(@PathVariable int solId, Model model) {
        model.addAttribute("sol", recipeLabService.selectById1(solId));
        System.out.println("recipeLab/archive_sol-----------------------------------------------");
        return "/recipeLab/archive_sol";
    }
    @GetMapping("/archive_cook")
    public String archive_cook(Model model) {
        System.out.println("recipeLab/archive_cook-----------------------------------------------");
        return "/recipeLab/archive_cook";
    }

    @GetMapping("/archive_counsel")
    public String archive_counsel(Model model) {
        System.out.println("recipeLab/archive_counsel-----------------------------------------------");
        return "/recipeLab/archive_counsel";
    }


}
