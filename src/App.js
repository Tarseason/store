import React from "react";
import Hero from "./Pages/Hero";
import NavBar from "./Pages/NavBar";
import HeadlineCards from "./Pages/HeadLineCards";
import Clothing from "./Pages/Clothing";
import Category from "./Pages/Category";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Clothing />
      <Category />
    </div>
  );
}

export default App;
