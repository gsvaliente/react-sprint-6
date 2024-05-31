import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { BudgetCardType } from '../data/data';

export function BudgetCard() {
  const { budgetList } = useContext(AppContext) || {};

  return (
    <div>
      {/* //TODO maybe fix the idx to a uuid or something similar */}
      {budgetList?.map((el: BudgetCardType, idx: number) => {
        const newObj = Object.entries(el.services);
        const filteredObj = newObj.filter((el) => +el[1] > 0);

        return (
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
              {filteredObj.map((service) => (
                <li key={service[0]}>{service[0]}</li>
              ))}
            </div>
            {el.total}
          </div>
        );
      })}
    </div>
  );
}
