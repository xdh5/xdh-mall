import React, { useState, Component } from 'react'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import TabBar from '../components/TabBar'
import NoMatch from '../template/404'
import Home from '../containers/home/index'
import Goods from '../containers/goods/index'
import Cart from '../containers/cart/index'
import My from '../containers/my/index'

const routers = [
  {
    component: Home,
    name: 'home'
  },
  {
    component: Goods,
    name: 'goods'
  },
  {
    component: Cart,
    name: 'cart'
  },
  {
    component: My,
    name: 'my'
  }
]

function Routes(props: any) {
  // 四个菜单对应的主页
  const router = routers.map((item: any) => {
    return (
      <Route exact path={"/" + item.name} key={item.name}>
        <div style={{marginBottom:'60px'}}>
          {item.component()}
        </div>
        <TabBar navItems={props.list}/>
      </Route>
    )
  })
  return (
    <Router>
      <Switch>
        {router}
        <Redirect exact from="/" to="/home"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
