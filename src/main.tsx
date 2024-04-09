import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";
import { StrictMode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "@/pages/Project";
import About from "@/pages/About";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router basename="/">
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
