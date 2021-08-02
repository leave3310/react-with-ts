import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewsList from './NewsList'
import NewsReader from './NewsReader'
import NewsForm from './NewsForm'

const News = () => {
    
    return (
        <Switch>
        <Route 
            exact
            path="/news"
            component={()=> (
            <div>
                <h1>這裡是最新消息</h1>
                <NewsForm></NewsForm>
                <NewsList ></NewsList>
            </div>
        )}>
        </Route> 
        {
            //使用useParams
        }
        <Route path="/news/newsReader/:id" component={()=><NewsReader />}></Route>
    </Switch>
    )

}
    

export default News