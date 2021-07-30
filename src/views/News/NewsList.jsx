import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => ({
    news: state.news
})

export default connect(mapStateToProps)(NewsList)