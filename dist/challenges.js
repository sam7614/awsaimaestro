const hackathonChallenges = [
  {
    number: '01', category: 'BUILDING AGENT',
    title: 'AI 기반 빌딩 설비 연동 규격 자동 생성 Agent',
    summary: '설비 정보만 입력하면 BACnet·Modbus 규격을 추천하고, BMS 연결 설정과 어댑터 코드를 자동 생성합니다.',
    tags: ['문서 파싱', '규격 추천', '어댑터 생성'],
    metrics: [['연동 준비', '12대'], ['규격 추천', '98%'], ['설정 단계', '4']],
    bars: [76, 92, 68, 84], flow: ['문서 파싱', '규격 매핑', '어댑터 생성']
  },
  {
    number: '02', category: 'ENERGY AI',
    title: '생성형 AI 기반 에너지 운영 대시보드',
    summary: '자연어 질문으로 에너지 데이터를 분석하고, 필요한 차트와 맞춤형 대시보드를 즉시 만들어 이상 징후까지 설명합니다.',
    tags: ['자연어 질의', '자동 시각화', '이상 탐지'],
    metrics: [['전력 절감', '12%'], ['이상 징후', '3건'], ['절감량', '8.4MWh']],
    bars: [45, 62, 78, 54, 88, 70], flow: ['자연어 질문', '자동 차트', '원인 설명']
  },
  {
    number: '03', category: 'SMART HVAC',
    title: '스케줄 기반 HVAC 자동 운전 AI',
    summary: '강의·예약 일정과 기상 데이터를 결합해 냉난방 운전 스케줄을 만들고, 변경 상황에 맞춰 실시간 재계산합니다.',
    tags: ['일정 분석', '기상 연동', '자동 운전'],
    metrics: [['예상 절감', '18%'], ['쾌적도', '92'], ['다음 가동', '08:40']],
    bars: [28, 50, 82, 94, 72, 40], flow: ['시설 일정', '기상 반영', '자동 운전']
  },
  {
    number: '04', category: 'DIGITAL TWIN',
    title: 'AI 디지털트윈 기반 공간 가시화 및 최적화',
    summary: '2D 도면을 3D 공간으로 바꾸고 설비를 자동 배치해, 상태·사용량을 한눈에 보여주고 최적 운전을 추천합니다.',
    tags: ['도면 인식', '3D 공간', '설비 최적화'],
    metrics: [['가동 설비', '42'], ['주의 설비', '3'], ['공실률', '28%']],
    bars: [68, 86, 52, 76, 44], flow: ['도면 인식', '3D 공간', '설비 매핑']
  },
  {
    number: '05', category: 'BUSAN TOUR',
    title: '외국인 관광객 다국어 맞춤형 안내 Agent',
    summary: '관광객의 취향·위치·날씨를 반영해 다국어 여행 코스를 만들고 교통·축제·맛집 정보를 실시간으로 안내합니다.',
    tags: ['다국어', '맞춤 코스', '실시간 안내'],
    metrics: [['추천 코스', '4'], ['지원 언어', '6'], ['혼잡도', '낮음']],
    bars: [70, 48, 82, 64, 90], flow: ['취향·날씨', '코스 생성', '현장 안내']
  },
  {
    number: '06', category: 'SMART LOGISTICS',
    title: 'AI 기반 첨단물류 문서 자동화 Agent',
    summary: 'B/L·Invoice·Packing List를 OCR로 읽고 핵심 항목과 오류를 검증해 HS 코드와 통관 서류 작성을 지원합니다.',
    tags: ['문서 OCR', '오류 검증', 'HS 코드'],
    metrics: [['처리 시간', '1m 24s'], ['오류 발견', '2건'], ['자동 추출', '96%']],
    bars: [96, 88, 72, 91], flow: ['OCR 추출', '필드 검증', 'HS 추천']
  },
  {
    number: '07', category: 'YOUTH CAREER',
    title: '생성형 AI 기반 청년취업 맞춤형 멘토링 Agent',
    summary: '청년의 이력·역량·희망 직무를 분석해 지역 채용정보와 연결하고, 자소서·면접·학습 경로를 24시간 코칭합니다.',
    tags: ['직무 매칭', '자소서 코칭', '역량 분석'],
    metrics: [['직무 적합', '87%'], ['추천 공고', '12'], ['보완 역량', '3']],
    bars: [87, 72, 64, 91, 78], flow: ['역량 분석', '지역 일자리', '면접 코칭']
  }
];

function metricMarkup(items) {
  return items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('');
}

function barsMarkup(values) {
  return values.map((value, index) => `<i style="--bar:${value}%" aria-hidden="true"><b>${index + 1}</b></i>`).join('');
}

function flowMarkup(items) {
  return items.map((item, index) => `<span>${item}</span>${index < items.length - 1 ? '<b>→</b>' : ''}`).join('');
}

const challengeGrid = document.getElementById('challenge-grid');
if (challengeGrid) {
  challengeGrid.innerHTML = hackathonChallenges.map((challenge) => `
    <article class="challenge-card" tabindex="0">
      <div class="challenge-copy">
        <div class="card-top"><span>${challenge.number} / ${challenge.category}</span><b>↗</b></div>
        <h3>${challenge.title}</h3>
        <p>${challenge.summary}</p>
        <div class="tags">${challenge.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <small class="preview-hint">마우스를 올리거나 탭해 예상 화면 보기</small>
      </div>
      <div class="challenge-preview" aria-hidden="true">
        <div class="preview-slide preview-overview">
          <div class="preview-head"><span>EXPECTED DASHBOARD</span><b>LIVE</b></div>
          <div class="preview-metrics">${metricMarkup(challenge.metrics)}</div>
          <div class="preview-chart">${barsMarkup(challenge.bars)}</div>
          <small>운영 데이터 실시간 분석</small>
        </div>
        <div class="preview-slide preview-flow">
          <div class="preview-head"><span>AI AUTOMATION FLOW</span><b>02</b></div>
          <div class="flow-visual">${flowMarkup(challenge.flow)}</div>
          <div class="pulse-line"><i></i><i></i><i></i><i></i><i></i></div>
          <small>입력부터 실행까지 한 번에</small>
        </div>
        <div class="preview-slide preview-insight">
          <div class="preview-head"><span>AI INSIGHT</span><b>03</b></div>
          <div class="insight-ring"><span>${challenge.metrics[0][1]}</span></div>
          <div class="insight-list"><i>상태 분석 완료</i><i>추천 시나리오 생성</i><i>의사결정 준비</i></div>
          <small>설명 가능한 추천 결과</small>
        </div>
        <div class="preview-dots"><i></i><i></i><i></i></div>
      </div>
    </article>`).join('');
}
