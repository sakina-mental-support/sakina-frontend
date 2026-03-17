import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

const ExerciseDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center p-4 font-sans">
      <div
        className="bg-[#f8f9fa] shadow-2xl flex flex-col"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "40px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-14 pb-3 bg-[#f8f9fa] flex-shrink-0">
          <button
            type="button"
            onClick={() => navigate("/exercises")}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-base font-semibold text-gray-900">Exercise Detail</h1>
          <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg> */}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none", paddingBottom: "8px" }}>

          {/* Hero Image */}
          <div className="relative mx-5 rounded-[28px] overflow-hidden" style={{ height: "220px" }}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Breathing Exercise"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.1) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
              <div className="inline-flex items-center px-3 py-1 bg-[#71BCFF] text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-2">
                Daily Pick
              </div>
              <h2 className="text-white text-xl font-bold leading-tight">10-minute Morning<br />Mindfulness</h2>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-5 px-6 py-4">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#71BCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-gray-800">10</p>
                <p className="text-[10px] text-gray-400">mins</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#71BCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-gray-800">Beginner</p>
                <p className="text-[10px] text-gray-400">Level</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#71BCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-gray-800">Mental</p>
                <p className="text-[10px] text-gray-400">Health</p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="px-6 pb-4">
            <h3 className="text-base font-bold text-gray-900 mb-2">About this session</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Start your day with clarity and intention. This guided session focuses on rhythmic breathing and body awareness to help you center your thoughts before the busy day begins. Perfect for establishing a consistent morning ritual.
            </p>
          </div>

          {/* What you'll achieve */}
          <div className="px-6 pb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">What you'll achieve</h3>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#71BCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: "Increased Focus",
                  desc: "Sharpens your attention for peak morning productivity.",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#71BCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Stress Reduction",
                  desc: "Lowers cortisol levels and promotes emotional balance.",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#71BCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Renewed Energy",
                  desc: "Wake up your mind and body without the caffeine crash.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-4 py-3.5 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Start Session Button — inside flow, above navbar */}
        <div className="px-6 py-4 bg-[#f8f9fa] flex-shrink-0">
          <button
            type="button"
            className="w-full bg-[#71BCFF] hover:bg-[#5aadf0] text-white font-semibold py-4 rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Session
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-gray-100 bg-white flex-shrink-0" style={{ borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" }}>
          <BottomNavbar />
        </div>

      </div>
    </div>
  );
};

export default ExerciseDetail;