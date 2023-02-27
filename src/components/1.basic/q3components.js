import { useEffect, useRef } from "react";

function Q3components({ setCount }) {
    const controlCount = useRef(null);
    console.log(controlCount);

    useEffect((prev) => {
        controlCount.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 2000);

        return () => {
            clearInterval(controlCount.current);
            setCount(0);
        };
    }, []);

    return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
