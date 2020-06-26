import React from 'react'
import Routes from './routes/index'
import './App.less'
import { Pagination, Icon } from 'antd-mobile';

function App() {
  const list = [
    { title: '主页', key: 'home' },
    { title: '商品', key: 'goods' },
    { title: '购物车', key: 'cart' },
    { title: '会员', key: 'my' }]
  return (
    <>
      <Routes list={list} />
    </>
  )
}

export default App;