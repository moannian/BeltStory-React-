import React, { memo } from 'react'
import { withRouter } from 'react-router-dom'

import { SourceRouter } from '@/Router/index'

import '../../assets/less/MajorSource.less'
import Nav from '../Nav'
function MajorSource(props) {
    const btn = (path) => {
        return () => {
            props.history.push(path)
        }
    }
    return (
        <div className='MajorSource'>
            <div className='source-nav'>
                <Nav />
            </div>
            <div className='source_content'>
                < SourceRouter />
            </div>
            <div className='router-btn'>
                <button onClick={btn('/majorsource/silkroads')}>雏形及发展</button>
                <button onClick={btn('/majorsource/beltroad')}>大事记</button>
            </div>
        </div>
    )
}
export default withRouter(memo(MajorSource))

