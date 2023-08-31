import { Route, Routes } from "react-router-dom";
import HowToHelp from "./routes/HowToHelp";
import SearchPage from "./routes/SearchPage";
import ErrorPage from "./ErrorPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/help" element={<HowToHelp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
