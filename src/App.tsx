import React from "react";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";

function App() {
  return (
    <section className="px-[3rem] py-[1rem] bg-dimWhite h-[100vh]">
      <Header />

      <div className="flex py-[10rem] justify-center items-center">
        <Counter />
      </div>
    </section>
  );
}

export default App;
