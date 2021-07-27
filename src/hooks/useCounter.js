import { useState, useEffect } from "react";

const useCounter = (initialCounter, callbackFunction) => {
    const [count, setCount] = useState(initialCounter)

    useEffect(callbackFunction, [count])

    const add = (addend) => {
        setCount(count + addend)
    }

    return { count, add }
}

export default useCounter