import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';

const ExercisesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center p-4 font-sans">
            <div
                className="bg-[#f8f9fa] shadow-2xl relative"
                style={{
                    width: '390px',
                    height: '844px',
                    borderRadius: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}
            >
                {/* Header */}
                <div className="pt-14 px-6 pb-4 bg-[#f8f9fa] z-10">
                    <h1 className="text-[22px] font-bold text-[#111827] tracking-tight">Daily Recommendation</h1>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 pb-32 space-y-6 scrollbar-hide">

                    {/* Breathing Exercise - TOP PICK */}
                    <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="h-[180px] w-full overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Meditation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="inline-flex items-center px-[14px] py-[6px] bg-[#f0f7ff] text-[#71BCFF] text-[10px] uppercase font-bold tracking-widest rounded-full mb-3">
                                Top Pick
                            </div>
                            <h2 className="text-[20px] font-bold text-[#111827] mb-1.5">Breathing Exercise</h2>
                            <p className="text-[14px] font-medium text-[#71BCFF] mb-3">5 mins • Relaxation</p>
                            <p className="text-[13px] text-gray-500 leading-[1.6] mb-6">
                                Deep belly breathing to reduce stress and improve focus.
                            </p>
                            <button
                                onClick={() => navigate("/exercise-detail")}
                                className="w-full bg-[#71BCFF] hover:bg-[#5aadf0] active:scale-[0.98] transition-all text-white font-semibold py-3.5 rounded-full text-[15px]"
                            >
                                Start Now
                            </button>
                        </div>
                    </div>

                    {/* More Activities */}
                    <div className="flex items-center justify-between pt-2 mb-[2px]">
                        <h2 className="text-[19px] font-bold text-[#111827]">More Activities</h2>
                    </div>

                    {/* Guided Meditation */}
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-4 flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-[50px] h-[50px] rounded-[16px] bg-[#ecfdf5] flex items-center justify-center text-[#10b981] flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                                </svg>
                            </div>
                            <div className="flex-1 mt-0.5">
                                <h3 className="text-[16px] font-bold text-[#111827] mb-1">Guided Meditation</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">
                                    10-minute session for mindfulness and clarity.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate("/exercise-detail")}
                            className="w-full bg-[#f8f9fa] hover:bg-gray-100 text-[#111827] font-semibold py-3 rounded-[16px] text-[15px] transition-colors border border-gray-100"
                        >
                            Begin Session
                        </button>
                    </div>

                    {/* Daily Journaling */}
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-4 flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-[50px] h-[50px] rounded-[16px] bg-[#fffbeb] flex items-center justify-center text-[#f59e0b] flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <div className="flex-1 mt-0.5">
                                <h3 className="text-[16px] font-bold text-[#111827] mb-1">Daily Journaling</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">
                                    Express your thoughts and track your emotional journey.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate("/exercise-detail")}
                            className="w-full bg-[#f8f9fa] hover:bg-gray-100 text-[#111827] font-semibold py-3 rounded-[16px] text-[15px] transition-colors border border-gray-100"
                        >
                            Write Entry
                        </button>
                    </div>

                    {/* Gratitude Practice */}
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-gray-100 p-4 flex flex-col gap-4 mb-4">
                        <div className="flex items-start gap-4">
                            <div className="w-[50px] h-[50px] rounded-[16px] bg-[#fdf2f8] flex items-center justify-center text-[#ec4899] flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <div className="flex-1 mt-0.5">
                                <h3 className="text-[16px] font-bold text-[#111827] mb-1">Gratitude Practice</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">
                                    Reflect on positive moments from your day.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate("/exercise-detail")}
                            className="w-full bg-[#f8f9fa] hover:bg-gray-100 text-[#111827] font-semibold py-3 rounded-[16px] text-[15px] transition-colors border border-gray-100"
                        >
                            Start Practice
                        </button>
                    </div>

                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 w-full border-t border-gray-100 pb-5 pt-[6px] bg-white flex-shrink-0 z-10 rounded-b-[40px]">
                    <BottomNavbar />
                </div>

            </div>
        </div>
    );
};

export default ExercisesPage;