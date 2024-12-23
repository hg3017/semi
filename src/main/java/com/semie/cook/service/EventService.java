package com.semie.cook.service;

import com.semie.cook.common.Pagination;
import com.semie.cook.mapper.EventMapper;
import com.semie.cook.model.EventDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {
    private final EventMapper eventMapper;

    public List<EventDTO> findAll(Pagination pg) {
        pg.setTotalRecord(eventMapper.totalEvent(pg));
        return eventMapper.selectAll(pg);
    }

    public EventDTO selectById(int event_id) {
        return eventMapper.selectById(event_id);
    }

    public void insertEvent(EventDTO eventDto) {
        eventMapper.insertEvent(eventDto);
    }

    public void updateEvent(EventDTO eventDto) {
        eventMapper.updateEvent(eventDto);
    }
}
