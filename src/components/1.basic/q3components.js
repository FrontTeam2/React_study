import { useEffect, useRef } from 'react';

function Q3components({ setCount }) {
    const CountRef = useRef();
    useEffect(() => {
        CountRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 2000);
        // 컴포넌트가 처음 보였을 때

        // 컴포넌트가 안보였을 때
        return () => {
            clearInterval(CountRef.current);
            setCount(0);
        };
    }, []);
    return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
