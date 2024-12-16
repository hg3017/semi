// join
// 실행 시 /member/emailJoin 으로 이동합니다.
function emailJoinHref() {
    window.location.href = '/member/emailJoin';
}

// emailJoin
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

// emailJoinDetail
// 비밀번호 정규식
function passwordRegex() {
    var password = document.querySelector('#password').value;

    const letterPattern = /[A-Z]/;
    const specialPattern = /[^a-zA-Z0-9\s]/;
    const lengthPattern = /^.{8,20}$/;

    const passwordELement = document.querySelector('.join-form .password-strength');
    var checkCount = 0;

    // 비밀번호 정규식 통과 시 체크항목 불들어오기, 정규식 통과 실패시 강조표시
    if(letterPattern.test(password)) {
        passwordELement.querySelector('li:first-child').classList.add("is-active");
        checkCount++;
        if ( !passwordELement.parentElement.querySelector('.messages').hasAttribute('hidden') ) {
            passwordELement.parentElement.querySelector('.messages').setAttribute('hidden', "");
        }
    } else {
        passwordELement.querySelector('li:first-child').classList.remove('is-active');
        passwordELement.parentElement.classList.add("is-error");
        passwordELement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }

    if(specialPattern.test(password)) {
        passwordELement.querySelector('li:nth-child(2)').classList.add("is-active");
        checkCount++;
        if ( !passwordELement.parentElement.querySelector('.messages').hasAttribute('hidden') ) {
            passwordELement.parentElement.querySelector('.messages').setAttribute('hidden', "");
        }
    } else {
        passwordELement.querySelector('li:nth-child(2)').classList.remove('is-active');
        passwordELement.parentElement.classList.add("is-error");
        passwordELement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }

    if(lengthPattern.test(password)) {
        passwordELement.querySelector('li:last-child').classList.add("is-active");
        checkCount++;
        if ( !passwordELement.parentElement.querySelector('.messages').hasAttribute('hidden') ) {
            passwordELement.parentElement.querySelector('.messages').setAttribute('hidden', "");
        }
    } else {
        passwordELement.querySelector('li:last-child').classList.remove("is-active");
        passwordELement.parentElement.classList.add("is-error");
        passwordELement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }

    if( checkCount===3) {
        passwordELement.parentElement.classList.remove("is-error");
    } else {
        passwordELement.parentElement.querySelector('.messages').removeAttribute('hidden');
    }
}

// emailJoinDetail
// 비밀번호와 비밀번호확인이 일치하는지 확인.
function rePasswordRegex() {
    var password = document.querySelector('#password');
    var repassword = document.querySelector('#rePassword');


    console.log("password : " + password.value );
    console.log("repassword : " + repassword.value );
    if ( !(password.value == repassword.value)) {
        console.log("repassword if문 통과실패." + repassword );
        repassword.parentElement.classList.add("is-error");
        repassword.parentElement.querySelector('.messages').removeAttribute('hidden');
    } else {
        console.log("repassword if문 통과." + repassword );
        repassword.parentElement.classList.remove("is-error");
        repassword.parentElement.querySelector('.messages').setAttribute('hidden', "");
    }
}

// emailJoinDetail
// 유효한 이름 값만 입력 가능하도록 설정합니다.
function nameRegex() {
    const regexPattern = /^[a-zA-Z가-힣]{2,20}$/;
    var memberName = document.querySelector('#name');

    if ( regexPattern.test(memberName.value) ) {
        console.log("정규식 검사 성공")
        memberName.parentElement.classList.remove("is-error");
        memberName.parentElement.querySelector('.messages').setAttribute('hidden', "");
    } else {
        console.log("정규식 검사 실패")
        memberName.parentElement.classList.add("is-error");
        memberName.parentElement.querySelector('.messages').removeAttribute('hidden');
    }
}

// emailJoinDetail
// 휴대번호 유효한 값 만 입력 가능하도록 설정합니다.
function phoneRegex() {
    const regexPattern = /^01[0|1|6|7|8|9]\d{7,8}$/;
    var phoneNumber = document.querySelector('#mobile');

    if ( regexPattern.test(phoneNumber.value) ) {
        console.log("휴대폰번호 정규식 검사 성공")
        phoneNumber.parentElement.classList.remove("is-error");
        phoneNumber.parentElement.querySelector('.messages').setAttribute('hidden', "");
    } else {
        console.log("휴대폰번호 정규식 검사 실패")
        phoneNumber.parentElement.classList.add("is-error");
        phoneNumber.parentElement.querySelector('.messages').removeAttribute('hidden');
    }
}

// emailJoinDetail
// 전체동의 체크박스 선택 시 체크박스 일괄 선택.
function checkBoxSelectAll() {

    const agreeAllCheckbox = document.querySelector('#agreeAll');
    const otherCheckboxes = document.querySelectorAll('.agree-list .checkbox_input');

    agreeAllCheckbox.checked = !agreeAllCheckbox.checked;

    // 전체 동의 체크박스를 클릭했을 때 하위 체크박스들도 체크 상태 변경
    const isChecked = agreeAllCheckbox.checked;

    otherCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}

// emailJoinDetail
// 체크박스 중 하나라도 선택되지 않으면 전체동의 체크 해제


// emailJoinDetail
// 체크 해제시 빨간색 안내문구 표기.


// 모든 사항이 다 입력되었을 때 회원가입 승인 날아가도록 설정.


