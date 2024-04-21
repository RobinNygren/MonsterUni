import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import MyModal from "./components/UI/Modal";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <MyModal />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
