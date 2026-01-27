import { Career, Project } from "@/types/type";

export const ProfileData = {
  name: "이다원",
  role: "Frontend Developer",
  tagline: "소통과 협업으로 사용자 경험을 완성하는 프론트엔드 개발자",
  description:
    "소통과 개선을 통해 사용자 경험을 발전시키는 프론트엔드 개발자입니다.\n\n지난 4년간 스타트업 환경에서 헬스케어 도메인의 어드민 시스템, 데이터 시각화 리포트, 디자인 시스템을 주도적으로 설계·구축하며 서비스 품질 개선에 기여해왔습니다.\n\n백엔드 개발자, 기획자, 디자이너와 긴밀하게 협업하며 각 직무의 요구사항을 이해하고, 이를 화면 구조와 인터랙션 설계에 반영해 사용자에게 더 직관적이고 일관된 경험을 제공하는 데 집중해왔습니다.\n협업 과정에서 발생하는 다양한 요구사항과 문제를 단순히 전달받는 데 그치지 않고, 맥락을 파악한 뒤 해결 방향을 함께 논의하며 의사결정 과정의 효율을 높이는 소통을 지향합니다.\n\n문제의 원인을 분석하고 개선을 반복하는 과정에서 스스로의 역량을 확장해왔으며, 작은 개선을 꾸준히 쌓아 팀과 서비스에 실질적인 변화를 만드는 개발자, 그리고 함께 일하고 싶은 동료가 되는 것을 목표로 하고 있습니다.",
  keywords: ["프론트엔드 개발자", "협업", "소통", "함께 일하고 싶은 동료"],
  contacts: {
    email: "lyumilove9@gmail.com",
    phone: "010-5648-5633",
    github: "https://github.com/2daoni1",
    blog: "https://2daoni.tistory.com/",
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
  activity: [
    { title: "정보처리기사", duration: "2021.06", type: "certification" },
    { title: "네트워크관리사 2급", duration: "2020.01", type: "certification" },
    { title: "윈도우포렌식전문가 2급", duration: "2019.09", type: "certification" },
    {
      title: "원티드X위코드 프론트엔드 프리온보딩 코스",
      duration: "2022.02",
      description:
        "6주간 팀단위의 실무기반 협업 과제를 수행하며 혼자서는 할 수 없던 협업과 소통을 경험하였고 좋은 동료, 좋은 개발자가 되기 위해 노력하였습니다.",
      type: "activity",
    },
    {
      title: "스파르타코딩클럽 서포터즈 르탄즈 1기",
      duration: "2021.02",
      description:
        "스파르타 코딩 클럽 서포터즈 르탄즈 1기 활동을 통해 3개의 강의를 수강한 후 간단한 사이트를 제작하고 왕초보, 비전공자분들도 흥미를 느낄 수 있게끔 홍보 컨텐츠 물을 제작하며 기초적인 이론을 다지고 콘텐츠 마케팅 경험도 할 수 있었습니다.",
      type: "activity",
    },
  ],
  education: {
    schoolName: "중부대학교",
    duration: "2018.03~2022.02",
    department: "정보보호학과",
    description:
      "ʻ웹프로그래밍’ 강의 수강 - 내 손으로 코드를 작성하고 그 결과를 웹페이지로 바로 확인하고 그것을 더 다듬어 나갈 때 느꼈던 기쁨이 ʻ프론트엔드 개발자가 되어야겠다.’ 라는 목표가 확립되는 결정적 계기가 되었습니다.\n졸업 학점 : 4.09/4.5",
  },
};

// 프로젝트
export const Projects: Project[] = [
  {
    slug: "health-admin",
    title: "통합 헬스케어 어드민 시스템",
    duration: "2023.08 - 2024.06",
    techStack: ["Next.js", "TypeScript", "AgoraRTC", "Tailwind CSS", "Storybook"],
    description:
      "자사 헬스케어 서비스 통합 운영을 위한 어드민 시스템으로, 다양한 도메인의 데이터를 관리하는 것을 목표로 구축되었습니다.",
    responsibilities: [
      "대시보드 및 회원 관리 등 어드민 핵심 기능 구현",
      "AgoraRTC 기반 화상 채팅 기능 구현",
      "공통 UI 컴포넌트 설계 및 디자인 시스템 구축",
      "프론트엔드 파트 리딩 및 일정·업무 분배",
    ],
    icon: SupervisorAccountIcon,
    img: [Dashboard, Dashboard2, Dashboard3],
  },
  {
    slug: "busan-admin",
    title: "부산시 '찾아가는 의료버스' 어드민 페이지 개발",
    duration: "2023.08 - 2025.10",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Chart.js", "jsPDF"],
    description:
      "부산시 '찾아가는 의료버스'사업에서 의료진들이 사용하는 어드민으로 환자 등록 및 진료 정보 관리, 일정 관리 등을 목표로 구축되었습니다.",
    responsibilities: [
      "의료진용 어드민 페이지 프론트엔드 개발",
      "환자 정보 조회, 진료 기록 입력, 예약 관리 기능 구현",
      "어드민 전용 디자인 시스템을 설계하여 재사용성 확보",
    ],
    icon: SupervisorAccountIcon,
    img: [Busan, Busan2, Busan3, Busan4, Busan5],
  },
  {
    slug: "health-report",
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
    img: [Sleep1, Sleep2, Sleep3, Sleep4],
  },
  {
    slug: "hanok",
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
    img: [Hanok, Hanok2, Hanok3],
  },
  {
    slug: "ohmoss",
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
    img: [OhmossApp],
  },
  {
    slug: "sanginjangteo",
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
    img: [Sangin],
  },
  {
    slug: "saninAdmin",
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
    img: [],
  },
  {
    slug: "ohmoss-web",
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
    img: [OhmossWeb],
  },
];

// 경력
export const Careers: Career[] = [
  {
    company: "온택트헬스 (ONTACT HEALTH Co., Ltd.)",
    period: "2023.08 - 2025.10",
    duration: "2년 3개월",
    position: "프론트엔드 개발자",
    employmentType: "정규직",
    summary:
      "헬스케어 데이터 기반 웹·모바일 서비스 및 다수 고객사 리포트, 통합 어드민 시스템을 개발하며 디자인 시스템과 실시간 기능까지 폭넓게 경험",
    work: [
      "약 6개월간 프론트엔드 파트장으로 근무",
      "부산시와 함께하는 '찾아가는 의료버스'의 의료진용 어드민 페이지 프론트엔드 개발",
      "대구의료원, 마이금융파트너, 미래에셋 등 다양한 고객사 리포트 UI 개발",
      "Chart.js 기반 데이터 시각화 (Line / Bar / Radar / Doughnut)",
      "어드민 전용 디자인 시스템 설계 및 재사용 구조 구축",
      "AgoraRTC 기반 실시간 화상 채팅 기능 구현",
      "공통 컴포넌트 구조 설계로 유지보수성 및 확장성 개선",
      "앱 내 웹뷰 기반 리포트·코칭 UI 구현 JavaScript 핸들러를 통한 앱-웹 연동 처리",
      "디자이너 협업 기반 디자인 시스템 설계 및 구현",
    ],
  },
  {
    company: "엔비에이치디 (NBHD Co., Ltd.)",
    period: "2022.04 - 2023.07",
    duration: "1년 4개월",
    position: "프론트엔드 개발자",
    employmentType: "정규직",
    summary: "소셜 앱과 중고거래 플랫폼, 어드민 웹 등 다양한 서비스의 프론트엔드 개발과 운영, 배포 경험을 쌓음",
    work: [
      "팔로워 관리, 채널 검색(텍스트/QR) 기능 구현",
      "알림 내역 조회 및 필터링 기능 개발",
      "딥링크 설계 및 CodePush 업데이트 운영",
      "가입자 수 통계 그래프 시각화",
      "기존 서비스 유지보수 및 신규 기능 추가",
      "CodePush 기반 업데이트 배포 및 사용자 피드백 반영",
      "페이지 구조 설계 및 반응형 웹 퍼블리싱",
      "소셜 로그인 및 회원정보 수정",
      "숙소 검색·필터링 및 Toss 결제 연동",
    ],
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

import Sleep1 from "@/assets/project/sleep1.png";
import Sleep2 from "@/assets/project/sleep2.png";
import Sleep3 from "@/assets/project/sleep3.png";
import Sleep4 from "@/assets/project/sleep4.png";
import Dashboard from "@/assets/project/dashboard.png";
import Dashboard2 from "@/assets/project/dashboard2.png";
import Dashboard3 from "@/assets/project/dashboard3.png";
import Busan from "@/assets/project/busan.png";
import Busan2 from "@/assets/project/busan2.png";
import Busan3 from "@/assets/project/busan3.png";
import Busan4 from "@/assets/project/busan4.png";
import Busan5 from "@/assets/project/busan5.png";
import OhmossApp from "@/assets/project/ohmoss-app.png";
import OhmossWeb from "@/assets/project/ohmoss-web.png";
import Sangin from "@/assets/project/sangin.png";
import Hanok from "@/assets/project/hanok.png";
import Hanok2 from "@/assets/project/hanok2.png";
import Hanok3 from "@/assets/project/hanok3.png";
