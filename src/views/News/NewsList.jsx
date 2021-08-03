import React from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

import { deleteNews } from '../../actions/news'

const NewsList = (props) => {
    return (
        <ul>
            {
                useSelector((state) => state.news.news).map(theNews => (

                    <li key={theNews.id}>
                        <Link to={`/news/newsReader/${theNews.id}`}>
                            {theNews.name}
                        </Link>
                        <button type="button" onClick={()=>props.deleteNews(theNews.id)}>
                            刪除
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>({
    deleteNews: (id) =>{
        dispatch(deleteNews(id))
    }
})
export default connect(null, mapDispatchToProps)(NewsList)