// 댓글 작성
function submitComment(button) {
  const commentBox = button.closest('.com_box');

  const comment_board_id = commentBox.querySelector('.comment_board_id').value;
  const comment_post_id = commentBox.querySelector('.comment_post_id').value;
  const desc_detail = commentBox.querySelector('.textBox').value;
  const creater = commentBox.querySelector('.creater').value;
  let parent_comment_id = commentBox.querySelector('.parent_comment_id').value;

  if (parent_comment_id === 0) {
    parent_comment_id = null;
  }

  const commentDTO = {
    comment_board_id: comment_board_id,
    comment_post_id: comment_post_id,
    desc_detail: desc_detail,
    creater: creater,
    parent_comment_id: parent_comment_id,
  };

  showLoading();

  // Fetch 요청 보내기
  fetch('/member/createComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 요청 데이터 형식
    },
    body: JSON.stringify(commentDTO), // 요청 본문 데이터
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // JSON으로 응답 데이터 처리
    })
    .then((data) => {
      if (data.success) {
        alert('댓글이 저장되었습니다.');
        location.reload();
      } else {
        alert('댓글 저장에 실패했습니다.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('서버와 연결 중 에러 발생.');
    })
    .finally(() => {
      hideLoading();
    });
  return false; // 폼 제출 중단
}

// 댓글 수정
function modifyComment(commentId, button) {
  const commentBox = button.closest('.com_box');
  const textBox = commentBox.querySelector('#textBox');

  const updatedContent = textBox.value;

  if (!updatedContent) {
    alert('내용을 입력하세요!');
    textBox.focus(); // 입력 필드에 포커스를 설정
    return;
  }

  const commentDTO = {
    comment_id: commentId,
    desc_detail: updatedContent,
  };

  showLoading();

  // AJAX 요청
  fetch('/member/modifyComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentDTO),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // JSON으로 응답 데이터 처리
    })
    .then((data) => {
      if (data.success) {
        alert('댓글이 수정 되었습니다.');
        location.reload();
      } else {
        alert('댓글 수정에 실패했습니다.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('서버와 연결 중 에러 발생.');
    })
    .finally(() => {
      hideLoading();
    });
  return false; // 폼 제출 중단
}

// 댓글 수정중 닫기 버튼 누르면 수정 화면 비활성화.
function cancelModify(button) {
  const cmtDiv = button.closest('.cmt');
  const modifyDiv = button.closest('.modify.editAction'); // 수정 영역
  const textDiv = modifyDiv.nextElementSibling; // 바로 다음의 .text 영역

  // display: none 처리
  if (modifyDiv) modifyDiv.style.display = 'none';
  if (textDiv) textDiv.style.display = 'none';

  // 수정 삭제 버튼 가리기
  const buttonActive = cmtDiv.querySelector('.modify.editActive');

  if (buttonActive) buttonActive.style.display = 'block';
}

// 댓글 하단 수정버튼 누르면 수정 화면 활성화.
function activeModify(button) {
  // 수정 삭제 버튼 가리기
  const buttonHide = button.closest('.modify.editActive');

  if (buttonHide) buttonHide.style.display = 'none';

  // 상단 닫기 버튼 활성화

  const cmtDiv = button.closest('.cmt');
  const buttonActive = cmtDiv.querySelector('.modify.editAction');
  const textActive = buttonActive.nextElementSibling;

  if (buttonActive) buttonActive.style.display = 'block';
  if (textActive) textActive.style.display = 'block';
}

// 댓글 수정
function deleteComment(commentId, button) {
  const commentDTO = {
    comment_id: commentId,
  };

  showLoading();

  // AJAX 요청
  fetch('/member/deleteComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentDTO),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // JSON으로 응답 데이터 처리
    })
    .then((data) => {
      if (data.success) {
        alert('댓글이 삭제 되었습니다.');
        location.reload();
      } else {
        alert('댓글 삭제에 실패했습니다.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('서버와 연결 중 에러 발생.');
    })
    .finally(() => {
      hideLoading();
    });
  return false; // 폼 제출 중단
}
