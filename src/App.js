import React from 'react';
import { Router } from 'react-router-dom';


// Our modules
import Routes from './routes';
import history from './services/history';

import './styles/screen-utils.scss';
import GlobalStyle from './styles/global';

const App = props => (
        <Router history={history}>
            <Routes>
              
            </Routes>
            <GlobalStyle />
        </Router>
);

export default App;
