import React, { memo, useState } from 'react'

import '../../assets/less/Home.less'

import Catalog from '../toast/catalog'

export default memo(function LQHome() {
    const [show, setShow] = useState(false)

    return (
        <div className='Home'>



            {show ? <Catalog
                className='toast'
                change={() => {
                    setShow(false)
                }} /> : ''}
            <h2 className='catalog'
                onClick={() => {
                    setShow(!show)
                }}
            >目录</h2>
            <div className="logo">
                <div className='one'></div>
                <div className='two'></div>
            </div>
        </div>
    )
})
