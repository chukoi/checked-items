import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CheckedItems from "./CheckedItems.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CheckedItems />
  </StrictMode>
);
