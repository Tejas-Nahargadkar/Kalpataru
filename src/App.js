import PrivacyPolicy from "./Screens/PrivacyPolicy/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Download from "./Screens/Download/Download";
import NewsAndAnnouncements from "./Screens/NewsAndAnnouncements/NewsAndAnnouncements";
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/SignUp/SignUp";
import AboutUs from "./Screens/AboutUs/AboutUs";
import PartnerWithUs from "./Screens/PartnerWithUs/PartnerWithUs";
import Trading from "./Screens/Trading/Trading";
import ApplyMutualFund from "./Screens/applymutualfund/ApplyMutualFund";
import Applymatualfundlink from "./Screens/applymutualfundlink/Applymatualfundlink";
import IPO from "./Screens/ipo/IPO";
import SGB from "./Screens/SGB/SGB";
import GeneralInsurence from "./Screens/generalInsurence/GeneralInsurence";
import Depository from "./Screens/Depository/Depository";
import PanCard from "./Screens/panCard/PanCard";
import Applyipo from "./Screens/applyipo/Applyipo";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PrivacyPolicy />} />
          <Route path="/download" element={<Download />} />
          <Route
            path="/newsandannouncements"
            element={<NewsAndAnnouncements />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/PartnerwithUs" element={<PartnerWithUs />} />
          <Route path="/Applymutualfund" element={<ApplyMutualFund />} />
          <Route
            path="/applymatualfundlink"
            element={<Applymatualfundlink />}
          />
          <Route path="/trading" element={<Trading />} />
          <Route path="/ipo" element={<IPO />} />
          <Route path="/apply-ipo" element={<Applyipo />} />
          <Route path="/sgb" element={<SGB />} />
          <Route path="/general-insurenece" element={<GeneralInsurence />} />
          <Route path="/depository" element={<Depository />} />
          <Route path="/pancard" element={<PanCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
