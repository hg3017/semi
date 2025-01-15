package com.semie.cook.controller;

import com.semie.cook.common.FileStorage;
import com.semie.cook.common.FileVO;
import com.semie.cook.common.Pagination;
import com.semie.cook.model.CookDTO;
import com.semie.cook.model.CounselingDTO;
import com.semie.cook.model.ImageDTO;
import com.semie.cook.service.CookService;
import com.semie.cook.service.ImageService;
import com.semie.cook.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/cook")
public class CookController {
    private final CookService cookService;
    private final MemberService memberService;
    private final FileStorage fileStorage;
    private final ImageService imageService;

    @GetMapping("/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        //페이지네이션
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        model.addAttribute("list", cookService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));
        model.addAttribute("state", "cooking");
        return "/cooking/cooking";
    }

    // 고민있어요 리스트
    @GetMapping("/counseling")
    public String counseling(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        model.addAttribute("list", cookService.findAll1(pg));
        model.addAttribute("paging", pg.paging(request));
        model.addAttribute("state", "counseling");
        System.out.println("/cooking/counseling---------------------------------------------");
        return "/cook/counseling";
    }

    //요리해요 작성하기
    @GetMapping("/cooking_write")
    public String cooking_write() {
        return "/cooking/cooking_write";
    }

    @PostMapping("/cooking_write")
    public String cooking_write(@ModelAttribute CookDTO cdto, @ModelAttribute ImageDTO imageDto,@RequestParam("file") MultipartFile[] file_path, Model model) {
        System.out.println(cdto);
        System.out.println("recipeLab/cooking_write-----------------------------------------------");

        // 2. 파일 업로드 처리: imageDto에 파일이 존재하면 파일을 업로드하고, 경로를 DTO에 저장
//        if (imageDto.getFile() != null && !imageDto.getFile().isEmpty()) {
//            // 파일 업로드 처리 (이미지 저장)
////            fileStorage.uploadFiles( imageDto.getFiles(), "upload/");
//            imageService.insertImage(imageDto);
//        }
        List<FileVO> fileList =fileStorage.uploadFiles(file_path, "upload/");
        imageDto.setFile_path(fileList.get(0).getNfile());

        cookService.insertCook(cdto);
        imageService.insertImage(imageDto);

        return "redirect:/cook/list";
    }

    //고민있어요 작성하기
    @GetMapping("/counseling_write")
    public void counselingWrite() {
    }
    @PostMapping ("/counseling_write")
    public String counselingWrite(@ModelAttribute CounselingDTO dto, @RequestParam("poster") MultipartFile[] poster) {
//        cookService.insertCounsel(dto);
        System.out.println("cooking/counseling_write-----------------------------------------------");
//
//        //포스터 업로드
//        List<FileVO> posterList = fileStorage.uploadFiles(poster,"upload/");
//        dto.setPoster(posterList.get(0).getNfile());
//
//        //글쓰기
//        int re = cookService.insertCounsel(dto);
//        if(re > 0) {
//            return "redirect:/recipeLab/archive_counsel";
//        }else {
//            return "redirect:/cooking/counseling_write";
//        }
        return "/cooking/counseling_write";
    }

    //파일명
    @GetMapping("/uploads/{fileName:.+}")
    public @ResponseBody Resource getFile(@PathVariable String fileName) {
        File file = new File("upload/" + fileName);
        return new FileSystemResource(file);
    }
}
