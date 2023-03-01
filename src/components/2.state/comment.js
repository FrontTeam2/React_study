import styled from "styled-components";

function Comment(props) {
    const { commentList } = props;
    console.log(props);

    return (
        <S.CommentItem>
            {commentList.map((comment) => {
                return (
                    <div>
                        <p>
                            작성자:
                            <span>{comment.User.nickname}</span>
                        </p>
                        <p>
                            댓글 내용: <span>{comment.content}</span>
                        </p>
                    </div>
                );
            })}
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
