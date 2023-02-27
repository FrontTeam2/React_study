import { useEffect, useRef, useState } from "react";
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
    const [addList, setAddList] = useState([...PlayListMock.playlist]);
    const [finalList, setFinalList] = useState([]);

    useEffect(() => {
        setFinalList([...addList]);
    }, []);

    const onChangeTitleInput = (e) => {
        setTitleInput(e.target.value);
    };
    const onChangeSingerInput = (e) => {
        setSingerInput(e.target.value);
    };

    const onAddList = () => {
        // 중복 플레이리스트가 존재하면 alert로 막기
        for (let i = 0; i < addList.length; i++) {
            if (
                addList[i].title === titleInput &&
                addList[i].signer === singerInput
            ) {
                alert("중복된 리스트가 존재합니다.");
                setTitleInput("");
                setSingerInput("");
                return;
            }
        }
        if (titleInput === "" && singerInput === "") {
            alert("가수와 곡명을 적어주세요");
        } else if (titleInput === "") {
            alert("곡명을 적어주세요");
        } else if (singerInput === "") {
            alert("가수를 적어주세요");
        } else {
            addList.push({
                title: titleInput,
                signer: singerInput,
            });
        }
        setFinalList([...addList]);
        setTitleInput("");
        setSingerInput("");
    };

    const onDeleteList = (index) => {
        // console.log(e.target.parentElement);
        console.log(index);
        console.log(addList.splice(index, 1));
        console.log(addList);
        setFinalList([...addList]);
    };
    console.log(finalList);

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

                {finalList.map((item, index) => {
                    return (
                        <li key={[item.title, item.signer]}>
                            <h3>{item.title}</h3>
                            <p>{item.signer}</p>
                            <button onClick={() => onDeleteList(index)}>
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <p>
                    곡명 :{" "}
                    <input onChange={onChangeTitleInput} value={titleInput} />
                </p>
                <p>
                    가수/작곡 :{" "}
                    <input onChange={onChangeSingerInput} value={singerInput} />
                </p>
                <p>
                    <button onClick={onAddList}>추가</button>
                </p>
            </div>
        </>
    );
}
export default State1;
