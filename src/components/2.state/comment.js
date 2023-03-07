import { useState } from 'react';
import styled from 'styled-components';

function Comment(props) {
    const { commentList, onDeleteComment, onUpdateComment, setCommentList } =
        props;

    const { User, content, myComment, id } = commentList;
    const [clickUpdateState, setClickUpdateState] = useState(false);
    const [clickDeleteState, setClickDeleteState] = useState(false);
    const [state, setState] = useState(false);

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        const onChange = (e) => {
            setValue(e.target.value);
        };
        const onfocus = (e) => {
            console.log(e);
            e.target.readOnly = false;
            e.target.focus();
        };

        return [value, onChange, onfocus];
    };

    const [modiInput, onChange, onfocus] = useInput(content);
    const onClickUpdate = () => {
        if (!state && !clickUpdateState) {
            // 수정버튼만 눌렀을때
            setState(!state);
            setClickUpdateState(!clickUpdateState);
            onfocus();
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

    const onClickModify = () => {
        if (modiInput === content) return;

        setState(false);
        setClickUpdateState(false);
        onUpdateComment(id, modiInput);
    };

    return (
        <S.CommentItem>
            <p>
                작성자: <span>{User.nickname}</span>
            </p>
            <p>
                댓글 내용:{' '}
                <S.CommentInput
                    value={modiInput}
                    onChange={onChange}
                    readOnly={clickUpdateState ? false : true}
                />
            </p>

            {state && clickUpdateState && (
                <button onClick={onClickModify}>수정하기</button>
            )}
            {state && clickDeleteState && (
                <button onClick={() => onDeleteComment(id)}>삭제하기</button>
            )}
            {state && <button onClick={onClickCancel}>취소하기</button>}

            {myComment && !clickUpdateState && (
                <button onClick={onClickUpdate}>수정</button>
            )}
            {myComment && !clickDeleteState && (
                <button onClick={onClickDelete}>삭제</button>
            )}
        </S.CommentItem>
    );
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;

const CommentInput = styled.input`
    border: none;
`;

const S = {
    CommentItem,
    CommentInput,
};
