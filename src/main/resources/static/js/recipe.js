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
  var swiper = new Swiper('.sub_view_cont .thumb_swiper_wrap', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper('.sub_view_cont .main_swiper_wrap', {
    spaceBetween: 50,
    navigation: {
      nextEl: '.sub_view_cont .swiper-button-next',
      prevEl: '.sub_view_cont .swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // 스탭 스와이퍼
  var stepSwiper2 = new Swiper('.step_swiper_wrap .swiper-container', {
    slidesPerView: 1, // 한 번에 한 슬라이드만 보이게 설정
    spaceBetween: 20, // 슬라이드 간 간격
    freeMode: false, // 자유 모드 비활성화
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination', // 페이지네이션 설정
      clickable: true,
    },
    navigation: {
      nextEl: '.step-button-next', // 다음 버튼
      prevEl: '.step-button-prev', // 이전 버튼
    },
    threshold: 50, // 슬라이드를 넘기기 위한 임계값
    autoHeight: true, // 각 슬라이드의 높이를 자동으로 맞추기
    on: {
      slideChange: function () {
        var idx = this.realIndex + 1;

        // 단계 제목 업데이트
        var stepTitle = document.querySelectorAll('.step_head span');
        if (stepTitle.length > 0) {
          stepTitle[0].textContent = 'Step.' + idx;
        }

        // 모든 단계 설명 업데이트
        var stepHeaders = document.querySelectorAll('.step_cont .step_h');
        stepHeaders.forEach(function (stepHeader) {
          var firstSpan = stepHeader.querySelector('span:first-child');
          if (firstSpan) {
            firstSpan.textContent = 'Step.' + idx + '';
          }
        });
      },
    },
  });

  document
    .querySelectorAll('.step_swiper_wrap .step_thumb_list li')
    .forEach((i) => {
      i.addEventListener('click', () => {
        const thumbImg = i.querySelector('img');
        if (thumbImg) {
          const thumbImgSrc = thumbImg.src;

          // 클릭된 li에 'on' 클래스를 추가하고, 다른 항목에서 'on' 클래스를 제거
          i.classList.add('on');

          Array.from(i.parentElement.children).forEach((sibling) => {
            if (sibling !== i) sibling.classList.remove('on');
          });

          const swiperSlide = i.closest('.swiper-slide'); // Ensure it's the correct element
          if (swiperSlide) {
            const stepThumbImgs = swiperSlide.querySelectorAll(
              '.step_swiper_wrap .step_thumb img'
            );
            stepThumbImgs.forEach((stepThumbImg) => {
              if (stepThumbImg) {
                // 이미지의 src를 제거한 후, 새로운 이미지를 다시 설정하여 이미지를 강제로 새로 고침
                const currentSrc = stepThumbImg.src;
                stepThumbImg.src = ''; // src를 일시적으로 지움
                stepThumbImg.src = thumbImgSrc; // 새로운 src를 설정
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
  // detailForm.style.display = 'none';
  if (detailForm) {
    // detailForm이 존재하는지 확인
    // 기본 상태
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
    document.querySelector('.qa img').addEventListener('click', function () {
      this.classList.remove('on'); // 이미지를 숨기기
      this.nextElementSibling.classList.add('on'); // 툴팁 보이기
    });

    // close 버튼 클릭 시 툴팁 숨기기
    document
      .querySelector('.qa .close_btn')
      .addEventListener('click', function () {
        this.closest('.tooltip').classList.remove('on'); // 툴팁 숨기기
        this.closest('.qa').querySelector('img').classList.add('on'); // 이미지 보이기
      });

    document
      .querySelector('.form-list')
      .addEventListener('click', function (e) {
        if (e.target.classList.contains('add')) {
          if (e.target.textContent === '+') {
            var newInput = document.createElement('div');
            newInput.classList.add('input_wrap');
            newInput.innerHTML =
              '<input type="text" class="form_box" name="main_mat" placeholder="예) 생닭 1마리(600g)" required=""><button type="button" class="add" onclick="removeStepTipList(event, this)">-</button>';
            e.target.closest('.input_wrap').after(newInput);
          } else {
            e.target.closest('.input_wrap').remove();
          }
          e.target.textContent = e.target.textContent === '+' ? '-' : '+';
        }
      });

    //요리해요 (작성하기 step 카운트)
    //단계 카운터 초기화
    let stepCount = 1;
    // 단계 추가
    document.getElementById('addStep').addEventListener('click', function () {
      stepCount++;
      const newStep = document.createElement('div');
      newStep.classList.add('form-step');
      newStep.id = 'step' + stepCount;
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
                    <div class="input_wrap">
                    <input type="text" class="form_box" name="stepTips${stepCount}" placeholder="예) 입맞에 따라 청양고추를 추가하세요">
                    </div>
                    <div class="btn-wrap">
                        <button type="button" class="add" onclick="addStepTipList(event, this)">+</button>
                        <button type="button" class="del" onclick="removeStepTipList(event, this)">-</button>
                    </div>
                </div>
            </div>
        </div>
    `;
      document
        .querySelector('.btn_step_wrap')
        .parentNode.insertBefore(
          newStep,
          document.querySelector('.btn_step_wrap')
        );
    });

    // 단계 삭제
    document
      .getElementById('removeStep')
      .addEventListener('click', function () {
        if (stepCount > 1) {
          document.getElementById('step' + stepCount).remove();
          stepCount--;
        }
      });
  }
});

let stepCount = 1;

function addStepTipList(event, button) {
  event.preventDefault();

  // 새로운 입력 필드 생성
  const newField = document.createElement('div');
  newField.classList.add('input_list');
  stepCount++;

  newField.innerHTML = `
        <input type="text" class="form_box" name="stepTips${stepCount}" placeholder="예) 입맛에 따라 청양고추를 추가하세요">
        <div class="btn-wrap">
            <button type="button" class="add" onclick="addStepTipList(event, this)">+</button>
            <button type="button" class="del" onclick="removeStepTipList(event, this)">-</button>
        </div>
    `;

  // 현재 버튼(button)의 부모 요소에서 가장 가까운 `.form-list`에 추가
  const formList = button.closest('.form-list').querySelector('.input_wrap');
  formList.appendChild(newField);
}

function removeStepTipList(event, button) {
  event.preventDefault();

  // 삭제하려는 필드를 포함하는 가장 가까운 .input_wrap 찾기
  const inputWrap = button.closest('.input_list');
  if (inputWrap) {
    inputWrap.remove();
  }
}
//tagify 부분
 document.addEventListener('DOMContentLoaded', function () {
 // # 추가 안했을때
//            var input = document.querySelector('.tag_input');
//            var tagify = new Tagify(input);
//
//            // 태그 추가 이벤트
//            tagify.on('add', function(event) {
//                console.log('추가된 태그:', event.detail.data.value);
//            });
 // # 추가 후
        var input = document.querySelector('.tag_input');

            // Tagify 초기화 및 # 자동 추가 설정
            var tagify = new Tagify(input, {
                transformTag: function(tagData) {
                    // 이미 #이 있으면 추가하지 않고, 없으면 # 추가
                    if (!tagData.value.startsWith('#')) {
                        tagData.value = '#' + tagData.value;
                    }
                    return tagData;
                }
            });

            // 태그 추가 이벤트 확인
            tagify.on('add', function(event) {
                console.log('추가된 태그:', event.detail.data.value);
            });
        });
// 클릭시 색상
//    var input = document.querySelector('.tag_input');
//
//    // 포커스 이벤트
//    input.addEventListener('focus', function() {
//        input.style.borderColor = '#15a775';
//    });
//
//    // 포커스 해제 이벤트
//    input.addEventListener('blur', function() {
//        input.style.borderColor = '#e5e5e5';
//    });