import './styles.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CartsPanel from './components/CartsPanel/CartsPanel';
import RightPanel from './components/RightPanel/RightPanel';
import { useState } from 'react';
import cardList from './cards.json';
import shuffleDeck from './utils/helper';


function App() {

  const [cards, setCards] = useState(shuffleDeck(cardList));
  const [rules, setRules] = useState([]);
  const [isStartGame, setStartGame] = useState(false);
  const [isRuleAdd, setRuleAdd] = useState(false);

  const updateCardList = () => {
    setCards(cards.slice(1))
    setRuleAdd(false)
  }

  const resetGame = () => {
    setCards(shuffleDeck(cardList));
    setRules([])
    setRuleAdd(false)
  }

  const stopGame = () => {
    setStartGame(false);
    setCards(shuffleDeck(cardList));
    setRules([])
    setRuleAdd(false)
  }

  const startGame = () =>  {
    setCards(shuffleDeck(cardList));
    setStartGame(true);
    setRules([])
    setRuleAdd(false)
  }

  const addRules = (newRules) => {
    setRules([...rules, newRules]);
    setRuleAdd(true)
  }

  return (
    <div className="App">
      <Header title='King Cup'/>
      <main> 
        <LeftPanel start={isStartGame} onStart={startGame} onStop={stopGame}/>
        <CartsPanel startGame={isStartGame} cards={cards} onCardTook={updateCardList} onRestart={resetGame} onAddRules={addRules} isRuleAdd={isRuleAdd}/>
        <RightPanel rules={rules}/>
      </main>
    </div>
  );
}

export default App;
