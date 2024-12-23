import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import './styles/style.scss';
createRoot(document.getElementById("root")).render(_jsx(BrowserRouter, { children: _jsx(StrictMode, { children: _jsx(Rotas, {}) }) }));
