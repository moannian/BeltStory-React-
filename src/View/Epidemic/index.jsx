import React, { memo, useEffect, useState } from 'react'


import Nav from '../Nav/index'//导航
import Bar from './Componenet/Bar/Bar'//柱状图
import Disk from './Componenet/Disk'//环装图
import OutBack from './Componenet/OutBack'//饼状图
import OutBackDetails from './Componenet/OutbackDetailks'//详细内容

import '@/assets/less/Epidemic.less'
export default memo(function Epidemic() {

    const [partTwo, setParTwo] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', function () {
            if (window.pageYOffset >= 200) {
                setParTwo(true)
            } else {
                setParTwo(false)
            }
        }
        )

    })

    return (
        <div className='epidemic'>
            <div >
                <Nav />
            </div>
            <div className="part_one">
                <div className="left">
                    <Bar />
                </div>
                <div className="right">
                    <Disk />
                </div>
            </div>
            <div className='part_two' >
                <div className={partTwo ? 'left' : 'hideLeft'} >
                    <OutBack />
                </div>
                <div className={partTwo ? 'right' : 'hideright'}>
                    <OutBackDetails />
                </div>
            </div>
        </div>

    )
})
