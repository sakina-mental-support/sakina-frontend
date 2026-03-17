import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

// ── Mock data per tab ──────────────────────────────────────────────────────────
const DATA = {
  Day: {
    label: "Daily Mood Trend",
    trend: "+5% vs yesterday",
    trendUp: true,
    overall: "Calm",
    points: [55, 60, 52, 70, 65, 80, 72],
    labels: ["6AM","9AM","12PM","3PM","6PM","9PM","12AM"],
    feelings: [
      { emoji: "😌", label: "Calm",    count: 3, color: "#71BCFF" },
      { emoji: "😊", label: "Joyful",  count: 2, color: "#FCD34D" },
      { emoji: "😰", label: "Anxious", count: 1, color: "#F97316" },
      { emoji: "⚡", label: "Focused", count: 1, color: "#A78BFA" },
    ],
    insight: "Your mood stays most stable in the afternoon. Morning anxiety tends to fade after 9AM — consider a short breathing exercise right after waking.",
  },
  Week: {
    label: "Weekly Mood Trend",
    trend: "+12% vs last week",
    trendUp: true,
    overall: "Great",
    points: [45, 60, 55, 75, 65, 80, 70],
    labels: ["MON","TUE","WED","THU","FRI","SAT","SUN"],
    feelings: [
      { emoji: "😊", label: "Joyful",   count: 4, color: "#FCD34D" },
      { emoji: "😌", label: "Calm",     count: 3, color: "#71BCFF" },
      { emoji: "🎯", label: "Focused",  count: 2, color: "#A78BFA" },
      { emoji: "⚡", label: "Energetic",count: 2, color: "#34D399" },
    ],
    insight: "Your mood typically peaks after your morning meditation sessions. Try scheduling your most demanding tasks between 10 AM and 12 PM when your 'Joy' and 'Focus' levels are highest.",
  },
  Month: {
    label: "Monthly Mood Trend",
    trend: "+8% vs last month",
    trendUp: true,
    overall: "Positive",
    points: [50, 45, 60, 55, 70, 65, 75, 68, 80, 72, 78, 82],
    labels: ["W1","","W2","","W3","","W4","","","","",""],
    feelings: [
      { emoji: "😊", label: "Joyful",   count: 14, color: "#FCD34D" },
      { emoji: "😌", label: "Calm",     count: 10, color: "#71BCFF" },
      { emoji: "🎯", label: "Focused",  count: 7,  color: "#A78BFA" },
      { emoji: "😢", label: "Sad",      count: 3,  color: "#93C5FD" },
    ],
    insight: "You've had your most positive month yet! Weeks 3 and 4 showed consistent improvement. Maintaining your journaling habit seems to correlate with better mood scores.",
  },
};

// ── Simple SVG line chart ──────────────────────────────────────────────────────
const MoodChart = ({ points, labels }) => {
  const W = 310, H = 100;
  const min = Math.min(...points) - 10;
  const max = Math.max(...points) + 10;
  const n = points.length;

  const x = (i) => (i / (n - 1)) * W;
  const y = (v) => H - ((v - min) / (max - min)) * H;

  const pathD = points
    .map((p, i) => {
      if (i === 0) return `M ${x(i)} ${y(p)}`;
      const cpx = (x(i) + x(i - 1)) / 2;
      return `C ${cpx} ${y(points[i - 1])}, ${cpx} ${y(p)}, ${x(i)} ${y(p)}`;
    })
    .join(" ");

  const fillD = `${pathD} L ${x(n - 1)} ${H} L 0 ${H} Z`;

  return (
    <div className="w-full">
      <svg viewBox={`-4 -4 ${W + 8} ${H + 28}`} width="100%" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#71BCFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#71BCFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Fill */}
        <path d={fillD} fill="url(#chartFill)" />
        {/* Line */}
        <path d={pathD} fill="none" stroke="#71BCFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dots */}
        {points.map((p, i) => (
          <circle key={i} cx={x(i)} cy={y(p)} r="3.5" fill="#71BCFF" stroke="white" strokeWidth="1.5" />
        ))}
        {/* Labels */}
        {labels.map((l, i) => (
          l ? (
            <text key={i} x={x(i)} y={H + 20} textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="sans-serif">
              {l}
            </text>
          ) : null
        ))}
      </svg>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
const MoodAnalytics = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Week");
  const d = DATA[tab];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div
        className="bg-white font-sans flex flex-col overflow-hidden"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "40px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-12 pb-3 bg-white flex-shrink-0">
          <button
            type="button"
            onClick={() => navigate("/mood")}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-base font-semibold text-gray-900">Mood Analytics</h1>
          <div className="w-9" />
        </div>

        {/* Tabs */}
        <div className="flex items-center mx-5 mb-1 bg-gray-100 rounded-2xl p-1 flex-shrink-0">
          {["Day", "Week", "Month"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                tab === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 pb-4 flex flex-col gap-4" style={{ scrollbarWidth: "none" }}>

          {/* Chart Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-5 pt-5 pb-4">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400 font-medium">{d.label}</p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${d.trendUp ? "bg-green-50 text-green-500" : "bg-red-50 text-red-400"}`}>
                {d.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-3">{d.overall}</p>
            <MoodChart points={d.points} labels={d.labels} />
          </div>

          {/* Top Feelings */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">Top Feelings This {tab}</h3>
            <div className="grid grid-cols-2 gap-3">
              {d.feelings.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: `${f.color}22` }}
                  >
                    {f.emoji}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{f.label}</p>
                    <p className="text-xs text-gray-400">{f.count} times</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mood Distribution Bar */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-5 py-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Mood Distribution</h3>
            <div className="flex flex-col gap-2.5">
              {d.feelings.map((f, i) => {
                const total = d.feelings.reduce((s, x) => s + x.count, 0);
                const pct = Math.round((f.count / total) * 100);
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm w-16 text-gray-500 font-medium">{f.label}</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: f.color }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Insight */}
          <div className="bg-gray-900 rounded-3xl px-5 py-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-[#71BCFF] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white">Personal Insight</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">{d.insight}</p>
            <button
              type="button"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 border border-white border-opacity-20"
            >
              View detailed report
            </button>
          </div>

        </div>

        {/* Bottom Nav */}
        <div className="border-t border-gray-200 bg-white flex-shrink-0">
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default MoodAnalytics;