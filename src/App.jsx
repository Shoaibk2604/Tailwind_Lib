import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideNavigationBar from "./components/SideNavigationBar";
import Quickstart from "./pages/GettingStarted/Quickstart";
import Home from "./pages/GettingStarted/Home";
import Reacts from "./pages/Integration Guides/Reacts";
import Nexts from "./pages/Integration Guides/Nexts";
import AccordianPage from "./pages/Component/AccordianPage";
import BannerPage from "./pages/Component/BannerPage";
import BottomNavPage from "./pages/Component/BottomNavPage";
import BreadCrumbPage from "./pages/Component/BreadCrumbPage";
import ButtonPage from "./pages/Component/ButtonPage";
import CardPage from "./pages/Component/CardPage";
import DrawerPage from "./pages/Component/DrawerPage";
import DropdownPage from "./pages/Component/DropdownPage";
import FooterPage from "./pages/Component/FooterPage";
import MegaMenuPage from "./pages/Component/MegaMenuPage";
import ModalPage from "./pages/Component/ModalPage";
import NavBarPage from "./pages/Component/NavBarPage";
import PaginationPage from "./pages/Component/PaginationPage";
import SideBarPage from "./pages/Component/SideBarPage";
import StepperPage from "./pages/Component/StepperPage";
import TabPage from "./pages/Component/TabPage";
import TimelinePage from "./pages/Component/TimelinePage";

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
          <Route path="/accordion" element={<AccordianPage />} />
          <Route path="/banner" element={<BannerPage />} />
          <Route path="/bottomNavigation" element={<BottomNavPage />} />
          <Route path="/breadCrumb" element={<BreadCrumbPage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/drawer" element={<DrawerPage />} />
          <Route path="/dropDowns" element={<DropdownPage />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route path="/megaMenu" element={<MegaMenuPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/navBar" element={<NavBarPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/sideBar" element={<SideBarPage />} />
          <Route path="/stepper" element={<StepperPage />} />
          <Route path="/tab" element={<TabPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
        <SideNavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
