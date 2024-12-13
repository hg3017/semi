window.addEventListener('DOMContentLoaded', function () {
    const addressArea = document.querySelector('#footer .address_area');
    if (addressArea) {
        addressArea.addEventListener('click', function () {
            this.classList.toggle('on');
        });
    }

    const siteMap = document.querySelector('#footer .sitemap');
    if (siteMap) {
        siteMap.addEventListener('click', function () {
            this.classList.toggle('on');
        });
    }

    document.querySelector('#footer .top_btn').addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // 스크랩버튼 on
    // const scrapButton = document.querySelector(".scrap");
    // if (scrapButton) {
    //     scrapButton.addEventListener("click", function () {
    //         scrapButton.classList.toggle("on");
    //     });
    // }

    const scrapButtons = document.querySelectorAll(".scrap");

    // 각각의 버튼에 이벤트 리스너 추가
    scrapButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // 클릭된 버튼에만 .on 클래스 토글
            button.classList.toggle("on");

            if (button.classList.contains("on")) {
                alert("스크랩되었습니다."); // 클래스가 추가되었을 때
            } else {
                alert("삭제되었습니다."); // 클래스가 제거되었을 때
            }
        });
    });

    // URL복사버튼 on
    // 공유 버튼
    const shareButton = document.querySelector(".share");
    // 공유 버튼 목록
    const shareList = document.querySelector(".share_btn");
    // 닫기 버튼
    const closeButton = document.querySelector(".close button");

    // 공유 버튼 클릭 시 공유 창 열기/닫기
    if (shareButton && shareList) {
        shareButton.addEventListener("click", function () {
            shareList.classList.toggle("on");
        });

        // 닫기 버튼 클릭 시 공유 창 닫기
        if (closeButton && shareList) {
            closeButton.addEventListener("click", function () {
                shareList.classList.remove("on");
            });
        }
    }

    // 스크랩,공유 스크롤 감지 조건부 숨김/보임
    const shareControl = document.querySelector(".share_control");
    const targetSection = document.querySelector(".share_control"); // 특정요소있을때만!

    if(targetSection) {

        window.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY; // 현재 스크롤 위치
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight; // 전체 스크롤 가능한 높이
            const scrollThreshold = pageHeight * 0.9; // 90% 스크롤 위치

            if (scrollPosition > scrollThreshold) {
                shareControl.classList.add("hidden");
            } else {
                shareControl.classList.remove("hidden");
            }
        });
    }

    // 헤더 스크롤시 스타일 변경
      window.addEventListener('scroll', function () {
        let _scrollY = this.scrollY;

        if (_scrollY > 50) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      });

    //헤더 모바일메뉴 탭버튼
      document
        .querySelector('#header .sitemap_btn')
        .addEventListener('click', function () {
          this.classList.toggle('on');
          document.querySelector('#header .menu_wrap').classList.toggle('on');
        });

      document.querySelectorAll('#header .menu>li>a').forEach((v) => {
        v.addEventListener('click', function (e) {
          e.preventDefault();
          v.parentElement.classList.toggle('on');
        });
      });


    //요리연구소, 요리해요 탭버튼
    document.querySelectorAll('.tap_wrap li>a').forEach((v) => {
        v.addEventListener('click', function (e) {
            // e.preventDefault();

            // 모든 li에서 on 클래스를 제거
            document.querySelectorAll('.tap_wrap li').forEach((li) => {
                li.classList.remove('on');
            });

            // 클릭한 a의 부모 li에 on 클래스 추가
            v.parentElement.classList.add('on');

        });
    });

    //필터
    document.querySelectorAll('.filter li>a').forEach(function (item) {
        item.addEventListener('click', function (e) {
            // 기본 링크 동작 방지
            e.preventDefault();

            // 모든 li에서 'on' 클래스 제거
            document.querySelectorAll('.filter li').forEach(function (li) {
                li.classList.remove('on');
            });

            // 클릭된 li에 'on' 클래스 추가
            this.parentElement.classList.add('on');
        });
    });

  //레시피 상세
        let StagList = new Swiper('.S_tagList .swiper', {
        slidesPerView: '4',
        navigation: {
            nextEl: '.S_tagList .swiper-button-next',
            prevEl: '.S_tagList .swiper-button-prev',
        },
      });


  //스크롤 시 바 생성
  function updateProgressBar() {
          const documentHeight = document.documentElement.scrollHeight; // 문서의 총 높이
          const windowHeight = window.innerHeight; // 윈도우 창의 높이
          const scrollPosition = window.scrollY; // 현재 스크롤된 위치
          // 스크롤된 비율을 계산
          const scrolledPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
          // 프로그레스 바의 너비를 스크롤 비율에 따라 조정
          const progressBar = document.querySelector(".progress .bar");
          if (progressBar) {
              progressBar.style.width = scrolledPercentage + "%";
          }
      }

      // 스크롤 이벤트 리스너 추가
      window.addEventListener('scroll', updateProgressBar);

      // 페이지 로드 시 초기 상태 업데이트
      updateProgressBar();

});
