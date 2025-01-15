package com.semie.cook.service;

import com.semie.cook.mapper.ImageMapper;
import com.semie.cook.model.ImageDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageMapper imageMapper;

    public void insertImage(ImageDTO imageDto) {
        imageMapper.insertImage(imageDto);
    }
}
