import React, { memo, useState } from 'react'
import { withRouter } from 'react-router-dom'

import './less/index.less'
function Choose(props) {
    const List = [
        {
            id: 1,
            path: '/LQFastDevelop/ChinaMap'
        },
        {
            id: 2,
            path: '/LQFastDevelop/YearlyReport'
        },

    ]
    const [current, setCurrent] = useState(0)
    const btn = (index, path) => {
        return () => {
            setCurrent(index)
            props.history.push(path)
        }
    }
    return (
        <div className='Fastchoose'>
            <i></i>
            <div>
                {
                    List.map((item, index) => {
                        return (
                            <div key={item.id}
                                className={current === index ? 'active' : ''}
                                onClick={btn(index, item.path)}
                            ></div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default withRouter(memo(Choose))