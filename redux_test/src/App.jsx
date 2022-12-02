import React, {Component} from 'react'
// import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom'
import {NavLink, Route, Switch} from 'react-router-dom'

import reactCount from './pages/1-react/index'
import reactRedux from './pages/2-redux/index'


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>redux 案例</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/reactcount">未使用 redux</NavLink>
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/reactredux">使用 redux</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/reactcount" component={reactCount}/>
                                    <Route path="/reactredux" component={reactRedux}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
