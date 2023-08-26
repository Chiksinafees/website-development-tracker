import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-center fixed bottom-0 left-20% w-full">
      <div className="container mx-auto">
        <p className="text-gray-200">
          &copy; {new Date().getFullYear()} Website Development Tracker. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
