import ReactDOM from "react-dom/client";

import favicon from "@/assets/images/portifólio-icone.ico";

import App from "./App.js";
import "./index.css";

const faviconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (faviconLink) {
  faviconLink.href = favicon;
  faviconLink.type = "image/x-icon";
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
