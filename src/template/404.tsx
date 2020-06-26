import React, { useEffect } from 'react'
import style from './index.module.less'
import {withRouter} from "react-router-dom"

function NoMatch(this: any, props: any) {
    function redirect() {
        props.history.push('./')
    }
    useEffect(() => {
        let timer = setInterval(() => redirect(), 3000)
        return function cleanup() {
            clearInterval(timer)
        }
    })
    
    return (
        <div className={style.noMatch}>
            <p className={style.errorCode}>404</p>
            <p className={style.errorMsg}>页面不存在</p>
            <a className={style.redirect} onClick={redirect}>三秒后将自动跳转首页，如未跳转请手动点击。</a>
        </div>
    )
}

export default  withRouter(NoMatch)