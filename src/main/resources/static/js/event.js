window.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.target.matches('.event_notice .btn_arrow')) {
            event.target.closest('.event_notice').classList.toggle('on');
        }
    });
});