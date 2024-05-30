import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardList } from "../components/CardList";
import { AppContext } from "../context/AppContext";
import { AddingBudget } from "../components/AddingBudget";

function App() {
  // console.log(budget);
  const { total } = useContext(AppContext) || { total: 0 };

  return (
    <>
      <header>This will be the header</header>
      <CardList />
      <p>The total will be ${total}</p>

      <Link to={"/"}>Home</Link>
      <AddingBudget />
    </>
  );
}

export default App;
