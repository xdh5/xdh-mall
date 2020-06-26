import React, { Component, useState } from 'react'
import style from './divider.module.less'

interface innerProps {
    tip: string
}
function Divider(props: innerProps) {
    return (
        <div className={style.divider}>
            {props.tip}
        </div>
    )
}

export default Divider;