import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ArrowLeftIcon } from 'lucide-react';
export function ApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    major: '',
    phone: '',
    experience: '',
    motivation: '',
    interests: [] as string[]
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('지원서가 제출되었습니다!');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest) ? formData.interests.filter(i => i !== interest) : [...formData.interests, interest]
    });
  };
  const interests = ['Web Security', 'Network Security', 'Cryptography', 'Reverse Engineering', 'Forensics', 'CTF'];
  return <div className="min-h-screen w-full bg-black text-white">
      <Navbar isRecruitmentOpen={true} />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeftIcon className="w-4 h-4" />
            <span>돌아가기</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">지원서 작성</h1>
            <p className="text-gray-400 text-lg">
              HackerLogin과 함께 성장할 준비가 되셨나요?
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">기본 정보</h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  이름 *
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white" placeholder="홍길동" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  이메일 *
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white" placeholder="example@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-300 mb-2">
                    학번 *
                  </label>
                  <input type="text" id="studentId" name="studentId" required value={formData.studentId} onChange={handleChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white" placeholder="20240001" />
                </div>

                <div>
                  <label htmlFor="major" className="block text-sm font-medium text-gray-300 mb-2">
                    전공 *
                  </label>
                  <input type="text" id="major" name="major" required value={formData.major} onChange={handleChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white" placeholder="컴퓨터공학과" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  연락처 *
                </label>
                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white" placeholder="010-0000-0000" />
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">관심 분야</h2>
              <p className="text-sm text-gray-400 mb-4">
                관심있는 분야를 선택해주세요 (복수 선택 가능)
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map(interest => <button key={interest} type="button" onClick={() => handleInterestToggle(interest)} className={`px-4 py-2 rounded-lg font-medium transition-all ${formData.interests.includes(interest) ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                    {interest}
                  </button>)}
              </div>
            </div>

            {/* Experience & Motivation */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">추가 정보</h2>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  보안/해킹 관련 경험
                </label>
                <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white resize-none" placeholder="관련 경험이 있다면 자유롭게 작성해주세요 (선택사항)" />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">
                  지원 동기 *
                </label>
                <textarea id="motivation" name="motivation" required value={formData.motivation} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white resize-none" placeholder="HackerLogin에 지원하게 된 동기를 작성해주세요" />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full px-8 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all text-lg">
              지원서 제출
            </button>
          </form>
        </div>
      </div>
    </div>;
}