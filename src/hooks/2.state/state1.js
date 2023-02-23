import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

    console.log(PlayListMock.playlist);
    /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
    const [titleInput, setTitleInput] = useState("");
    const [singerInput, setSingerInput] = useState("");
    // const [addList,setAddList] = useState([]);

    const onChangeTitleInput = (e) => {
        setTitleInput(e.target.value);
    };
    const onChangeSingerInput = (e) => {
        setSingerInput(e.target.value);
    };
    console.log(titleInput);
    console.log(singerInput);

    const onAddList = () => {
        PlayListMock.playlist.push({
            title: titleInput,
            signer: singerInput,
        });
        console.log(PlayListMock.playlist);
    };
    const onDeleteList = () => {};

    return (
        <>
            <h1>문제1</h1>
            <ul>
                {/* list */}
                {/* 예시 데이터입니다 */}
                {/* <li>
                    <h3>Summer</h3>
                    <p>Joe Hisaishi</p>
                </li> */}

                {PlayListMock.playlist.map((item) => {
                    return (
                        <li key={item.signer}>
                            <h3>{item.title}</h3>
                            <p>{item.singer}</p>
                            <button onClick={onDeleteList}>삭제</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <p>
                    곡명 : <input onChange={onChangeTitleInput} />
                </p>
                <p>
                    가수/작곡 : <input onChange={onChangeSingerInput} />
                </p>
                <p>
                    <button onClick={onAddList}>추가</button>
                </p>
            </div>
        </>
    );
}
export default State1;
