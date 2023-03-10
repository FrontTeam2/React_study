import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

function Comment({ newCommentList, commentDelete, commentEdit }) {
    const { User, content, myComment, id } = newCommentList;

    const [isEditBtn, setIsEditBtn] = useState(false);

    const [editComment, onChange] = useInput(content);

    const onEditBtn = () => {
        setIsEditBtn((prev) => !prev);
    };

    const onEdit = () => {
        commentEdit(id, editComment);
        setIsEditBtn(false);
    };

    return (
        <>
            <S.CommentItem>
                <p>
                    작성자: <span>{User.nickname}</span>
                </p>
                <p>
                    댓글 내용:
                    <input
                        value={editComment}
                        onChange={onChange}
                        readOnly={!isEditBtn ? true : false}
                    ></input>
                </p>
                {myComment && (
                    <>
                        {!isEditBtn && (
                            <button onClick={onEditBtn}>수정</button>
                        )}
                        {isEditBtn && <button onClick={onEdit}>완료</button>}
                        <button onClick={() => commentDelete(id)}>삭제</button>
                    </>
                )}
            </S.CommentItem>
        </>
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
