import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NewsList from './NewsList'
import NewsReader from './NewsReader'

const News = () => {
    
    return (
        <Switch>
        <Route 
            exact
            path="/news"
            component={()=> (
            <div>
                <h1>這裡是最新消息</h1>
                <NewsList ></NewsList>
            </div>
        )}>
        </Route>
        {/* <Route path="/news/newsReader/:id" component={(props)=><NewsReader match={props.match} news={news}></NewsReader>}></Route> */}
        {
            //使用useParams
        }
        <Route path="/news/newsReader/:id" component={()=><NewsReader />}></Route>
    </Switch>
    )

}
    

export default News