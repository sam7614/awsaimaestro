const programs=[[
['10:00–12:00','생성형 AI & Bedrock 핵심 · 프롬프트 엔지니어링'],['12:00–13:00','중식'],['13:00–14:00','AI Agent & Vibe Coding · Kiro 실습'],['14:00–15:30','RAG 빠른 구축법 · 미니 RAG 시스템 핸즈온'],['15:30–17:00','부산시 7개 내외 주제 브리핑 · 팀 편성 · 아키텍처 스케치'],['17:00–18:00','개발 환경 세팅 & Q&A']],[['09:00–10:00','개회식 & 과제 확인'],['10:00–13:00','Sprint 1 · 핵심 기능 개발'],['13:00–14:00','중식'],['14:00–18:00','Sprint 2 · 기능 확장 & 통합'],['19:00–20:00','중간 체크포인트 · 팀별 3분 발표'],['20:00–02:00','Sprint 3 · 야간 개발 & 기술 멘토링']],[['02:00–06:00','Sprint 4 · 솔루션 완성 & 테스트'],['06:00–09:00','발표 준비 & 데모 리허설'],['09:00–11:30','최종 발표 · 팀당 7분 피칭 + 3분 Q&A'],['11:30–14:00','우수팀 시상식 & 폐회']]];
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectDay(index){tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});const panel=document.getElementById('program-content');panel.setAttribute('aria-labelledby','tab'+index);panel.replaceChildren(...programs[index].map(([time,label])=>{const row=document.createElement('div');row.className='program-row';const t=document.createElement('time');t.textContent=time;const text=document.createElement('span');text.textContent=label;row.append(t,text);return row}))}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectDay(i));tab.addEventListener('keydown',e=>{let next=i;if(e.key==='ArrowRight')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();selectDay(next);tabs[next].focus()})});selectDay(0);

// The 2026 application period has closed.
function updateDeadline() {
  document.getElementById('deadline-label').textContent = '2026 지원은';
  document.getElementById('deadline-timer').textContent = '여기까지!';
  document.getElementById('deadline-suffix').textContent = '';
  document.getElementById('deadline-note').textContent = '다음 설렘은 2027년에 만나요.';
  const link = document.getElementById('deadline-apply');
  link.textContent = '참가 여부 확인하기';
  link.href = '#participant-check';
  link.removeAttribute('target');
}
updateDeadline();const deadlineBar = document.querySelector('.deadline-bar');
function syncDeadlineHeight() {
  document.documentElement.style.setProperty('--deadline-height', `${Math.ceil(deadlineBar.getBoundingClientRect().height)}px`);
}
syncDeadlineHeight();
if ('ResizeObserver' in window) new ResizeObserver(syncDeadlineHeight).observe(deadlineBar);
else window.addEventListener('resize', syncDeadlineHeight);
const participantForm = document.getElementById('participant-check');
if (participantForm) {
  const nameInput = document.getElementById('participant-name');
  const result = document.getElementById('participant-check-result');
  const submitButton = participantForm.querySelector('button[type="submit"]');

  participantForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = nameInput.value.normalize('NFC').trim();
    result.className = 'participant-check-result';

    if (name.length < 2) {
      result.textContent = '앗, 이름을 두 글자 이상 적어주세요.';
      result.classList.add('not-found');
      nameInput.focus();
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = '명단 찾는 중…';
    result.textContent = '잠깐만요. 명단을 살펴보고 있어요.';

    try {
      const response = await fetch('/api/check-participant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || '확인에 실패했습니다.');

      if (data.found) {
        result.textContent = '신청이 되었습니다! 이름도 열정도, 명단에 착 붙어 있어요.';
        result.classList.add('success');
      } else {
        result.textContent = '신청하지 않았습니다. 혹시 이름을 다시 한번 살펴봐 주세요.';
        result.classList.add('not-found');
      }
    } catch (error) {
      result.textContent = error.message || '명단이 잠깐 숨었어요. 조금 뒤 다시 확인해 주세요.';
      result.classList.add('not-found');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = '참가 여부 확인';
    }
  });
}