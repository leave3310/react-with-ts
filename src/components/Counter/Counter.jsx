import React, {useState, useEffect} from 'react'

const Counter = ()=>{
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('第一次')
        console.log(`Counter新值為${count}`)
        return ()=>{
            console.log(`Counter舊值為${count}`)
        }
    },[count])
    return (
        <div>
            <div>目前數字: {count}</div>
            <button type="button" onClick={()=>{setCount(count+1)}}>點我+1</button>
        </div>
    )
}

export default Counter