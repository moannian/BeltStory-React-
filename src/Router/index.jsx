import React, { memo } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// Maijor
import LQHome from '../View/Home'
import LQMajorSource from '../View/Source'
import LQFastDevelop from '../View/FastDevelop'
import LQEpidemic from '../View/Epidemic'
import LQCountry from '../View/Country'

// SourceRouter
import SilkRoads from '../View/Source/source'
import BeltRoad from '../View/Source/BeltRoade'

// FastDevelopRouter 
import ChinaMap from '../View/FastDevelop/Components/Map/Map'
import YearlyReport from '../View/FastDevelop/Components/YearlyReport'

// EpidemicRouter

export const MajorRouter = memo(function Routers() {
    return (
        <div>
            <Switch >
                <Route path='/home' component={LQHome}></Route>
                <Route path='/majorsource' component={LQMajorSource}></Route>
                <Route path='/LQCountry' component={LQCountry}></Route>
                <Route path='/LQFastDevelop' component={LQFastDevelop}></Route>

                <Route path='/LQEpidemic' component={LQEpidemic} />
                <Redirect to='/home'></Redirect>
            </Switch>
        </div>
    )
})
export const SourceRouter = memo(() => {
    return (
        <div>
            <Switch>
                <Route path='/majorsource/silkroads' component={SilkRoads} />
                <Route path='/majorsource/beltroad' component={BeltRoad} />
                <Redirect to='/majorsource/silkroads' />
            </Switch>
        </div>
    )
}
)
export const FastDevelopRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/LQFastDevelop/ChinaMap' component={ChinaMap} />
                <Route exact path='/LQFastDevelop/YearlyReport' component={YearlyReport} />
                <Redirect to='/LQFastDevelop/ChinaMap' />
            </Switch>
        </div>
    )
}

