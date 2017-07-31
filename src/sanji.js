import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
const Sanji =({match})=>(<div>
			<Link to={`${match.url}/for`}>三级</Link>
		</div>
)
export default Sanji;