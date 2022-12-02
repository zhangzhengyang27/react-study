import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)

/*
1.底层原理不一样：
    BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
    HashRouter使用的是URL的哈希值。
2.path表现形式不一样
	BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
	HashRouter的路径包含#,例如：localhost:3000/#/demo/test
3.刷新后对路由state参数的影响
	(1).BrowserRouter没有任何影响，因为state保存在history对象中。
    (2).HashRouter刷新后会导致路由state参数的丢失！！！
4.备注：HashRouter可以用于解决一些路径错误相关的问题。
*/
