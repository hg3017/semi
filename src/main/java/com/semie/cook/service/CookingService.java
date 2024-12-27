package com.semie.cook.service;


import com.semie.cook.mapper.CookingMapper;
import com.semie.cook.model.CounselingDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CookingService {
    private final CookingMapper cookingMapper;

    public void insertCounsel(CounselingDTO counselingDTO) {
        cookingMapper.insertCounsel(counselingDTO);
    }
}
