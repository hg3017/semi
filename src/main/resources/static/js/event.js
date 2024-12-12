window.addEventListener('DOMContentLoaded', function () {

    const eventbtn = document.querySelector('.event_archive .btn_arrow');
        if (eventbtn) {
            eventbtn.addEventListener('click', function () {
                this.classList.toggle('on');
            });
        }

});