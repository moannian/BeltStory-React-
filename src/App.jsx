import React, { memo } from 'react';
import { Provider } from 'react-redux'

import './assets/css/Base.css'


import Store from './Redux/index'
import { MajorRouter } from './Router'

export default memo(function App() {
    return (
        <div>
            <Provider store={Store}>
                <div id='main' className='box'>
                    <MajorRouter />
                </div>
            </Provider>
        </div>
    )
})
