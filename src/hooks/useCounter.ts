import { useState, useEffect } from "react";

const useCounter = (initialCounter: number, callbackFunction: React.EffectCallback) => {
    const [count, setCount] = useState<number>(initialCounter)

    useEffect(callbackFunction, [count])

    const add = (addend: number) => {
        setCount(count + addend)
    }

    return { count, add } as const
}

export default useCounter