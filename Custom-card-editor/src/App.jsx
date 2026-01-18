import './styles.css';
import SettingPanel from './components/SettingPanel/SettingPanel';
import CardPreview from './components/CardPreview/CardPreview';
import Instruction from './components/Instruction/Instruction';
import EditPanel from './components/EditPanel/EditPanel';
import AlertPanel from './components/AlertPanel/AlertPanel';
import { useSelector } from 'react-redux';
import React from 'react';

const App = () => {

    const {isEditingPanelOpen, isAlertMessage} = useSelector((state) => state.cards);
    return (
        <div> 
            <main> 
                <Instruction />
                <div id='editConteiner'>
                    {isEditingPanelOpen && <EditPanel />}
                    {isAlertMessage && <AlertPanel />}
                    <SettingPanel />
                    <CardPreview />
                </div>
            </main>
        </div>
    );
};

export default App;