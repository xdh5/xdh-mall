import React from 'react';
import { Grid } from 'antd-mobile';
import style from './grid.module.less'

function App() {
    const data1 = Array.from(new Array(9)).map(() => ({
        icon: '',
    }));
    return (
        <>
            <Grid data={data1}
                columnNum={2}
                hasLine={false}
                renderItem={(dataItem:any) => (
                    <div className={style.grid}>
                        <img src={dataItem.icon} className={style.images}/>
                        <div className={style.info}>
                            <p className={style.name}>I am title..</p>
                            <p className={style.price}>￥20</p>
                        </div>
                    </div>
                )}
            />
        </>
    )
}
export default App