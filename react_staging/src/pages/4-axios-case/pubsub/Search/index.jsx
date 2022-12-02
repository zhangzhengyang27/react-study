import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

	search = ()=>{
		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this
		PubSub.publish('atguigu',{isFirst:false,isLoading:true})
		axios.get(`/api1/search/users?q=${keyWord}`).then(
			response => {
				PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
			},
			error => {
				PubSub.publish('atguigu',{isLoading:false,err:error.message})
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
