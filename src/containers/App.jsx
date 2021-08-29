import React from 'react';

// components
import Header from '../components/Header';
import Apples from '../components/Apples';

// styles
import "../assets/styles/App.scss";

const App = () =>{
    return (
        <React.Fragment>
            <Header/>
            <Apples/>
        </React.Fragment>
    );
}

export default App;