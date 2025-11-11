import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FileTextIcon, GraduationCapIcon, CheckCircleIcon, MailIcon, HelpCircleIcon, BookOpenIcon } from "lucide-react";

export function ApplyPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar isRecruitmentOpen={true} />

      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center relative px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            지원하기
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            보안과 해킹에 열정을 가진 당신을 기다립니다
          </p>
          <a
            href="https://forms.gle/your-form-link" // 구글폼 링크로 교체 가능
            className="inline-block px-10 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all text-lg"
          >
            온라인 지원서 작성하기
          </a>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">지원 자격</h2>
          <p className="text-gray-400 text-lg">
            다음 조건에 해당하는 학생이라면 누구나 지원할 수 있습니다
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 flex items-start gap-4">
            <FileTextIcon className="w-10 h-10 text-green-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">보안에 관심 있는 학생</h3>
              <p className="text-gray-400">
                정보보안, 해킹, 시스템, 네트워크, 리버싱 등 다양한 분야에 흥미가 있는 학생
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 flex items-start gap-4">
            <GraduationCapIcon className="w-10 h-10 text-green-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">IT단과대학 1~3학년 재학생</h3>
              <p className="text-gray-400">
                동아리 활동을 통해 함께 성장하고 싶은 IT계열 학부생
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">선발 절차</h2>
          <p className="text-gray-400 text-lg">
            지원부터 합격까지의 과정을 한눈에 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
  {[
    { num: "01", title: "서류 모집", period: "3월 4일 ~ 3월 21일", desc: "온라인 지원서 제출 및 검토" },
    { num: "02", title: "신입생 교육", period: "4월 1일 ~ 4월 30일", desc: "보안 및 프로그래밍 기초 교육" },
    { num: "03", title: "선발 시험", period: "5월 5일", desc: "교육 후 CTF형식의 시험 평가" },
    { num: "04", title: "합격자 발표", period: "5월 15일", desc: "메일 및 공지로 안내" },
  ].map((step) => (
    <div key={step.num} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
      <div className="text-green-400 text-3xl font-bold mb-4">{step.num}</div>
      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
      <p className="text-green-400 text-sm mb-2">{step.period}</p>
      <p className="text-gray-400 text-sm">{step.desc}</p>
    </div>
  ))}
</div>

      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-gray-400 text-lg">
            지원 전, 아래 내용을 꼭 확인하세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <HelpCircleIcon className="w-5 h-5 text-green-400" /> 비전공자도 지원 가능한가요?
            </h3>
            <p className="text-gray-400">
              가능합니다. 보안에 관심과 열정이 있다면 전공과 무관하게 지원할 수 있습니다.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <HelpCircleIcon className="w-5 h-5 text-green-400" /> 활동은 어떻게 진행되나요?
            </h3>
            <p className="text-gray-400">
              정기 세미나, 스터디, CTF 참가, 프로젝트 등 다양한 활동을 통해 실력을 쌓습니다.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <HelpCircleIcon className="w-5 h-5 text-green-400" /> 지원 결과는 언제 확인할 수 있나요?
            </h3>
            <p className="text-gray-400">
              5월 중 합격자에게 메일 및 홈페이지 공지를 통해 안내됩니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
