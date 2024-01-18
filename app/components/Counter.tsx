// "use client" need to specify for rendering component on client
"use client"
import { useState } from "react"

const Counter = ()=>{
    const [count, setCount] = useState(0)
    return <button onClick={()=>setCount(count+1)}>Counter {count}</button>
}

export default Counter;