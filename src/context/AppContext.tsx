import { createContext, useCallback, useEffect, useState } from 'react';
import { BudgetCardType, DATA, DataType, SAMPLE_BUDGETS } from '../data/data';

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
  budgetList: BudgetCardType[];
  handleAddBudgetList(name: string, telephone: string, email: string): void;
  handleNameFilter: () => void;
  handleResetFilters: () => void;
  handleDateFilter: () => void;
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
  const [budget, setBudget] = useState<BudgetType>(INITIAL_BUDGET);
  const [total, setTotal] = useState<number>(0);
  const [budgetList, setBudgetList] =
    useState<BudgetCardType[]>(SAMPLE_BUDGETS);
  const [originalBudgetList, setOriginalBudgetList] =
    useState<BudgetCardType[]>(SAMPLE_BUDGETS);

  const handleBudgetChange = useCallback((title: string, price: number) => {
    setBudget((prevBudget) => ({ ...prevBudget, [title]: price }));
  }, []);

  function handleResetExtras(title: string) {
    title === 'web'
      ? setBudget({ ...budget, [title]: 0, pages: 0, languages: 0 })
      : setBudget({ ...budget, [title]: 0 });
  }

  function handleAddBudgetList(name: string, telephone: string, email: string) {
    const newBudget = {
      name,
      telephone,
      email,
      services: budget,
      total,
      date: Date.now(),
    };
    const newBudgetList = [newBudget, ...budgetList];
    const newOriginalBudgetList = [newBudget, ...originalBudgetList];

    setBudgetList(newBudgetList);
    setOriginalBudgetList(newOriginalBudgetList);

    setTotal(0);
    setBudget(INITIAL_BUDGET);
  }

  function handleNameFilter() {
    const filteredList = [...budgetList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setBudgetList(filteredList);
  }

  function handleDateFilter() {
    const filteredList = [...budgetList].sort((a, b) => a.date - b.date);
    setBudgetList(filteredList);
  }

  function handleResetFilters() {
    setBudgetList([...originalBudgetList]);
  }

  useEffect(() => {
    const values = Object.values(budget).reduce((prev, curr) => prev + curr, 0);
    setTotal(values);
  }, [budget]);

  return (
    <AppContext.Provider
      value={{
        budget,
        budgetList,
        DATA,
        handleAddBudgetList,
        handleBudgetChange,
        handleResetExtras,
        total,
        handleNameFilter,
        handleResetFilters,
        handleDateFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
