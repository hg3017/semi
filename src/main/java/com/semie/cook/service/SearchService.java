package com.semie.cook.service;

import com.semie.cook.mapper.SearchMapper;
import com.semie.cook.model.SearchDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final SearchMapper searchMapper;

    public List<SearchDTO> search(String SearchKeyword) {
        return searchMapper.findByCont(SearchKeyword);
    }

    // 필터링 및 정렬 수행하는 메서드
//    private List<Product> getFilteredAndSortedResults(OrderSpecifier orderSpecifier, BooleanBuilder filterBuilder, int page, int size) {
//        return queryFactory.selectFrom(product)
//                .leftJoin(product.productThumbnails).fetchJoin()
//                .where(filterBuilder)
//                .orderBy(orderSpecifier)
//                .offset(page * size)
//                .limit(size)
//                .fetch();
//    }

//    private List<SearchDTO> mapToProductListDto(List<Product> results) {
//        return results.stream()
//                .map(product -> {
//                    ProductListDto productListDto = modelMapper.map(product, ProductListDto.class);
//                    // ProductThumbnail의 imagePath를 매핑
//                    productListDto.setProductThumbnails(
//                            product.getProductThumbnails().stream()
//                                    .map(ProductThumbnail::getImagePath)
//                                    .toList()
//                    );
//                    return productListDto;
//                })
//                .toList();
//    }
}
