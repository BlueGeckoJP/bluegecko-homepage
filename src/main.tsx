import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Home from "./routes/Home";
import Works from "./routes/Works";

inject();
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
