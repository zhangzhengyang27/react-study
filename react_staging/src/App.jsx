import React, {Component} from 'react'
import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom'
import Hello from './pages/1-hello-react/hello'
import TodoList from './pages/2-TodoList/index'
import AxiosRequest from './pages/3-axios/index'
import axiosPubsub from './pages/4-axios-case/pubsub/index'
import MyNavLink from './components/MyNavLink'

// 引入嵌套路由
import Home from './pages/5-wrap-route/Home/index' //Home是路由组件
import params from './pages/6-route-params/index'
import search from './pages/7-route-search/index'
import state from './pages/8-route-state/index'
import codeRoute from './pages/9-编程式导航/index'
import antd from './pages/10-antd/index'


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>react 案例</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/hello">hello
                                react</NavLink>
                            <MyNavLink to="/todo">TodoList 案例</MyNavLink>
                            <MyNavLink to="/todo/1212">TodoList 案例</MyNavLink>
                            <Link className="list-group-item" to="/axios/axios-request">跨域请求 案例</Link>
                            <Link className="list-group-item" to="/axios/axios-pubsub">axios 案例 pubsub</Link>
                            <MyNavLink to="/home"> 嵌套路由 home </MyNavLink>
                            <MyNavLink to="/params"> 路由 params 传参 </MyNavLink>
                            <MyNavLink to="/search"> 路由 search 传参 </MyNavLink>
                            <MyNavLink to="/state"> 路由 state 传参 </MyNavLink>
                            <MyNavLink to="/coderoute"> 编程式导航 </MyNavLink>
                            <MyNavLink to="/antd"> antd 组件库 </MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*1.通常情况下，path和component是一一对应的关系。*/}
                                {/*2.Switch可以提高路由匹配效率(单一匹配)。*/}
                                {/* exact 开启严格模式 */}
                                <Switch>
                                    <Route path="/hello" component={Hello}/>
                                    <Route path="/todo" component={TodoList}/>
                                    <Route path="/axios/axios-request" component={AxiosRequest}/>
                                    <Route path="/axios/axios-pubsub" component={axiosPubsub}/>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/params" component={params}/>
                                    <Route path="/search" component={search}/>
                                    <Route path="/state" component={state}/>
                                    <Route path="/coderoute" component={codeRoute}/>
                                    <Route path="/antd" component={antd}/>
                                    {/*<Redirect to="/todo"/>*/}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
