import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Hanoi from "./pages/hanoi";
import AltPage from "./pages/altPage";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="hanoi" element={<Hanoi />} />
      <Route path="altpage" element={
      <Provider store={store}>
          <App />
          </Provider>
          }/>
          <Route path="*" element={<Home />} />
          </Route>
  </Routes>
  </BrowserRouter>
);

<Provider store={store}>
<App />
</Provider>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
