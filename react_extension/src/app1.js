import React, { Component,Suspense} from 'react'
import {NavLink,Route} from 'react-router-dom'
import setState from './components/1_setState/index'
import Loading from './components/2_lazyLoad/Loading'
import lazyLoad from './components/2_lazyLoad/index'
import hooks from './components/3_hooks/index'
import Fragment from './components/4_Fragment/index'
import content from './components/5_Context/index'
import optimize from './components/6_optimize/index'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            <NavLink className="list-group-item" to="/setState">setState</NavLink>
                            <NavLink className="list-group-item" to="/lazyload">lazyLoad</NavLink>
                            <NavLink className="list-group-item" to="/hooks">hooks</NavLink>
                            <NavLink className="list-group-item" to="/fragment">fragment</NavLink>
                            <NavLink className="list-group-item" to="/content">content</NavLink>
                            <NavLink className="list-group-item" to="/optimize">optimize</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading/>}>
                                    {/* 注册路由 */}
                                    <Route path="/setState" component={setState}/>
                                    <Route path="/lazyLoad" component={lazyLoad}/>
                                    <Route path="/hooks" component={hooks}/>
                                    <Route path="/fragment" component={Fragment}/>
                                    <Route path="/content" component={content}/>
                                    <Route path="/optimize" component={optimize}/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
