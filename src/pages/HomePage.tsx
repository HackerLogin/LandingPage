import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { TerminalIcon, LockIcon } from 'lucide-react';
export function HomePage() {
  // 모집 상태 - 필요시 변경 가능
  const isRecruitmentOpen = true;
  return <div className="min-h-screen w-full bg-black text-white">
      <Navbar isRecruitmentOpen={isRecruitmentOpen} />

      {/* Hero Section - Full Screen */}
      <div className="h-screen w-full flex flex-col items-center justify-center px-6 relative">
        {/* Background Pattern Overlay (optional) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-8">
            <TerminalIcon className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">
              Security & Hacking Club
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hacker
            <br />
            <span className="text-green-400">Login</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            함께 배우고, 함께 성장하는 보안 동아리 HackerLogin에 합류하세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {isRecruitmentOpen ? <Link to="/apply" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all text-lg">
                지원하기
              </Link> : <button disabled className="px-8 py-4 bg-gray-700 text-gray-400 font-semibold rounded-lg cursor-not-allowed text-lg">
                모집마감
              </button>}

            <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all text-lg">
              더 알아보기
            </button>
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
              <LockIcon className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">보안 연구</h3>
              <p className="text-gray-400 text-sm">
                최신 보안 취약점 분석 및 연구
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
              <TerminalIcon className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">CTF 대회</h3>
              <p className="text-gray-400 text-sm">
                국내외 해킹 대회 참가 및 수상
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
              <ShieldIcon className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">스터디</h3>
              <p className="text-gray-400 text-sm">
                정기 스터디 및 세미나 진행
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
function ShieldIcon({
  className
}: {
  className?: string;
}) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>;
}