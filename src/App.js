import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {routes} from "./routes";
import {Header} from "./components";

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'sweetalert2/src/sweetalert2.scss'
import {CreatePage, ListPage} from "./pages";

function App() {
    return (
        <div data-testid="app" className="app">
            <Router>
                <Header/>
                <div>
                    <Route path="/" render={(props) => <ListPage {...props} />}/>
                    <Route path="/create" element={(props) => <CreatePage {...props} />}/>
                    <Route path="*" element={routes[0].element}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
