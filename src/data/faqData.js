import shortid from 'shortid';

const faqData = [
    { 
        id: shortid.generate(), 
        href: 'intro', 
        title: '커피챗 소개',
        list: [
            {
                question: '커피챗은 어떤 서비스인가요?',
                answer: '<a href="123">123123</a>',
            },
            {
                question: '커피챗은 어떤 목적으로 이용하나요?',
                answer: '<a href="123">456456</a>',
            },
            {
                question: '커피챗은 무슨 뜻인가요?',
                answer: '',
            },                        
        ],         
    },
    { 
        id: shortid.generate(), 
        href: 'how-to', 
        title: '커피챗 이용 방법',
        list: [
            {
                question: '커피챗 이용 프로세스가 궁금해요!',
                answer: '',
            },
            {
                question: '예약 확정은 어떻게 알 수 있나요?',
                answer: '',
            },
            {
                question: '커피챗은 어떻게 진행되나요?',
                answer: '',
            },
            {
                question: '커피챗 가격은 얼마인가요?',
                answer: '',
            },
            {
                question: '커피챗 파트너들은 어떤 사람인가요?',
                answer: '',
            },
            {
                question: '리스트에 개별문의로 안내된 파트너는 어떤 파트너인가요?',
                answer: '',
            },
            {
                question: '저도 커피챗 파트너가 될 수 있나요?',
                answer: '',
            },
        ],         
    },
    { 
        id: shortid.generate(), 
        href: 'request', 
        title: '커피챗 신청 시',
        list: [
            {
                question: '커피챗은 신청은 어떻게 하나요?',
                answer: '',
            },
            {
                question: '커피챗 신청 시 내 정보는 어디까지 보호되나요?',
                answer: '',
            },
            {
                question: '사전 질문 작성은 필수인가요?',
                answer: '',
            },
            {
                question: '신청 후 사전 질문 수정이 가능한가요?',
                answer: '',
            },
            {
                question: '당일로 예약은 어려운가요?',
                answer: '',
            },
        ],
    },
    { 
        id: shortid.generate(), 
        href: 'reservation', 
        title: '커피챗 신청(예약) 후',
        list: [
            {
                question: '신청 이후의 프로세스가 궁금해요!',
                answer: '',
            },
            {
                question: '신청 취소는 어떻게 하나요?',
                answer: '',
            },
            {
                question: '파트너가 거절할 수도 있나요?',
                answer: '',
            },
            {
                question: '예약된 시간은 한국시간 기준인가요?',
                answer: '',
            },
            {
                question: '예약 확정 후 취소는 어떻게 하나요?',
                answer: '',
            },
            {
                question: '예약 확정 후 일정 변경은 어떻게 하나요?',
                answer: '',
            },
            {
                question: '해외 거주자는 어떻게 알림을 받나요?',
                answer: '',
            },
        ],
    },
    { 
        id: shortid.generate(), 
        href: 'progress', 
        title: '커피챗 진행 시',
        list: [
            {
                question: '커피챗 입장은 어떻게 하나요?',
                answer: '',
            },
            {
                question: '커피챗 입장 제한 시간이 있나요?',
                answer: '',
            },
            {
                question: '커피챗이 취소 되었어요!',
                answer: '',
            },
            {
                question: '커피챗 진행 중에 상대방이 나갔어요!',
                answer: '',
            },
            {
                question: 'VPN 비활성화가 필요한가요?',
                answer: '',
            },
            {
                question: '앱이 갑자기 멈춘 것 같아요!',
                answer: '',
            },
            {
                question: '상대방의 소리가 들리지 않아요!',
                answer: '',
            },
            {
                question: '20분이 되면 자동으로 종료되나요?',
                answer: '',
            },
            {
                question: '커피챗 진행 시 주의할 점이 있나요?',
                answer: '',
            },
        ],
    },
    { 
        id: shortid.generate(), 
        href: 'end', 
        title: '커피챗 종료 후',
        list: [
            {
                question: '파트너에게 인사는 어떻게 남길 수 있나요?',
                answer: '',
            },
            {
                question: '파트너를 평가하고 싶어요!',
                answer: '',
            },
        ],
    },
    { 
        id: shortid.generate(), 
        href: 'partner', 
        title: '파트너 이용 방법',
        list: [
            {
                question: '파트너 신청은 어떻게 하나요?',
                answer: '',
            },
            {
                question: '파트너의 정보는 어디까지 보호되나요?',
                answer: '',
            },
            {
                question: '파트너가 되면 무엇이 좋은가요?',
                answer: '',
            },
            {
                question: '파트너 신청 자격은 어떻게 되나요?',
                answer: '',
            },
            {
                question: '파트너 인증 메일이 오지 않아요!',
                answer: '',
            },
            {
                question: '파트너로 참여를 잠시 쉬어갈 수 있나요?',
                answer: '',
            },
            {
                question: '이직 등으로 회사/직무 업데이트가 필요해요!',
                answer: '',
            },
            {
                question: '파트너 리스트에서 사라졌어요!',
                answer: '',
            },
            {
                question: '리워드 정보 변경이 필요해요!',
                answer: '',
            },
        ],
    },
    { 
        id: shortid.generate(), 
        href: 'member', 
        title: '회원 가입 및 정보 변경',
        list: [
            {
                question: '가입 시 인증 문자가 오지 않아요!',
                answer: '',
            },
            {
                question: '비밀번호 설정 시 특수문자는 어디까지 허용되나요?',
                answer: '',
            },
            {
                question: '회원 정보 변경이 필요해요!',
                answer: '',
            },
            {
                question: '비밀번호가 기억나지 않아요!',
                answer: '',
            },
            {
                question: '회원 탈퇴는 어디서 하나요?',
                answer: '',
            },
        ],
    },
    { 
        id: shortid.generate(), 
        href: 'pay', 
        title: '결제',
        list: [
            {
                question: '커피챗 신청 후 입금 안내가 오지 않아요!',
                answer: '',
            },
            {
                question: '커피챗 입금 후 언제 매칭이 되나요?',
                answer: '',
            },
            {
                question: '파트너가 거절하면 환급이 되나요?',
                answer: '',
            },
            {
                question: '쿠폰 코드는 어디에 입력하나요?',  
                answer: '',
            },
        ],
    },
];

export default faqData;