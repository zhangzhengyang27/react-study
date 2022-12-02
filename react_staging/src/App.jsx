import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Hello from './pages/1-hello-react/hello'

// import { Button,DatePicker } from 'antd';
// import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
// const { RangePicker } = DatePicker;


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
                            <Link className="list-group-item" to="/hello">About</Link>

                            {/*<Link className="list-group-item" to="/home">Home</Link>*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/*<Route path="/about" component={About}/>*/}
                                <Route path="/hello" component={Hello}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// export default class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				App....
// 				<button>点我</button>
// 				<Button type="primary">按钮1</Button>
// 				<Button >按钮2</Button>
// 				<Button type="link">按钮3</Button>
// 				<Button type="primary" icon={<SearchOutlined />}>
// 					Search
// 				</Button>
// 				<WechatOutlined />
// 				<WeiboOutlined />
// 				<DatePicker/>
// 				<RangePicker/>
// 			</div>
// 		)
// 	}
// }


