-- HASHTAGS
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'무',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'식비',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'한그릇요리',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'고기',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'마라',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'이색요리',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'달걀',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'계란',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'에그인헬',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'매운요리',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'파스타소스',SYSDATE);
INSERT INTO HASHTAGS (HASH_ID, HASH_NAME, CREATE_DATE) VALUES (HASH_ID_SEQ.NEXTVAL,'메인요리',SYSDATE);

-- HASHTAGS_CONN

INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,5, 20);
INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,6, 20);
INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,7, 20);
INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,8, 20);
INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,9, 20);
INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,10, 20);
INSERT INTO HASHTAGS_CONN (CONN_ID, HASH_ID, BOARD_ID) VALUES (1,11, 20);

-- guide
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'냉장고를 열었더니 <br> 남은 ''무''가 있다.','커다란 ''무'' 하나 사면, <br> 다 먹지 못하고 버리게 되는 분, 손!','냉장고 속 방치된 무,<br>쉽고 맛있게 요리하고<br>올바르게 손질, 보관하는 방법도 챙겨가세요!',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'식비 지출 막는 요리법','치솟는 물가, 식비 절약을 위한 방법 <br> 요리초보도, 고수도 모두 집중!','재료를 최소화한 요리부터,<br>버리는 재료 없이 알차게 보관하는 법까지!',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'요리가 쉽고 즐거워지는 <br> 초간단 한그릇요리','한그릇요리도 그럴듯하게, 든든하게! <br> 요리초보도 도전 가능!','',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'고기 요리도 <br> 실패 없이 자신있게 도전!','푸짐하게 차려 먹고 싶은 날, <br> 요리초보도 실패 없이 도전해볼 요리','소고기,닭고기,돼지고기<br>취향에 따라 고기만 준비하세요!',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'우리가 어떤 민족? <br> 김치의 민족!','김치 없인 못살아 <br> 활용도 100% 김치 활용 레시피 모음.zip','김치 없인 못 사는 당신을 위한<br>기본 레시피부터 색다른 활용요리까지!<br>맘에 드는 레시피로 골라가세요~',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'반찬이 처음이라면?','반찬가게 가지 않아도 이렇게만 따라하면 걱정 끝! <br> 한국인이 좋아하는 반찬만 모아봤어요.','',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'어렵지 않아요! <br> 요리초보의 파스타 완전 정복','어렵게만 느껴졌던 파스타, <br> 플레이팅 노하우부터 초간단 버전, 제대로 하는 법까지!','파스타 완전 정복, 이렇게만 따라해요!',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'아이의 편식이 고민인가요?','잘 먹지 않고, 골라 먹고, 투정하고 <br> 아이의 식습관 개선을 바라는 부모님들에게','필승 레시피와 요리팁',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'가을은 버섯의 계절-🍂🍄','버섯이 가장 맛있을 때! <br> 초보도 가능한 특별 레시피부터 손질법까지!','제철 음식을 찾는 당신을 위해 준비했어요',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'요리초보를 위한 해산물 손질법','왠지 어려워보이는 해산물 손질, <br> 이것만 보면 요리초보도 도전 가능!','해산물 러버라면 직접 도전!',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'식비 절약에는 도시락이 최고!','매일 사먹는 점심값 부담될 때, <br> 미리 도시락 싸두고 식비 아껴보아요!','간단하고 쉽게 준비할 수 있는 요리들로 가득 채워봤어요!',sysdate);
INSERT INTO guide (GUIDE_ID, BOARD_ID, GUIDE_NAME, GUIDE_DESC, GUIDE_DETAIL, CREATE_DATE) VALUES (GUIDE_ID_SEQ.NEXTVAL,10,'내 몸을 건강하고 가볍게 채울 <br> 8가지 요리','가벼운데 건강하게 채우고 싶은 당신을 위한 레시피. <br> 거기에 "특별함"을 곁들인..','가볍고 건강하게 채우는 이색 메인요리 모음<br>특별한데, 든든하기까지 하다면 완벽!',sysdate);



-- event
insert into event (EVENT_ID, BOARD_ID, MAIN_POSTER, POSTER, EVENT_NAME, DESC_DETAIL, CREATE_DATE, MODIFY_DATE, EVENT_START, EVENT_END) values(EVENT_ID_SEQ.NEXTVAL,60,'e-images1.jpg','e-images1-1.jpg','두근두근 낭만 파티요리','내용',sysdate,'2024.10.29','2024.10.29','2024.10.30');
insert into event (EVENT_ID, BOARD_ID, MAIN_POSTER, POSTER, EVENT_NAME, DESC_DETAIL, CREATE_DATE, MODIFY_DATE, EVENT_START, EVENT_END) values(EVENT_ID_SEQ.NEXTVAL,60,'e-images1.jpg','e-images1-1.jpg','재료의 방 오픈! 집밥요리사','내용',sysdate,'2024.10.29','2024.10.29','2024.10.30');
insert into event (EVENT_ID, BOARD_ID, MAIN_POSTER, POSTER, EVENT_NAME, DESC_DETAIL, CREATE_DATE, MODIFY_DATE, EVENT_START, EVENT_END) values(EVENT_ID_SEQ.NEXTVAL,60,'e-images1.jpg','e-images1-1.jpg','재료의 방 오픈! 집밥요리사','내용',sysdate,'2024.10.29','2024.10.29','2024.10.30');
insert into event (EVENT_ID, BOARD_ID, MAIN_POSTER, POSTER, EVENT_NAME, DESC_DETAIL, CREATE_DATE, MODIFY_DATE, EVENT_START, EVENT_END) values(EVENT_ID_SEQ.NEXTVAL,60,'e-images1.jpg','e-images1-1.jpg','재료의 방 오픈! 집밥요리사','내용',sysdate,'2024.10.29','2024.10.29','2024.10.30');
insert into event (EVENT_ID, BOARD_ID, MAIN_POSTER, POSTER, EVENT_NAME, DESC_DETAIL, CREATE_DATE, MODIFY_DATE, EVENT_START, EVENT_END) values(EVENT_ID_SEQ.NEXTVAL,60,'e-images1.jpg','e-images1-1.jpg','재료의 방 오픈! 집밥요리사','내용',sysdate,'2024.10.29','2024.10.29','2024.10.30');



-- lab
insert into LAB (LAB_ID, BOARD_ID, LAB_NAME, LAB_NAME_DESC, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(LAB_ID_SEQ.NEXTVAL,20,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into LAB (LAB_ID, BOARD_ID, LAB_NAME, LAB_NAME_DESC, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(LAB_ID_SEQ.NEXTVAL,20,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into LAB (LAB_ID, BOARD_ID, LAB_NAME, LAB_NAME_DESC, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(LAB_ID_SEQ.NEXTVAL,20,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into LAB (LAB_ID, BOARD_ID, LAB_NAME, LAB_NAME_DESC, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(LAB_ID_SEQ.NEXTVAL,20,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into LAB (LAB_ID, BOARD_ID, LAB_NAME, LAB_NAME_DESC, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(LAB_ID_SEQ.NEXTVAL,20,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into LAB (LAB_ID, BOARD_ID, LAB_NAME, LAB_NAME_DESC, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(LAB_ID_SEQ.NEXTVAL,20,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');


-- solution
insert into SOLUTION (SOLUTION_ID, BOARD_ID, SOLUTION_NAME, SOLUTION_DESC, SOLUTION_DETAIL, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(SOLUTION_ID_SEQ.NEXTVAL,30,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬', '맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into SOLUTION (SOLUTION_ID, BOARD_ID, SOLUTION_NAME, SOLUTION_DESC, SOLUTION_DETAIL, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(SOLUTION_ID_SEQ.NEXTVAL,30,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬', '맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');
insert into SOLUTION (SOLUTION_ID, BOARD_ID, SOLUTION_NAME, SOLUTION_DESC, SOLUTION_DETAIL, DESC_DETAIL, CREATE_DATE, MODIFY_DATE) values(SOLUTION_ID_SEQ.NEXTVAL,30,'새콤 무생채','남은 무가 있다면 새콤하게 무쳐봐요!','마라맛 토마토소스에 달걀 퐁당!<br>색다른 맛으로 즐기는 에그인헬', '맛으로 즐기는 에그인헬','2024.12.03','2024.12.16');


-- LAB_DETAIL_INGREDIENT
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,1,'주재료','달걀 3개 (150g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,1,'주재료','포도씨유 2스푼 (20g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,2,'부재료','양파 1/2개 (100g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,2,'부재료','빨간 파프리카 1개 (100g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,2,'부재료','베이컨 2줄 (50g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,2,'부재료','마늘 5개 (20g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,2,'부재료','피자치즈 1봉 (60g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,5,'양념','폰타나 나폴리 뽀모도로 토마토 파스타소스 1봉 (150g)',2,5,10);
insert into LAB_DETAIL_INGREDIENT (LAB_DETAIL_ID, LAB_ID, LAB_PRIORITY, LAB_INGREDIENT_NAME, LAB_INGREDIENT_DETAIL, SERVINGS, PREPARATION, COOKINGTIME) values(LAB_DETAIL_SEQ.nextval,2,5,'양념','차오차이 마라샹궈소스 1봉 (110g)',2,5,10);

-- LAB_DETAIL_STEP

insert into LAB_DETAIL_STEP (LAB_STEP_ID, BOARD_ID, LAB_ID, LAB_STEP, LAB_STEP_DESC, LAB_STEP_TIP1, LAB_STEP_TIP2, LAB_STEP_TIP3, LAB_STEP_TIP4)
values(LAB_STEP_SEQ.nextval, 21, 1, 1, '재료 썰기', '소고기 등심은 사방 3~4cm 크기로 큼직하게 큐브 모양으로 썰어주고, 감자와 당근은 껍질을 제거한 뒤에 들쭉날쭉 마구 썰기로 8등분', '새송이버섯과 양파는 감자 사이즈와 동일하게 깍둑 썰어주세요. 3개 (150g)'
      , '스튜에 사용하기 좋은 소고기 부위로는 등심 외에도 목심, 앞다리살, 양지머리, 사태, 갈비살 등이 있어요.', '소고기 부위에 따른 맛특징이 궁금하다면? 👉클릭');

insert into LAB_DETAIL_STEP (LAB_STEP_ID, BOARD_ID, LAB_ID, LAB_STEP, LAB_STEP_DESC, LAB_STEP_TIP1, LAB_STEP_TIP2, LAB_STEP_TIP3, LAB_STEP_TIP4)
values(LAB_STEP_SEQ.nextval, 21, 1, 2, '스튜 끓이기', '전기밥솥에 손질한 모든 재료와 물, 연두순과 토마토 파스타소스를 넣어주고 찜모드로 50분간 조리하면 완성!', '양지나 사태 등 질긴 부위를 사용했다면 조금 더 시간을 늘려 조리해주면 좋아요.'
      , '완성된 스튜 위에 파슬리를 뿌려주면 더 예쁘게 담을 수 있어요!', '빵이나 바게트 등과 곁들여 먹어도 좋아요.');

insert into LAB_DETAIL_STEP (LAB_STEP_ID, BOARD_ID, LAB_ID, LAB_STEP, LAB_STEP_DESC, LAB_STEP_TIP1, LAB_STEP_TIP2, LAB_STEP_TIP3, LAB_STEP_TIP4)
values(LAB_STEP_SEQ.nextval, 21, 2, 1, '재료 썰기', '소고기 등심은 사방 3~4cm 크기로 큼직하게 큐브 모양으로 썰어주고, 감자와 당근은 껍질을 제거한 뒤에 들쭉날쭉 마구 썰기로 8등분', '새송이버섯과 양파는 감자 사이즈와 동일하게 깍둑 썰어주세요. 3개 (150g)'
      , '스튜에 사용하기 좋은 소고기 부위로는 등심 외에도 목심, 앞다리살, 양지머리, 사태, 갈비살 등이 있어요.', '소고기 부위에 따른 맛특징이 궁금하다면? 👉클릭');

insert into LAB_DETAIL_STEP (LAB_STEP_ID, BOARD_ID, LAB_ID, LAB_STEP, LAB_STEP_DESC, LAB_STEP_TIP1, LAB_STEP_TIP2, LAB_STEP_TIP3, LAB_STEP_TIP4)
values(LAB_STEP_SEQ.nextval, 21, 2, 2, '스튜 끓이기', '전기밥솥에 손질한 모든 재료와 물, 연두순과 토마토 파스타소스를 넣어주고 찜모드로 50분간 조리하면 완성!', '양지나 사태 등 질긴 부위를 사용했다면 조금 더 시간을 늘려 조리해주면 좋아요.'
      , '완성된 스튜 위에 파슬리를 뿌려주면 더 예쁘게 담을 수 있어요!', '빵이나 바게트 등과 곁들여 먹어도 좋아요.');



-- img_list (guide)
    INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide1.jpg',  1,sysdate,null,1);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide1.jpg',  2,sysdate,null,1);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide1_1.jpg',3,sysdate,null,1);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide1_2.jpg',4,sysdate,null,1);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide2.jpg',  1,sysdate,null,2);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide2.jpg',  2,sysdate,null,2);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide2_1.jpg',3,sysdate,null,2);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide2_2.jpg',4,sysdate,null,2);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide3.jpg',   1,sysdate,null,3);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide3.jpg',  2,sysdate,null,3);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide3_1.jpg',3,sysdate,null,3);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide3_2.jpg',4,sysdate,null,3);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide4.jpg',  1,sysdate,null,4);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide4.jpg',  2,sysdate,null,4);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide4_1.jpg',3,sysdate,null,4);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide4_2.jpg',4,sysdate,null,4);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide5.jpg',  1,sysdate,null,5);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide5.jpg',  2,sysdate,null,5);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide5_1.jpg',3,sysdate,null,5);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide5_2.jpg',4,sysdate,null,5);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide6.jpg',  1,sysdate,null,6);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide6.jpg',  2,sysdate,null,6);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide6_1.jpg',3,sysdate,null,6);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide6_2.jpg',4,sysdate,null,6);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide7.jpg',  1,sysdate,null,7);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide7.jpg',  2,sysdate,null,7);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide7_1.jpg',3,sysdate,null,7);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide7_2.jpg',4,sysdate,null,7);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide8.jpg',  1,sysdate,null,8);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide8.jpg',  2,sysdate,null,8);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide8_1.jpg',3,sysdate,null,8);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide8_2.jpg',4,sysdate,null,8);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide9.jpg',  1,sysdate,null,9);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide9.jpg',  2,sysdate,null,9);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide9_1.jpg',3,sysdate,null,9);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide9_2.jpg',4,sysdate,null,9);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide10.jpg',  1,sysdate,null,10);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide10.jpg',  2,sysdate,null,10);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide10_1.jpg',3,sysdate,null,10);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide10_2.jpg',4,sysdate,null,10);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide11.jpg',  1,sysdate,null,11);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide11.jpg',  2,sysdate,null,11);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide11_1.jpg',3,sysdate,null,11);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide11_2.jpg',4,sysdate,null,11);

INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide12.jpg',  1,sysdate,null,12);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide12.jpg',  2,sysdate,null,12);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide12_1.jpg',3,sysdate,null,12);
INSERT INTO img_list (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) VALUES (IMG_LIST_SEQ.NEXTVAL,10,'guide12_2.jpg',4,sysdate,null,12);

-- img_list(lab)
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'guide4.jpg'  ,1,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'rep_sub1.jpg'  ,2,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'rep_sub1_2.jpg',3,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'rep_sub1_3.jpg',4,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'rep_sub1_4.jpg',5,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'rep_sub1_5.jpg',6,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'guide4.jpg'  ,1,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'guide4.jpg'  ,2,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'guide4_1.jpg',3,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'guide4_2.jpg',4,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img1.jpg',1,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img2.jpg',2,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img3.jpg',3,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img4.jpg',4,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img1.jpg',1,SYSDATE,'2024.12.16',4);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img2.jpg',2,SYSDATE,'2024.12.16',4);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img3.jpg',3,SYSDATE,'2024.12.16',4);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,20,'sub_img4.jpg',4,SYSDATE,'2024.12.16',4);


insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,21,'step1.jpg'  ,1,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,21,'step2_1.jpg'  ,1,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,21,'step2_2.jpg'  ,2,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,21,'step2_3.jpg'  ,3,SYSDATE,'2024.12.16',2);




-- img_list(solution)
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide1.jpg',  1,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide1.jpg',  2,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide1_1.jpg',3,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide1_2.jpg',4,SYSDATE,'2024.12.16',1);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide2.jpg',  1,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide2.jpg',  2,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide2_1.jpg',3,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'guide2_2.jpg',4,SYSDATE,'2024.12.16',2);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img1.jpg',1,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img2.jpg',2,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img3.jpg',3,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img4.jpg',4,SYSDATE,'2024.12.16',3);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img1.jpg',1,SYSDATE,'2024.12.16',4);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img2.jpg',2,SYSDATE,'2024.12.16',4);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img3.jpg',3,SYSDATE,'2024.12.16',4);
insert into IMG_LIST (IMG_LIST_ID, BOARD_ID, FILE_PATH, IMG_PRIORITY, CREATE_DATE, MODIFY_DATE, POST_ID) values(IMG_LIST_SEQ.NEXTVAL,30,'sub_img4.jpg',4,SYSDATE,'2024.12.16',4);


