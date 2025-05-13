import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    
      </Layout>
    </div>
  );
};

export default App;
