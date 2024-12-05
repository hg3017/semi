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

    window.scrollTo({ top: 0, behavior: 'smooth' });
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


    const header = document.querySelector('#header');
    // 헤더 스크롤시 스타일 변경
    window.addEventListener('scroll', function () {
        let _scrollY = this.scrollY;

        if (_scrollY > 50) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

      // 메인 요리가이드
      let progressLine = document.querySelector('.progress-line .progress');
      let pauseButton = document.querySelector('.pause');

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
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        pagination: {
          el: '.main_slider .swiper-pagination',
          clickable: false,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return `<span class="current">${
              current < 10 ? '0' + current : current
            }</span><span class="total">${total < 10 ? '0' + total : total}</span>`;
          },
        },
        navigation: {
          nextEl: '.main_slider .swiper-button-next',
          prevEl: '.main_slider .swiper-button-prev',
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            // progressLine이 존재하면 progress 업데이트
            if (progressLine) {
              let progressValue = 1 - progress;
              // width 값을 progress에 맞게 설정
              progressLine.style.width = `${progressValue * 100}%`;
            }
          },
        },
      });

      // 메인 요리가이드 pause 버튼 클릭 이벤트
      if (pauseButton) {
        pauseButton.addEventListener('click', function () {
          console.log('Pause button clicked');

          if (mainslider.autoplay.running) {
            mainslider.autoplay.stop();
            pauseButton.classList.add('paused');
            console.log('Autoplay stopped');
          } else {
            mainslider.autoplay.start();
            pauseButton.classList.remove('paused');
            console.log('Autoplay started');
          }
        });
      } else {
        console.log('Pause button not found'); // 버튼이 없는 경우 확인
      }

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
        slidesPerView: '4',
        //centeredSlides: true,
        //spaceBetween: 20,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.main_lab .swiper-button-next',
          prevEl: '.main_lab .swiper-button-prev',
        },
      });

      // 메인 요리해요
      let maincook = new Swiper('.main_cook .swiper', {
        loop: true,
        slidesPerView: '4',
        //centeredSlides: true,
        //spaceBetween: 20,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.main_cook .swiper-button-next',
          prevEl: '.main_cook .swiper-button-prev',
        },
      });

      // 메인 이벤트
      let mainbnlist = new Swiper('.main_bnlist .swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 50,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
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

});
