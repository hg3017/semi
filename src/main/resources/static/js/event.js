document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.event_item').forEach(function (item) {
        // 각 이벤트의 시작일과 종료일을 가져오기
        const status = item.querySelector('.event_wrap span');
        const eventAnnounce = new Date(status.getAttribute('data-announce'));
        const eventEnd = new Date(status.getAttribute('data-end'));
        const currentDate = new Date();

        status.classList.remove('green', 'gray', 'orange');
        status.textContent = '';

        // 이벤트 상태 업데이트
        if (currentDate.toDateString() === eventAnnounce.toDateString()) {
            status.textContent = '당첨자발표';
            status.classList.add('orange');
        } else if (currentDate > eventEnd) {
            status.textContent = '종료';
            status.classList.add('gray');
        } else {
            status.textContent = '진행중';
            status.classList.add('green');
        }
    });
});

