import React, {Component} from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                {/* 将name传递给C组件*/}
                {/*<A render={(name) => <C name={name}/>}/>*/}
                <A render={() => <C />}/>
            </div>
        )
    }
}

class A extends Component {
    state = {name: 'tom'}

    render() {
        console.log(this.props.render);
        const {name} = this.state
        console.log(name)
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {/*必须添加这个必然C组件不会出来*/}
                {/*{this.props.render(name)}*/}
                {this.props.render()}
            </div>
        )
    }
}
