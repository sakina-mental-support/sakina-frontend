import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

const MOODS = [
  { id: "happy",   label: "Happy",   emoji: "😊", color: "#FCD34D" },
  { id: "calm",    label: "Calm",    emoji: "😌", color: "#71BCFF" },
  { id: "anxious", label: "Anxious", emoji: "😰", color: "#F97316" },
  { id: "sad",     label: "Sad",     emoji: "😢", color: "#93C5FD" },
  { id: "angry",   label: "Angry",   emoji: "⚡", color: "#EF4444" },
];

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const MoodTracker = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("calm");
  const [note, setNote] = useState("");
  const [selectedDay, setSelectedDay] = useState(5);

  const calendarDays = [
    [null, null, null, 1,  2,  3,  4],
    [5,   6,   7,   8,  9,  10, 11],
    [12,  13,  14,  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div
        className="bg-white font-sans"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "40px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2 bg-white flex-shrink-0">
          <div className="w-8" />
          <h1 className="text-base font-semibold text-gray-800">Mood Tracker</h1>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 pb-4" style={{ scrollbarWidth: "none" }}>

          {/* Calendar */}
          <div className="mb-5">
            <div className="flex items-center justify-between px-2 mb-3">
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm font-semibold text-gray-700">October 2023</span>
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 mb-1">
              {DAYS.map((d, i) => (
                <div key={i} className="text-center text-xs font-medium text-gray-400 py-1">{d}</div>
              ))}
            </div>

            {calendarDays.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7">
                {week.map((day, di) => (
                  <div key={di} className="flex items-center justify-center py-1">
                    {day ? (
                      <button
                        onClick={() => setSelectedDay(day)}
                        className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-150 ${
                          selectedDay === day
                            ? "bg-[#71BCFF] text-white shadow-sm"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {day}
                      </button>
                    ) : (
                      <div className="w-8 h-8" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Question */}
          <h2 className="text-xl font-bold text-gray-900 text-center mb-5">
            How are you feeling today?
          </h2>

          {/* Mood Options */}
          <div className="flex flex-col gap-2.5 mb-5">
            {MOODS.map((mood) => {
              const isSelected = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
                    isSelected
                      ? "border-[#71BCFF] bg-[#f0f8ff]"
                      : "border-gray-100 bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                      style={{ backgroundColor: `${mood.color}22` }}
                    >
                      {mood.emoji}
                    </div>
                    <span className={`text-sm font-medium ${isSelected ? "text-gray-800" : "text-gray-600"}`}>
                      {mood.label}
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? "border-[#71BCFF]" : "border-gray-300"}`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#71BCFF]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Optional Note */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Optional Note</label>
            <textarea
              placeholder="What's making you feel this way?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl text-sm text-gray-700 outline-none focus:border-[#71BCFF] bg-gray-50 resize-none transition"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#71BCFF] hover:bg-[#5aadf0] text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg text-sm mb-3">
            Submit Daily Mood
          </button>

          {/* Mood Analysis Button */}
          <button
            type="button"
            onClick={() => navigate("/mood-analytics")}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-[#71BCFF] text-[#71BCFF] font-semibold text-sm hover:bg-[#f0f8ff] transition-all duration-200 mb-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Mood Analysis
          </button>

        </div>

        {/* Bottom Nav */}
        <div className="border-t border-gray-200 bg-white flex-shrink-0">
          <BottomNavbar />
        </div>

      </div>
    </div>
  );
};

export default MoodTracker;