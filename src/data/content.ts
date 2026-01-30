export const content = {
    nav: {
        logo: "Insurance Check",
        items: [
            { label: "보험료 점검", href: "#audit" },
            { label: "보험 다이어트", href: "#diet" },
            { label: "비교분석", href: "#comparison" },
            { label: "상담 신청", href: "#contact" },
        ],
    },
    hero: {
        title: "보험료, 줄일 수 있는지 먼저 점검해보세요",
        subtitle: "중복보장과 불필요한 특약을 정리하고, 전 보험사 비교분석으로 현재 상황에 가장 알맞은 설계를 제안해 드립니다.",
        trustPoints: [
            "과한 권유 없음",
            "비교 기준 공개",
            "이해될 때까지 설명",
        ],
        cta: {
            primary: "무료 보험료 점검 신청",
            secondary: "보험 다이어트 가능성 보기",
        },
        disclaimer: "점검 결과에 따라 절감 가능성이 달라질 수 있습니다.",
    },
    audit: {
        sectionTitle: "보험료 점검이란?",
        description: "현재 가입된 보험의 효율성을 분석하여, 불필요한 지출을 줄이고 보장을 최적화하는 과정입니다.",
        cards: [
            { title: "중복보장", desc: "여러 상품에서 중복으로 나가는 비용 확인" },
            { title: "보장 공백", desc: "꼭 필요한데 빠져있는 보장 내역 진단" },
            { title: "특약 효율", desc: "납입 대비 혜택이 적은 불필요 특약 분석" },
            { title: "갱신 구조", desc: "나중에 보험료가 오르는 구조인지 점검" },
        ],
        results: [
            "정리 우선순위 안내",
            "유지·조정·대체 가이드 제공",
            "알기 쉬운 비교표 제공",
        ],
    },
    diet: {
        sectionTitle: "보험 다이어트",
        description: "보험료는 줄이되, 꼭 필요한 보장은 든든하게 유지하는 것이 핵심입니다.",
        steps: [
            { step: "STEP 1", title: "중복 제거", desc: "겹치는 보장을 찾아 하나로 통합하거나 정리합니다." },
            { step: "STEP 2", title: "비효율 특약 정리", desc: "잘 사용하지 않거나 가성비가 낮은 특약을 덜어냅니다." },
            { step: "STEP 3", title: "목적에 맞게 재배치", desc: "절약된 비용으로 부족한 보장을 채우거나 저축으로 돌립니다." },
        ],
        note: "개인 상황 및 상품 구조에 따라 결과는 달라질 수 있습니다.",
    },
    comparison: {
        sectionTitle: "전 보험사 비교분석",
        description: "특정 보험사에 편향되지 않고, 객관적인 데이터로 모든 상품을 비교합니다.",
        criteria: [
            "보장 범위",
            "갱신/비갱신 구조",
            "총 납입 보험료",
            "면책 및 감액 기간",
            "의무 특약 구성",
        ],
        resultNote: "비교 결과는 한눈에 보기 쉬운 표로 제공해 드립니다.",
        qa: [
            { q: "Q. 특정 회사만 추천하나요?", a: "아니요, 전 보험사 상품을 객관적인 기준으로 비교하여 추천합니다." },
            { q: "Q. 왜 보험료가 비싸질 수 있나요?", a: "보장 범위를 넓히거나 갱신형을 비갱신형으로 바꿀 경우 초기 비용은 오를 수 있습니다." },
            { q: "Q. 점검 시 필요한 자료는?", a: "갖고 계신 증권이나 가입 내역만 있으면 됩니다. (파일 업로드 없이 안내만 해드립니다)" },
        ],
    },
    insurers: {
        sectionTitle: "국내 주요 보험사 비교 가능",
        description: "특정 회사에 한정되지 않고, 다양한 보험사 상품을 기준에 따라 비교합니다.",
        list: [
            { name: "삼성생명", logo: "/logos/Samsung.png" }, // Fixed case
            { name: "교보생명", logo: "/logos/kyobo.png" },
            { name: "한화생명", logo: "/logos/hanhwa.png" },
            { name: "현대해상", logo: "/logos/hyundai.png" },
            { name: "DB손해보험", logo: "/logos/Db.png" }, // Fixed case
            { name: "KB손해보험", logo: "/logos/KB.png" }, // Fixed case
            { name: "메리츠화재", logo: "/logos/meritz.png" },
            { name: "NH농협생명", logo: "/logos/nh.png" },
            { name: "동양생명", logo: "/logos/dongyang.jpg" }, // Fixed extension
            { name: "흥국생명", logo: "/logos/heungkuk.png" },
        ]
    },
    faq: {
        sectionTitle: "자주 묻는 질문",
        items: [
            { q: "점검은 정말 무료인가요?", a: "네, 보험료 점검 및 분석 상담은 100% 무료로 진행됩니다." },
            { q: "점검 후 꼭 가입해야 하나요?", a: "아닙니다. 점검 결과를 보시고 필요하다고 판단되실 때만 진행하시면 됩니다." },
            { q: "기존 보험을 무조건 해지하라고 하나요?", a: "아니요, 좋은 보험은 유지를 권장하고 불필요한 부분만 조정을 제안합니다." },
            { q: "상담은 얼마나 걸리나요?", a: "보통 20~30분 정도 소요되며, 상황에 따라 다를 수 있습니다." },
            { q: "갱신형과 비갱신형의 차이는 무엇인가요?", a: "갱신형은 초기 비용이 저렴하지만 주기적으로 정보가 변동되며, 비갱신형은 초기 비용이 높지만 만기까지 일정합니다." },
            { q: "비교는 어떤 기준으로 진행되나요?", a: "동일 보장 대비 보험료, 보장 범위, 회사의 지급 여력 등을 종합적으로 고려합니다." },
        ],
    },
    contact: {
        sectionTitle: "상담 신청",
        description: "전문 상담사가 꼼꼼하게 분석하여 최적의 솔루션을 제안해 드립니다.",
        buttons: [
            { label: "카카오톡으로 점검 신청", type: "kakao", href: "https://open.kakao.com/o/sSNaex1c" },
            { label: "전화로 문의하기", type: "phone", href: "tel:010-6303-5561" },
        ],
        placeholder: "개인정보는 상담 목적 외에는 절대 사용되지 않습니다.",
    },
    footer: {
        contactInfo: "전화: 010-6303-5561 | 이메일: starhyuns@gmail.com | 카카오톡: sSNaex1c",
        copyright: "© 2024 Insurance Check. All rights reserved.",
        links: ["개인정보처리방침", "이용약관"],
    },
};
