import React from "react";
import BottomNavbar from "./BottomNavbar";

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const MenuItem = ({ icon, label, value }) => (
  <button className="w-full flex items-center justify-between px-4 py-3.5 bg-white rounded-2xl hover:bg-gray-50 transition-colors duration-150">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[#71BCFF]">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </div>
    <div className="flex items-center gap-1">
      {value && <span className="text-sm text-gray-400">{value}</span>}
      <ChevronRight />
    </div>
  </button>
);

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="bg-[#F2F4F7] font-sans flex flex-col overflow-hidden relative"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "40px",
          fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-14 pb-4 bg-[#F2F4F7]">
          <button className="w-8 h-8 flex items-center justify-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-base font-semibold text-gray-900">Profile</h1>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 pb-4 flex flex-col gap-5">

          {/* Avatar + Name */}
          <div className="flex flex-col items-center gap-2 pt-2 pb-1">
            <div className="relative">
              <div
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md"
              >
                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="96" height="96" fill="#C8DFF5"/>
                  <ellipse cx="48" cy="38" rx="18" ry="20" fill="#A0C4E8"/>
                  <ellipse cx="48" cy="90" rx="32" ry="24" fill="#A0C4E8"/>
                </svg>
              </div>
              {/* Edit badge */}
              <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#71BCFF] rounded-full flex items-center justify-center shadow border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>
            <div className="text-center mt-1">
              <h2 className="text-lg font-bold text-gray-900 leading-tight">Sarah Jenkins</h2>
              <p className="text-sm text-[#71BCFF]">sarah@gmail.com</p>
            </div>
          </div>

          {/* Account Settings Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2.5 px-1">Account Settings</h3>
            <div className="flex flex-col gap-2">
              <MenuItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                label="Privacy & Security"
              />
              <MenuItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                label="Language"
                value="English"
              />
              <MenuItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                }
                label="Theme"
                value="Light"
              />
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2.5 px-1">Support</h3>
            <div className="flex flex-col gap-2">
              <MenuItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                label="Help Center"
              />
              <MenuItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
                label="Contact Us"
              />
            </div>
          </div>

          {/* Log Out */}
          <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#FFF1F1] text-red-400 text-sm font-semibold hover:bg-red-100 transition-colors duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Log Out
          </button>

          {/* Version */}
          <p className="text-center text-xs text-gray-400 pb-1">Mindful App v2.4.0</p>

        </div>

        {/* Bottom Nav */}
        <div className="border-t border-gray-200 pb-5 pt-1 bg-white flex-shrink-0">
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default Profile;