document.addEventListener("DOMContentLoaded", function () {
    // 리스트 필터
    document.querySelectorAll('.filter ul li').forEach(function (filter) {
        filter.addEventListener('click', function () {
            const filterText = filter.textContent.trim();
            document.querySelectorAll('.event_item').forEach(function (item) {
                const status = item.querySelector('.event_wrap span').textContent;

                // 필터에 맞는 이벤트만 표시하기
                if (filterText === '전체' || status === filterText) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    //이벤트 기간에 따라 구분
    document.querySelectorAll('.event_item').forEach(function (item) {
        const status = item.querySelector('.event_wrap span'); // 내부의 span 선택
        if (!status) return; // span이 없는 경우 예외 처리

        const eventStart = new Date(status.getAttribute('data-start')); // 시작일
        const eventEnd = new Date(status.getAttribute('data-end'));     // 종료일
        const currentDate = new Date();                                 // 현재 날짜

        // 클래스 초기화
        status.classList.remove('green', 'gray');
        status.textContent = '';

        // 이벤트 상태 업데이트
        if (currentDate > eventEnd) {
            status.textContent = '종료';
            status.classList.add('gray');
        } else {
            status.textContent = '진행중';
            status.classList.add('green');
        }
    });

    //상세페이지 이벤트 기간에 따른 구분
    document.querySelectorAll('.title .label_list').forEach(function (labelItem) {
        const status = labelItem.querySelector('.event_date span'); // 내부의 span 선택
        if (!status) return; // span이 없는 경우 예외 처리

        const eventStart = new Date(status.getAttribute('data-start')); // 시작일
        const eventEnd = new Date(status.getAttribute('data-end'));     // 종료일
        const currentDate = new Date();                                 // 현재 날짜

        // 클래스 초기화
        status.classList.remove('green', 'gray');
        status.textContent = '';

        // 이벤트 상태 업데이트
        if (currentDate > eventEnd) {
            status.textContent = '종료';
            status.classList.add('gray');
        } else {
            status.textContent = '진행중';
            status.classList.add('green');
        }
    });

    // 상세보기 더보기버튼
    const eventNotice = document.querySelector('.event_notice');
    if (eventNotice) {
        eventNotice.addEventListener('click', function () {
            this.classList.toggle('on');
        });
    };
});

