package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.EventMapper;
import com.semie.cook.model.EventDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventMapper eventMapper;

    public List<EventDTO> findAll(Pagination pg) {
        pg.setTotalRecord(eventMapper.totalEvent(pg));
        return eventMapper.selectAll(pg);
    }
}
