import React from 'react'

const Sponsors = () => {
  return (
    <div className="py-12">
            <h3 className="text-lg text-gray-800 text-center">Trusted by leading hotel brands worldwide.</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-12 max-md:px-4 max-w-5xl mx-auto">
                {/* Marriott */}
                <div className="flex items-center justify-center border rounded-lg shadow hover:shadow-lg transition-all border-slate-200 p-5">
                    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 4L30 16L25 28H20L15 16L20 4H25Z" fill="#8B0000"/>
                        <path d="M35 8V24H40L45 16L40 8H35Z" fill="#8B0000"/>
                        <text x="50" y="20" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#8B0000">Marriott</text>
                    </svg>
                </div>
                
                {/* Hilton */}
                <div className="flex items-center justify-center border rounded-lg shadow hover:shadow-lg transition-all border-slate-200 p-5">
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="8" width="4" height="16" fill="#003B71"/>
                        <rect x="18" y="8" width="4" height="16" fill="#003B71"/>
                        <rect x="10" y="14" width="12" height="4" fill="#003B71"/>
                        <text x="30" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#003B71">HILTON</text>
                    </svg>
                </div>
                
                {/* Hyatt */}
                <div className="flex items-center justify-center border rounded-lg shadow hover:shadow-lg transition-all border-slate-200 p-5">
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="8" fill="#00274C"/>
                        <text x="28" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#00274C">HYATT</text>
                    </svg>
                </div>
                
                {/* IHG */}
                <div className="flex items-center justify-center border rounded-lg shadow hover:shadow-lg transition-all border-slate-200 p-5">
                    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="8" width="4" height="16" fill="#006747"/>
                        <rect x="16" y="8" width="4" height="16" fill="#006747"/>
                        <rect x="16" y="14" width="8" height="4" fill="#006747"/>
                        <rect x="28" y="8" width="4" height="16" fill="#006747"/>
                        <path d="M38 8Q45 8 45 16T38 24" stroke="#006747" strokeWidth="4" fill="none"/>
                        <text x="48" y="20" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#006747">Hotels</text>
                    </svg>
                </div>
                
                {/* Accor */}
                <div className="flex items-center justify-center border rounded-lg shadow hover:shadow-lg transition-all border-slate-200 p-5 max-md:hidden">
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8L22 24L16 24L10 8L16 8Z" fill="#8B4789"/>
                        <circle cx="16" cy="16" r="6" fill="none" stroke="#8B4789" strokeWidth="2"/>
                        <text x="28" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#8B4789">ACCOR</text>
                    </svg>
                </div>
            </div>
        </div>
  )
}

export default Sponsors
