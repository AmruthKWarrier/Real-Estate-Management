import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/component/Header";
import Footer from "./components/component/Footer";
import HomePage from "./components/component/HomePage";
import PropertiesPage from "./components/component/PropertiesPage";
import PropertyDetailPage from "./components/component/PropertyDetailPage";
import AgentsPage from "./components/component/AgentsPage";
import AboutPage from "./components/component/AboutPage";
import ContactUs from "./components/component/ContactUs";
import PrivacyPolicy from "./components/component/PrivacyPolicy";
const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
