import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewsList = () => {
    const [news] = useState([
        { id: 1, name: '第一筆最新消息', describe: '這裡是第一筆哦！' },
        { id: 2, name: '第二筆最新消息', describe: '這裡是第二筆哦！' },
        { id: 3, name: '第三筆最新消息', describe: '這裡是第三筆哦！' },
    ])

    return (
        <ul>
            {
                news.map(theNews => (
                    <li key={theNews.id}>
                        <Link to={`/news/newsReader/${theNews.id}`}>
                            {theNews.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default NewsList