package com.semie.cook.common;

import jakarta.annotation.PostConstruct;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class FileStorage {
    private String uploadDir = "upload/";

    @PostConstruct
    public void init() {
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();
    }

    public List<FileVO> uploadFiles(MultipartFile[] files, String path) {
        List<FileVO> fileList = new ArrayList<>();

        if(path !=null){
            uploadDir = path;
        }

        try {
            for (MultipartFile file : files) {
                if (file.isEmpty()) continue;

                String uniqueFileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
                Path nFile = Paths.get(uploadDir + uniqueFileName);

                Files.copy(file.getInputStream(), nFile);
                fileList.add(new FileVO(file.getOriginalFilename(), uniqueFileName));
            }

        } catch (IOException e) {
            throw new RuntimeException("파일 업로드 중 오류 발생", e);
        }

        return fileList;
    }

    public ResponseEntity<InputStreamResource> downloadFile(String oFile, String nFile) {
        File file = new File(uploadDir + nFile);
        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        try {
            FileInputStream fileInputStream = new FileInputStream(file);
            InputStreamResource resource = new InputStreamResource(fileInputStream);

            HttpHeaders headers = new HttpHeaders();
            String encodedFileName = URLEncoder.encode(oFile, StandardCharsets.UTF_8).replaceAll("\\+", "%20");
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + encodedFileName + "\"");

            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(file.length())
                    .body(resource);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }


    public void deleteFile(String fileName) {
        File file = new File(uploadDir + fileName);
        System.out.println(fileName);
        if (file.exists()) file.delete();
    }

}