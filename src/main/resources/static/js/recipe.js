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
                        firstSpan.textContent = 'Step.' + idx + "";
                    }
                });
            }
        }
    });


    document.querySelectorAll(".step_swiper_wrap .step_thumb_list li").forEach(i => {
        i.addEventListener("click", () => {
            const thumbImg = i.querySelector("img");
            if (thumbImg) {
                const thumbImgSrc = thumbImg.src;

                // Add 'on' class to clicked li, remove 'on' from others
                i.classList.add("on");

                Array.from(i.parentElement.children).forEach(sibling => {
                    if (sibling !== i) sibling.classList.remove("on");
                });

                const swiperSlide = i.closest(".swiper-slide");  // Ensure it's the correct element
                if (swiperSlide) {
                    const stepThumbImgs = swiperSlide.querySelectorAll(".step_swiper_wrap .step_thumb img");
                    stepThumbImgs.forEach(stepThumbImg => {
                        if (stepThumbImg) {
                            // Remove the src and reassign it to force reloading the image
                            const currentSrc = stepThumbImg.src;
                            stepThumbImg.src = '';  // Temporarily clear the src
                            stepThumbImg.src = thumbImgSrc; // Set the new src
                        }
                    });
                }
            }
        });
    });

    //레시피 상세
      let CtagList = new Swiper('.C_tagList .swiper', {
      slidesPerView: '4',
      navigation: {
          nextEl: '.C_tagList .swiper-button-next',
          prevEl: '.C_tagList .swiper-button-prev',
      },
    });

    // 요리해요(작성하기)
    // 버튼과 detail-form 요소
    const simpleButton = document.querySelector('.btn_check_lg.on');
    const detailedButton = document.querySelector('.btn_check_lg:not(.on)');
    const detailForm = document.querySelector('.detail-form');
    //기본 상태
    detailForm.style.display = 'none';

    // 버튼 클릭 시 detail-form 보이기/숨기기
    simpleButton.addEventListener('click', () => {
        detailForm.style.display = 'none';
        simpleButton.classList.add('on');
        detailedButton.classList.remove('on');
    });

    detailedButton.addEventListener('click', () => {
        detailForm.style.display = 'block';
        simpleButton.classList.remove('on');
        detailedButton.classList.add('on');
    });

    // 이미지 클릭 시 툴팁 보이기
    document.querySelector('.qa img').addEventListener('click', function() {
        this.classList.remove('on'); // 이미지를 숨기기
        this.nextElementSibling.classList.add('on'); // 툴팁 보이기
    });

    // close 버튼 클릭 시 툴팁 숨기기
    document.querySelector('.qa .close_btn').addEventListener('click', function() {
        this.closest('.tooltip').classList.remove('on'); // 툴팁 숨기기
        this.closest('.qa').querySelector('img').classList.add('on'); // 이미지 보이기
    });

    document.querySelector('.form-list').addEventListener('click', function(e) {
        if (e.target.classList.contains('add')) {
            if (e.target.textContent === '+') {
                var newInput = document.createElement('div');
                newInput.classList.add('input_wrap');
                newInput.innerHTML = '<input type="text" class="form_box" name="main_mat" placeholder="예) 생닭 1마리(600g)" required=""><button type="button" class="add">-</button>';
                e.target.closest('.input_wrap').after(newInput);
            } else {
                e.target.closest('.input_wrap').remove();
            }
            e.target.textContent = e.target.textContent === '+' ? '-' : '+';
        }
    });


    // 기본 요소들 선택
    const wrapper = document.querySelector('.input_wrap');  // 입력 필드를 포함하는 컨테이너 선택
    const addButton = document.querySelector('.btn-wrap .add'); // 추가 버튼 선택
    const maxFields = 10; // 최대 입력 필드 수 설정
    let fieldCount = 1; // 현재 입력 필드 수

// '추가하기' 버튼 클릭 시 이벤트
    addButton.addEventListener('click', function(e) {
        e.preventDefault(); // 페이지 리로드 방지
        if (fieldCount < maxFields) { // 최대 필드 수 체크
            fieldCount++; // 필드 수 증가
            // 새 입력 필드 추가
            const newField = document.createElement('div');
            newField.classList.add('input_list');

            newField.innerHTML = `
            <input type="text" class="form_box" name="main_mat[]" placeholder="예) 생닭 1마리(600g)" required />
            <a href="javascript:void(0);" class="remove_field">-</a>
        `;

            // 새 필드를 wrapper에 추가
            wrapper.appendChild(newField);
        } else {
            alert('최대 입력 필드를 초과할 수 없습니다.');
        }
    });

// '삭제' 링크 클릭 시 이벤트
    wrapper.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('remove_field')) {
            e.preventDefault(); // 페이지 리로드 방지
            const field = e.target.closest('.input_list'); // 클릭된 삭제 버튼의 부모 div 선택
            field.remove(); // 필드 제거
            fieldCount--; // 필드 수 감소
        }
    });


// // 최대 입력 필드 수 설정
//     const maxFields = 10;
//
// // 각 섹션에 대한 필드 수 관리 (주재료, 부재료, 양념)
//     let fieldCount = {
//         main_mat: 1,
//         sub_mat: 1,
//         sauce: 1
//     };

// // 각 섹션의 '추가' 버튼 클릭 시 이벤트
//     document.querySelectorAll('.form-list').forEach(formList => {
//         const addButton = formList.querySelector('.btn-wrap .add');  // 추가 버튼 선택
//         const wrapper = formList.querySelector('.input_wrap');  // 입력 필드를 포함하는 컨테이너 선택
//         const sectionName = wrapper.querySelector('input').name;  // 섹션 이름 (main_mat, sub_mat, sauce)
//
//         // '추가하기' 버튼 클릭 시 이벤트
//         addButton.addEventListener('click', function(e) {
//             e.preventDefault(); // 페이지 리로드 방지
//
//             if (fieldCount[sectionName] < maxFields) {  // 최대 필드 수 체크
//                 fieldCount[sectionName]++; // 필드 수 증가
//
//                 // 새 입력 필드 추가
//                 const newField = document.createElement('div');
//                 newField.classList.add('input_list');
//                 newField.innerHTML = `
//                 <input type="text" class="form_box" name="${sectionName}[]" placeholder="입력해주세요." required />
//                 <a href="javascript:void(0);" class="remove_field">-</a>
//             `;
//
//                 // 새 필드를 wrapper에 추가
//                 wrapper.appendChild(newField);
//             } else {
//                 alert('최대 입력 필드를 초과할 수 없습니다.');
//             }
//         });
//
//         // '삭제' 링크 클릭 시 이벤트
//         wrapper.addEventListener('click', function(e) {
//             if (e.target && e.target.classList.contains('remove_field')) {
//                 e.preventDefault(); // 페이지 리로드 방지
//                 const field = e.target.closest('.input_list');  // 클릭된 삭제 버튼의 부모 div 선택
//                 field.remove();  // 필드 제거
//                 fieldCount[sectionName]--;  // 필드 수 감소
//             }
//         });
//     });




    // // 기본 요소들 선택
    // const wrapper = document.querySelector('.input_wrap');  // 입력 필드를 포함하는 컨테이너 선택
    // const addButton = document.querySelector('.btn-wrap .add'); // 추가 버튼 선택
    // const maxFields = 10; // 최대 입력 필드 수 설정
    // let fieldCount = 1; // 현재 입력 필드 수

// // 기본 요소들 선택
//     const wrapper = document.querySelector('.input_wrap');  // 입력 필드를 포함하는 컨테이너 선택
//     const addButton = document.querySelector('.btn-wrap .add'); // 추가 버튼 선택
//     const maxFields = 10; // 최대 입력 필드 수 설정
//     let fieldCount = 1; // 현재 입력 필드 수
//
// // '추가하기' 버튼 클릭 시 이벤트
//     addButton.addEventListener('click', function(e) {
//         e.preventDefault(); // 페이지 리로드 방지
//         if (fieldCount < maxFields) { // 최대 필드 수 체크
//             fieldCount++; // 필드 수 증가
//             // 새 입력 필드 추가
//             const newField = document.createElement('div');
//             newField.classList.add('input_list');
//
//             newField.innerHTML = `
//             <input type="text" class="form_box" name="main_mat[]" placeholder="예) 생닭 1마리(600g)" required />
//             <div class="btn-wrap">
//                 <button type="button" class="add">+</button>
//                 <a href="javascript:void(0);" class="remove_field">-</a>
//             </div>
//         `;
//
//             // 새 필드를 wrapper에 추가
//             wrapper.appendChild(newField);
//         } else {
//             alert('최대 입력 필드를 초과할 수 없습니다.');
//         }
//     });
//
// // '삭제' 링크 클릭 시 이벤트
//     wrapper.addEventListener('click', function(e) {
//         if (e.target && e.target.classList.contains('remove_field')) {
//             e.preventDefault(); // 페이지 리로드 방지
//             const field = e.target.closest('.input_list'); // 클릭된 삭제 버튼의 부모 div 선택
//             field.remove(); // 필드 제거
//             fieldCount--; // 필드 수 감소
//         }
//     });



//
//     // 기본 요소들 선택
//     const formLists = document.querySelectorAll('.form-list'); // 모든 form-list를 선택
//     const maxFields = 10; // 최대 입력 필드 수 설정
//
// // 각 '추가하기' 버튼 클릭 시 이벤트
//     formLists.forEach(formList => {
//         const wrapper = formList.querySelector('.input_wrap');  // 입력 필드를 포함하는 컨테이너 선택
//         const addButton = formList.querySelector('.btn-wrap .add'); // 추가 버튼 선택
//         let fieldCount = 1; // 현재 입력 필드 수
//
//         // '추가하기' 버튼 클릭 시 이벤트
//         addButton.addEventListener('click', function(e) {
//             e.preventDefault(); // 페이지 리로드 방지
//             if (fieldCount < maxFields) { // 최대 필드 수 체크
//                 fieldCount++; // 필드 수 증가
//                 // 새 입력 필드 추가
//                 const newField = document.createElement('div');
//                 newField.classList.add('input_list');
//
//                 newField.innerHTML = `
//                 <input type="text" class="form_box" name="main_mat[]" placeholder="예) 생닭 1마리(600g)" required />
//                 <a href="javascript:void(0);" class="remove_field">-</a>
//             `;
//
//                 // 새 필드를 wrapper에 추가
//                 wrapper.appendChild(newField);
//
//                 // '추가' 버튼을 새 필드에 추가
//                 const newAddButton = addButton.cloneNode(true); // 기존 '추가' 버튼을 복제
//                 newField.appendChild(newAddButton); // 복제된 '추가' 버튼을 새 필드에 추가
//
//                 // 원래 버튼 숨기기
//                 addButton.style.display = 'none';
//             } else {
//                 alert('최대 입력 필드를 초과할 수 없습니다.');
//             }
//         });
//
//         // '삭제' 링크 클릭 시 이벤트
//         wrapper.addEventListener('click', function(e) {
//             if (e.target && e.target.classList.contains('remove_field')) {
//                 e.preventDefault(); // 페이지 리로드 방지
//                 const field = e.target.closest('.input_list'); // 클릭된 삭제 버튼의 부모 div 선택
//                 field.remove(); // 필드 제거
//                 fieldCount--; // 필드 수 감소
//
//                 // "추가" 버튼을 다시 보여주기
//                 if (fieldCount < maxFields) {
//                     addButton.style.display = 'inline-block';  // "추가" 버튼을 다시 표시
//                 }
//             }
//         });
//     });

    //요리해요(상세페이지 step)
    //단계 카운터 초기화
    let stepCount = 1;
// 단계 추가
    document.getElementById("addStep").addEventListener("click", function() {
        stepCount++;
        const newStep = document.createElement("div");
        newStep.classList.add("form-step");
        newStep.id = "step" + stepCount;
        newStep.innerHTML = `
        <p class="label text-point">Step.${stepCount}</p>
         <div class="form-box line">
            <div class="form">
                <p class="label">이미지</p>
                <div class="file">
                    <input type="text" class="form_box" placeholder="10MB 미만의 이미지를 업로드 해주세요" disabled="">
                    <input type="hidden" name="stepImage${stepCount}Arr">
                    <input type="file" id="formFile${stepCount}" name="stepImage${stepCount}" required="" aria-required="true" accept="image/jpg,image/jpeg,image/gif,image/png" data-max-limit="10485760" aria-describedby="file-desc" data-url="/cooking/write/upload/step${stepCount}" class="a11y" style="display: none;">
                    <label for="formFile${stepCount}">파일첨부</label>
                </div>
                <ul class="file-list" style="display: none;"></ul>
            </div>
            <div class="form">
                <p class="label">제목</p>
                <input type="text" maxlength="250" class="form_box" name="stepTitle${stepCount}" placeholder="제목을 입력해주세요" required="">
            </div>
            <div class="form">
                <p class="label">내용</p>
                <input type="text" maxlength="250" class="form_box" name="stepSubject${stepCount}" placeholder="내용을 입력해주세요" required="">
            </div>
            <div class="form" id="stepTipList${stepCount}">
                <p class="label">요리팁</p>
                <div class="form-list">
                    <input type="text" class="form_box" name="stepTips${stepCount}" placeholder="예) 입맞에 따라 청양고추를 추가하세요">
                    <div class="btn-wrap">
                        <button type="button" class="add">+</button>
                        <button type="button" class="del">-</button>
                    </div>
                </div>
            </div>
        </div>
    `;
        document.querySelector(".btn_step_wrap").parentNode.insertBefore(newStep, document.querySelector(".btn_step_wrap"));
    });

// 단계 삭제
    document.getElementById("removeStep").addEventListener("click", function() {
        if (stepCount > 1) {
            document.getElementById("step" + stepCount).remove();
            stepCount--;
        }
    });

});