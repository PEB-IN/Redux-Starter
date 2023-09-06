import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Redux from "./components/Redux/Redux";

const App = () => {
  return (
    <div className="flex-1 h-fit pb-40">
      <Header />
      <Redux>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Redux>
    </div>
  );
};

export default App;
