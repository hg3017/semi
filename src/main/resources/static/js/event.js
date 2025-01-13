document.addEventListener("DOMContentLoaded", function () {
    //리스트 필터
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

    // 이벤트 기간에 따라 구분
    document.querySelectorAll('.event_item').forEach(function (item) {
        // 각 이벤트의 시작일과 종료일을 가져오기
        console.log(document.querySelector(".label_list"));
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

    document.querySelectorAll('.event_date span').forEach(function(span) {
        const eventStartStr = span.getAttribute('data-start');
        const eventEndStr = span.getAttribute('data-end');

        // 날짜 형식에 맞게 변환하여 Date 객체를 생성합니다.
        const eventStart = new Date(eventStartStr + "T00:00:00Z"); // 시작일
        const eventEnd = new Date(eventEndStr + "T23:59:59Z");   // 종료일
        const currentDate = new Date();                           // 현재 날짜

        console.log('Event Start:', eventStartStr, 'Event End:', eventEndStr);
        console.log('Current Date:', currentDate);

        // 유효한 날짜인지 확인
        if (isNaN(eventStart.getTime()) || isNaN(eventEnd.getTime())) {
            console.error('유효하지 않은 날짜 형식입니다:', { eventStartStr, eventEndStr });
            return;
        }

        // 기존의 클래스 제거
        span.classList.remove('green', 'gray', 'default');
        span.textContent = '';  // 기존 텍스트 비우기

        // 이벤트 상태에 따라 텍스트와 클래스 설정
        if (currentDate > eventEnd) {
            span.textContent = '종료';  // 종료된 이벤트
            span.classList.add('gray');
        } else if (currentDate >= eventStart && currentDate <= eventEnd) {
            span.textContent = '진행중';  // 진행 중인 이벤트
            span.classList.add('green');
        } else {
            span.textContent = '미개시';  // 아직 시작되지 않은 이벤트
            span.classList.add('default');
        }
    });



    //상세보기 더보기버튼
    const eventNotice = document.querySelector('.event_notice');
    if (eventNotice) {
        eventNotice.addEventListener('click', function () {
            this.classList.toggle('on');
        });
    }
    });

//    document.querySelectorAll('.main_search li>a').forEach((v) => {
//        v.addEventListener('click', function (e) {
//            e.preventDefault();
//            // 모든 li에서 on 클래스를 제거
//            document.querySelectorAll('li').forEach((li) => {
//                li.classList.remove('on');
//            });
//            // 클릭한 a의 부모 li에 on 클래스 추가
//            v.parentElement.classList.add('on');
//        })
//    })
});

