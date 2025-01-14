package com.semie.cook.service;

import com.semie.cook.mapper.ScrapMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScrapService {
    private final ScrapMapper scrapMapper;
}
