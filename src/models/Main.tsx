import React from 'react'
import Counter from '../components/counter/Counter';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Main = () => {
  return (
    <section className="lg:px-[3rem] flex flex-col justify-between px-[2rem] py-[2rem] dark:bg-gray-900 h-[100vh]">
      <Header />

      {/* <div className="flex justify-center items-center"> */}
        <Counter />
          {/* </div> */}

      <Footer />
    </section>
  );
}

export default Main
