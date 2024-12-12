window.addEventListener('DOMContentLoaded', function () {
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

});