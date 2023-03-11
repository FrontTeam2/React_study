import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

function Comment(props) {
    const { commentList, onDeleteComment, onUpdateComment } = props;
    const { User, content, myComment, id } = commentList;
    const [isEdit, setIsEdit] = useState(false);
    const [editComment, onChange] = useInput(content);

    const onClickIsEdit = () => {
        setIsEdit((prev) => !prev);

        if (isEdit) {
            setIsEdit(false);
        }
    };

    const onClickModify = () => {
        onUpdateComment(id, editComment);
        setIsEdit(false);
    };
    return (
        <S.CommentItem>
            <p>
                작성자: <span>{User.nickname}</span>
            </p>
            <p>
                댓글 내용:
                {isEdit ? (
                    <CommentInput onChange={onChange} value={editComment} />
                ) : (
                    content
                )}
            </p>
            {myComment && !isEdit && (
                <button onClick={onClickIsEdit}>수정</button>
            )}
            {isEdit && <button onClick={onClickModify}>수정하기</button>}
            {isEdit && <button onClick={onClickIsEdit}>수정취소</button>}
            {myComment && (
                <button onClick={() => onDeleteComment(id)}>삭제</button>
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
