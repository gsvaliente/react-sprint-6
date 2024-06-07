import {
  AddingBudget,
  BudgetCard,
  CardList,
  Filters,
  Total,
  YearlyDiscount,
} from '../components';
import { Header, Divider } from '../components/ui';

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
