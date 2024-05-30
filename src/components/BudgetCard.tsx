import { SAMPLE_BUDGETS } from '../data/data';

export function BudgetCard() {
  return (
    <div>
      {SAMPLE_BUDGETS.map((el) => (
        <div>
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
              <li>{service}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
