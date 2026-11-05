import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { useState } from "react";
const App = () => {
  const [catagory, setCatagory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCatagory} />
      <NewsBoard catagory={catagory} />
    </div>
  );
};

export default App;
