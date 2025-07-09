import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Chat from "./Chat.jsx";
import NotFound from "./NotFound.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route index path="/" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
