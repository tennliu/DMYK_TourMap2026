const MAPS = {
  zh: 'https://www.google.com/maps/d/u/0/embed?mid=1rRdivtSSXdWh8BxGX4fBDGGxGVJreWs&ehbc=2E312F&noprof=1',
  id: 'https://www.google.com/maps/d/u/0/embed?mid=1PCcQ-a0AleJ9cxy1Og8aXP_DmLXo5sQ&ehbc=2E312F&noprof=1',
  vi: 'https://www.google.com/maps/d/u/0/embed?mid=11Q0rpz6nuInAKJnXiam9roXVsQNVetI&ehbc=2E312F&noprof=1',
  th: 'https://www.google.com/maps/d/u/0/embed?mid=1abFeuxyhvUyf83cywdrj2YoBQbhYu7Q&ehbc=2E312F&noprof=1',
  ko: 'https://www.google.com/maps/d/u/0/embed?mid=1BTrcbLT1AmiZiAzNUVTzjBV3vQTcpxU&ehbc=2E312F&noprof=1',
  ja: 'https://www.google.com/maps/d/u/0/embed?mid=1n7nVPeA0pFnO-KfoKk0uI5ZGKMRmyj4&ehbc=2E312F&noprof=1',
  en: 'https://www.google.com/maps/d/u/0/embed?mid=1w4YoXJ04uwHL7ilM4jDfTUZX7v7rLhw&ehbc=2E312F&noprof=1'
};

const COPY = {
  zh: {
    description: '台北最具流量魅力的✨東門永康商圈✨不論你想尋找舌尖上的感動，還是一場午後文藝漫步，這張地圖是你的隨身導遊，為你精選商圈內的優質店家🌟\n\n一鍵查詢🔎 店家地址、電話等關鍵資訊一目了然。隨搜隨導🚀 結合手機定位導航，直接帶路不走冤枉路！現在就放大地圖，開啟屬於你的東門永康探索之旅吧！✨',
    share:'分享', language:'選擇語言', close:'關閉'
  },
  en: {
    description: 'Taipei’s vibrant ✨Dongmen YongKang District✨ is full of discoveries. Whether you’re looking for an unforgettable bite or an artsy afternoon stroll, this map is your pocket guide, featuring selected quality shops throughout the district. 🌟\n\nFind what you need in one tap 🔎—addresses, phone numbers, and other key information at a glance. Search and go 🚀 with mobile location-based navigation to guide you straight there. Zoom in now and begin your own Dongmen YongKang adventure! ✨',
    share:'Share', language:'Choose Language', close:'Close'
  },
  ja: {
    description: '台北屈指の賑わいを誇る✨東門永康エリア✨。心に残るグルメを探すときも、午後の街歩きを楽しみたいときも、このマップがあなたの携帯ガイドとして、エリア内の選りすぐりのお店をご案内します🌟\n\nワンタップ検索🔎で、住所・電話番号などの重要情報をひと目で確認。検索したらそのままナビ🚀。スマートフォンの位置情報とナビゲーションを使って、迷わず目的地へ。さあ地図を拡大して、あなただけの東門永康探索を始めましょう！✨',
    share:'シェア', language:'言語を選択', close:'閉じる'
  },
  ko: {
    description: '타이베이에서 가장 활기찬 곳 중 하나인 ✨동먼융캉 상권✨. 기억에 남는 맛을 찾고 싶을 때도, 여유로운 오후 감성 산책을 즐기고 싶을 때도, 이 지도가 손안의 가이드가 되어 상권의 엄선된 매장을 소개합니다🌟\n\n한 번에 검색🔎 주소, 전화번호 등 핵심 정보를 한눈에 확인하세요. 찾고 바로 길찾기🚀 스마트폰 위치 기반 내비게이션으로 목적지까지 바로 안내합니다. 지금 지도를 확대하고 나만의 동먼융캉 탐험을 시작해 보세요!✨',
    share:'공유', language:'언어 선택', close:'닫기'
  },
  th: {
    description: '✨ย่านตงเหมินหย่งคัง✨ หนึ่งในย่านที่คึกคักและมีเสน่ห์ที่สุดของไทเป ไม่ว่าคุณจะตามหารสชาติที่ประทับใจหรืออยากเดินเล่นชมศิลปะในยามบ่าย แผนที่นี้คือไกด์คู่กายที่คัดสรรร้านคุณภาพในย่านไว้ให้คุณ🌟\n\nค้นหาได้ในคลิกเดียว🔎 ดูที่อยู่ เบอร์โทร และข้อมูลสำคัญได้ทันที ค้นหาแล้วนำทางต่อได้เลย🚀 ด้วยระบบระบุตำแหน่งและนำทางบนมือถือ พาคุณตรงไปถึงจุดหมายโดยไม่หลงทาง! ซูมแผนที่แล้วเริ่มออกสำรวจตงเหมินหย่งคังในแบบของคุณได้เลย!✨',
    share:'แชร์', language:'เลือกภาษา', close:'ปิด'
  },
  vi: {
    description: '✨Đông Môn – Vĩnh Khang✨ là một trong những khu phố sôi động và cuốn hút nhất Đài Bắc. Từ ẩm thực đáng nhớ đến những buổi dạo phố thư thái, bản đồ này giúp bạn nhanh chóng khám phá các cửa hàng nổi bật trong khu vực🌟\n\nTra cứu chỉ với một chạm🔎 Xem địa chỉ, số điện thoại và thông tin cần thiết, rồi dùng định vị trên điện thoại để tiếp tục hành trình🚀. Phóng to bản đồ và bắt đầu khám phá Đông Môn – Vĩnh Khang!✨',
    share:'Chia sẻ', language:'Chọn ngôn ngữ', close:'Đóng'
  },
  id: {
    description: '✨Dongmen YongKang✨ adalah salah satu kawasan paling ramai dan menarik di Taipei. Dari kuliner berkesan hingga jalan santai di sore hari, peta ini membantu Anda menemukan pilihan toko menarik di kawasan ini🌟\n\nCari dengan satu sentuhan🔎 Lihat alamat, nomor telepon, dan informasi penting, lalu lanjutkan perjalanan dengan lokasi ponsel🚀. Perbesar peta dan mulai jelajahi Dongmen YongKang!✨',
    share:'Bagikan', language:'Pilih Bahasa', close:'Tutup'
  }
};

const languageScreen = document.getElementById('languageScreen');
const mapScreen = document.getElementById('mapScreen');
const mapFrame = document.getElementById('mapFrame');
const overlay = document.getElementById('overlay');
const overlayDescription = document.getElementById('overlayDescription');
const shareBtn = document.getElementById('shareBtn');
const languageBtn = document.getElementById('languageBtn');
const closeBtn = document.getElementById('closeBtn');
const sideBtn = document.getElementById('sideBtn');
const locateBtn = document.getElementById('locateBtn');
const locateLabel = document.getElementById('locateLabel');
const locationBeacon = document.getElementById('locationBeacon');
const locationStatus = document.getElementById('locationStatus');

let currentLang = 'zh';
let locationWatchId = null;
let lastCenteredPosition = null;
let lastRecenterAt = 0;
let locationStatusTimer = null;
let savedBeacon = null;
let locateState = 'idle';

const LOCATION_ZOOM = 18;
const RECENTER_DISTANCE_METERS = 25;
const RECENTER_MIN_INTERVAL_MS = 7000;

function applyOverlayCopy(lang) {
  const c = COPY[lang] || COPY.en;
  overlayDescription.textContent = c.description;
  shareBtn.textContent = c.share;
  languageBtn.textContent = c.language;
  closeBtn.textContent = c.close;
}

function openMap(lang) {
  resetLocationAnchor();
  currentLang = lang;
  applyOverlayCopy(lang);
  mapFrame.src = MAPS[lang];
  languageScreen.classList.add('is-hidden');
  mapScreen.classList.remove('is-hidden');
  closeOverlay();
  window.scrollTo(0,0);
}

function showLanguagePage() {
  resetLocationAnchor();
  closeOverlay();
  mapFrame.src = '';
  mapScreen.classList.add('is-hidden');
  languageScreen.classList.remove('is-hidden');
  window.scrollTo(0,0);
}

function openOverlay() {
  overlay.classList.add('is-visible');
  overlay.setAttribute('aria-hidden','false');
}
function closeOverlay() {
  overlay.classList.remove('is-visible');
  overlay.setAttribute('aria-hidden','true');
}

function showLocationStatus(message, duration = 2200) {
  clearTimeout(locationStatusTimer);
  locationStatus.textContent = message;
  locationStatus.classList.add('is-visible');
  if (duration > 0) {
    locationStatusTimer = setTimeout(() => {
      locationStatus.classList.remove('is-visible');
    }, duration);
  }
}

function setLocateState(state) {
  locateState = state;
  const active = state === 'active';
  const anchored = state === 'anchored';

  locateBtn.classList.toggle('is-active', active);
  locateBtn.classList.toggle('has-anchor', anchored);
  locateBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
  locateLabel.textContent = active
    ? '瀏覽地圖 / Browse Map'
    : anchored
      ? '回到定位點 / Return to Beacon'
      : '我的位置 / Locate Me';

  locationBeacon.classList.toggle('is-visible', active);
  mapScreen.classList.toggle('is-following', active);
}

function distanceMeters(a, b) {
  if (!a || !b) return Infinity;
  const R = 6371000;
  const toRad = value => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function centeredMapUrl(lat, lng) {
  const url = new URL(MAPS[currentLang]);
  url.searchParams.set('ll', `${lat.toFixed(6)},${lng.toFixed(6)}`);
  url.searchParams.set('z', String(LOCATION_ZOOM));
  return url.toString();
}

function recenterMap(lat, lng) {
  mapFrame.src = centeredMapUrl(lat, lng);
  lastCenteredPosition = {lat, lng};
  lastRecenterAt = Date.now();
}

function handleLocation(position) {
  const {latitude: lat, longitude: lng, accuracy} = position.coords;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

  savedBeacon = {lat, lng, accuracy};
  recenterMap(lat, lng);
  setLocateState('active');

  const accuracyText = Number.isFinite(accuracy) ? ` · ±${Math.round(accuracy)}m` : '';
  showLocationStatus(`定位點已建立 / Beacon anchored${accuracyText}`, 2600);
}

function handleLocationError(error) {
  if (error && error.code === 1) {
    showLocationStatus('未允許位置權限 / Location permission denied', 3600);
    resetLocationAnchor();
    return;
  }
  if (error && error.code === 2) {
    showLocationStatus('目前無法取得位置 / Location unavailable', 3200);
    return;
  }
  if (error && error.code === 3) {
    showLocationStatus('定位逾時，持續嘗試中 / Location timed out', 3200);
    return;
  }
  showLocationStatus('無法取得位置 / Unable to locate', 3200);
}

function startLocationTracking() {
  if (!navigator.geolocation) {
    showLocationStatus('此瀏覽器不支援定位 / Geolocation unavailable', 3600);
    return;
  }

  locateBtn.classList.add('is-loading');
  locateLabel.textContent = '定位中 / Locating…';

  navigator.geolocation.getCurrentPosition(
    position => {
      locateBtn.classList.remove('is-loading');
      handleLocation(position);
    },
    error => {
      locateBtn.classList.remove('is-loading');
      setLocateState(savedBeacon ? 'anchored' : 'idle');
      handleLocationError(error);
    },
    {enableHighAccuracy:true, maximumAge:0, timeout:12000}
  );
}

function clearLocationWatch() {
  if (locationWatchId !== null && navigator.geolocation) {
    navigator.geolocation.clearWatch(locationWatchId);
  }
  locationWatchId = null;
  lastCenteredPosition = null;
  lastRecenterAt = 0;
  locateBtn.classList.remove('is-loading');
}

function enterBrowseMode() {
  clearLocationWatch();
  setLocateState(savedBeacon ? 'anchored' : 'idle');
  showLocationStatus('瀏覽模式 · 定位點已保存 / Browse mode · beacon saved', 2600);
}

function returnToBeacon() {
  if (!savedBeacon) {
    startLocationTracking();
    return;
  }
  recenterMap(savedBeacon.lat, savedBeacon.lng);
  setLocateState('active');
  showLocationStatus('已回到定位點 / Returned to beacon', 2200);
}

function resetLocationAnchor() {
  clearLocationWatch();
  savedBeacon = null;
  setLocateState('idle');
}

const MASTER_WIDTH = 390;
const PHONE_BREAKPOINT = 600;
const appStage = document.querySelector('.app-stage');
const phoneShell = document.querySelector('.phone-shell');

function syncAppScale() {
  const viewport = window.visualViewport;
  const vw = viewport ? viewport.width : window.innerWidth;
  const vh = viewport ? viewport.height : window.innerHeight;
  const scale = vw <= PHONE_BREAKPOINT ? vw / MASTER_WIDTH : 1;

  appStage.style.width = `${MASTER_WIDTH * scale}px`;
  appStage.style.height = `${vh}px`;
  phoneShell.style.width = `${MASTER_WIDTH}px`;
  phoneShell.style.height = `${vh / scale}px`;
  phoneShell.style.transform = `scale(${scale})`;
}

syncAppScale();
window.addEventListener('resize', syncAppScale, {passive:true});
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', syncAppScale, {passive:true});
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => openMap(btn.dataset.lang));
});
sideBtn.addEventListener('click', openOverlay);
closeBtn.addEventListener('click', closeOverlay);
languageBtn.addEventListener('click', showLanguagePage);
locateBtn.addEventListener('click', () => {
  if (locateState === 'active') {
    enterBrowseMode();
  } else if (locateState === 'anchored' && savedBeacon) {
    returnToBeacon();
  } else {
    startLocationTracking();
  }
});
overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });

shareBtn.addEventListener('click', async () => {
  const url = `${location.origin}${location.pathname}`;
  const data = {title:'Dongmen YongKang Guide', text:'Dongmen YongKang District Touring Guide', url};
  try {
    if (navigator.share) await navigator.share(data);
    else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      shareBtn.textContent = currentLang === 'zh' ? '連結已複製' : 'Link copied';
      setTimeout(() => applyOverlayCopy(currentLang), 1200);
    }
  } catch (_) {}
});
