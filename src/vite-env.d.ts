/// <reference types="vite/client" />

// 환경 변수 타입 정의
interface ImportMetaEnv {
  readonly VITE_RECRUITMENT_OPEN: string;
  readonly VITE_RECRUITMENT_GEN: string;
}

// import.meta.env 타입 확장
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
