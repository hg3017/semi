package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.GuideMapper;
import com.semie.cook.model.GuideDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GuideService {
    private final GuideMapper guideMapper;

    public List<GuideDTO> findAll(Pagination pg) {
        pg.setTotalRecord(guideMapper.totalGuide(pg));
        return guideMapper.selectAll(pg);
    }

    public GuideDTO findById(int guide_id) {
        return guideMapper.selectById(guide_id);
    }
}
