window.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.target.matches('.event_notice .btn_arrow')) {
            event.target.closest('.event_notice').classList.toggle('on');
        }
    });

    // const search = document.querySelector('.main_search li');
    // if (search) {
    //     search.addEventListener('click', function () {
    //         this.classList.toggle('on');
    //     });
    // }

    document.querySelectorAll('.main_search li>a').forEach((v) => {
        v.addEventListener('click', function (e) {
            e.preventDefault();

            // 모든 li에서 on 클래스를 제거
            document.querySelectorAll('li').forEach((li) => {
                li.classList.remove('on');
            });

            // 클릭한 a의 부모 li에 on 클래스 추가
            v.parentElement.classList.add('on');

        })
    })
});