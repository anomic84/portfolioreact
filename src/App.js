import React from 'react'

import { Navbar, Header, Projects, Tech, Footer } from './containers';
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Projects />
            <div className="techfooter">
            <Tech />
            <Footer />
            </div>
        </div>
    )
}

export default App