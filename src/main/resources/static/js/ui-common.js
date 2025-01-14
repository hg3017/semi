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

  document
    .querySelector('#footer .top_btn')
    .addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });


// 로그인 상태 확인 함수
function checkLoginStatus(callback) {
  fetch('/member/checkLoginStatus')
    .then(response => response.json())
    .then(data => {
      console.log("로그인 상태 확인:", data.isLoggedIn);
      window.isLoggedIn = data.isLoggedIn;

      if (!data.isLoggedIn) {
        alert("로그인 후 실행할 수 있습니다.");
        window.location.href = "/member/login";
        return;
      }

      callback();
    })
    .catch(error => {
      console.error("로그인 상태 확인 실패:", error);
      alert("로그인 상태 확인 중 오류가 발생했습니다.");
    });
}

// 스크랩 상태 초기화 함수 (로그아웃 시 호출)
function clearScrapState() {
  localStorage.clear(); // 모든 로컬 저장소 데이터 제거
  const scrapButtons = document.querySelectorAll(".scrap");
  scrapButtons.forEach(button => {
    button.classList.remove("on"); // 모든 스크랩 버튼 초기화
  });
}

// 페이지 로드 시 스크랩 상태 복원
function initializeScrapButtons() {
  const scrapButtons = document.querySelectorAll(".scrap");
  scrapButtons.forEach((button, index) => {
    const scrapState = localStorage.getItem(`scrapState_${index}`);
    if (scrapState === "true" && window.isLoggedIn) {
      button.classList.add("on");
    }

    // 스크랩 버튼 클릭 이벤트 추가
    button.addEventListener("click", function () {
      checkLoginStatus(() => {
        button.classList.toggle("on");
        localStorage.setItem(`scrapState_${index}`, button.classList.contains("on"));
        alert(button.classList.contains("on") ? "스크랩되었습니다." : "삭제되었습니다.");
      });
    });
  });
}

// 페이지 로드 시 로그인 상태 확인 및 스크랩 상태 복원
function loadPage() {
  fetch('/member/checkLoginStatus')
    .then(response => response.json())
    .then(data => {
      console.log("로그인 상태 확인:", data.isLoggedIn);
      window.isLoggedIn = data.isLoggedIn;

      // 스크랩 버튼 초기화
      initializeScrapButtons();
    })
    .catch(error => {
      console.error("로그인 상태 확인 실패:", error);
      alert("로그인 상태 확인 중 오류가 발생했습니다.");
    });
}

// 페이지 로드 시 스크랩 상태 초기화
loadPage();

// 공유 버튼
const shareButton = document.querySelector('.share');
const shareList = document.querySelector('.share_btn');
const closeButton = document.querySelector('.close button');

if (shareButton && shareList) {
  shareButton.addEventListener("click", function () {
    checkLoginStatus(() => {
      shareList.classList.toggle("on");
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      shareList.classList.remove("on");
    });
  }
}

// 로그아웃 버튼 이벤트 추가
const logoutButton = document.querySelector('.logout'); // 로그아웃 버튼 선택자
if (logoutButton) {
  logoutButton.addEventListener("click", function () {
    fetch('/member/logout', { method: 'POST' }) // 로그아웃 요청
      .then(response => {
        if (response.ok) {
          clearScrapState(); // 스크랩 상태 초기화
          alert("로그아웃되었습니다.");
          window.location.href = "/"; // 홈 또는 원하는 페이지로 이동
        } else {
          alert("로그아웃 실패. 다시 시도해주세요.");
        }
      })
      .catch(error => {
        console.error("로그아웃 요청 실패:", error);
        alert("로그아웃 중 오류가 발생했습니다.");
      });
  });
}





  // 스크랩,공유 스크롤 감지 조건부 숨김/보임
  const shareControl = document.querySelector('.share_control');
  const targetSection = document.querySelector('.share_control'); // 특정요소있을때만!

  if (targetSection) {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY; // 현재 스크롤 위치
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight; // 전체 스크롤 가능한 높이
      const scrollThreshold = pageHeight * 0.9; // 90% 스크롤 위치

      if (scrollPosition > scrollThreshold) {
        shareControl.classList.add('hidden');
      } else {
        shareControl.classList.remove('hidden');
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
      e.preventDefault();

      // 모든 li에서 on 클래스를 제거
      document.querySelectorAll('.tap_wrap li').forEach((li) => {
        li.classList.remove('on');
      });

      // 클릭한 a의 부모 li에 on 클래스 추가
      v.parentElement.classList.add('on');

      // 링크의 href 속성을 사용하여 페이지를 이동시킴
      window.location.href = v.href;
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
    const scrolledPercentage =
      (scrollPosition / (documentHeight - windowHeight)) * 100;
    // 프로그레스 바의 너비를 스크롤 비율에 따라 조정
    const progressBar = document.querySelector('.progress .bar');
    if (progressBar) {
      progressBar.style.width = scrolledPercentage + '%';
    }
  }
  // 스크롤 이벤트 리스너 추가
  window.addEventListener('scroll', updateProgressBar);
  // 페이지 로드 시 초기 상태 업데이트
  updateProgressBar();

  // 웹 에디터가 되기위해 editor 속성 찾기
  const editor = document.querySelector('[data-editor]');
  if (editor) {
    // 해당 속성 숨기기
    editor.style.display = 'none';

    // ID값 얻기
    const id = editor.getAttribute('id');
    // 데이터 VALUE 얻기
    const body = editor.dataset.editor;

    // 웹 에디터 생성함수 호출
    quill(id, body);
  }

  // 헤더 글쓰기 버튼 이벤트
  var h_op_btn = document.querySelector('.btn_wrap .selectWrap button');
  var h_op_Wrap = document.querySelector('.btn_wrap .selectWrap');

  document.getElementById('header').addEventListener('click', function (e) {
    if (
      !h_op_Wrap.classList.contains('on') &&
      !h_op_btn.classList.contains('act')
    ) {
      h_op_btn.classList.toggle('on');
    }
  });

  if (h_op_btn) {
    h_op_btn.addEventListener('click', function () {
      h_op_btn.classList.remove('act');
      h_op_btn.classList.toggle('on');
      h_op_Wrap.classList.toggle('on');
    });

    h_op_btn.addEventListener('mouseover', function () {
      h_op_btn.classList.add('act');
    });

    h_op_btn.addEventListener('mouseout', function () {
      if (h_op_btn.querySelector('act')) h_op_btn.removeClass('act');
    });
  }

  const selectWrapEl = document.querySelector('#header .selectWrap');
  if (selectWrapEl) {
    document
      .querySelector('#header .selectWrap')
      .addEventListener('click', function (e) {
        const button = e.target.parentElement.parentElement;
        console.log(e.target);
        const siblingOption = button.querySelector('.option'); // 버튼의 형제 요소 중 .option 선택
        if (siblingOption && siblingOption.classList.contains('option')) {
          siblingOption.style.display =
            siblingOption.style.display === 'none' ? 'block' : 'none';
        }
      });
  }
}); // DOMContentLoaded

// 웹 에디터 생성 함수
function quill(id, body) {
  // div 태크 생성
  const template = document.createElement('div');
  // 속성, style, body 추가
  template.setAttribute('id', 'editor-container');
  template.setAttribute('style', 'width: 100%; height: 300px;');
  template.innerHTML = body;

  // 기존 태그뒤에 웹에디터 추가
  document.getElementById(id).after(template);

  // 웹 에디터 객체 생성
  const quill = new Quill('#editor-container', {
    placeholder: '새미네 부엌 입니다.',
    theme: 'snow',
  });

  // 서버에 전송을 위해 기존 태그에 추가된 내용을 붙이기
  quill.on('text-change', function () {
    document.getElementById(id).value = quill.root.innerHTML;
    // tag 제거 출력
    // document.getElementById(id).value = quill.root.innerText;
  });
}

// 우클릭 방지.
document.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // 우클릭 메뉴 기본 동작 방지
  alert('소중한 창작물 보호를 위해 마우스 우측 버튼 클릭은 허용되지 않습니다.'); // 알림 표시 (선택 사항)
});

// Progress Loading 이미지 보여주기.
function showLoading() {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'flex'; // 로딩 표시
  document.body.style.overflow = 'hidden'; // 스크롤 금지
  window.showLoading = showLoading; // 글로벌 등록
}

// Progress Loading 이미지 가리기.
function hideLoading() {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'none'; // 로딩 숨김
  document.body.style.overflow = 'auto'; // 스크롤 허용.
  window.hideLoading = hideLoading; // 글로벌 등록
}

