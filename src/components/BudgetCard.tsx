import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BudgetCardType } from "../data/data";

export function BudgetCard() {
  const { budgetList } = useContext(AppContext) || {};

  return (
    <div className="mt-10">
      {/* TODO: change the idx for something like uuid or similar */}
      {budgetList?.map((el: BudgetCardType, idx: number) => {
        const newObj = Object.entries(el.services);
        const filteredObj = newObj.filter((el) => +el[1] > 0);
        return (
          <div key={idx}>
            <div className="flex justify-center">
              <div className="card sm:w-full md:w-10/12 bg-base-100 shadow-xl mb-5">
                <div className="card-body flex flex-row justify-between">
                  {/* USER INFO */}
                  <div>
                    <h2 className="card-title uppercase text-2xl">{el.name}</h2>
                    <p className="text-sm">{el.telephone}</p>
                    <p className="text-sm">{el.email}</p>
                  </div>
                  {/* SERVICES */}
                  <div>
                    <div className="">
                      <p>
                        <span>Contracted Services</span>
                      </p>
                      {filteredObj.map((service) => (
                        <li key={service[0]}>{service[0]}</li>
                      ))}
                    </div>
                  </div>
                  {/* TOTAL */}
                  <div>
                    <h1 className="font-extrabold text-xl w-16 md:w-64  md:text-3xl">
                      € {el.total}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
