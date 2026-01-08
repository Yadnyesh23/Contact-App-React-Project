import React from "react";

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gray-950 border-b border-blue-900/40 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
          <h2 className="text-blue-400 text-2xl font-semibold tracking-wide">
            Contact Manager
          </h2>
        </div>
      </div>
    </>
  );
}

export default Header;
