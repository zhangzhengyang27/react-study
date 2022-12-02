import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = ()=>{
        axios.get('/api/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA').then(
            response => {console.log('成功了',response.data);},
            error => {console.log('失败了',error);}
        )
    }

    getCarData = ()=>{
        axios.get('/api/comment/music?id=186016&limit=1').then(
            response => {console.log('成功了',response.data);},
            error => {console.log('失败了',error);}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>搜索歌曲</button>
                <button onClick={this.getCarData}>歌曲评论</button>
            </div>
        )
    }
}
