import { useRef, useState } from 'react';
import PlayListMock from '../../__mock__/playList.json';
import List from './Music/List';

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

    console.log(PlayListMock.playlist);
    const titleRef = useRef(null);
    const signerRef = useRef(null);

    const { playlist } = PlayListMock;
    const [playList, setPlayList] = useState(playlist);
    console.log(playList);
    const onAddList = () => {
        const newMusic = {
            title: titleRef.current.value,
            signer: signerRef.current.value,
        };

        setPlayList([...playList, newMusic]);

        titleRef.current.value = '';
        signerRef.current.value = '';
    };
    const onDeleteMusic = (list) => {
        const newList = playList.filter(
            (pl) => pl.title !== list.title && pl.signer !== list.signer
        );
        setPlayList(newList);
        //기존에 js방식인 event객체로 불러온 것을 리액트방식으로 변경
    };
    console.log(playList);

    const musicList = playList.map((list, index) => {
        return (
            <li>
                <h3>
                    {index + 1}.{list.title}
                </h3>
                <p>{list.signer}</p>
                <button onClick={() => onDeleteMusic(list)}>삭제</button>
            </li>
        );
    });

    return (
        <>
            <h1>문제1</h1>
            {/* {playList.map((list) => {
                return <List list={list} onDeleteMusic={onDeleteMusic} />;
            })} */}
            <ul>{musicList}</ul>
            <div>
                <p>
                    곡명 : <input ref={titleRef} />
                </p>
                <p>
                    가수/작곡 : <input ref={signerRef} />
                </p>
                <p>
                    <button onClick={onAddList}>추가</button>
                </p>
            </div>
        </>
    );
}
export default State1;
