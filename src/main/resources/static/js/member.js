// 실행 시 /member/emailJoin 으로 이동합니다.
function emailJoinHref() {
    window.location.href = '/member/emailJoin';
}

// 실행 시 이메일 정합성을 확인한 후 작성된 이메일을 가지고 /member/emailJoinDetail 로 이동합니다.
function emailJoinDetailHref() {
    const email = document.querySelector('.email-form .form-g .input-block').value.trim();
    // 이메일 정규식 패턴.
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    // test: 정규 표현식 객체에서 제공하는 메서드로, 주어진 문자열이 정규 표현식과 일치하는지를 검사
    if(pattern.test(email) === false) {
        alert("이메일 형식이 아닙니다.");
        return false;
    }
    else {
        window.location.href = '/member/emailJoinDetail';
    }
}

