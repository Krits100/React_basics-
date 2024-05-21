import "./App.css";
import Header from "./My_Components/Header";
import Todos from "./My_Components/Todos";
import Footer from "./My_Components/Footer";
function App() {
  let todo_array = [
    {
      serial_no: 1,
      title: "Go to the market",
      description: "You need to go to the market to get this job done.",
    },

    {
      serial_no: 2,
      title: "Go to the school",
      description: "You need to go to the school.",
    },

    {
      serial_no: 3,
      title: "Go to the mall",
      description: "You need to go to the mall to get the laptop.",
    },
  ];
  return (
    <>
      <Header title="My Todo lists" searchbar={true} />
      <Todos data={todo_array} />
      <Footer />
    </>
  );
}

export default App;
