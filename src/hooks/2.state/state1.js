import PlayListMock from "../../__mock__/playList.json";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
    const [titleInput, setTitleInput] = useState();
    const [songInput, setSongInput] = useState();
    const [inputList, setInputList] = useState([]);
    const [isDelete, isSetDelete] = useState(false);

    console.log(PlayListMock.playlist);

    /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

    const titleListInput = (e) => {
        setTitleInput(e.target.value);
    };
    const songListInput = (e) => {
        setSongInput(e.target.value);
    };

    console.log(PlayListMock.playlist);

    const onAddList = () => {
        PlayListMock.playlist.push({
            title: titleInput,
            signer: songInput,
        });
        setTitleInput("");
        setSongInput("");
        setInputList(PlayListMock.playlist);
        // inputList에 배열객체에 고유한 키값인 id를 부여해줘야한다.
    };

    const onDeleteList = (index) => {
        inputList.splice(index, 1);
        console.log(inputList);
    };

    const onAllDeleteList = () => {
        PlayListMock.playlist = [];
        setInputList([]);
    };

    const input_list = inputList.map((prev, index) => {
        return (
            <li key={(prev.title, prev.signer)}>
                <h3>{prev.title}</h3>
                <p>{prev.signer}</p>
                <button onClick={() => onDeleteList(index)}>삭제</button>
            </li>
        );
    });

    return (
        <>
            <h1>문제1</h1>
            <ul>{input_list}</ul>
            <div>
                <p>
                    곡명 :
                    <input value={titleInput} onChange={titleListInput} />
                </p>
                <p>
                    가수/작곡 :
                    <input value={songInput} onChange={songListInput} />
                </p>
                <S.Button>
                    <button onClick={onAddList}>추가</button>
                    <button onClick={onAllDeleteList}>삭제</button>
                </S.Button>
            </div>
        </>
    );
}
export default State1;

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > :first-child {
        margin-right: 10px;
    }
`;

export const S = {
    Button,
};
