import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addNews } from '../../actions/news'

const mapDispatchToProps = (dispatch) =>({
    addNews: (news) => {
        dispatch(addNews(news))
    }
})

const NewsForm = (props) => {
    const [newsForm, setNewsForm] = useState({
        name: '',
        describe: ''
    })
    return (
        <div>
        名稱: <input type="text" value={newsForm.name} onChange={(e)=>{setNewsForm({
            ...newsForm,
            name: e.target.value
            })}}/>
        敘述: <input type="text" value={newsForm.describe} onChange={(e)=>{ setNewsForm({
            ...newsForm,
            describe: e.target.value
        })

        }}/>
        <button onClick={()=>{
            props.addNews({id:Math.random, name: newsForm.name, describe: newsForm.describe})
        }}>新增最新消息</button>
    </div>
    )
}
    


export default connect(null, mapDispatchToProps)(NewsForm)