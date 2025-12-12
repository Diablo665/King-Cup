import './styles.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CartsPanel from './components/CartsPanel/CartsPanel';
import RightPanel from './components/RightPanel/RightPanel';


function App() {

  
/*
  const updateCardList = () => {
    const prevCard = cards[0];
    if(prevCard.cardNumber.toUpperCase() === 'K' || prevCard.cardNumber.toUpperCase() === 'К'){ // Проверка на русскую и английскую К
      setEndCardTookValue(endCardTookValue + 1)
    }
    setPrevCards([...prevCards, prevCard])
    setCards(cards.slice(1))
    setRuleAdd(false)
  }

  }*/


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
