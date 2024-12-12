window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.event_notice .btn_arrow').addEventListener('click', function () {
        this.closest('.event_notice').classList.toggle('on');
    });
});