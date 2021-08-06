import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
const Menu = () => (
    <ul>
        <li>
            <Link to="/home">首頁</Link>
        </li>
        <li>
            <Link to="/about">關於我們</Link>
        </li>
        <li>
            <Link to="/news">最新消息</Link>
        </li>
    </ul>
)

// const Menu = () => {
//     const history = useHistory()
//     const changeRouter = (router) => {
//         history.push(router)
//     }
//     return (
//         <ul>
//             <li onClick={() => changeRouter('/home')}>首頁</li>
//             <button onClick={() => changeRouter('/about')}>關於我們</button>
//             <a onClick={() => changeRouter('/news')}>最新消息</a>
//         </ul>
//     )
    
// }
export default Menu