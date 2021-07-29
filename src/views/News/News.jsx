import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NewsList from './NewsList'
import NewsReader from './NewsReader'

const News = () => {
    const [news] = useState([
        { id: 1, name: '第一筆最新消息', describe: '這裡是第一筆哦！' },
        { id: 2, name: '第二筆最新消息', describe: '這裡是第二筆哦！' },
        { id: 3, name: '第三筆最新消息', describe: '這裡是第三筆哦！' },
    ])
    return (
        <Switch>
        <Route 
            exact
            path="/news"
            component={()=> (
            <div>
                <h1>這裡是最新消息</h1>
                <NewsList news={news}></NewsList>
            </div>
        )}>
        </Route>
        {/* <Route path="/news/newsReader/:id" component={(props)=><NewsReader match={props.match} news={news}></NewsReader>}></Route> */}
        {
            //使用useParams
        }
        <Route path="/news/newsReader/:id" component={()=><NewsReader news={news}/>}></Route>
    </Switch>
    )

}
    

export default News