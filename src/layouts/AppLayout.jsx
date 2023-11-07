import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";

const AppLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <nav>
        <Header></Header>
      </nav>
      <main className="min-h-[calc(100vh-142px)]">
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default AppLayout;
