import React from 'react'

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900">
      <div className="block border-t-[.2px] border-gray-200 lg:pt-8 pt-2 text-sm text-gray-500 text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" className="hover:underline">
          CounterApp™
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
