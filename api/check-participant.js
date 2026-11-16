const SHEET_ID = '1kUQiW5f-JRArY1uJONUbRjaVXKDNU0NFa2o9a1QZ8NQ';
const SHEET_GID = '806422959';
const NAME_RANGE = 'C2:C';

let cachedNames = null;
let cacheExpiresAt = 0;

function normalizeName(value) {
  return String(value || '').normalize('NFC').replace(/\s+/g, '').trim();
}

function parseSingleColumnCsv(csv) {
  return csv.split(/\r?\n/).map((line) => {
    const value = line.trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1).replace(/""/g, '"');
    }
    return value;
  }).filter(Boolean);
}

async function getParticipantNames() {
  if (cachedNames && Date.now() < cacheExpiresAt) return cachedNames;
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${SHEET_GID}&range=${NAME_RANGE}`;
  const response = await fetch(url, { headers: { 'User-Agent': 'AWS-AI-Maestro-Participant-Check/1.0' } });
  if (!response.ok) throw new Error(`Sheet request failed: ${response.status}`);
  const csv = await response.text();
  cachedNames = new Set(parseSingleColumnCsv(csv).map(normalizeName).filter(Boolean));
  cacheExpiresAt = Date.now() + 5 * 60 * 1000;
  return cachedNames;
}

module.exports = async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'POST 요청만 사용할 수 있습니다.' });
  }

  const name = normalizeName(request.body?.name);
  if (!name || name.length < 2 || name.length > 30) {
    return response.status(400).json({ error: '이름을 정확히 입력해 주세요.' });
  }

  try {
    const names = await getParticipantNames();
    return response.status(200).json({ found: names.has(name) });
  } catch (error) {
    console.error('Participant check failed', error);
    return response.status(503).json({ error: '명단을 불러오지 못했어요. 잠시 후 다시 확인해 주세요.' });
  }
};
