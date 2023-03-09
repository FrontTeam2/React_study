import { useState } from 'react';
import styled from 'styled-components';

function Comment(props) {
    const { commentList, onDeleteComment, onUpdateComment } = props;

    const { User, content, myComment, id } = commentList;

    const [isEdit, setIsEdit] = useState(false);
    console.log(commentList);
    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        const onChange = (e) => {
            setValue(e.target.value);
        };

        return [value, onChange];
    };
    console.log(content);
    const [editComment, onChange] = useInput(content);

    console.log(editComment);
    const onClickIsEdit = () => {
        setIsEdit((prev) => !prev);

        if (isEdit) {
            setIsEdit(false);
        }
    };
    return (
        <S.CommentItem>
            <p>
                작성자: <span>{User.nickname}</span>
            </p>
            <p>
                댓글 내용:
                {isEdit ? (
                    <CommentInput
                        name="newComment"
                        onChange={onChange}
                        value={editComment}
                    />
                ) : (
                    content
                )}
            </p>
            {myComment && !isEdit && (
                <button onClick={onClickIsEdit}>수정</button>
            )}
            {isEdit && <button onClick={onClickIsEdit}>수정하기</button>}
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
