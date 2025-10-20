import './styles.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CartsPanel from './components/CartsPanel/CartsPanel';
import RightPanel from './components/RightPanel/RightPanel';
import { useState } from 'react';
import { handleFileChange } from './utils/helper';
import shuffleDeck from './utils/helper';
import cardList from './cards.json';
import { getInfoFromLocalSession } from './utils/helper';

function App() {
  const [isCustomCardAdd, setCustomCardAdd] = useState('notAdded')

  const usedCards = getInfoFromLocalSession('selectedFile').length > 0 ?  () => {getInfoFromLocalSession('selectedFile'); setCustomCardAdd('added')} : cardList;

  const [cards, setCards] = useState(shuffleDeck(usedCards));
  const [rules, setRules] = useState([]);
  const [isStartGame, setStartGame] = useState(false);
  const [isRuleAdd, setRuleAdd] = useState(false);
  



  const updateCardList = () => {
    setCards(cards.slice(1))
    setRuleAdd(false)
  }

  const resetGame = () => {
    setCards(shuffleDeck(usedCards));
    setRules([])
    setRuleAdd(false)
  }

  const stopGame = () => {
    setStartGame(false);
    setCards(shuffleDeck(usedCards));
    setRules([])
    setRuleAdd(false)
    setCustomCardAdd('notAdded')
  }

  const startGame = () =>  {
    setStartGame(true);
    setRules([])
    setRuleAdd(false)
  }

  const customGame = (target) => {
    handleFileChange(target)
    .then(
      (customCard) => {
        setCustomCardAdd('added');
        setCards(shuffleDeck(customCard));
      },
      () => setCustomCardAdd('error')
    )
    
  }

  const addRules = (newRules) => {
    setRules([...rules, newRules]);
    setRuleAdd(true)
  }

  return (
    <div className="App">
      <Header title='King Cup'/>
      <main> 
        <LeftPanel start={isStartGame} onStart={startGame} onStop={stopGame} onAddCustomCard={customGame} isCustomCardAdd={isCustomCardAdd} setCustomCardAdded={setCustomCardAdd}/>
        <CartsPanel startGame={isStartGame} cards={cards} onCardTook={updateCardList} onRestart={resetGame} onAddRules={addRules} isRuleAdd={isRuleAdd}/>
        <RightPanel rules={rules}/>
      </main>
    </div>
  );
}

export default App;
