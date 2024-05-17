import { createContext, useCallback, useEffect, useState } from 'react';
import { DATA, DataType } from '../data/data';

interface BudgetType {
  seo: number;
  ads: number;
  web: number;
  pages: number;
  languages: number;
}

interface AppContextType {
  budget: BudgetType;
  total: number;
  handleBudgetChange: (title: string, price: number) => void;
  handleResetExtras: (title: string) => void;
  DATA: DataType[];
}

const INITIAL_BUDGET = {
  seo: 0,
  ads: 0,
  web: 0,
  pages: 0,
  languages: 0,
};

interface AppProviderType {
  children: JSX.Element | JSX.Element[];
}

export const AppContext = createContext<undefined | AppContextType>(undefined);

export const AppProvider = ({ children }: AppProviderType) => {
  const [budget, setBudget] = useState(INITIAL_BUDGET);
  const [total, setTotal] = useState<number>(0);

  const handleBudgetChange = useCallback((title: string, price: number) => {
    setBudget((prevBudget) => ({ ...prevBudget, [title]: price }));
  }, []);

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
    <AppContext.Provider
      value={{ budget, total, handleBudgetChange, handleResetExtras, DATA }}
    >
      {children}
    </AppContext.Provider>
  );
};
