package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.CookMapper;
import com.semie.cook.mapper.CounselingMapper;
import com.semie.cook.model.CookDTO;
import com.semie.cook.model.CounselingDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CookService {
    private final CookMapper cookMapper;
    private final CounselingMapper counselingMapper;

    public List<CookDTO> findAll(Pagination pg) {
        pg.setTotalRecord(cookMapper.totalCook(pg));
        return cookMapper.selectAll(pg);
    }

    public List<CounselingDTO> findAll1(Pagination pg) {
        pg.setTotalRecord(counselingMapper.totalLab(pg));
        return counselingMapper.selectAll1(pg);
    }

    public int insertCounsel(CounselingDTO counselingDTO) {
        return counselingMapper.insertCounsel(counselingDTO);
    }
}
