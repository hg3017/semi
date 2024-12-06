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
    const scrapButton = document.querySelector(".scrap");
    if (scrapButton) {
        scrapButton.addEventListener("click", function () {
            scrapButton.classList.toggle("on");
        });
    }
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

    // 헤더 스크롤시 스타일 변경
      window.addEventListener('scroll', function () {
        let _scrollY = this.scrollY;

        if (_scrollY > 50) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      });

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

      // 메인 요리가이드
      let progressLine = document.querySelector('.progress-line .progress');

      let mainslider = new Swiper('.main_slider .swiper', {
        loop: true,
        speed: 3000,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 50,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.main_slider .swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.main_slider .swiper-button-next',
          prevEl: '.main_slider .swiper-button-prev',
        },
        on: {
          activeIndexChange: function () {
            const cIdx = this.realIndex + 1;
            // realIndex는 0부터 시작
            // current-num 클래스에 해당하는 요소 텍스트 업데이트
            document.querySelector('.current-num').textContent = '0' + cIdx;
          },
          init: function () {
            // 페이지 로드 시 전체 슬라이드 수 업데이트
            const totalSlides = this.slides.length;
            document.querySelector('.all-num').textContent = '0' + totalSlides;
          },
        },
      });

      // 메인 요리가이드 pause 버튼 클릭 이벤트
      document
        .querySelector('.main_slider .pause')
        .addEventListener('click', function () {
          // autoplay가 실행 중인지를 확인하고, 실행 중이면 멈추고, 멈춰 있으면 시작
          if (mainslider.autoplay.running) {
            mainslider.autoplay.stop();
          } else {
            mainslider.autoplay.start();
          }
          this.classList.toggle('on');

          // 버튼에 'play' 클래스를 토글
        });

      // 메인 요리가이드 더보기 버튼
      document
        .querySelector('.main_slider .button')
        .addEventListener('click', function () {
          this.classList.toggle('on');
          document.querySelector('.main_slider .guide_wrap').classList.toggle('on');
          // document.body.classList.toggle('on');
        });

      document
        .querySelector('.main_slider .closebtn')
        .addEventListener('click', function () {
          // e.preventDefault();
          document.querySelector('.main_slider .guide_wrap').classList.remove('on');
          document.body.classList.remove('on');
        });

      // 메인 요리연구소 탭메뉴
      document.querySelectorAll('.main_lab .tabmenu li>a').forEach(function (item) {
        item.addEventListener('click', function (e) {
          // 기본 링크 동작 방지
          e.preventDefault();
          // 모든 li에서 'on' 클래스 제거
          document.querySelectorAll('.main_lab .tabmenu li').forEach(function (li) {
            li.classList.remove('on');
          });
          // 클릭된 li에 'on' 클래스 추가
          this.parentElement.classList.add('on');
        });
      });

      // 메인 요리연구소
      let mainlab = new Swiper('.main_lab .swiper', {
        loop: true,
        speed: 2000,
        slidesPerView: 4,
        slidesPerGroup: 4,
        navigation: {
          nextEl: '.main_lab .swiper-button-next',
          prevEl: '.main_lab .swiper-button-prev',
        },
      });

      // 메인 요리해요
      let maincook = new Swiper('.main_cook .swiper-container.middle', {
        loop: true,
        speed: 1000,
        //loopedSlides: 3,
        centeredSlides: false,
        spaceBetween: 50,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.main_cook .swiper-button-next',
          prevEl: '.main_cook .swiper-button-prev',
        },
      });

      let maincooklr = new Swiper(
        '.main_cook .swiper-container.left, .main_cook .swiper-container.right',
        {
          loop: true,
          speed: 1000,
          slidesPerView: 2,
          //loopedSlides: 3,
          centeredSlides: false,
          // observer: true,            // DOM 변화 감지 활성화
          // observeParents: true,      // 부모 요소 변화도 감지
          // observeSlideChildren: true, // 슬라이드 내부 자식 요소 변화도 감지
        }
      );
      maincook.controller.control = maincooklr;

      // 메인 이벤트
      let mainbnlist = new Swiper('.main_bnlist .swiper', {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
          el: '.main_bnlist .swiper-pagination',
          clickable: true,
          type: 'fraction',
          formatFractionCurrent: function (num) {
            return num < 10 ? +num : num;
          },
          formatFractionTotal: function (num) {
            return num < 10 ? +num : num;
          },
          renderFraction: function (currentClass, totalClass) {
            return (
              //prettier-ignore
              '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>'
            );
          },
        },
        navigation: {
          nextEl: '.main_bnlist .swiper-button-next',
          prevEl: '.main_bnlist .swiper-button-prev',
        },
      });



// 탭버튼
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


//키워드
    document.querySelectorAll('.key_list li>a').forEach((v) => {
        v.addEventListener('click', function (e) {
            e.preventDefault();

            // 모든 li에서 on 클래스를 제거
            document.querySelectorAll('.key_list li').forEach((li) => {
                li.classList.remove('on');
            });

            // 클릭한 a의 부모 li에 on 클래스 추가
            v.parentElement.classList.add('on');
        });
    });
    // 필터
    document.querySelectorAll('.main_detail .filter li>a').forEach(function (item) {
        item.addEventListener('click', function (e) {
            // 기본 링크 동작 방지
            e.preventDefault();

            // 모든 li에서 'on' 클래스 제거
            document.querySelectorAll('.main_detail .filter li').forEach(function (li) {
                li.classList.remove('on');
            });

            // 클릭된 li에 'on' 클래스 추가
            this.parentElement.classList.add('on');
        });
    });

   // 레시피 스와이퍼
    var swiper = new Swiper(".sub_view_cont .thumb_swiper_wrap", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".sub_view_cont .main_swiper_wrap", {
      spaceBetween: 50,
      navigation: {
        nextEl: ".sub_view_cont .swiper-button-next",
        prevEl: ".sub_view_cont .swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

  // 스탭 스와이퍼
    var swiper = new Swiper(".sub_sw_wrap .step2_swiper_wrap", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".sub_sw_wrap .step_swiper_wrap", {
      spaceBetween: 50,
      navigation: {
        nextEl: ".sub_sw_wrap .step-button-next",
        prevEl: ".sub_sw_wrap .step-button-prev",
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      thumbs: {
        swiper: swiper,
      },
    });

    //  요리연구소 상세(레시피)
    let StagList = new Swiper('.S_tagList .swiper', {
    loop: true,
    slidesPerView: '4',
    navigation: {
        nextEl: '.S_tagList .swiper-button-next',
        prevEl: '.S_tagList .swiper-button-prev',
    },
  });

});
