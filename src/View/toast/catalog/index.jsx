import React, { memo } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './less/index.less'
import { RouterList } from '@/Other/List'
import { changeTitle } from '@/Redux/Actions'
function Catalog(props) {
    // 本地存储
    let storage = window.localStorage;
    const dispatch = useDispatch()
    const btn = () => {
        props.change()
    }
    // 点击跳转路由
    const Junp = (path, index) => {
        return () => {
            props.history.push(path);
            dispatch(changeTitle(index))
            storage.setItem("c", index)
        }
    }
    return (
        <div className='catalogs'>
            <div className='cancel' onClick={btn}></div>
            <ul>
                {RouterList.map((item, index) => {
                    return (
                        <li key={item.id} onClick={Junp(item.path, index)}>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default withRouter(memo(Catalog))