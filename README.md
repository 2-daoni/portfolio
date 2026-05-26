# 🧑‍💻 Portfolio Website

프론트엔드 개발자 **이다원**의 개인 포트폴리오 웹사이트입니다.  
약 4년간 스타트업에서 헬스케어 도메인의 어드민 시스템, 데이터 시각화 리포트, 디자인 시스템을 주도적으로 설계·구축한 경험을 소개합니다.

🔗 배포 주소: https://frontend-developer-2da1.vercel.app/

<br/>

## 📌 소개

- **이름**: 이다원
- **직무**: Frontend Developer
- **경력**: 약 4년 (스타트업 2곳)
- **주요 도메인**: 헬스케어, 어드민 시스템, 데이터 시각화, 모바일 앱(웹뷰)
- **연락처**: lyumilove9@gmail.com
- **GitHub**: https://github.com/2-daoni
- **블로그**: https://2daoni.tistory.com/

<br/>

## 🛠 Tech Stack

**[Core]**
- Next.js 16
- React 19
- TypeScript 5

**[Styling & UI]**
- Tailwind CSS v4
- MUI (Material UI) v7
- tailwind-merge

**[Libraries]**
- swiper — 프로젝트 이미지 슬라이드
- react-hot-toast — 토스트 알림
- pdfjs-dist — PDF 미리보기 렌더링

**[Dev Tools]**
- ESLint
- Vercel (배포)

<br/>

## 📁 프로젝트 구조

```
portfolio/
├── app/
│   ├── (main)/
│   │   ├── page.tsx          # 메인 홈 페이지
│   │   ├── about/page.tsx    # 소개 페이지
│   │   ├── project/
│   │   │   ├── page.tsx              # 프로젝트 목록
│   │   │   └── [slug]/page.tsx       # 프로젝트 상세
│   │   └── layout.tsx
│   ├── layout.tsx            # 루트 레이아웃 (MUI, Toast 설정)
│   ├── globals.css
│   └── providers.tsx
├── components/
│   ├── about/                # 소개 섹션
│   ├── career/               # 경력 섹션
│   ├── common/               # 공통 컴포넌트 (Subject 등)
│   ├── home/                 # 홈 화면 컨테이너
│   ├── profile/              # 프로필 섹션
│   ├── project/              # 프로젝트 카드 및 상세
│   └── skills/               # 기술 스택 섹션
├── data/
│   └── data.ts               # 프로필, 프로젝트, 경력 데이터
├── assets/                   # 이미지, 아이콘
├── hooks/
│   └── pdfToImage.ts         # PDF → 이미지 변환 훅
├── types/
│   └── type.ts
├── utils/
│   └── highlightText.tsx     # 텍스트 하이라이트 유틸
└── public/
    ├── resume.pdf
    ├── predictReport.pdf
    └── myFinanceReport.pdf
```

<br/>

## 🗂 주요 섹션

| 섹션 | 설명 |
|------|------|
| **프로필** | 이름, 직무, 소개글, 연락처, 이력서 다운로드 |
| **기술 스택** | 프론트엔드, UI/Styling, 상태관리, 협업툴 카테고리별 정리 |
| **경력** | 온택트헬스(2년 3개월), 엔비에이치디(1년 4개월) |
| **프로젝트** | 총 10개 프로젝트 카드 및 상세 페이지 (이미지 슬라이드, 기술 스택, 담당 업무) |
| **소개** | 성격, 활동, 학력 |

<br/>

## 🚀 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
# → http://localhost:3000

# 프로덕션 빌드
npm run build
npm run start
```

<br/>

## 📦 주요 프로젝트 목록

| 프로젝트 | 기간 | 주요 기술 |
|----------|------|-----------|
| 부산시 '찾아가는 의료버스' 어드민 | 2023.08 - 2025.10 | Next.js, TypeScript, Tailwind, Chart.js, jsPDF |
| 헬스·수면·보험 데이터 리포트 시스템 | 2023.09 - 2025.10 | Next.js, TypeScript, Chart.js, html2canvas, jsPDF |
| 통합 헬스케어 어드민 시스템 | 2023.08 - 2024.06 | Next.js, TypeScript, AgoraRTC, Storybook |
| 헬스케어 앱 내 모바일 웹뷰 | 2023.12 - 2024.08 | Next.js, TypeScript, Chart.js |
| 회사 소개 웹사이트 (i18n) | 2024.06 - 2024.08 | Next.js, TypeScript, i18n |
| 버틀러리 - 한옥 숙박 예약 서비스 | 2022.05 - 2022.06 | React, TypeScript, Toss Payments |
| Ohmoss - 팔로워 관리 소셜 앱 | 2023.01 - 2023.06 | React Native, TypeScript, React Query |
| 상인장터 - 중고 거래 앱 | 2022.12 - 2023.01 | React Native, TypeScript |
| 상인장터 Admin | 2022.08 - 2022.12 | React, TypeScript, Chart.js |
| Ohmoss - 링크인바이오 웹 서비스 | 2022.06 - 2022.08 | React, TypeScript, Styled-components |
