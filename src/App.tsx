import "./App.css";
import Header from "./components/Layout/Header";
import MyModal from "./components/UI/Modal";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <MyModal />
    </>
  );
}

export default App;
