package com.semie.cook.controller;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.Lab_detail_ingredientDTO;
import com.semie.cook.service.GuideService;
import com.semie.cook.service.MemberService;
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

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/recipeLab")
public class RecipeLabController {

   private final RecipeLabService recipeLabService;
   private final MemberService memberService;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        // 페이지네이션
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        // 리스트
        model.addAttribute("list", recipeLabService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));
        // 탭 클릭
        model.addAttribute("state","list");
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
        model.addAttribute("state","solution");
        System.out.println("recipeLab/solution---------------------------------------------");
        return "/recipeLab/solution";
    }

    @GetMapping("/archive_rep/{labId}")
    public String archive(@PathVariable int labId, Model model) {
        // 레시피(리스트)
        model.addAttribute("lab", recipeLabService.selectById(labId));
        // 레시피 상세
        model.addAttribute("ldi", recipeLabService.selectIngredientById(labId));
        model.addAttribute("lds", recipeLabService.selectStepById(labId));

        // 이 글이 마음에 드셨다면 목록
        Pagination pg = new Pagination();
        Map<String, String> map = Collections.singletonMap("labId", String.valueOf(labId));
        pg.setSearchMap(map);

        // 스탭별 재료 설명
        model.addAttribute("list", recipeLabService.findAll(pg));
        model.addAttribute("postCommentlist", memberService.findPostComment(20, labId));

        System.out.println("memberService" + memberService.findPostComment(20, labId));

        System.out.println("recipeLab/archive-----------------------------------------------");
        return "/recipeLab/archive_rep";
    }

    @GetMapping("/archive_sol/{solId}")
    public String archive_sol(@PathVariable int solId, Model model) {
        model.addAttribute("sol", recipeLabService.selectById1(solId));

        Pagination pg = new Pagination();
        Map<String, String> map = Collections.singletonMap("solId", String.valueOf(solId));
        pg.setSearchMap(map);

        model.addAttribute("list", recipeLabService.findAll1(pg));
        model.addAttribute("postCommentlist", memberService.findPostComment(30, solId));

        System.out.println("recipeLab/archive_sol-----------------------------------------------");
        return "/recipeLab/archive_sol";
    }

    // 요리해요 상세페이지
    @GetMapping("/archive_cook")
    public String archive_cook(Model model) {
        System.out.println("recipeLab/archive_cook-----------------------------------------------");
        return "/recipeLab/archive_cook";
    }
    // 고민있어요 상세페이지
    @GetMapping("/archive_counsel")
    public String archive_counsel(Model model) {
        System.out.println("recipeLab/archive_counsel-----------------------------------------------");
        return "/recipeLab/archive_counsel";
    }
}
