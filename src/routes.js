import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home, Speakers } from './pages'


const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                {/*<Route exact path='/register' component={Register} />*/}
                <Route exact path='/speakers' component={Speakers} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
