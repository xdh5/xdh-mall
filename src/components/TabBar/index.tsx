import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import style from './tabBar.module.less'

interface prop{
  key: string,
  title: string
}
function Icon(name:string) {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={'#icon-' + name}/>
    </svg>
  )
}
function TabBar(props: any) {
  let tab = sessionStorage.getItem('tab') || props.navItems[0].key
  function handleClick(key: string) {
    props.history.push(`/${key}`)
    sessionStorage.setItem('tab', key)
  }
  const TabBarItem = props.navItems.map((item: prop, index:any) => {
    return (
      <div className={style.tabBarItem} key={index}>
        <div style={{ width: '35px', textAlign: 'center' }} onClick={() => handleClick(item.key)}>
          <svg className="icon" aria-hidden="true">
            {tab === item.key ?
              <use xlinkHref={'#icon-' + item.key + 'Selected'}/> :
              <use xlinkHref={'#icon-' + item.key}/>}
          </svg>
          <p className={`${style.title} ${tab === item.key ? style.selected: null}`} >
            {item.title}
          </p>
         </div>
      </div>
    )
  })
  return (
    <div className={style.tabBar}>
      {TabBarItem}
    </div>
  )
}

export default withRouter(TabBar)
