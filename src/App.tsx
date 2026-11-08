import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { AboutIntroduction } from "./pages/AboutIntroduction";
import { AboutTeam } from "./pages/AboutTeam";
import { ServicesImplementation } from "./pages/ServicesImplementation";
import { ServicesConsultancy } from "./pages/ServicesConsultancy";
import { ServicesOutsourcing } from "./pages/ServicesOutsourcing";
import { ServicesSupport } from "./pages/ServicesSupport";
import { ServicesPlanning } from "./pages/ServicesPlanning";
import { ServicesProjectManagement } from "./pages/ServicesProjectManagement";
import { ServicesSpecialized } from "./pages/ServicesSpecialized";
import { ServicesDevelopment } from "./pages/ServicesDevelopment";
import { SolutionsITSystems } from "./pages/SolutionsITSystems";
import { SolutionsNetworking } from "./pages/SolutionsNetworking";
import { SolutionsDataCenter } from "./pages/SolutionsDataCenter";
import { Customers } from "./pages/Customers";
import { Contact } from "./pages/Contact";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { News } from "./pages/News";
import { NewsArticle } from "./pages/NewsArticle";
import { Partners } from "./pages/Partners";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route path="introduction" element={<AboutIntroduction />} />
            <Route path="team" element={<AboutTeam />} />
          </Route>
          <Route path="services">
            <Route index element={<ServicesImplementation />} />
            <Route path="implementation" element={<ServicesImplementation />} />
            <Route path="support" element={<ServicesSupport />} />
            <Route path="consultancy" element={<ServicesConsultancy />} />
            <Route path="outsourcing" element={<ServicesOutsourcing />} />
            <Route path="planning" element={<ServicesPlanning />} />
            <Route path="project-management" element={<ServicesProjectManagement />} />
            <Route path="specialized" element={<ServicesSpecialized />} />
            <Route path="development" element={<ServicesDevelopment />} />
          </Route>
          <Route path="solutions">
            <Route index element={<SolutionsITSystems />} />
            <Route path="it-systems" element={<SolutionsITSystems />} />
            <Route path="networking" element={<SolutionsNetworking />} />
            <Route path="data-center" element={<SolutionsDataCenter />} />
          </Route>
          <Route path="news">
            <Route index element={<News />} />
            <Route path=":id" element={<NewsArticle />} />
          </Route>
          <Route path="partners" element={<Partners />} />
          <Route path="customers" element={<Customers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
