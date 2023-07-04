import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideNavigationBar from "./components/SideNavigationBar";
import Quickstart from "./pages/GettingStarted/Quickstart";
import Home from "./pages/GettingStarted/Home";
import Reacts from "./pages/Integration Guides/Reacts";
import Nexts from "./pages/Integration Guides/Nexts";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import DropDown from "./pages/Component/DropDown";
import Footer from "./pages/Component/Footer";
import MegaMenu from "./pages/Component/MegaMenu";
import Modal from "./pages/Component/Modal";
import NavBar from "./pages/Component/NavBar";
import Pagination from "./pages/Component/Pagination";
import SideBar from "./pages/Component/SideBar";
import Spinner from "./pages/Component/Spinner";
import Stepper from "./pages/Component/Stepper";
import Table from "./pages/Component/Table";
import Tab from "./pages/Component/Tab";
import TimeLine from "./pages/Component/TimeLine";
import AccordianPage from "./pages/Component/AccordianPage";
import BannerPage from "./pages/Component/BannerPage";
import BottomNavPage from "./pages/Component/BottomNavPage";
import BreadCrumbPage from "./pages/Component/BreadCrumbPage";
import ButtonPage from "./pages/Component/ButtonPage";
import CardPage from "./pages/Component/CardPage";
import DrawerPage from "./pages/Component/DrawerPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/quickstart" element={<Quickstart />} />
          <Route path="/react" element={<Reacts />} />
          <Route path="/next" element={<Nexts />} />
          <Route path="/accordion" element={<AccordianPage/>} />
          <Route path="/banner" element={<BannerPage/>} />
          <Route path="/bottomNavigation" element={<BottomNavPage/>} />
          <Route path="/breadCrumb" element={<BreadCrumbPage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/drawer" element={<DrawerPage />} />
          <Route path="/dropDowns" element={<DropDown />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/megaMenu" element={<MegaMenu />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/sideBar" element={<SideBar/>} />
          <Route path="/spinner" element={<Spinner/>} />
          <Route path="/stepper" element={<Stepper/>} />
          <Route path="/table" element={<Table/>} />
          <Route path="/tab" element={<Tab/>} />
          <Route path="/timeline" element={<TimeLine/>} />
        </Routes>
        <SideNavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
