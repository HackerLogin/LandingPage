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
              함께 배우고 성장하는 보안 및 해킹 동아리
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
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-400 hover:text-white transition-colors text-sm">
                  지원하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contact@hackerlogin.com</li>
              <li>서울특별시 강남구</li>
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