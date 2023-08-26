import React from "react";

const SideNav = () => {
  const homeSections = Array(4).fill(null);

  return (
    <aside className="bg-gray-900 text-white w-24 h-screen fixed top-0 left-0 overflow-y-auto">
      <div className="py-4 px-1">
        <div className="flex items-center justify-center mb-6">
          {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="#FDCC0D"
          >
            <text x="10" y="40" fontSize="50" fontWeight="bold">
              𝓷
            </text>
          </svg>
          {/* </div> */}
        </div>
        <nav>
          <ul className="space-y-3">
            {homeSections.map((_, index) => (
              <li
                key={index}
                className="mb-3 px-6 py-2 flex flex-col items-center hover:bg-yellow-600"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="9" />
                  </svg>
                </div>
                <span className="mt-1">Home</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
