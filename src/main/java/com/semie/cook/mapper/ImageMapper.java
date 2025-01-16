package com.semie.cook.mapper;

import com.semie.cook.model.EventDTO;
import com.semie.cook.model.ImageDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ImageMapper {
    int insertImage(ImageDTO imageDTO);
}
