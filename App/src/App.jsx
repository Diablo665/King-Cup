import './styles.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CartsPanel from './components/CartsPanel/CartsPanel';
import RightPanel from './components/RightPanel/RightPanel';
import React from 'react';


function App() {

    return (
        <div className="App">
            <Header title='King Cup'/>
            <main> 
                <LeftPanel />
                <CartsPanel/>
                <RightPanel/>
            </main>
        </div>
    );
}

export default App;
