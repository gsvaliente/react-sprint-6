import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { BudgetCardType } from '../data/data';

export function BudgetCard() {
  const { budgetList } = useContext(AppContext);
  return (
    <div>
      {/* //TODO maybe fix the idx to a uuid or something similar */}
      {budgetList.map((el: BudgetCardType, idx: number) => (
        <div key={idx}>
          <div>
            <h3>{el.name}</h3>
            <p>{el.email}</p>
            <p>{el.telephone}</p>
          </div>
          <div>
            <p>
              <span>Contracted Services</span>
            </p>
            {el.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </div>
          {el.total}
        </div>
      ))}
    </div>
  );
}
