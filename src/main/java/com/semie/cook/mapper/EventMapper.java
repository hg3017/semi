package com.semie.cook.mapper;

import com.semie.cook.common.Pagination;
import com.semie.cook.model.EventDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EventMapper {
    List<EventDTO> selectAll(Pagination pg);
    int totalEvent(Pagination pg);
    EventDTO selectById(int event_id);
    int insertEvent(EventDTO eventDto);
    int updateEvent(EventDTO eventDto);
    int deleteEvent(int event_id);

}
