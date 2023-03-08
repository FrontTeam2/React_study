import styled from "styled-components";
import { useState, useRef } from "react";

function Comment(props) {
    const { isComment, isCommentList, setIsCommentList } = props;
    const { User, content, myComment, id } = isComment;

    const commentDelete = (id) => {
        const deleteCommentList = isCommentList.filter(
            (item) => item.id !== id
        );
        setIsCommentList(deleteCommentList);
    };

    const [isReadOnly, isSetReadOnly] = useState(true);
    const modiRef = useRef(null);

    const commentModify = (id) => {
        const findId = isCommentList.find((item) => item.id === id);
        console.log(findId);

        isSetReadOnly((prev) => !prev);

        if (!isReadOnly) {
            findId.content = modiRef.current.value;
        }
        setIsCommentList([...isCommentList]);
    };

    return (
        <S.CommentItem>
            <div>
                <p>
                    작성자:
                    <span>{User.nickname}</span>
                </p>
                <p>
                    댓글 내용:
                    {!myComment && (
                        <input
                            type="text"
                            value={content}
                            placeholder="댓글을 입력하세요"
                        />
                    )}
                    {myComment && (
                        <input
                            type="text"
                            ref={modiRef}
                            defaultValue={content || ""}
                            readOnly={isReadOnly ? true : false}
                            placeholder="댓글을 입력하세요"
                        />
                    )}
                </p>

                {myComment && (
                    <div>
                        <button onClick={() => commentModify(id)}>
                            {isReadOnly ? "수정" : "저장"}
                        </button>
                        <button onClick={() => commentDelete(id)}>삭제</button>
                    </div>
                )}
            </div>
        </S.CommentItem>
    );
}
export default Comment;

const CommentItem = styled.li`
    padding-left: 20px;
    border: 1px solid #000;
    margin: 10px;

    & > div {
        display: flex;
        justify-content: left;
        align-items: center;
        text-align: left;
    }

    & > div > P:first-child {
        width: 110px;
        margin-right: 10px;
    }

    & > div > p:nth-child(2) {
        margin-right: 20px;
    }

    & > div > p:nth-child(2) > input {
        outline: none;
        border: none;
    }

    & > div > div > button {
        margin-right: 5px;
    }
`;

const S = {
    CommentItem,
};
