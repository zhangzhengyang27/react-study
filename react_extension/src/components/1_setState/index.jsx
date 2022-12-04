import React, {Component} from 'react'

export default class Demo extends Component {

    state = {count: 0, count1: 0, count2: 0}

    add = () => {
        //对象式的setState
        //1.获取原来的count值
        const {count, count1} = this.state
        //2.更新状态
        this.setState({count: count + 1})
        console.log('count', this.state.count); //0

        // 或者添加回调函数
        this.setState({count1: count1 + 1}, () => {
            console.log('count1', this.state.count1)  // 1
        })
        console.log('count1', this.state.count1); //0

        //函数式的setState
        this.setState(state => ({count2: state.count2 + 1}))
        console.log('count2', this.state.count2); //0
    }

    render() {
        return (
            <div>
                <h1>当前求和为count：{this.state.count}</h1>
                <h1>当前求和为count1：{this.state.count1}</h1>
                <h1>当前求和为count2：{this.state.count2}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
