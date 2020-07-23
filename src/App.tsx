import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Applicants from "./pages/Applicants";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Applicants />
      <Footer />
    </div>
  );
}

export default App;
