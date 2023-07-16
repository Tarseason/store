import React from "react";
import Hero from "./Pages/Hero";
import NavBar from "./Pages/NavBar";
import HeadlineCards from "./Pages/HeadLineCards";
import Clothing from "./Pages/Clothing";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Clothing />
      <Contact />
    </div>
  );
}

export default App;
