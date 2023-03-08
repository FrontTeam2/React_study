import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Comment({ newCommentList, setNewCommentList }) {
    const updateRef = useRef([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editInput, setEditInput] = useState("");

    const onChangeEditInput = (e) => {
        setEditInput(e.target.value);
    };
    const onCommentUpdate = (i) => {
        let list = [...newCommentList];
        console.log(list);
        list[i] = { ...list[i], content: editInput };
        console.log(list);
        console.log(updateRef.current[i]);

        if (!isEdit) {
            setIsEdit((prev) => !prev);
            updateRef.current[i].readOnly = false;
            console.log(list);
        } else {
            updateRef.current[i].readOnly = true;
            setIsEdit((prev) => !prev);
            console.log(list);

            setEditInput("");
        }
        setNewCommentList([...list]);
    };
    const onCommentDelete = (i) => {
        const list = newCommentList.filter((_, index) => index != i);
        setNewCommentList(list);
    };
    console.log(newCommentList);

    return (
        <>
            {newCommentList.map((item, index) => {
                return (
                    <S.CommentItem>
                        <p>
                            작성자: <span>{item.User.nickname}</span>
                        </p>
                        <p>
                            댓글 내용:
                            <input
                                ref={(el) => (updateRef.current[index] = el)}
                                value={item.content}
                                onChange={onChangeEditInput}
                                readOnly
                            ></input>
                        </p>
                        {item.myComment && (
                            <>
                                <button onClick={() => onCommentUpdate(index)}>
                                    수정
                                </button>
                                <button onClick={() => onCommentDelete(index)}>
                                    삭제
                                </button>
                            </>
                        )}
                    </S.CommentItem>
                );
            })}
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
