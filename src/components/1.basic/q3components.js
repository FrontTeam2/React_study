import { useEffect, useRef } from "react";

function Q3components({ count, setCount }) {
    const Counter = useRef();
    useEffect(() => {
        Counter.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 2000);

        return () => {
            clearInterval(Counter.current);
            setCount(0);
        };
    }, []);
    console.log(count);
    return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
