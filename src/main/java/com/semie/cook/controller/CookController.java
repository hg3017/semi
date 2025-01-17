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
        return "/cooking/counseling";
    }

    //요리해요 작성하기
    @GetMapping("/cooking_write")
    public String cooking_write() {
        return "/cooking/cooking_write";
    }

    @PostMapping("/cooking_write")
    public String cooking_write(@ModelAttribute CookDTO cookDTO,
                                @ModelAttribute ImageDTO imageDto,
                                @RequestParam("file_path") MultipartFile[] file_path,
                                Model model) {
        try {
            System.out.println(cookDTO);
            System.out.println("recipeLab/cooking_write-----------------------------------------------");

            // 파일 업로드 처리
            List<FileVO> fileList = fileStorage.uploadFiles(file_path, "upload/");

            // 파일이 있는 경우, 첫 번째 파일 경로 설정
            if (!fileList.isEmpty()) {
                imageDto.setFile_path(fileList.get(0).getNfile());
            }

            // 데이터 저장
            cookService.insertCook(cookDTO);
//            imageService.insertImage(imageDto);

            return "redirect:/cook/list";
        } catch (Exception e) {
            e.printStackTrace();  // 예외를 로그로 출력
            model.addAttribute("error", "파일 업로드 중 오류가 발생했습니다.");
            return "errorPage";  // 오류 페이지로 리다이렉트 또는 포워드
        }
    }


//    @PostMapping("/cooking_write")
//    public String cooking_write(@ModelAttribute CookDTO cookDTO, @ModelAttribute ImageDTO imageDto, @RequestParam("file_path") MultipartFile[] file_path, Model model) {
//        System.out.println(cookDTO);
//        System.out.println("recipeLab/cooking_write-----------------------------------------------");
//
//
//        List<FileVO> fileList =fileStorage.uploadFiles(file_path, "upload/");
//        imageDto.setFile_path(fileList.get(0).getNfile());
//
//        cookService.insertCook(cookDTO);
//        imageService.insertImage(imageDto);
//
//
//
//        return "redirect:/cook/list";
//    }

    //고민있어요 작성하기
    @GetMapping("/counseling_write")
    public String counselingWrite() {
        return "/cooking/counseling_write";
    }
    @PostMapping ("/counseling_write")
    public String counselingWrite(@ModelAttribute CounselingDTO dto, @RequestParam("poster") MultipartFile[] poster) {
        cookService.insertCounsel(dto);
        System.out.println("cooking/counseling_write-----------------------------------------------");
//
//        //포스터 업로드
        List<FileVO> posterList = fileStorage.uploadFiles(poster,"upload/");
        dto.setPoster(posterList.get(0).getNfile());
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
