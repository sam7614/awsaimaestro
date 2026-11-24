const hackathonChallenges = [
  {
    number: '01', category: 'BUILDING AGENT', title: 'AI 기반 빌딩 설비 연동 규격 자동 생성 Agent',
    summary: '설비 정보만 입력하면 BACnet·Modbus 규격을 추천하고, BMS 연결 설정과 어댑터 코드를 자동 생성합니다.', tags: ['문서 파싱', '규격 추천', '어댑터 생성'],
    scenes: [
      { label: 'DEVICE ONBOARDING', status: 'STEP 1', caption: '설비 문서를 올리면 AI가 연동 항목을 읽습니다.', html: `<div class="scene-upload"><i>PDF</i><strong>AHU-03_Manual.pdf</strong><span>128개 항목 분석 완료</span><b>문서 분석 중 ···</b></div>` },
      { label: 'PROTOCOL MAPPING', status: 'STEP 2', caption: 'BACnet과 Modbus 주소를 자동으로 매핑합니다.', html: `<div class="scene-mapping"><div><b>실내 온도</b><span>AI_TEMP_03</span></div><em>→</em><div><b>BACnet</b><span>AI:3 · AV:12</span></div><small>신뢰도 98% · 검토 2건</small></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '관리자가 실제 빌딩을 보며 AI 에이전트로 설비 연동을 제어합니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/building-agent.webp" alt="" loading="lazy"><figcaption>BUILDING FACILITY AGENT</figcaption></figure>` }
    ]
  },
  {
    number: '02', category: 'ENERGY AI', title: '생성형 AI 기반 에너지 운영 대시보드',
    summary: '자연어 질문으로 에너지 데이터를 분석하고, 필요한 차트와 맞춤형 대시보드를 즉시 만들어 이상 징후까지 설명합니다.', tags: ['자연어 질의', '자동 시각화', '이상 탐지'],
    scenes: [
      { label: 'ASK YOUR ENERGY DATA', status: 'CHAT', caption: '운영자는 자연어로 에너지 현황을 질문합니다.', html: `<div class="scene-chat"><div class="user-bubble">어제 전력 사용이 왜 늘었어?</div><div class="ai-bubble"><i>AI</i><p>14시 이후 냉동기 2호의 부하가 평소보다 31% 높았습니다.</p></div><span>근거 데이터 8개 연결됨</span></div>` },
      { label: 'AUTO VISUALIZATION', status: 'LIVE', caption: '질문에 맞는 비교 화면을 즉시 생성합니다.', html: `<div class="scene-energy"><div><span>어제</span><strong>8.4 MWh</strong><small>+12%</small></div><svg viewBox="0 0 260 90" aria-hidden="true"><polyline points="4,72 38,64 70,67 104,45 138,52 174,22 210,38 256,14"/><line x1="4" y1="75" x2="256" y2="75"/></svg><b>14:00 이상 구간 감지</b></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '에너지 운영자가 현장 설비의 이상을 AI와 함께 찾아 조치합니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/energy-analysis.webp" alt="" loading="lazy"><figcaption>ENERGY OPERATIONS AI</figcaption></figure>` }
    ]
  },
  {
    number: '03', category: 'SMART HVAC', title: '스케줄 기반 HVAC 자동 운전 AI',
    summary: '강의·예약 일정과 기상 데이터를 결합해 냉난방 운전 스케줄을 만들고, 변경 상황에 맞춰 실시간 재계산합니다.', tags: ['일정 분석', '기상 연동', '자동 운전'],
    scenes: [
      { label: 'TODAY SCHEDULE', status: '08:30', caption: '강의와 예약 일정에서 필요한 공간을 찾습니다.', html: `<div class="scene-calendar"><div><b>09:00</b><span>AI 강의 · 301호</span></div><div><b>11:00</b><span>프로젝트 · 204호</span></div><div class="off"><b>14:00</b><span>예약 취소 · 402호</span></div></div>` },
      { label: 'ZONE CONTROL', status: 'AUTO', caption: '사용할 공간만 미리 쾌적하게 운전합니다.', html: `<div class="scene-zones"><div class="on"><b>301</b><span>22.5℃</span><i>가동</i></div><div><b>302</b><span>25.1℃</span><i>대기</i></div><div class="on"><b>204</b><span>23.0℃</span><i>가동</i></div><div><b>402</b><span>OFF</span><i>절전</i></div></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '시설 관리자가 사용 중인 공간만 골라 냉난방을 자동 운전합니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/hvac-operation.webp" alt="" loading="lazy"><figcaption>SMART HVAC OPERATION</figcaption></figure>` }
    ]
  },
  {
    number: '04', category: 'DIGITAL TWIN', title: 'AI 디지털트윈 기반 공간 가시화 및 최적화',
    summary: '2D 도면을 3D 공간으로 바꾸고 설비를 자동 배치해, 상태·사용량을 한눈에 보여주고 최적 운전을 추천합니다.', tags: ['도면 인식', '3D 공간', '설비 최적화'],
    scenes: [
      { label: 'FLOOR PLAN TO 3D', status: 'CONVERT', caption: '2D 도면에서 벽·공간·설비를 자동 인식합니다.', html: `<div class="scene-floorplan"><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M8 8h102v55h65V8h77v134H150V92H75v50H8Z"/><path d="M42 8v55m68-28H42m133 57h77m-52-84v55M75 92v50"/><circle cx="126" cy="78" r="7"/><circle cx="216" cy="78" r="7"/></svg><b>공간 12 · 설비 42 인식</b></div>` },
      { label: 'LIVE DIGITAL TWIN', status: '3D', caption: '설비 상태가 3D 공간 위에 실시간으로 표시됩니다.', html: `<div class="scene-building"><div class="building-iso"><i></i><i></i><i></i><i></i><span>AHU-03</span><b>주의</b></div><small>3층 동측 · 진동값 상승</small></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '정비 기술자가 실제 설비와 디지털 트윈을 겹쳐 보며 고장을 찾습니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/digital-twin.webp" alt="" loading="lazy"><figcaption>DIGITAL TWIN MAINTENANCE</figcaption></figure>` }
    ]
  },
  {
    number: '05', category: 'BUSAN TOUR', title: '외국인 관광객 다국어 맞춤형 안내 Agent',
    summary: '관광객의 취향·위치·날씨를 반영해 다국어 여행 코스를 만들고 교통·축제·맛집 정보를 실시간으로 안내합니다.', tags: ['다국어', '맞춤 코스', '실시간 안내'],
    scenes: [
      { label: 'MULTILINGUAL GUIDE', status: 'EN · KR', caption: '음성이나 문자로 원하는 여행을 편하게 묻습니다.', html: `<div class="scene-phone"><div class="phone-top">BUSAN AI GUIDE <b>EN</b></div><p class="tour-question">“I love local food and the sea.”</p><div class="tour-answer">Great! I made a 4-hour seaside food trip for you.</div><span>● 음성으로 듣기</span></div>` },
      { label: 'YOUR BUSAN ROUTE', status: '4 HOURS', caption: '취향·위치·날씨에 맞춘 동선을 생성합니다.', html: `<div class="scene-route"><svg viewBox="0 0 260 145" aria-hidden="true"><path d="M22 112C54 88 59 37 106 51s45 68 86 44 31-69 50-78"/><circle cx="23" cy="112" r="8"/><circle cx="107" cy="51" r="8"/><circle cx="193" cy="94" r="8"/><circle cx="242" cy="17" r="8"/></svg><div><span>자갈치</span><span>흰여울</span><span>광안리</span></div></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '외국인 여행자가 부산 현장에서 다국어 AI 안내로 이동합니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/tourism-guide.webp" alt="" loading="lazy"><figcaption>BUSAN AI TRAVEL GUIDE</figcaption></figure>` }
    ]
  },
  {
    number: '06', category: 'SMART LOGISTICS', title: 'AI 기반 첨단물류 문서 자동화 Agent',
    summary: 'B/L·Invoice·Packing List를 OCR로 읽고 핵심 항목과 오류를 검증해 HS 코드와 통관 서류 작성을 지원합니다.', tags: ['문서 OCR', '오류 검증', 'HS 코드'],
    scenes: [
      { label: 'DOCUMENT INBOX', status: '3 FILES', caption: '물류 문서를 한 번에 올리면 종류를 자동 분류합니다.', html: `<div class="scene-docs"><div><i>B/L</i><span>bill_of_lading.pdf</span><b>완료</b></div><div><i>INV</i><span>invoice_1028.pdf</span><b>완료</b></div><div><i>PKG</i><span>packing_list.pdf</span><b>분석</b></div></div>` },
      { label: 'OCR FIELD EXTRACTION', status: '96%', caption: '핵심 항목을 읽어 업무 시스템 입력값으로 바꿉니다.', html: `<div class="scene-ocr"><div class="paper-lines"><i></i><i></i><i></i><i></i><mark></mark></div><div><span>SHIPPER</span><b>BUSAN TECH</b><span>WEIGHT</span><b>1,240 KG</b><span>PORT</span><b>BUSAN</b></div></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '항만 작업자가 현장에서 문서를 촬영해 통관 정보를 바로 연결합니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/logistics-ocr.webp" alt="" loading="lazy"><figcaption>PORT DOCUMENT AUTOMATION</figcaption></figure>` }
    ]
  },
  {
    number: '07', category: 'YOUTH CAREER', title: '생성형 AI 기반 청년취업 맞춤형 멘토링 Agent',
    summary: '청년의 이력·역량·희망 직무를 분석해 지역 채용정보와 연결하고, 자소서·면접·학습 경로를 24시간 코칭합니다.', tags: ['직무 매칭', '자소서 코칭', '역량 분석'],
    scenes: [
      { label: 'CAREER PROFILE', status: 'ANALYZED', caption: '이력서에서 강점과 보완 역량을 찾아냅니다.', html: `<div class="scene-profile"><div class="avatar">K</div><div><strong>AI 서비스 개발자</strong><span>직무 적합도 87%</span></div><ul><li class="good">Python · 데이터 분석</li><li class="good">프로젝트 경험</li><li>보완: 클라우드 배포</li></ul></div>` },
      { label: 'LOCAL JOB MATCH', status: '12 JOBS', caption: '역량과 희망 조건에 맞는 지역 채용을 연결합니다.', html: `<div class="scene-jobs"><div><b>AI 솔루션 개발</b><span>부산 · 92% MATCH</span></div><div><b>데이터 엔지니어</b><span>부산 · 86% MATCH</span></div><div><b>클라우드 주니어</b><span>울산 · 81% MATCH</span></div></div>` },
      { label: 'IN THE FIELD', status: 'LIVE', caption: '청년 구직자가 멘토와 함께 AI 모의면접과 직무 코칭을 받습니다.', html: `<figure class="industry-scene"><img src="assets/challenge-scenes/career-coach.webp" alt="" loading="lazy"><figcaption>AI CAREER COACHING</figcaption></figure>` }
    ]
  }
];

const challengeGrid = document.getElementById('challenge-grid');
if (challengeGrid) {
  challengeGrid.innerHTML = hackathonChallenges.map((challenge) => `
    <article class="challenge-card" tabindex="0">
      <div class="challenge-copy"><div class="card-top"><span>${challenge.number} / ${challenge.category}</span><b>↗</b></div><h3>${challenge.title}</h3><p>${challenge.summary}</p><div class="tags">${challenge.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><small class="preview-hint">마우스를 올리거나 탭해 구현 장면 보기</small></div>
      <div class="challenge-preview" aria-hidden="true">${[2, 0, 1].map((sceneIndex, index) => { const scene = challenge.scenes[sceneIndex]; return `<div class="preview-slide scene-slide scene-${challenge.number}-${index + 1}"><div class="preview-head"><span>${scene.label}</span><b>${scene.status}</b></div><div class="scene-stage">${scene.html}</div><small>${scene.caption}</small></div>`; }).join('')}<div class="preview-dots"><i></i><i></i><i></i></div></div>
    </article>`).join('');
}
