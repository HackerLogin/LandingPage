# HackerLogin Landing Page
<img width="2880" height="1526" alt="MainPage1" src="https://github.com/user-attachments/assets/36858b17-751b-4820-8af3-dba27a75b6b2" />
<img width="2880" height="1522" alt="MainPage2" src="https://github.com/user-attachments/assets/06e6143c-8945-46fa-a5c5-af355236c4ea" />
<img width="2880" height="1524" alt="MainPage3" src="https://github.com/user-attachments/assets/6da0e934-7fe8-47f1-beac-98ce17d96ac2" />

HackerLogin 동아리의 공식 랜딩 페이지입니다. 동아리 소개와 지원 안내를 제공합니다.


## ✨ 주요 기능

- **홈페이지** (`/`) - 동아리 소개 및 주요 활동 하이라이트
- **활동 페이지** (`/activities`) - 동아리의 상세 활동 내역 및 프로젝트 소개
- **지원 페이지** (`/apply`) - 동아리 지원 관련 정보 및 지원 시스템
- **반응형 디자인** - 모든 디바이스에서 최적화된 사용자 경험
- **환경변수 기반 모집 관리** - `.env`를 통한 모집 상태 및 기수 설정

## 🛠 기술 스택

### Frontend
- **React** 18.3.1 - 컴포넌트 기반 UI 라이브러리
- **TypeScript** 5.5.4 - 타입 안전성을 위한 정적 타입 언어
- **Vite** 5.2.0 - 빠른 개발 서버 및 빌드 도구
- **React Router DOM** 6.26.2 - 클라이언트 사이드 라우팅
- **Tailwind CSS** 3.4.17 - 유틸리티 우선 CSS 프레임워크

### Development & Build
- **ESLint** - 코드 품질 및 일관성 관리
- **PostCSS** & **Autoprefixer** - CSS 후처리 도구
- **GitHub Actions** - 자동 배포 (GitHub Pages)

### Icons & UI
- **Lucide React** 0.522.0 - 아름다운 아이콘 세트

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 20 이상
- npm

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/HackerLogin/LandingPage.git
   cd LandingPage
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   개발 서버가 http://localhost:5173 에서 실행됩니다.

### 추가 명령어 목록

1. **빌드**
   ```bash
   npm run build
   ```

2. **미리보기**
   ```bash
   npm run preview
   ```


## 📁 프로젝트 구조

```
HackerLogin-2/
├── .github/workflows/      # GitHub Actions 배포 워크플로
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Footer.tsx     # 푸터 컴포넌트
│   │   ├── Navbar.tsx     # 네비게이션 바
│   │   └── ScrollToTop.tsx # 페이지 전환 시 스크롤 리셋
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── HomePage.tsx   # 메인 페이지
│   │   ├── ActivitiesPage.tsx # 활동 소개 페이지
│   │   └── ApplyPage.tsx  # 지원 페이지
│   ├── App.tsx            # 메인 앱 컴포넌트 및 라우팅
│   ├── index.tsx          # 애플리케이션 진입점
│   └── index.css          # 글로벌 스타일
├── public/                # 정적 파일
├── .env                   # 환경변수 설정
└── package.json           # 프로젝트 의존성 및 스크립트
```

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 미리보기
npm run preview

# ESLint 검사
npm run lint
```

## 🚀 배포

main 브랜치에 변경사항이 push되면, GitHub Actions가 자동으로 빌드 및 GitHub Pages 배포를 수행합니다.

### 자동 배포
- `main` 브랜치에 push 시 자동 배포
- SPA 라우팅을 위한 404.html fallback 자동 생성

## ⚙️ 모집 시스템 관리

모집 상태와 기수는 `.env` 파일을 통해 관리됩니다:

```env
VITE_RECRUITMENT_OPEN=false  # 모집 상태 (true: 모집중, false: 모집종료)
VITE_RECRUITMENT_GEN=29      # 현재 모집 기수
```

이 값들을 변경하여 웹사이트의 모집 상태를 동적으로 제어할 수 있습니다.

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. feature 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 문의

HackerLogin 동아리 관련 문의사항이 있으시면 언제든지 연락해 주세요!

---

Made with ❤️ by HackerLogin 김범중
