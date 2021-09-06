import React, { memo } from 'react'

import Choose from './Components/Choose/index'
import { FastDevelopRouter } from '../../Router/index'
import Nav from '../Nav/index'
import '@/assets/less/FastDevelop.less'
export default memo(function LQFastDevelop() {
    return (
        <div className='FastDevelop'>
            <div className='c'>
                <Nav />
            </div>
            <div className="fast-content">
                <FastDevelopRouter />
            </div>
            <div className="choose">
                <Choose />
            </div>
        </div>
    )
})
