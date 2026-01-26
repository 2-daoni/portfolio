import { Project } from "@/types/type";

export const ProfileData = {
  name: "이다원",
  role: "Frontend Developer",
  tagline: "소통과 협업으로 사용자 경험을 완성하는 프론트엔드 개발자",
  keywords: ["협업 중심 개발", "UX 개선", "디자인 시스템", "어드민 개발", "데이터 시각화"],
  contacts: {
    email: "lyumilove9@gmail.com",
    github: "https://github.com/2daoni1",
  },
  skills: [
    {
      category: "프론트엔드",
      items: [
        { name: "Next.js", img: NextIcon },
        { name: "React", img: ReactIcon },
        { name: "TypeScript", img: TSIcon },
        { name: "JavaScript", img: JSIcon },
      ],
    },
    {
      category: "UI & Styling",
      items: [
        { name: "Tailwind CSS", img: TailwindIcon },
        { name: "MUI", img: MUIIcon },
        { name: "Rizz UI", img: RizzUIIcon },
        { name: "styled-components", img: StyledComponentIcon },
        { name: "Sass", img: SassIcon },
        { name: "Storybook", img: StoryBookIcon },
      ],
    },
    {
      category: "상태관리",
      items: [
        { name: "React Query", img: ReactQueryIcon },
        { name: "Zustand", img: ZustandIcon },
        { name: "Mobx", img: MobxIcon },
      ],
    },
    {
      category: "환경 및 협업툴",
      items: [
        { name: "Github", img: GithubIcon },
        { name: "AWS amplify", img: AmplifyIcon },
        { name: "Vercel", img: VercelIcon },
        { name: "Jira", img: JiraIcon },
        { name: "Figma", img: FigmaIcon },
        { name: "BitBucket", img: BitBucketIcon },
        { name: "Confluence", img: ConfluenceIcon },
      ],
    },
  ],
};

// 프로젝트
export const Projects: Project[] = [
  {
    title: "통합 헬스케어 어드민 시스템",
    duration: "2023.08 - 2024.06",
    techStack: ["Next.js", "TypeScript", "AgoraRTC", "Tailwind CSS", "Storybook"],
    description:
      "헬스케어 서비스 운영을 위한 통합 어드민 시스템으로, 다양한 도메인의 데이터를 관리하고 의료진 및 운영자의 업무 효율을 개선하는 것을 목표로 구축되었습니다.",
    responsibilities: [
      "대시보드 및 회원 관리 등 어드민 핵심 기능 구현",
      "AgoraRTC 기반 화상 채팅 기능 구현",
      "공통 UI 컴포넌트 설계 및 디자인 시스템 구축",
      "프론트엔드 파트 리딩 및 일정·업무 분배",
    ],
    icon: SupervisorAccountIcon,
  },
  {
    title: "헬스·수면·보험 데이터 리포트 시스템",
    duration: "2023.09 - 2025.10",
    techStack: ["Next.js", "TypeScript", "Chart.js", "html2canvas", "jsPDF"],
    description:
      "헬스케어 및 금융 데이터를 시각화한 리포트 시스템으로, 다양한 고객사 요구에 맞춘 맞춤형 리포트를 웹·앱 환경에서 제공했습니다.",
    responsibilities: [
      "건강·수면·보험(GA) 리포트 웹/앱 버전 구현",
      "Line, Bar, Radar, Doughnut 차트 동적 렌더링",
      "웹 리포트를 PDF로 변환 및 다운로드 기능 구현",
      "고객사별 CI/BI 반영 가능한 재사용 컴포넌트 구조 설계",
      "공통 UI 기반 조건부 렌더링 및 스타일 분리",
    ],
    icon: AssessmentIcon,
  },
  {
    title: "Ohmoss - 푸시 기반 팔로워 관리 소셜 앱",
    duration: "2023.01 - 2023.06",
    techStack: ["React Native", "TypeScript", "React Query", "i18n", "CodePush", "Figma"],
    description:
      "푸시 기반 팔로워 관리 소셜 앱으로, 사용자가 채널을 운영하고 팔로워와 소통할 수 있는 모바일 서비스입니다. 다국어 지원과 안정적인 업데이트 환경을 구축하여 글로벌 사용자를 고려한 앱 경험을 제공했습니다.",
    responsibilities: [
      "채널 검색(검색·QR 스캔), 팔로잉/팔로워 목록 UI 및 로직 구현",
      "푸시 발송 기능 구현 (타겟 설정, 내용 임시 저장)",
      "알림 내역 조회 (검색, 기간 조회, 필터링)",
      "태그 CRUD 및 회원 정보 수정 기능 구현",
      "다국어(i18n) 처리 및 전반적인 앱 UI/UX 디자인",
      "딥링크 설계 및 CodePush를 통한 앱 업데이트 운영",
      "App Store / Google Play 심사 대응 경험",
    ],
    icon: EmojiEmotionsIcon,
  },
  {
    title: "상인장터 - 소상공인을 위한 중고 거래 앱",
    duration: "2022.12 - 2023.01",
    techStack: ["React Native", "TypeScript", "CodePush", "Figma"],
    description: "소상공인을 위한 중고 거래 플랫폼으로, 이벤트와 커뮤니티 중심의 사용자 참여를 강화한 모바일 앱입니다.",
    responsibilities: [
      "이벤트용 베스트글 조회 화면 제작",
      "이벤트 배너 제작 및 디자인 수정",
      "기존 앱 유지보수 및 CodePush를 활용한 기능 업데이트",
      "실사용자 피드백을 반영한 UI 개선",
    ],
    icon: DeliveryDiningIcon,
  },
  {
    title: "상인장터 Admin - 자사 앱 관리 어드민",
    duration: "2022.08 - 2022.12",
    techStack: ["React", "TypeScript", "Chart.js", "REST API"],
    description:
      "자사 앱 상인장터 운영을 위한 내부 관리용 어드민 웹 서비스로, 콘텐츠 및 사용자 관리를 효율화하기 위해 구축되었습니다.",
    responsibilities: [
      "게시글·카테고리 CRUD 및 검색·필터링 기능 구현",
      "Q&A 답변 관리 기능 구현",
      "월/일별 가입자 수 통계 그래프 구현",
      "운영 효율성을 고려한 관리자 UI 설계",
    ],
    icon: SupervisorAccountIcon,
  },
  {
    title: "Ohmoss - 링크인바이오 웹 서비스",
    duration: "2022.06 - 2022.08",
    techStack: ["React", "TypeScript", "Styled-components", "Figma"],
    description: "사용자가 다양한 링크를 하나의 페이지로 관리할 수 있는 링크인바이오 웹 서비스입니다.",
    responsibilities: [
      "서비스 소개 페이지 제작",
      "회원가입 기능 구현",
      "테마 템플릿 시뮬레이터 UI 구현",
      "전반적인 웹 디자인 및 UI 구성",
    ],
    icon: SupervisorAccountIcon,
  },
  {
    title: "버틀러리 - 한옥 숙박 예약 웹 서비스",
    duration: "2022.05 - 2022.06",
    techStack: ["React", "TypeScript", "Toss Payments", "REST API"],
    description:
      "한옥 숙박 예약을 위한 웹 서비스로, 예약부터 결제까지의 사용자 흐름을 고려한 UX 중심의 서비스를 구현했습니다.",
    responsibilities: [
      "전반적인 UI 및 페이지 구조 설계",
      "예약(조회·신청·취소·사전 체크인) 기능 구현",
      "소셜 로그인 및 회원 정보 수정 기능 구현",
      "숙소 검색 및 필터링 기능 구현",
      "Toss 결제 연동 및 반응형 UI 적용",
    ],
    icon: MapsHomeWorkIcon,
  },
];

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

import NextIcon from "@/assets/skills/next.svg";
import ReactIcon from "@/assets/skills/react.svg";
import TSIcon from "@/assets/skills/typescript.svg";
import TailwindIcon from "@/assets/skills/tailwind.svg";
import MUIIcon from "@/assets/skills/Material UI.svg";
import StyledComponentIcon from "@/assets/skills/styledComponents.png";
import ReactQueryIcon from "@/assets/skills/react-query-icon.svg";
import ZustandIcon from "@/assets/skills/zustand.svg";
import MobxIcon from "@/assets/skills/mobx.svg";
import SassIcon from "@/assets/skills/icons8-sass-아바타.svg";
import StoryBookIcon from "@/assets/skills/Storybook.svg";
import JiraIcon from "@/assets/skills/Jira.svg";
import JSIcon from "@/assets/skills/JavaScript.svg";
import FigmaIcon from "@/assets/skills/Figma.svg";
import BitBucketIcon from "@/assets/skills/BitBucket.svg";
import ConfluenceIcon from "@/assets/skills/Confluence.svg";
import GithubIcon from "@/assets/skills/GitHub.svg";
import VercelIcon from "@/assets/skills/Vercel.svg";
import AmplifyIcon from "@/assets/skills/aws-amplify.png";
import RizzUIIcon from "@/assets/skills/rizzui.svg";
