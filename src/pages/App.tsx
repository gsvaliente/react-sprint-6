import { AddingBudget } from '../components/AddingBudget';
import { BudgetCard } from '../components/BudgetCard';
import { CardList } from '../components/CardList';
import { Filters } from '../components/Filters';
import { Total } from '../components/Total';
import { YearlyDiscount } from '../components/YearlyDiscount';
import { Divider } from '../components/ui/Divider';
import { Header } from '../components/ui/Header';

function App() {
  return (
    <div className='bg-stone-100'>
      <Header />
      <YearlyDiscount />
      <CardList />
      <Total />
      <Divider />
      <AddingBudget />
      <Filters />
      <BudgetCard />
    </div>
  );
}

export default App;
