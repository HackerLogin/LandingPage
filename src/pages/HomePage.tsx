import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TerminalIcon, LockIcon, UsersIcon, TrophyIcon, BookOpenIcon, CodeIcon } from 'lucide-react';
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
            혼자 가기엔
            <br />
            <span className="text-green-400">위험합니다</span>
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

            <a href="#about" className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all text-lg">
              더 알아보기
            </a>
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

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About HackerLogin
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              보안과 해킹에 열정을 가진 사람들이 모여 함께 성장하는
              커뮤니티입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">협업과 성장</h3>
                  <p className="text-gray-400">
                    다양한 배경을 가진 멤버들과 함께 프로젝트를 진행하며 실력을
                    키워갑니다
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                  <BookOpenIcon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">체계적인 학습</h3>
                  <p className="text-gray-400">
                    기초부터 고급까지, 단계별 커리큘럼으로 체계적인 학습을
                    제공합니다
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                  <TrophyIcon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">실전 경험</h3>
                  <p className="text-gray-400">
                    CTF 대회 참가와 실제 보안 프로젝트를 통해 실전 경험을
                    쌓습니다
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">주요 활동</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-white">
                      주간 스터디
                    </span>
                    <p className="text-gray-400 text-sm">
                      웹 해킹, 시스템 해킹, 리버싱 등 다양한 주제
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-white">
                      CTF 대회 참가
                    </span>
                    <p className="text-gray-400 text-sm">
                      국내외 주요 CTF 대회 팀 단위 참가
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-white">
                      세미나 및 워크샵
                    </span>
                    <p className="text-gray-400 text-sm">
                      최신 보안 트렌드와 기술 공유
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-white">프로젝트</span>
                    <p className="text-gray-400 text-sm">
                      보안 도구 개발 및 취약점 연구
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                50+
              </div>
              <div className="text-gray-400">활동 멤버</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                30+
              </div>
              <div className="text-gray-400">CTF 참가</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                15+
              </div>
              <div className="text-gray-400">수상 경력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                100+
              </div>
              <div className="text-gray-400">스터디 세션</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Activities
            </h2>
            <p className="text-gray-400 text-lg">
              최근 동아리 활동을 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                <CodeIcon className="w-16 h-16 text-green-400" />
              </div>
              <div className="p-6">
                <div className="text-sm text-green-400 mb-2">2024.01.15</div>
                <h3 className="text-xl font-semibold mb-2">
                  Web Hacking Workshop
                </h3>
                <p className="text-gray-400 text-sm">
                  SQL Injection과 XSS 공격 실습 워크샵 진행
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <TrophyIcon className="w-16 h-16 text-green-400" />
              </div>
              <div className="p-6">
                <div className="text-sm text-green-400 mb-2">2024.01.10</div>
                <h3 className="text-xl font-semibold mb-2">
                  CTF 대회 3위 수상
                </h3>
                <p className="text-gray-400 text-sm">
                  국내 CTF 대회에서 우수한 성적 달성
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <BookOpenIcon className="w-16 h-16 text-green-400" />
              </div>
              <div className="p-6">
                <div className="text-sm text-green-400 mb-2">2024.01.05</div>
                <h3 className="text-xl font-semibold mb-2">
                  Cryptography Study
                </h3>
                <p className="text-gray-400 text-sm">
                  암호학 기초부터 고급까지 스터디 진행
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/activities" className="inline-block px-8 py-3 bg-transparent border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-all">
              모든 활동 보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            HackerLogin과 함께 보안 전문가로 성장하세요
          </p>
          {isRecruitmentOpen && <Link to="/apply" className="inline-block px-10 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all text-lg">
              지금 지원하기
            </Link>}
        </div>
      </section>

      <Footer />
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