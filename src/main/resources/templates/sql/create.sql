-- 사용한 테이블들을 초기화합니다.
DROP TABLE EVENT CASCADE CONSTRAINTS;
DROP TABLE COUNSELING CASCADE CONSTRAINTS;
DROP TABLE SOLUTION CASCADE CONSTRAINTS;
DROP TABLE LAB_DETAIL_STEP CASCADE CONSTRAINTS;
DROP TABLE LAB_DETAIL_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE LAB CASCADE CONSTRAINTS;
DROP TABLE GUIDE CASCADE CONSTRAINTS;
DROP TABLE MEMBER_COMMENT CASCADE CONSTRAINTS;
DROP TABLE MEMBER_SCRAP CASCADE CONSTRAINTS;
DROP TABLE MEMBER CASCADE CONSTRAINTS;
DROP TABLE IMG_LIST CASCADE CONSTRAINTS;
DROP TABLE HASHTAGS_CONN CASCADE CONSTRAINTS;
DROP TABLE HASHTAGS CASCADE CONSTRAINTS;


-- 해시테그 정보를 가진 테이블입니다.
CREATE TABLE HASHTAGS
(
    HASH_ID     NUMBER PRIMARY KEY,    -- HASH_TAGS 구분용 키
    HASH_NAME   VARCHAR2(50) NOT NULL, -- 해당 테그의 이름
    CREATE_DATE DATE DEFAULT SYSDATE   -- 생성일
);

-- 테이블과 해시테그간 연결정보를 가진 테이블입니다.
CREATE TABLE HASHTAGS_CONN
(
    CONN_ID  NUMBER, -- 다른 TABLE 의 PK 와 연결하기 위한 키.
    HASH_ID  NUMBER, -- HASHTAGS 와 연결하기 위한 키
    BOARD_ID NUMBER, -- 다른 TABLE 의 BOARD_ID 와 연결하기 위한 키.
    PRIMARY KEY (CONN_ID, HASH_ID, BOARD_ID)
);


-- 게시글이 가지고 있는 이미지 정보를 가진 테이블입니다.
CREATE TABLE IMG_LIST
(
    IMG_LIST_ID  NUMBER,               -- 이미지 리스트 구분용
    BOARD_ID     NUMBER NOT NULL,      -- 게시판 구분용 키.
    FILE_PATH    VARCHAR2(200),        -- 파일 경로와 파일 명,
    IMG_PRIORITY NUMBER,               -- 이미지 묶음인 경우, 해당 컬럼의 순서에 따라 출력.
    CREATE_DATE  DATE DEFAULT SYSDATE, -- 생성일
    MODIFY_DATE  DATE,                 -- 수정일
    POST_ID      NUMBER NOT NULL,      -- 게시글 구분용 키.
    PRIMARY KEY (IMG_LIST_ID, BOARD_ID)
);

-- 사용자 정보를 가지고 있는 테이블입니다.
CREATE TABLE MEMBER
(
    MEMBER_ID    NUMBER UNIQUE, -- 맴버 구분용 키.
    BOARD_ID     NUMBER,        -- 맴버 프로필 이미지 연결 키. IMG_LIST 테이블의 BOARD_ID 와 연결됩니다.
    MEMBER_EMAIL VARCHAR2(50),  -- 맴버 이메일
    PASSWORD     VARCHAR2(50),  -- 맴버 비밀번호.
    MEMBER_NAME  VARCHAR2(20),  -- 맴버 이름
    MEMBER_PHONE VARCHAR2(20),  -- 맴버 핸드폰 번호.
    MEMBER_DESC  VARCHAR2(500), -- 맴버 프로필 상세설명.
    PRIMARY KEY (MEMBER_ID, BOARD_ID)
);


-- 맴버가 스크랩한 게시글 정보를 가진 테이블입니다.
CREATE TABLE MEMBER_SCRAP
(
    MEMBER_SCRAP_ID NUMBER, -- 맴버 스크랩 키.
    BOARD_ID        NUMBER, -- 각 게시판 별 구분코드.
    MEMBER_ID       NUMBER, -- 맴버 연결용 키.
    SCRAP_POST_ID   NUMBER, -- 각 게시글 별 구분코드.
    PRIMARY KEY (MEMBER_SCRAP_ID, BOARD_ID)
);


-- 맴버가 작성한 코멘트 정보를 가진 테이블입니다.
CREATE TABLE MEMBER_COMMENT
(
    COMMENT_ID        NUMBER UNIQUE,                 -- 댓글 구분용 키.
    BOARD_ID          NUMBER,                        -- 이미지 연결 키. IMG_LIST 테이블의 BOARD_ID 와 연결됩니다.
    COMMENT_BOARD_ID  VARCHAR2(10),                  -- 각 게시판 별 구분코드
    COMMENT_POST_ID   NUMBER,                        -- 각 게시글 별 구분코드
    DESC_DETAIL       CLOB,                          -- 게시글 내용
    CREATER           NUMBER,                        -- 작성자. 맴버 연결용 키.
    PARENT_COMMENT_ID NUMBER,                        -- 부모 코멘트 아이디. 자기 자신을 참조하여 부모 코멘트를 찾습니다.
    CREATE_DATE       DATE DEFAULT SYSDATE NOT NULL, -- 생성일.
    MODIFY_DATE       DATE,                          -- 수정일.
    PRIMARY KEY (COMMENT_ID, BOARD_ID)
);

-- 요리초보가이드 게시판 테이블입니다.
CREATE TABLE GUIDE
(
    GUIDE_ID     NUMBER,                        -- 요리초보가이드 구분용 키.
    BOARD_ID     NUMBER               NOT NULL, -- 각 게시판 별 구분코드.
    GUIDE_NAME   VARCHAR2(100)        NOT NULL, -- 요리초보가이드 게시글 제목.
    GUIDE_DESC   VARCHAR2(500)        NOT NULL, -- 요리초보가이드 게시글 내용.
    GUIDE_DETAIL VARCHAR2(500),                 -- 요리초보가이드 게시글 상세내용.
    CREATE_DATE  DATE DEFAULT SYSDATE NOT NULL, -- 생성일.
    PRIMARY KEY (GUIDE_ID, BOARD_ID)
);

-- 요리연구소 레시피 게시판 테이블입니다.
CREATE TABLE LAB
(
    LAB_ID        NUMBER UNIQUE,                 -- 요리연구소 레시피 게시글 구분용 키.
    BOARD_ID      NUMBER               NOT NULL, -- 각 게시판 별 구분코드.
    LAB_NAME      VARCHAR2(100),                 -- 요리연구소 레시피 게시글 제목.
    LAB_NAME_DESC VARCHAR2(500),                 -- 요리연구소 레시피 게시글과 같이 출력될 간략한 설명.
    DESC_DETAIL   VARCHAR2(500),                 -- 요리연구소 레시피 게시글 내용.
    CREATE_DATE   DATE DEFAULT SYSDATE NOT NULL, -- 생성일.
    MODIFY_DATE   DATE,                          -- 수정일.
    PRIMARY KEY (LAB_ID, BOARD_ID)
);


-- 요리연구소 레시피 게시글의 재료설명에 대한 테이블입니다.
CREATE TABLE LAB_DETAIL_INGREDIENT
(
    LAB_DETAIL_ID         NUMBER PRIMARY KEY, -- 재료설명 테이블 구분용 키.
    LAB_ID                NUMBER,             -- 요리연구소 레시피 게시글 연결 키.
    LAB_PRIORITY          NUMBER,             -- 우선순위
    LAB_INGREDIENT_NAME   VARCHAR2(30),       -- 주재료, 부재료 이름 등
    LAB_INGREDIENT_DETAIL VARCHAR2(300),      -- 상세 재료(양배추, 달걀 등).
    SERVINGS              NUMBER,             -- 인분 수
    PREPARATION           NUMBER,             -- 준비시간
    COOKINGTIME           NUMBER              -- 조리시간
);


-- 요리연구소 레시피 게시글의 스탭별 설명에 대한 테이블입니다.
CREATE TABLE LAB_DETAIL_STEP
(
    LAB_STEP_ID   NUMBER,        -- 스탭별 설명 테이블 구분용 키.
    BOARD_ID      NUMBER,        -- 이미지 정보 연결 키. IMG_LIST 테이블의 BOARD_ID 와 연결됩니다.
    LAB_ID        NUMBER,        -- 요리연구소 레시피 게시글 연결 키.
    LAB_STEP      NUMBER,        -- 스탭 단계
    LAB_STEP_DESC VARCHAR2(500), -- 스탭별 조리법 상세설명.
    LAB_STEP_TIP1 VARCHAR2(300), -- 조리 방법 팁 1.
    LAB_STEP_TIP2 VARCHAR2(300), -- 조리 방법 팁 2.
    LAB_STEP_TIP3 VARCHAR2(300), -- 조리 방법 팁 3.
    LAB_STEP_TIP4 VARCHAR2(300), -- 조리 방법 팁 4.
    PRIMARY KEY (LAB_STEP_ID, BOARD_ID)
);


-- 요리연구소 솔루션 게시판 테이블입니다.
CREATE TABLE SOLUTION
(
    SOLUTION_ID     NUMBER,                        -- 요리연구소 솔루션 게시글 구분용 키.
    BOARD_ID        NUMBER,                        -- 각 게시판 별 구분코드.
    SOLUTION_NAME   VARCHAR2(100)        NOT NULL, -- 요리연구소 솔루션 게시글 제목.
    SOLUTION_DESC   VARCHAR2(500)        NOT NULL, -- 요리연구소 솔루션 게시글과 같이 출력될 간략한 설명.
    SOLUTION_DETAIL VARCHAR2(500)        NOT NULL, -- 요리연구소 솔루션 게시글에 들어가면 LAB_NAME_DESC 와 같이 출력되는 간단한 설명.
    DESC_DETAIL     CLOB,                          -- 요리연구소 솔루션 게시글 내용.
    CREATE_DATE     DATE DEFAULT SYSDATE NOT NULL, -- 생성일
    MODIFY_DATE     DATE,                          -- 수정일.
    PRIMARY KEY (SOLUTION_ID, BOARD_ID)
);


-- 요리해요, 고민있어요 두 가지 게시판을 동시에 관리하는 테이블 입니다.
CREATE TABLE COUNSELING
(
    COUNSELING_ID   NUMBER,                        -- 고민있어요 게시글 구분용 키.
    BOARD_ID        NUMBER,                        -- 각 게시판 별 구분코드.
    CATEGORY        NUMBER,                        -- 요리해요, 고민있어요 구분용 키.
    COUNSELING_NAME VARCHAR2(100)        NOT NULL, -- 요리해요 게시글 제목
    DESC_DETAIL     CLOB,                          -- 요리해요 게시글 내용
    CREATER         NUMBER,                        -- 작성자. 맴버정보 연결용 키.
    CREATE_DATE     DATE DEFAULT SYSDATE NOT NULL, -- 생성일
    MODIFY_DATE     DATE,                          -- 수정일
    PRIMARY KEY (COUNSELING_ID, BOARD_ID)
);


-- 이벤트게시판 관리 테이블입니다.
CREATE TABLE EVENT
(
    EVENT_ID    NUMBER,                        -- 이벤트 게시글 구분용 키.
    BOARD_ID    NUMBER,                        -- 각 게시판 별 구분코드.
    EVENT_NAME  VARCHAR2(50),                  -- 이벤트 게시글 제목.
    MAIN_POSTER VARCHAR2(300),                 -- 이벤트 썸네일 이미지
    POSTER      VARCHAR2(300),                 -- 상세내용 이미지
    DESC_DETAIL CLOB,                          -- 이벤트 게시판 내용
    CREATE_DATE DATE DEFAULT SYSDATE NOT NULL, -- 게시글 생성일
    MODIFY_DATE DATE,                          -- 게시글 수정일
    EVENT_START DATE,                          -- 이벤트 시작일.
    EVENT_END   DATE,                          -- 이벤트 종료일.
    PRIMARY KEY (EVENT_ID, BOARD_ID)
);


DROP SEQUENCE EVENT_ID_SEQ;
DROP SEQUENCE COUNSELING_ID_SEQ;
DROP SEQUENCE SOLUTION_ID_SEQ;
DROP SEQUENCE LAB_STEP_SEQ;
DROP SEQUENCE LAB_DETAIL_SEQ;
DROP SEQUENCE LAB_ID_SEQ;
DROP SEQUENCE GUIDE_ID_SEQ;
DROP SEQUENCE COMMENT_ID_SEQ;
DROP SEQUENCE MEMBER_SCRAP_SEQ;
DROP SEQUENCE MEMBER_ID_SEQ;
DROP SEQUENCE IMG_LIST_SEQ;
DROP SEQUENCE HASH_ID_SEQ;

-- 새로운 시퀀스를 생성합니다.
CREATE SEQUENCE EVENT_ID_SEQ;
CREATE SEQUENCE COUNSELING_ID_SEQ;
CREATE SEQUENCE SOLUTION_ID_SEQ;
CREATE SEQUENCE LAB_STEP_SEQ;
CREATE SEQUENCE LAB_DETAIL_SEQ;
CREATE SEQUENCE LAB_ID_SEQ;
CREATE SEQUENCE GUIDE_ID_SEQ;
CREATE SEQUENCE COMMENT_ID_SEQ;
CREATE SEQUENCE MEMBER_SCRAP_SEQ;
CREATE SEQUENCE MEMBER_ID_SEQ;
CREATE SEQUENCE IMG_LIST_SEQ;
CREATE SEQUENCE HASH_ID_SEQ;


-- 테이블에 참조 제약사항을 부여합니다.

ALTER TABLE "C##SEMI".HASHTAGS_CONN
    ADD CONSTRAINT HASHTAGS_CONN_HASHTAGS_FK FOREIGN KEY (HASH_ID) REFERENCES "C##SEMI".HASHTAGS (HASH_ID);
ALTER TABLE "C##SEMI".HASHTAGS_CONN
    ADD CONSTRAINT HASHTAGS_CONN_GUIDE_FK FOREIGN KEY (CONN_ID, BOARD_ID) REFERENCES "C##SEMI".GUIDE (GUIDE_ID, BOARD_ID);
ALTER TABLE "C##SEMI".HASHTAGS_CONN
    ADD CONSTRAINT HASHTAGS_CONN_SOLUTION_FK FOREIGN KEY (CONN_ID, BOARD_ID) REFERENCES "C##SEMI".SOLUTION (SOLUTION_ID, BOARD_ID);
ALTER TABLE "C##SEMI".HASHTAGS_CONN
    ADD CONSTRAINT HASHTAGS_CONN_LAB_FK FOREIGN KEY (CONN_ID, BOARD_ID) REFERENCES "C##SEMI".LAB (LAB_ID, BOARD_ID);
ALTER TABLE "C##SEMI".HASHTAGS_CONN
    ADD CONSTRAINT HASHTAGS_CONN_COUNSELING_FK FOREIGN KEY (CONN_ID, BOARD_ID) REFERENCES "C##SEMI".COUNSELING (COUNSELING_ID, BOARD_ID);
ALTER TABLE "C##SEMI".HASHTAGS_CONN ADD CONSTRAINT HASHTAGS_CONN_EVENT_FK FOREIGN KEY (CONN_ID,BOARD_ID) REFERENCES "C##SEMI".EVENT(EVENT_ID,BOARD_ID);

ALTER TABLE "C##SEMI".MEMBER_SCRAP
    ADD CONSTRAINT MEMBER_SCRAP_MEMBER_FK FOREIGN KEY (MEMBER_ID, BOARD_ID) REFERENCES "C##SEMI"."MEMBER" (MEMBER_ID, BOARD_ID);

ALTER TABLE "C##SEMI".MEMBER_COMMENT
    ADD CONSTRAINT MEMBER_COMMENT_SELF_FK FOREIGN KEY (PARENT_COMMENT_ID) REFERENCES "C##SEMI".MEMBER_COMMENT (COMMENT_ID);
ALTER TABLE "C##SEMI".MEMBER_COMMENT
    ADD CONSTRAINT MEMBER_COMMENT_MEMBER_FK FOREIGN KEY (CREATER) REFERENCES "C##SEMI"."MEMBER" (MEMBER_ID);

ALTER TABLE "C##SEMI".LAB_DETAIL_INGREDIENT
    ADD CONSTRAINT LAB_DETAIL_INGREDIENT_LAB_FK FOREIGN KEY (LAB_ID) REFERENCES "C##SEMI".LAB (LAB_ID);

ALTER TABLE "C##SEMI".LAB_DETAIL_STEP
    ADD CONSTRAINT LAB_DETAIL_STEP_LAB_FK FOREIGN KEY (LAB_ID) REFERENCES "C##SEMI".LAB (LAB_ID);

ALTER TABLE "C##SEMI".COUNSELING
    ADD CONSTRAINT COUNSELING_MEMBER_FK FOREIGN KEY (CREATER) REFERENCES "C##SEMI"."MEMBER" (MEMBER_ID);







