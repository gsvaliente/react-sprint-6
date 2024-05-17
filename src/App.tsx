import { useContext } from 'react';
import { CardList } from './components/CardList';
import { AppContext } from './context/AppContext';

function App() {
  // console.log(budget);
  const { total } = useContext(AppContext) || { total: 0 };

  return (
    <>
      <header>This will be the header</header>
      <CardList />
      <p>The total will be ${total}</p>
    </>
  );
}

export default App;
