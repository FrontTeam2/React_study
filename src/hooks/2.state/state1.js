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

    const a = PlayListMock.playlist.map((item) => {
        const b = {
            ...item,
            id: Math.floor(Math.random() * 100000),
        };
        return b;
    });
    console.log(a);

    const [titleInput, setTitleInput] = useState();
    const [songInput, setSongInput] = useState();
    const [inputList, setInputList] = useState(a);

    console.log(PlayListMock.playlist);

    /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

    const titleListInput = (e) => {
        setTitleInput(e.target.value);
    };
    const songListInput = (e) => {
        setSongInput(e.target.value);
    };

    const onAddList = () => {
        const newMusic = {
            title: titleInput,
            signer: songInput,
            id: Math.floor(Math.random() * 100000),
        };
        setTitleInput("");
        setSongInput("");
        setInputList([...inputList, newMusic]);
        // inputList에 배열객체에 고유한 키값인 id를 부여해주고 싶은데...
        console.log(inputList);
    };
    console.log(inputList);
    console.log(a[8].id);

    const onDeleteList = (arg) => {
        // spread : 배열의 원본, 배열에 추가할 항목(객체)
        // rest : 기준값, 기준값을 제외한 나머지 항목(객체)
        const playList = [...inputList];
        const musicList = playList.filter((item) => item.id !== arg.id);
        setInputList(musicList);
        // 배열에 각 인자가 삭제가 되는데 화면에 뿌려지는 표현이... 이상
        console.log(inputList);
        console.log(musicList);
    };

    return (
        <>
            <h1>문제1</h1>
            <ul>
                {inputList.map((arg, index) => {
                    return (
                        <li key={[arg.title, arg.signer]}>
                            <h3>
                                {index + 1}. {arg.title}
                            </h3>
                            <p>{arg.signer}</p>
                            <button onClick={() => onDeleteList(arg)}>
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
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
                    {/* <button onClick={onAllDeleteList}>삭제</button> */}
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

    /* & > :first-child {
        margin-right: 10px;
    } */
`;

export const S = {
    Button,
};
