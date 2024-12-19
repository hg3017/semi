window.addEventListener('DOMContentLoaded', function () {
    // 웹 에디터가 되기위해 editor 속성 찾기
    const editor = document.querySelector('[data-editor]');
    if (editor) {
        // 해당 속성 숨기기
        editor.style.display = 'none';

        // ID값 얻기
        const id = editor.getAttribute('id');
        // 데이터 VALUE 얻기
        const body = editor.dataset.editor;

        // 웹 에디터 생성함수 호출
        quill(id, body);
    }

}); // DOMContentLoaded

// 웹 에디터 생성 함수
function quill(id, body) {
    // div 태크 생성
    const template = document.createElement('div');
    // 속성, style, body 추가
    template.setAttribute('id', 'editor-container');
    template.setAttribute('style', 'width: 100%; height: 300px;');
    template.innerHTML = body;

    // 기존 태그뒤에 웹에디터 추가
    document.getElementById(id).after(template);

    // 웹 에디터 객체 생성
    const quill = new Quill('#editor-container', {
        placeholder: '새미네 부엌 입니다.',
        theme: 'snow',
    });

    // 서버에 전송을 위해 기존 태그에 추가된 내용을 붙이기
    quill.on('text-change', function () {
        document.getElementById(id).value = quill.root.innerHTML;
    });
}
