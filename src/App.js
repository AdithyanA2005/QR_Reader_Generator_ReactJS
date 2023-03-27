import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<>Home</>} />
            <Route path="/scan" element={<>Scan</>} />
            <Route path="/generate" element={<>Generate</>} />
        </Routes>
      </BrowserRouter>
</>
  );
}

export default App;
