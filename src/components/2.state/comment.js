import { useState } from 'react';
import styled from 'styled-components';

function Comment({ commentList, setCommentList, onDeleteComment }) {
    const { User, content, myComment } = commentList;
    const [clickUpdateState, setClickUpdateState] = useState(false);
    const [clickDeleteState, setClickDeleteState] = useState(false);
    const [state, setState] = useState(false);

    const onClickUpdate = () => {
        if (!state && !clickUpdateState) {
            // 수정버튼만 눌렀을때
            setState(!state);
            setClickUpdateState(!clickUpdateState);
        }
        if (state && clickDeleteState) {
            // 수정버튼을 누른상태에서 삭제버튼을 눌렀을때 삭제기능으로 전환
            setClickUpdateState(!clickUpdateState);
            setClickDeleteState(!clickDeleteState);
        }
    };
    const onClickDelete = () => {
        if (!state && !clickDeleteState) {
            setState(!state);
            setClickDeleteState(!clickDeleteState);
        }
        if (state && clickUpdateState) {
            setClickUpdateState(!clickUpdateState);
            setClickDeleteState(!clickDeleteState);
        }
    };

    const onClickCancel = () => {
        if (state && clickUpdateState) {
            setState(false);
            setClickUpdateState(false);
        }
        if (state && clickDeleteState) {
            setState(false);
            setClickDeleteState(false);
        }
    };

    // const onUpdateComment = () => {
    //     setPasswordConfirm(!passwordConfirm);
    // };

    return (
        <S.CommentItem>
            <p>
                작성자: <span>{User.nickname}</span>
            </p>
            <p>
                댓글 내용: <span>{content}</span>
            </p>

            {state && clickUpdateState && <button>수정하기</button>}
            {state && clickDeleteState && (
                <button onClick={() => onDeleteComment(myComment)}>
                    삭제하기
                </button>
            )}
            {state && <button onClick={onClickCancel}>취소하기</button>}

            {!clickUpdateState && <button onClick={onClickUpdate}>수정</button>}
            {!clickDeleteState && <button onClick={onClickDelete}>삭제</button>}
        </S.CommentItem>
    );
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;

const S = {
    CommentItem,
};
