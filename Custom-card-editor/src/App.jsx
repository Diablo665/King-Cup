import './styles.css'
import SettingPanel from './components/SettingPanel/SettingPanel';
import CardPreview from './components/CardPreview/CardPreview';
import Instruction from './components/Instruction/Instruction';
import EditPanel from './components/EditPanel/EditPanel';
import { useSelector } from 'react-redux';
import React from 'react';

const App = () => {

    const isEditOpen = useSelector((state) => state.cards.isEditingPanelOpen)
    return (
        <div> 
            <main> 
                <Instruction />
                <div id='editConteiner'>
                    {isEditOpen && <EditPanel />}
                    <SettingPanel />
                    <CardPreview />
                </div>
            </main>
        </div>
    )
}

export default App;