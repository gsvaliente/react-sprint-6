import { useEffect, useState } from 'react';
import { CardList } from './components/CardList';
import { DATA } from './data/data';

const INITIAL_BUDGET = {
  seo: 0,
  ads: 0,
  web: 0,
  pages: 0,
  languages: 0,
};

function App() {
  const [budget, setBudget] = useState(INITIAL_BUDGET);
  const [total, setTotal] = useState<number>(0);
  // console.log(budget);

  function handleBudgetChange(title: string, price: number) {
    setBudget({ ...budget, [title]: price });
  }

  function handleResetExtras(title: string) {
    title === 'web'
      ? setBudget({ ...budget, [title]: 0, pages: 0, languages: 0 })
      : setBudget({ ...budget, [title]: 0 });
  }

  useEffect(() => {
    const values = Object.values(budget).reduce((prev, curr) => prev + curr, 0);
    setTotal(values);
  }, [budget]);

  return (
    <>
      <header>This will be the header</header>
      <CardList
        data={DATA}
        onBudgetChange={handleBudgetChange}
        onResetExtras={handleResetExtras}
      />
      <p>The total will be ${total}</p>
    </>
  );
}

export default App;
