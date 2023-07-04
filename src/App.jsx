import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideNavigationBar from "./components/SideNavigationBar";
import Quickstart from "./pages/GettingStarted/Quickstart";
import Home from "./pages/GettingStarted/Home";
import Reacts from "./pages/Integration Guides/Reacts";
import Nexts from "./pages/Integration Guides/Nexts";
import Accordion from "./pages/Component/Accordion";
import Banner from "./pages/Component/Banner";
import BottomNavigation from "./pages/Component/BottomNavigation";
import Breadcrumb from "./pages/Component/Breadcrumb";
import Buttons from "./pages/Component/Buttons";
import Card from "./pages/Component/Card";
import ButtonGroup from "./pages/Component/ButtonGroup";
import Drawer from "./pages/Component/Drawer";
import DropDown from "./pages/Component/DropDown";
import Footer from "./pages/Component/Footer";
import MegaMenu from "./pages/Component/MegaMenu";
import Modal from "./pages/Component/Modal";
import NavBar from "./pages/Component/NavBar";
import Pagination from "./pages/Component/Pagination";
import Rating from "./pages/Component/SideBar";
import SideBar from "./pages/Component/SideBar";
import Spinner from "./pages/Component/Spinner";
import Stepper from "./pages/Component/Stepper";
import Table from "./pages/Component/Table";
import Tab from "./pages/Component/Tab";
import TimeLine from "./pages/Component/TimeLine";

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
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/banner" element={<Banner/>} />
          <Route path="/bottomNavigation" element={<BottomNavigation/>} />
          <Route path="/breadCrumb" element={<Breadcrumb />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/buttonGroup" element={<ButtonGroup/>} />
          <Route path="/card" element={<Card />} />
          <Route path="/drawer" element={<Drawer />} />
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
