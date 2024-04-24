import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MyModal from "../components/UI/Modal";

export const HomePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <MyModal />
        </main>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
