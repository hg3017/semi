 window.addEventListener('DOMContentLoaded', function () {
 // 메인 요리가이드
//     let progressLine = document.querySelector('.progress-line .progress');

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
      document.addEventListener('DOMContentLoaded', function () {
          const pauseButton = document.querySelector('.main_slider .pause');
          if (pauseButton) {
            pauseButton.addEventListener('click', function () {
              if (mainslider.autoplay.running) {
                mainslider.autoplay.stop();
              } else {
                mainslider.autoplay.start();
              }
              this.classList.toggle('on');
            });
          }
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
 });