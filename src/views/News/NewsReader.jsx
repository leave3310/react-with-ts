import React from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
// const NewsReader = ({match, news}) =>{
//     console.log(match)
//     const targetNewsId = match.params.id
//     const targetNews = news.find((theNews)=>(
//         String(theNews.id) === String(targetNewsId)
//     ))
//     return (
//         <div>
//             <h1>您正在閱讀 { targetNews.name }</h1>
//             <p>{ targetNews.describe }</p>
//         </div>
//     )
// }

const NewsReader = ({ news}) =>{
    const { id: targetNewsId } = useParams()
    const targetNews = news.find((theNews)=>(
        String(theNews.id) === String(targetNewsId)
    ))
    return (
        <div>
            <h1>您正在閱讀 { targetNews.name }</h1>
            <p>{ targetNews.describe }</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    news: state.news.news,
    user: state.user.name
})
export default connect(mapStateToProps)(NewsReader)