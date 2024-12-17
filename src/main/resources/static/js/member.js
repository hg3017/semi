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
        return true;
    } else {
        passwordELement.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
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
        return false;
    } else {
        console.log("repassword if문 통과." + repassword );
        repassword.parentElement.classList.remove("is-error");
        repassword.parentElement.querySelector('.messages').setAttribute('hidden', "");
        return true;
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
        return true;
    } else {
        console.log("정규식 검사 실패")
        memberName.parentElement.classList.add("is-error");
        memberName.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
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
        return true;
    } else {
        console.log("휴대폰번호 정규식 검사 실패")
        phoneNumber.parentElement.classList.add("is-error");
        phoneNumber.parentElement.querySelector('.messages').removeAttribute('hidden');
        return false;
    }
}

// emailJoinDetail
// 전체동의 체크박스 클릭시 하위 체크박스 모두 선택
// 하위 체크박스를 각자 클릭하여 모두 선택시 전체동의 체크박스 체크
// 하위 체크박스중 하나이상 체크를 해제할 경우 전체동의 체크박스 체크 해제,
// 하위 체크박스에 체크 해제시 빨간색 안내문구 표기.
window.addEventListener('DOMContentLoaded', function () {
    const agreeAllCheckbox = document.getElementById('agreeAll');
    // const agreeAllCheckbox = document.querySelector('.fieldset-header .checkbox_input')
    const otherCheckboxes = document.querySelectorAll('.agree-list .checkbox_input');

    if (agreeAllCheckbox) {
        agreeAllCheckbox.addEventListener('click', function (e) {
            e.stopPropagation();

            const isChecked = this.checked;

            otherCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;

                // 체크박스 상태에 따라 is-error 클래스 추가/제거
                const item = checkbox.parentElement.parentElement;
                if (!isChecked) {
                    item.classList.add("is-error");
                    item.querySelector('.messages').removeAttribute('hidden');
                } else {
                    item.classList.remove("is-error");
                    item.querySelector('.messages').setAttribute('hidden', "");
                }
            });

            // otherCheckboxes.forEach(v => v.checked = this.checked);
        });
    }

    if (otherCheckboxes) {
        otherCheckboxes.forEach(box => {
            box.addEventListener('click', function (e) {
                e.stopPropagation();

                // "전체 동의" 체크박스 상태 업데이트
                agreeAllCheckbox.checked = [...otherCheckboxes].every(v => v.checked);

                // 체크된 상태 확인 후 is-error 클래스 추가/제거
                const item = box.parentElement.parentElement;
                if (!box.checked) {
                    item.classList.add("is-error");
                    item.querySelector('.messages').removeAttribute('hidden');
                } else {
                    item.classList.remove("is-error");
                    item.querySelector('.messages').setAttribute('hidden', "");
                }

                // agreeAllCheckbox.checked = [...otherCheckboxes].every(v => v.checked);
            });
        });
    }
});

 

// 모든 사항이 다 입력되었을 때 회원가입.
// 전체적인 정합성을 확인하여 회원가입을 실행
// 지금 문제. 전체동의 컬럼에서 필수값만 선택되어도 회원가입이 가능해야함.
function validateAndSignUp() {
    const isPasswordValid = passwordRegex();
    const isRePasswordValid = rePasswordRegex();
    const isNameValid = nameRegex();
    const isPhoneValid = phoneRegex();
    const isAgreeAllChecked = document.querySelectorAll('.agree-list .checkbox_input').checked;
    // const form = document.querySelectorAll('.agree-list');
    // const requiredElements = form.querySelectorAll('[required]');
    // const isAgreeAllChecked = document.getElementById('agreeAll').checked;

    const requiredCheckboxes = document.querySelectorAll('.agree-list .checkbox_input[required]');
    const isAllRequiredChecked = [...requiredCheckboxes].every(checkbox => checkbox.checked);

    if (!isAllRequiredChecked) {
        alert('필수 동의 항목에 모두 동의해주세요.');
        return;
    }

    if (isPasswordValid && isRePasswordValid && isNameValid && isPhoneValid && isAllRequiredChecked) {
        signUp();
    } else {
        alert('모든 필드를 올바르게 입력해 주세요.');
    }
}

function signUp() {
    // 회원가입 실행 로직을 여기에 작성
    alert('회원가입이 완료되었습니다!');
    window.location.href = '/member/joinComplete';
}

//
// alert('validateAndSignUp 클릭 성공');
// console.log(isAgreeAllChecked + " isAgreeAllChecked")
// console.log(isPhoneValid + " isPhoneValid")
// console.log(isNameValid + " isNameValid")
// console.log(isRePasswordValid + " isRePasswordValid")
// console.log(isPasswordValid + " isPasswordValid")
//

