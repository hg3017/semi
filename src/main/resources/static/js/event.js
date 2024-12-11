window.addEventListener('DOMContentLoaded', function () {

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