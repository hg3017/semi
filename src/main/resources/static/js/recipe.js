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
    //     var swiper = new Swiper(".sub_sw_wrap .step2_swiper_wrap", {
    //       spaceBetween: 10,
    //       slidesPerView: 4,
    //       freeMode: true,
    //       watchSlidesProgress: true,
    //     });
    //     var swiper2 = new Swiper(".sub_sw_wrap .step_swiper_wrap", {
    //       spaceBetween: 50,
    //       navigation: {
    //         nextEl: ".sub_sw_wrap .step-button-next",
    //         prevEl: ".sub_sw_wrap .step-button-prev",
    //       },
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    //       thumbs: {
    //         swiper: swiper,
    //       },
    //     });
    //
    // var stepSwiper2 = new Swiper(".sub_sw_wrap .step_swiper_wrap", {
    //     // speed: 400,
    //     spaceBetween: 20,
    //     slidesPerView: 4,
    //     freeMode: true,
    //     watchSlidesProgress: true,
    //     pagination: {   //페이징 사용자 설정
    //         el: ".sub_sw_wrap .swiper-pagination",   //페이징 태그 클래스 설정
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".sub_sw_wrap .swiper-button-next",
    //         prevEl: ".sub_sw_wrap .swiper-button-prev"
    //     },
    //     threshold: 50,
    //     autoHeight: true,
    //     on: {
    //         slideChange: function () {
    //             var idx = this.realIndex + 1;
    //             $(".recipe_step_head span").text('Step.' + idx);
    //             $(".recipe_step_cont .step_h").each(function(){$(this).find("span:eq(0)").text('Step ' + idx + ".  ");});
    //             // $(".step_thumb_list:eq("+this.realIndex+") img:eq(0)").trigger("click");
    //         }
    //     }
    // });
    var stepSwiper2 = new Swiper(".step_swiper_wrap .swiper-container", {
        slidesPerView: 1,  // 한 번에 한 슬라이드만 보이게 설정
        spaceBetween: 20,  // 슬라이드 간 간격
        freeMode: false,  // 자유 모드 비활성화
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",  // 페이지네이션 설정
            clickable: true
        },
        navigation: {
            nextEl: ".step-button-next",  // 다음 버튼
            prevEl: ".step-button-prev"   // 이전 버튼
        },
        threshold: 50,  // 슬라이드를 넘기기 위한 임계값
        autoHeight: true,  // 각 슬라이드의 높이를 자동으로 맞추기
        on: {
            slideChange: function () {
                var idx = this.realIndex + 1;

                // 단계 제목 업데이트
                var stepTitle = document.querySelectorAll(".step_head span");
                if (stepTitle.length > 0) {
                    stepTitle[0].textContent = 'Step.' + idx;
                }

                // 모든 단계 설명 업데이트
                var stepHeaders = document.querySelectorAll(".step_cont .step_h");
                stepHeaders.forEach(function (stepHeader) {
                    var firstSpan = stepHeader.querySelector("span:first-child");
                    if (firstSpan) {
                        firstSpan.textContent = 'Step ' + idx + ".";
                    }
                });
            }
            // slideChange: function () {
            //     var idx = this.realIndex + 1;
            //
            //     // 단계 제목 업데이트
            //     var stepTitle = document.querySelector(".step_h span:first-child");
            //     if (stepTitle) stepTitle.textContent = 'Step ' + idx + '.';
            //
            //     // 단계 설명 업데이트
            //     var stepDesc = document.querySelector(".step_cont .steph_wrap .step_desc");
            //     var lastSpan = document.querySelector(".step_h span:last-child");
            //     if (stepDesc && lastSpan) lastSpan.textContent = stepDesc.textContent;
            // }
        }

    });
    // document.querySelectorAll(".step_swiper_wrap .step_thumb_list li").forEach(i => {
    //     i.addEventListener("click", () => {
    //         const thumbImg = i.querySelector(".step_thumb_list img");
    //         if (thumbImg) {
    //             const thumbImgSrc = thumbImg.src;
    //
    //             // Add 'on' class to clicked li, remove 'on' from others
    //             i.classList.add("on");
    //
    //             Array.from(i.parentElement.children).forEach(sibling => {
    //                 if (sibling !== i) sibling.classList.remove("on");
    //             });
    //
    //             // Update the image src in the closest .swiper-slide
    //             const swiperSlide = i.closest("li.swiper-slide");
    //             if (swiperSlide) {
    //                 const stepThumbImg = swiperSlide.querySelector(".step_swiper_wrap .step_thumb img");
    //                 if (stepThumbImg) {
    //                     stepThumbImg.src = thumbImgSrc; // Update image src
    //                 }
    //             }
    //         }
    //     });
    // });


    document.querySelectorAll(".step_swiper_wrap .step_thumb_list li").forEach(i => {
        i.addEventListener("click", () => {
            const thumbImg = i.querySelector(".step_thumb_list img");
            if (thumbImg) {
                const thumbImgSrc = thumbImg.src;

                // Add 'on' class to clicked li, remove 'on' from others
                i.classList.add("on");

                Array.from(i.parentElement.children).forEach(sibling => {
                    if (sibling !== i) sibling.classList.remove("on");
                });

                // Update the image src in the closest swiper-slide
                const swiperSlide = i.closest(".swiper-slide");  // Ensure it's the correct element
                if (swiperSlide) {
                    const stepThumbImg = swiperSlide.querySelector(".step_swiper_wrap .step_thumb img");
                    if (stepThumbImg) {
                        stepThumbImg.src = thumbImgSrc; // Update image src
                    }
                }
            }
        });
    });

    // document.querySelectorAll(".step_swiper_wrap .step_thumb_list li").forEach(i => {
    //     i.addEventListener("click", () => {
    //         const thumbImgSrc = i.querySelector("img").src;
    //         i.classList.add("on");
    //
    //         Array.from(i.parentElement.children).map(sibling => {
    //             if (sibling !== i) sibling.classList.remove("on");
    //         });
    //
    //         // i.closest("li.swiper-slide").querySelector(".step_thumb img").src = thumbImgSrc;
    //     });
    // });


    //레시피 상세
      let CtagList = new Swiper('.C_tagList .swiper', {
      slidesPerView: '4',
      navigation: {
          nextEl: '.C_tagList .swiper-button-next',
          prevEl: '.C_tagList .swiper-button-prev',
      },
    });
});