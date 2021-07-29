import React from 'react'
import { Link } from 'react-router-dom'

const NewsList = ({news}) => {
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