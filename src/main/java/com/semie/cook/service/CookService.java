package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.CookMapper;
import com.semie.cook.model.CookDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CookService {
    private final CookMapper cookMapper;

    public List<CookDTO> findAll(Pagination pg) {
        pg.setTotalRecord(cookMapper.totalCook(pg));
        return cookMapper.selectAll(pg);
    }
}
