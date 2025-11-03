import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldIcon, GithubIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldIcon className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold text-white">HackerLogin</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Since 1998, 보안과 해킹에 열정을 가진 사람들이 모인 곳
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="mailto:contact@hackerlogin.com" className="text-gray-400 hover:text-green-400 transition-colors">
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Location</h3>
            <ul className="space-y-2">
              <li className='font-extralight text-gray-400 text-sm'>광주 동구 조선대5길 65 309,</li>
              <li className='font-extralight text-gray-400 text-sm'>조선대학교 IT융합대학 4층 해커로그인</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className='font-semibold'>회장</li>
              <li className='font-extralight'>이다인 010-2127-7532</li>
              <li className='font-semibold'>부회장</li>
              <li className='font-extralight'>제갈은지 010-4698-2513</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} HackerLogin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}