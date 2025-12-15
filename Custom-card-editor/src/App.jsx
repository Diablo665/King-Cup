import './styles.css'
import SettingPanel from './components/SettingPanel/SettingPanel';
import CardPreview from './components/CardPreview/CardPreview';
import Instruction from './components/Instruction/Instruction';

const App = () => {
    return (
        <div> 
            <main> 
                <Instruction />
                <div id='editConteiner'>
                    <SettingPanel />
                    <CardPreview />
                </div>
            </main>
        </div>
    )
}

export default App;