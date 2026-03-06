import React, { useState } from "react";

const BottomNavbar = () => {
  const [active, setActive] = useState("chat");

  const navItems = [
    {
      id: "chat",
      label: "CHAT",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      id: "exercises",
      label: "EXERCISES",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M12 3c0 0-4 4-4 8s4 8 4 8m0-16c0 0 4 4 4 8s-4 8-4 8M3 12h18" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
    {
      id: "mood",
      label: "MOOD TRACKING",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14s1.5 2 4 2 4-2 4-2" />
          <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      id: "profile",
      label: "PROFILE",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" strokeWidth={1.8} />
        </svg>
      ),
    },
  ];

  return (
      <div className="flex items-center justify-around max-w-sm mx-auto px-2 py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex flex-col items-center gap-1 px-3 py-1 flex-1 transition-all duration-200"
          >
            <span className={`transition-colors duration-200 ${active === item.id ? "text-[#71BCFF]" : "text-gray-400"}`}>
              {item.icon}
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wide transition-colors duration-200 leading-tight text-center ${
                active === item.id ? "text-[#71BCFF]" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
  );
};

export default BottomNavbar;