import React, { memo, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './Less/index.less'
import { RouterList } from '@/Other/List'
import { changeTitle } from '@/Redux/Actions'
function Nav(props) {
    // 本地存储
    let storage = window.localStorage;


    // 使用redux提取全局数据
    const { Details } = useSelector(state => ({
        Details: state.ChooseTitle
    }), shallowEqual)

    const dispatch = useDispatch()

    // 跳转
    const Junp = (path, index) => {
        return () => {
            props.history.push(path);
            dispatch(changeTitle(index))
            storage.setItem("c", index)

        }
    }
    return (
        <div className='nav'>
            <div className='box-enter'>

                <div className='content'>
                    <ul>
                        {RouterList.map((item, index) => {
                            return (
                                <li key={item.id} onClick={Junp(item.path, index)} className={index === Details ? 'show' : ''}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default withRouter(memo(Nav))