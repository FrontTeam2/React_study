import styled from "styled-components";
import { useState, useRef } from "react";

function Comment(props) {
    const { commentList, setIsCommentList } = props;
    console.log(props);

    const [setContent, setIsContent] = useState();
    const [isControl, isSetControl] = useState(false);
    const contentRef = useRef(null);
    const saveRef = useRef(null);

    const inputContent = (e) => {
        setIsContent(e.target.value);
    };

    const commentModify = () => {
        // isSetControl((prev) => !prev);
        // 1. 수정 & 저장 텍스트 각각 전환시키기
        // 2. 이너텍스트에 따라 readOnly 속성의 변화 (state)

        setIsCommentList([...commentList]);
        if ((saveRef.current.innerText = "저장")) {
            contentRef.current.readOnly = false;
        } else if ((saveRef.current.innerText = "수정")) {
            contentRef.current.readOnly = true;
        }
    };
    const commentDelete = (comment) => {
        const myList = [...commentList];
        const modiList = myList.filter((item) => item.id !== comment.id);
        setIsCommentList(modiList);
    };

    return (
        <S.CommentItem>
            {commentList.map((comment, index) => {
                return (
                    <div>
                        <p>
                            작성자:
                            <span>{comment.User.nickname}</span>
                        </p>
                        <p>
                            댓글 내용:
                            <input
                                ref={contentRef}
                                defaultValue={comment.content}
                                readOnly={true}
                                onChange={inputContent}
                            />
                        </p>
                        {comment.myComment && (
                            <div>
                                <button ref={saveRef} onClick={commentModify}>
                                    {!isControl ? "수정" : "저장"}
                                </button>
                                <button onClick={() => commentDelete(comment)}>
                                    삭제
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
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
