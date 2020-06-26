import React, { Component, useState } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import Grid from '../../components/Grid/index'
import { Tabs } from 'antd-mobile';
import style from './index.module.less'

const tabs = [
  { title: '全部', key: '0' },
  { title: '潮流服饰', key: '1' },
  { title: '食品酒水', key: '2' },
  { title: '家居用品', key: '3' },
  { title: '出行户外', key: '4' }
];

const TabExample = () => (
  <div>
  <WhiteSpace />
  <Tabs
    tabs={tabs}
    destroyInactiveTab={true}
    initialPage={0}
    tabBarBackgroundColor="rgb(248,248,248)"
    tabBarPosition="left"
    tabDirection="vertical"
  />
  </div>
);
function App() {
  return (
    <div>
      <WhiteSpace size="xs" />
      <SearchBar placeholder="Search" maxLength={8} />
      <div className={style.body}>
        <div className={style.tab}>
          <TabExample />
        </div>
        <div className={style.grid}>
          <Grid/>
        </div>
      </div>
    </div>
  )
}

export default App