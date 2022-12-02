import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Hello from './pages/1-hello-react/hello'
import TodoList from './pages/2-TodoList/index'



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
                            <Link className="list-group-item" to="/hello">hello react</Link>
                            <Link className="list-group-item" to="/todo">TodoList 案例</Link>

                            {/*<Link className="list-group-item" to="/home">Home</Link>*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}

                                <Route path="/hello" component={Hello}/>
                                <Route path="/todo" component={TodoList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
