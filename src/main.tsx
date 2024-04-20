import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "@/pages/Project";
import About from "@/pages/About";
import NotFound from "@/pages/404";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router basename="/">
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
);
