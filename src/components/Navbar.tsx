import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-green-400 transition-colors">
          <span className="text-xl font-bold">HackerLogin</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/apply" className="text-gray-300 hover:text-white transition-colors">Apply</Link>
          <Link to="/activities" className="text-gray-300 hover:text-white transition-colors">Activities</Link>
        </div>
      </div>
    </nav>
  );
}
