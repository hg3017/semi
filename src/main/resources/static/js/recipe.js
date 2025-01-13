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

    // 기본 요소들 선택
    // const wrapper = ''; // 입력 필드를 포함하는 컨테이너 선택
    // const addButtons = document.querySelectorAll('.btn-wrap .add'); // 추가 버튼 선택
    // const maxFields = 10; // 최대 입력 필드 수 설정
    // let fieldCount = 1; // 현재 입력 필드 수

    // '추가하기' 버튼 클릭 시 이벤트
    // if (addButtons) {
    //     addButtons.forEach(addButton => {
    //         addButton.addEventListener('click', function(e) {
    //             e.preventDefault(); // 페이지 리로드 방지
    //             if (fieldCount <= maxFields) { // 최대 필드 수 체크
    //                 fieldCount++; // 필드 수 증가
    //                 // 새 입력 필드 추가
    //                 const newField = document.createElement('div');
    //                 newField.classList.add('input_list');

    //                 newField.innerHTML = `
    //                 <input type="text" class="form_box" name="main_mat[]" placeholder="예) 생닭 1마리(600g)" required />
    //                 <a href="javascript:void(0);" class="remove_field">-</a>
    //             `;

    //                 // 필드를 wrapper에 추가
    //                 const wrapper = this.closest('.form-list').querySelector('.input_wrap');
    //                 wrapper.appendChild(newField);
    //             } else {
    //                 alert('최대 입력 필드를 초과할 수 없습니다.');
    //             }
    //         });
    //     });
    // }

    // 추가한 필드 삭제하기
    // const removeFields = document.querySelectorAll('.input_wrap');
    // if (removeFields) {
    //   removeFields.forEach((field) => {
    //     field.addEventListener('click', function (e) {
    //       if (e.target && e.target.classList.contains('remove_field')) {
    //         e.preventDefault();
    //         fieldCount--;
    //         //해당 필드 삭제
    //         const fieldToRemove = e.target.closest('.input_list');
    //         if (fieldToRemove) {
    //           fieldToRemove.remove(); // 해당 필드 삭제
    //         }
    //       }
    //     });
    //   });
    // }

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

// // 태그 입력 필드 선택 및 Tagify 초기화
//    const input = document.querySelector('.form_box.tags');
//    const tagify = new Tagify(input, {
//        delimiters: ",| ",  // 쉼표와 스페이스로 구분
//        pattern: /^[가-힣a-zA-Z0-9]+$/,  // 한글, 영문, 숫자만 허용
//        placeholder: "태그를 입력하고 쉼표(,) 또는 enter 키를 입력 해주세요"
//    });
//
//    // 이벤트 핸들링 (태그 추가 시)
//    tagify.on('add', function(e){
//        console.log("추가된 태그:", e.detail.data.value);
//    });
//
//    // 태그 삭제 이벤트
//    tagify.on('remove', function(e){
//        console.log("삭제된 태그:", e.detail.data.value);
//    });



//    const tagInput = document.getElementById('tagInput');
//    const tagContainer = document.getElementById('tagContainer');
//
//    tagInput.addEventListener('keypress', function (event) {
//        if (event.key === 'Enter') {
//            event.preventDefault();
//            const tagText = tagInput.value.trim();
//            if (tagText && /^[가-힣a-zA-Z0-9]+$/.test(tagText)) {
//                addTag(tagText);
//                tagInput.value = '';
//            } else {
//                alert('한글, 영문, 숫자만 입력 가능합니다.');
//            }
//        }
//    });
//
//    function addTag(tagText) {
//        const tagElement = document.createElement('div');
//        tagElement.classList.add('tag');
//        tagElement.textContent = `#${tagText}`;
//
//        const removeButton = document.createElement('span');
//        removeButton.textContent = '✖';
//        removeButton.classList.add('remove-tag');
//        removeButton.onclick = () => tagElement.remove();
//
//        tagElement.appendChild(removeButton);
//        tagContainer.insertBefore(tagElement, tagInput);
//    }


//    const hashtagsInput = document.getElementById("hashtags");
//            const hashtagsContainer = document.getElementById("hashtags-container");
//            const hiddenHashtagsInput = document.getElementById("hashtags-hidden");
//
//            let hashtags = [];
//
//            function addHashtag(tag) {
//                tag = tag.replace(/[\[\]]/g, '').trim();
//                if(tag && !hashtags.includes(tag)) {
//                    const span = document.createElement("span");
//                    span.innerText = "#" + tag + " ";
//                    span.classList.add("hashtag");
//
//                    const removeButton = document.createElement("button");
//                    removeButton.innerText = "x";
//                    removeButton.classList.add("remove-button");
//                    removeButton.addEventListener("click", () => {
//                        hashtagsContainer.removeChild(span);
//                        hashtags = hashtags.filter((hashtag) => hashtag !== tag);
//                        hiddenHashtagsInput.value = hashtags.join(",");
//                    });
//
//                    span.appendChild(removeButton);
//                    hashtagsContainer.appendChild(span);
//                    hashtags.push(tag);
//                    hiddenHashtagsInput.value = hashtags.join(",");
//                }
//            }
//
//            hashtagsInput.addEventListener("keydown", (event) => {
//                if (event.key === 'Enter') {
//                    event.preventDefault();
//                    const tag = hashtagsInput.value.trim();
//                    if (tag) {
//                        addHashtag(tag);
//                        hashtagsInput.value = "";
//                    }
//                }
//            });
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