import React, {useState} from 'react'
import './index.css'
const Counter = ()=>{
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <div className='count'>目前數字: {count}</div>
            <button type="button" onClick={()=>{setCount(count+1)}}>點我+1</button>
        </div>
    )
}

export default Counter