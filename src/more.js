import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Sanji from './sanji'
const More =({match})=>(
	<ul>
		<li><Link to={`${match.url}/first`}>第一条</Link></li>
		<li><Link to={`${match.url}/two`}>第二条</Link></li>
		<li><Link to={`${match.url}/three`}>第三条</Link></li>
		<li><Link to={`${match.url}/four`}>第四条</Link></li>
		<li><Link to={`${match.url}/six`}>第五条</Link></li>
		<Route path={`${match.url}/two`} component={Sanji}/>
	</ul>
)
export default More