import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TrophyIcon, BookOpenIcon, CodeIcon, UsersIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
type ActivityCategory = 'all' | 'ctf' | 'study' | 'workshop' | 'project';
interface Activity {
  id: number;
  title: string;
  category: ActivityCategory;
  date: string;
  location: string;
  description: string;
  participants?: number;
  achievement?: string;
}
export function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('all');
  const activities: Activity[] = [{
    id: 1,
    title: 'CODEGATE 2024 본선 진출',
    category: 'ctf',
    date: '2024.02.20',
    location: '온라인',
    description: '국내 최대 규모 해킹 대회 CODEGATE 예선 통과 및 본선 진출',
    participants: 5,
    achievement: '본선 진출'
  }, {
    id: 2,
    title: 'Web Security Workshop',
    category: 'workshop',
    date: '2024.02.15',
    location: '동아리실',
    description: 'OWASP Top 10 취약점 분석 및 실습 워크샵',
    participants: 25
  }, {
    id: 3,
    title: 'Pwnable Study Season 3',
    category: 'study',
    date: '2024.02.10',
    location: '온라인',
    description: '시스템 해킹 및 익스플로잇 기법 스터디 (8주 과정)',
    participants: 15
  }, {
    id: 4,
    title: 'HackCTF 2024 Winter',
    category: 'ctf',
    date: '2024.02.05',
    location: '온라인',
    description: '겨울 시즌 CTF 대회 참가',
    participants: 8,
    achievement: '3위'
  }, {
    id: 5,
    title: '보안 도구 개발 프로젝트',
    category: 'project',
    date: '2024.01.28',
    location: '동아리실',
    description: '자동화된 취약점 스캐닝 도구 개발 프로젝트 시작',
    participants: 6
  }, {
    id: 6,
    title: 'Cryptography Deep Dive',
    category: 'study',
    date: '2024.01.20',
    location: '온라인',
    description: '현대 암호학 이론 및 실전 암호 해독 스터디',
    participants: 12
  }, {
    id: 7,
    title: 'Reversing Workshop',
    category: 'workshop',
    date: '2024.01.15',
    location: '동아리실',
    description: 'IDA Pro와 Ghidra를 활용한 리버싱 실습',
    participants: 20
  }, {
    id: 8,
    title: 'DEFCON CTF Quals',
    category: 'ctf',
    date: '2024.01.10',
    location: '온라인',
    description: '세계 최고 수준의 CTF 대회 예선 참가',
    participants: 6
  }];
  const categories = [{
    id: 'all',
    label: '전체',
    icon: null
  }, {
    id: 'ctf',
    label: 'CTF',
    icon: TrophyIcon
  }, {
    id: 'study',
    label: '스터디',
    icon: BookOpenIcon
  }, {
    id: 'workshop',
    label: '워크샵',
    icon: CodeIcon
  }, {
    id: 'project',
    label: '프로젝트',
    icon: UsersIcon
  }];
  const filteredActivities = selectedCategory === 'all' ? activities : activities.filter(activity => activity.category === selectedCategory);
  const getCategoryColor = (category: ActivityCategory) => {
    switch (category) {
      case 'ctf':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'study':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'workshop':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'project':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };
  const getCategoryIcon = (category: ActivityCategory) => {
    switch (category) {
      case 'ctf':
        return TrophyIcon;
      case 'study':
        return BookOpenIcon;
      case 'workshop':
        return CodeIcon;
      case 'project':
        return UsersIcon;
      default:
        return UsersIcon;
    }
  };
  return <div className="min-h-screen w-full bg-black text-white">
      <Navbar isRecruitmentOpen={true} />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Activities</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            HackerLogin의 다양한 활동과 성과를 확인해보세요
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 px-6 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => {
            const Icon = category.icon;
            return <button key={category.id} onClick={() => setSelectedCategory(category.id as ActivityCategory)} className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === category.id ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                  {Icon && <Icon className="w-4 h-4" />}
                  {category.label}
                </button>;
          })}
          </div>
        </div>
      </div>

      {/* Activities List */}
      <div className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map(activity => {
            const Icon = getCategoryIcon(activity.category);
            return <div key={activity.id} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(activity.category)}`}>
                      <Icon className="w-3 h-3" />
                      {activity.category.toUpperCase()}
                    </div>
                    {activity.achievement && <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                        🏆 {activity.achievement}
                      </div>}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {activity.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    {activity.participants && <div className="flex items-center gap-2">
                        <UsersIcon className="w-4 h-4" />
                        <span>{activity.participants}명 참여</span>
                      </div>}
                  </div>
                </div>;
          })}
          </div>

          {filteredActivities.length === 0 && <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                해당 카테고리의 활동이 없습니다.
              </p>
            </div>}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            2024 활동 통계
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">12</div>
              <div className="text-gray-400">CTF 참가</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">8</div>
              <div className="text-gray-400">스터디 진행</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">6</div>
              <div className="text-gray-400">워크샵</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4</div>
              <div className="text-gray-400">프로젝트</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
}