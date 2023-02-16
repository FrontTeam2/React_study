import styled from "styled-components";

function Comment() {
  return (
    <S.CommentItem>
      <p>
        작성자: <span>예시 이름</span>
      </p>
      <p>
        댓글 내용: <span>예시 내용</span>
      </p>
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
