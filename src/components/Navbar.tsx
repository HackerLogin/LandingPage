import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldIcon } from 'lucide-react';
interface NavbarProps {
  isRecruitmentOpen: boolean;
}
export function Navbar({
  isRecruitmentOpen
}: NavbarProps) {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white hover:text-green-400 transition-colors">
            <ShieldIcon className="w-8 h-8" />
            <span className="text-xl font-bold">HackerLogin</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Activities
            </Link>

            {/* Recruitment Button */}
            {isRecruitmentOpen ? <Link to="/apply" className="px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors">
                지원하기
              </Link> : <button disabled className="px-6 py-2 bg-gray-700 text-gray-400 font-semibold rounded-lg cursor-not-allowed">
                모집마감
              </button>}
          </div>
        </div>
      </div>
    </nav>;
}