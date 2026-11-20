/* ============================================================
   THEMES  (each: outerBg, card, text, hl, accent, accentText,
                  muted, title, subtitle, char)
   ============================================================ */
const THEMES = {
  Default: {
    outerBg:'#faf9f7', card:'#ffffff', text:'#1c1b1a',
    hl:'#e6e6e6', hl2:'#efefef',
    accent:'#1c1b1a', accentText:'#ffffff',
    muted:'#6b635e',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffffff'
  },
  // Dry Sage / Beige / Cornsilk / Papaya Whip / Light Bronze 팔레트
  Sage: {
    outerBg:'#fefae0', card:'#ffffff', text:'#000000',
    hl:'#ccd5ae', hl2:'#dbe1bc',
    accent:'#d4a373', accentText:'#fefae0',
    muted:'#a1764a',
    title:'#fefae0', subtitle:'#faedcd', char:'#faedcd'
  },
  // 로즈 통합: 로즈·피오니 색을 반씩 섞은 블렌드, 버튼 = 모브 로즈(#7a4252), 본문 글자는 순검정
  Peony: {
    outerBg:'#fdf2f3', card:'#ffffff', text:'#000000',
    hl:'#eabbc6', hl2:'#f8dedc',
    accent:'#7a4252', accentText:'#ffffff',
    muted:'#80596a',
    title:'#fbeef1', subtitle:'#fdf2f3', char:'#f8dedc'
  },
  // 대사 강조 = 스모키 로즈 애쉬(#554a48), 속마음 = 그레이 미스트(#4b4748)
  Noir: {
    outerBg:'#1a1816', card:'#222020', text:'#e8e6e1',
    hl:'#554a48', hl2:'#4b4748',
    accent:'#b9a981', accentText:'#1a1612',
    muted:'#8a8278',
    title:'#ffffff', subtitle:'#e8e6e1', char:'#d9c89c'
  },
  // 바탕(#a8a8c2)·Play 버튼(#181a4e)은 유지, 카드는 흰색, 본문 글자는 순검정
  Lavender: {
    outerBg:'#a8a8c2', card:'#ffffff', text:'#000000',
    hl:'#d9d5ef', hl2:'#e9e7f6',
    accent:'#181a4e', accentText:'#f7f6f8',
    muted:'#2d2a47',
    title:'#c0c0d8', subtitle:'#ffffff', char:'#c0c0d8'
  },
  Sky: {
    outerBg:'#d6e7ff', card:'#ffffff', text:'#000000',
    hl:'#c7d8ee', hl2:'#dbe6f4',
    accent:'#253a5b', accentText:'#ffffff',
    muted:'#9ab5d9',
    title:'#e5f5ff', subtitle:'#ffffff', char:'#e5f5ff'
  },
  // #FBEFEF / #FFE2E2 / #F5CBCB / #C5B3D3 코튼 캔디 팔레트 (플레이 버튼 포인트 = #C5B3D3, 본문 글자는 순검정)
  'Cotton Candy': {
    outerBg:'#ffe9e9', card:'#ffffff', text:'#000000',
    hl:'#f7d4d4', hl2:'#fbefef',
    accent:'#c5b3d3', accentText:'#3d2f4a',
    muted:'#a892b8',
    title:'#ebe0f4', subtitle:'#fbefef', char:'#f5cbcb'
  },
  Lime: {
    outerBg:'#edf6d8', card:'#ffffff', text:'#000000',
    hl:'#b2eee4', hl2:'#ddf6f1',
    accent:'#fdf4af', accentText:'#1f3a16',
    muted:'#4f998b',
    title:'#fefbe4', subtitle:'#edf6d8', char:'#edf6d8'
  },
  // 바탕 = 카드(#161e28) 한 판, 블록은 남색(대사 #36495f / 속마음 #2b3a4d)에 본문색 글자로 통일,
  // 금색(#bf9f6f)은 Play 버튼·EQ에만, 헤더~푸터 글자는 크림→샴페인 한 계열 (푸터는 밝기만 낮춤)
  'Old Money Dark': {
    outerBg:'#161e28', card:'#161e28', text:'#ebe5d8',
    hl:'#36495f', hl2:'#2b3a4d', playBg:'#2b3a4d',
    accent:'#bf9f6f', accentText:'#161e28',
    muted:'#a8946c',
    title:'#f3ead6', subtitle:'#e0d6c0', char:'#cfb98c'
  },
  // 세피아 통합: 세피아 바탕(#f2eadb / #fff7ec) + 올드머니 레드 강조(#923838), 본문 글자는 순검정
  'Old Money Light': {
    outerBg:'#f2eadb', card:'#fff7ec', text:'#000000',
    hl:'#eadfc9', hl2:'#f1eadc',
    accent:'#923838', accentText:'#fff7ec',
    muted:'#7a5f4c',
    title:'#faeeea', subtitle:'#fff7ec', char:'#fff7ec'
  },
  // 대사 = 민트(#9fe0d8), 속마음 = 밀크초코 베이지(#eee2d4)로 색 계열 분리, 본문 다크 초코
  'Mint Choco': {
    outerBg:'#e2f5f2', card:'#ffffff', text:'#2e1f12',
    hl:'#9fe0d8', hl2:'#eee2d4',
    accent:'#5d4129', accentText:'#ecf8f6',
    muted:'#7a5a3a',
    title:'#e4cfb4', subtitle:'#e2f5f2', char:'#e2f5f2'
  },
  // 흑백 필름 팔레트: 순수 그레이스케일, 흰색 Play 버튼
  Monochrome: {
    outerBg:'#0e0e0e', card:'#181818', text:'#e9e9e9',
    hl:'#3e3e3e', hl2:'#2c2c2c',
    accent:'#ececec', accentText:'#111111',
    muted:'#7d7d7d',
    title:'#ffffff', subtitle:'#e9e9e9', char:'#d0d0d0'
  },
  // 가독성 보정: 카드 순백, 본문 진갈색(#331400), 속마음 배경을 카드와 구분되는 앰버 베이지로,
  // 푸터 글자 대비 확보(#8f5f12), 정지 버튼은 연한 꿀색으로 재생 버튼과 분리
  Honeypot: {
    outerBg:'#fbe9b8', card:'#ffffff', text:'#331400',
    hl:'#ffd96a', hl2:'#f8e3b8', playBg:'#f6dc94',
    accent:'#4e1f00', accentText:'#ffd45e',
    muted:'#8f5f12',
    title:'#fff6dc', subtitle:'#fff4d6', char:'#ffd45e'
  },
  // #FAFAFA / #E1EEFF / #C2CFD8 / #543A3A 시티 팔레트 (플레이 버튼 포인트 = #543A3A, 본문 글자는 순검정)
  City: {
    outerBg:'#e1eeff', card:'#ffffff', text:'#000000',
    hl:'#c2cfd8', hl2:'#e5eaef',
    accent:'#543a3a', accentText:'#fafafa',
    muted:'#8a9aa8',
    title:'#dfcdc8', subtitle:'#fafafa', char:'#e1eeff'
  },
  // 귤빛 바탕 + 연두 잎 Play 버튼(#7fb558)에 진초록 아이콘(#173a10), 정지 버튼은 연한 귤색, 본문 글자는 순검정
  Tangerine: {
    outerBg:'#ffeedd', card:'#ffffff', text:'#000000',
    hl:'#ffd2a8', hl2:'#fde6d2', playBg:'#ffd2a8',
    accent:'#7fb558', accentText:'#173a10',
    muted:'#9a5a2c',
    title:'#f3f9ea', subtitle:'#fff6ee', char:'#ffc27a'
  },
  // 아쿠아 바탕 + 산호 Play 버튼(#ff7f6a)에 적산호 아이콘(#6b1e14), 정지 버튼은 청록, 본문 글자는 순검정
  Lagoon: {
    outerBg:'#d8f1f1', card:'#ffffff', text:'#000000',
    hl:'#a9e0e0', hl2:'#dcf0f0', playBg:'#0b6e74',
    accent:'#ff7f6a', accentText:'#6b1e14',
    muted:'#3b7c80',
    title:'#ffe0d6', subtitle:'#eefafa', char:'#ffb4a2'
  },
  // 다크 올리브: 갈색 기운 올리브 바탕 + 마른 올리브 잎 Play 버튼(#b8c17e), 본문 글자는 아이보리
  'Dark Olive': {
    outerBg:'#1b1d14', card:'#24271c', text:'#ebe7d6',
    hl:'#4b5333', hl2:'#363a27', playBg:'#363a27',
    accent:'#b8c17e', accentText:'#1b1d14',
    muted:'#9c9a7c',
    title:'#f2efdf', subtitle:'#e4e0cc', char:'#cdd29f'
  },
  // 살구 크림 바탕 + 살구 강조 + 딥 로즈 Play 버튼(#c9566c), 본문 글자는 순검정
  Apricot: {
    outerBg:'#fdeee1', card:'#ffffff', text:'#000000',
    hl:'#f8cba4', hl2:'#fde3cd', playBg:'#f8cba4',
    accent:'#c9566c', accentText:'#fff4ee',
    muted:'#9a5f3c',
    title:'#fff1e4', subtitle:'#fff8f0', char:'#f8cba4'
  },
  // 버터 바: 버터 노랑 강조(#f7e097) + 포장지 파랑 Play 버튼(#3b8ece), 정지 버튼 ❚❚만 황갈색(#8a6a1c), 본문 글자는 순검정
  'Butter Bar': {
    outerBg:'#fcf5de', card:'#ffffff', text:'#000000',
    hl:'#f7e097', hl2:'#fcf2d5', pauseText:'#8a6a1c',
    accent:'#3b8ece', accentText:'#ffffff',
    muted:'#8f8256',
    title:'#fdf8e7', subtitle:'#ffffff', char:'#fdf8e7'
  },
  // 블러시 핑크 바탕 + 콘플라워 Play 버튼(#7088d8), 본문 글자는 순검정
  Blush: {
    outerBg:'#fff0f0', card:'#ffffff', text:'#000000',
    hl:'#ffd3d6', hl2:'#ffe8ea', playBg:'#ffd3d6',
    accent:'#7088d8', accentText:'#ffffff',
    muted:'#9a5a63',
    title:'#fff3f4', subtitle:'#ffffff', char:'#d3dcff'
  },
  // 하늘색 바탕 + 병아리 노랑 Play 버튼(#ffc93c)에 진갈색 아이콘, 본문 글자는 순검정
  'Baby Blue': {
    outerBg:'#e8f3fc', card:'#ffffff', text:'#000000',
    hl:'#c6e2f7', hl2:'#e1eff9', playBg:'#c6e2f7',
    accent:'#ffc93c', accentText:'#3d2a00',
    muted:'#4f7699',
    title:'#f0f8ff', subtitle:'#ffffff', char:'#ffe29a'
  },
  // 피스타치오 바탕 + 라즈베리 Play 버튼(#e0577e), 본문 글자는 순검정
  Pistachio: {
    outerBg:'#f1f6e4', card:'#ffffff', text:'#000000',
    hl:'#d6e8b5', hl2:'#e9f2d6', playBg:'#d6e8b5',
    accent:'#e0577e', accentText:'#ffffff',
    muted:'#5f7340',
    title:'#f6faec', subtitle:'#ffffff', char:'#ffc1d3'
  },
  // 페리윙클 바탕 + 피치 코랄 Play 버튼(#ff9e7d)에 적갈색 아이콘, 본문 글자는 순검정
  Periwinkle: {
    outerBg:'#ecedff', card:'#ffffff', text:'#000000',
    hl:'#cfd2ff', hl2:'#e4e6ff', playBg:'#cfd2ff',
    accent:'#ff9e7d', accentText:'#4a1a0c',
    muted:'#5a5fa3',
    title:'#f3f4ff', subtitle:'#ffffff', char:'#ffd6c8'
  },
  // 리넨 바탕·아이보리 카드 + 포레스트 그린 Play 버튼(#3f5a4a), 본문 글자는 순검정
  Linen: {
    outerBg:'#f4efe6', card:'#fbf8f2', text:'#000000',
    hl:'#e4d9c6', hl2:'#eee7da', playBg:'#e4d9c6',
    accent:'#3f5a4a', accentText:'#f4efe6',
    muted:'#7a6a52',
    title:'#f8f3ea', subtitle:'#fbf8f2', char:'#cfe0d2'
  },
  // 유목 그레이지 바탕 + 슬레이트 블루 Play 버튼(#4f6d8a), 본문 글자는 순검정
  Driftwood: {
    outerBg:'#e9e6e1', card:'#ffffff', text:'#000000',
    hl:'#d3cbc0', hl2:'#e4dfd8', playBg:'#d3cbc0',
    accent:'#4f6d8a', accentText:'#ffffff',
    muted:'#6f655b',
    title:'#f3f0eb', subtitle:'#ffffff', char:'#c8d6e4'
  },
  // 라테 폼 바탕 + 에스프레소 Play 버튼(#6b3e26), 본문 글자는 진갈색(#2a1a10)
  Latte: {
    outerBg:'#f3ebe1', card:'#ffffff', text:'#2a1a10',
    hl:'#e2cdb4', hl2:'#efe3d4', playBg:'#e2cdb4',
    accent:'#6b3e26', accentText:'#f3ebe1',
    muted:'#86664c',
    title:'#f8f1e8', subtitle:'#ffffff', char:'#e8cfae'
  },
  // 바닷가 회청 바탕 + 모래 금색 Play 버튼(#e0b04a), 본문 글자는 순검정
  Seaside: {
    outerBg:'#eaf0f0', card:'#ffffff', text:'#000000',
    hl:'#cfdcdc', hl2:'#e3ebeb', playBg:'#cfdcdc',
    accent:'#e0b04a', accentText:'#3a2a00',
    muted:'#566f6f',
    title:'#f3f8f8', subtitle:'#ffffff', char:'#f2d898'
  },
  // Seaside의 청량한 변형: 아쿠아 바탕, 대사 = 바닷물(#a8e6f0), 속마음 = 모래(#f5ecd7),
  // Play 버튼은 모래 금빛(#e6c98f), 정지 버튼은 연한 바닷물색에 청회색 ❚❚(#4f8590), 본문 글자는 순검정
  Surf: {
    outerBg:'#e3f6fa', card:'#ffffff', text:'#000000',
    hl:'#a8e6f0', hl2:'#f5ecd7', playBg:'#d6f2f7', pauseText:'#4f8590',
    accent:'#e6c98f', accentText:'#4f3a16',
    muted:'#2a6f80',
    title:'#effbfd', subtitle:'#ffffff', char:'#f5e3bd'
  },
  // 수박 껍질 연두 바탕 + 대사 = 수박 과육(#ffb0b0), Play 버튼 = 껍질 초록(#2f9e44), 본문 글자는 순검정
  Watermelon: {
    outerBg:'#eaf8e6', card:'#ffffff', text:'#000000',
    hl:'#ffb0b0', hl2:'#d7f2cf', playBg:'#ffb0b0',
    accent:'#2f9e44', accentText:'#ffffff',
    muted:'#3f7036',
    title:'#fff1f1', subtitle:'#ffffff', char:'#ffb0b0'
  },
  // 버건디 바탕 + 샴페인 골드 Play 버튼(#e8b86b), 블록은 카드와 구분되게 밝힌 와인색(대사 #7e2f40 / 속마음 #522631)
  Wine: {
    outerBg:'#1e0f12', card:'#28151a', text:'#f0e3e3',
    hl:'#7e2f40', hl2:'#522631', playBg:'#3d1c23',
    accent:'#e8b86b', accentText:'#1e0f12',
    muted:'#a98288',
    title:'#fff4f0', subtitle:'#f0e3e3', char:'#e8b86b'
  },
  // 플럼 바탕 + 핑크 Play 버튼(#ff8fb8), 블록은 카드와 구분되게 밝힌 자두색(대사 #6c3f82 / 속마음 #4a2f5a)
  Plum: {
    outerBg:'#1b1220', card:'#24182b', text:'#eee4f2',
    hl:'#6c3f82', hl2:'#4a2f5a', playBg:'#352340',
    accent:'#ff8fb8', accentText:'#1b1220',
    muted:'#a58bb0',
    title:'#fff3f8', subtitle:'#eee4f2', char:'#ffb8d2'
  },
  // 심해 청록 바탕 + 레몬 Play 버튼(#ffd166), 본문 글자는 연한 물빛
  'Deep Sea': {
    outerBg:'#0b1a1f', card:'#10242b', text:'#e1f0f2',
    hl:'#1f4a55', hl2:'#18363f', playBg:'#18363f',
    accent:'#ffd166', accentText:'#0b1a1f',
    muted:'#7fa3ab',
    title:'#f2fbfc', subtitle:'#e1f0f2', char:'#ffe19a'
  },
  // Deep Sea에서 이어지는 남색 바다 바탕 + 물빛 아쿠아 Play 버튼(#5fd8ff)
  Marine: {
    outerBg:'#0a1628', card:'#0f1f38', text:'#e3ecf8',
    hl:'#244a85', hl2:'#1a3460', playBg:'#1a3460',
    accent:'#5fd8ff', accentText:'#0a1628',
    muted:'#7f97bd',
    title:'#f2f7ff', subtitle:'#e3ecf8', char:'#a8e8ff'
  },
  // 수국: 푸른 보라 대사 + 연보라 속마음 + 더스티 로즈 Play (Play #d696aa)
  Hydrangea: {
    outerBg:'#eef0f8', card:'#ffffff', text:'#000000',
    hl:'#cbd1f0', hl2:'#e9e3f4', playBg:'#cbd1f0',
    accent:'#d696aa', accentText:'#4a1526',
    muted:'#5d6596',
    title:'#f4f5ff', subtitle:'#ffffff', char:'#f4cfda'
  },
  // 마카롱: 딸기 대사 + 민트 속마음 + 라벤더 Play (Play #b8a3e0)
  Macaron: {
    outerBg:'#fdf4f4', card:'#ffffff', text:'#000000',
    hl:'#f8d3da', hl2:'#d7efe5', playBg:'#d7efe5',
    accent:'#b8a3e0', accentText:'#2e1f4f',
    muted:'#9a6170',
    title:'#fff7f8', subtitle:'#ffffff', char:'#e3d8f6'
  },
  // 새벽 안개 회청 + 말린 장미 Play (Play #c98f99)
  Mist: {
    outerBg:'#eef1f4', card:'#ffffff', text:'#000000',
    hl:'#d5dde7', hl2:'#e8ecf1', playBg:'#d5dde7',
    accent:'#c98f99', accentText:'#4a1c24',
    muted:'#5f6d7d',
    title:'#f5f8fb', subtitle:'#ffffff', char:'#efd3d8'
  },
  // 멜론: 허니듀 초록 대사 + 캔털루프 속마음 + 멜론 주황 Play (Play #efa47c)
  Melon: {
    outerBg:'#f0f7e9', card:'#ffffff', text:'#000000',
    hl:'#d4eac0', hl2:'#fde3cf', playBg:'#d4eac0',
    accent:'#efa47c', accentText:'#4a1f08',
    muted:'#5b7646',
    title:'#f6fbf0', subtitle:'#ffffff', char:'#fde3cf'
  },
  // 등나무 꽃 보라 + 연둣빛 잎 Play (Play #b4cc80)
  Wisteria: {
    outerBg:'#f3f0f8', card:'#ffffff', text:'#000000',
    hl:'#dbcfeb', hl2:'#ede8f4', playBg:'#dbcfeb',
    accent:'#b4cc80', accentText:'#283a0c',
    muted:'#6d5d8a',
    title:'#f8f5fc', subtitle:'#ffffff', char:'#dfeac0'
  },
  // 아기방: 분홍 대사 + 하늘 속마음 + 연노랑 Play (Play #f1d27e)
  Lullaby: {
    outerBg:'#f7f3f8', card:'#ffffff', text:'#000000',
    hl:'#f6d6de', hl2:'#d9e7f6', playBg:'#d9e7f6',
    accent:'#f1d27e', accentText:'#4a3600',
    muted:'#7d6a85',
    title:'#fcf8fd', subtitle:'#ffffff', char:'#f9e5ad'
  },
  // 청자: 비색 녹청 + 나뭇결 갈색 Play (Play #8a6d4b)
  Celadon: {
    outerBg:'#eaf0ea', card:'#ffffff', text:'#000000',
    hl:'#c9ddd0', hl2:'#e2ece5', playBg:'#c9ddd0',
    accent:'#8a6d4b', accentText:'#f5efe4',
    muted:'#5c7465',
    title:'#f3f8f4', subtitle:'#ffffff', char:'#d9e9de'
  },
  // 무화과: 껍질 모브 대사 + 과육 베이지 속마음 + 무화과 보라 Play (Play #6a4b6e)
  Fig: {
    outerBg:'#f4ece8', card:'#ffffff', text:'#000000',
    hl:'#ddc4c8', hl2:'#efe3dc', playBg:'#ddc4c8',
    accent:'#6a4b6e', accentText:'#f4ece8',
    muted:'#86606a',
    title:'#faf3f0', subtitle:'#ffffff', char:'#e3cfe3'
  },
  // 사막 모래언덕 + 해 질 녘 로즈 Play (Play #c4706a)
  Dune: {
    outerBg:'#f3e7d8', card:'#ffffff', text:'#000000',
    hl:'#e9cca8', hl2:'#f2e2cd', playBg:'#e9cca8',
    accent:'#c4706a', accentText:'#ffffff',
    muted:'#8e6844',
    title:'#faf2e8', subtitle:'#ffffff', char:'#f3cfc2'
  },
  // 삼나무 결 + 이끼 낀 청록 Play (Play #4f7069)
  Cedar: {
    outerBg:'#f2ebe1', card:'#ffffff', text:'#000000',
    hl:'#dcc8ab', hl2:'#ece2d3', playBg:'#dcc8ab',
    accent:'#4f7069', accentText:'#f2ebe1',
    muted:'#7e6448',
    title:'#f9f4ec', subtitle:'#ffffff', char:'#cfe1db'
  },
  // 얼그레이 밀크티: 베르가못 회보라 대사 + 우유 속마음 + 찻빛 Play (Play #a77b5a)
  'Earl Grey': {
    outerBg:'#eeebe8', card:'#ffffff', text:'#000000',
    hl:'#d8d0d8', hl2:'#eee7dc', playBg:'#eee7dc',
    accent:'#a77b5a', accentText:'#fff7ef',
    muted:'#6f6670',
    title:'#f6f3f1', subtitle:'#ffffff', char:'#ecd8c6'
  },
  // 키위: 과육 연두 대사 + 껍질 베이지 속마음 + 씨앗 갈색 Play (Play #5e4426)
  Kiwi: {
    outerBg:'#f2f7e5', card:'#ffffff', text:'#000000',
    hl:'#cbe59b', hl2:'#efe7d6', playBg:'#efe7d6',
    accent:'#5e4426', accentText:'#eaf4d2',
    muted:'#5a6e30',
    title:'#f8fbef', subtitle:'#ffffff', char:'#dcefbb'
  },
  // 노을: 살구 대사 + 라일락 속마음 + 저녁 보라 Play (Play #7d5fab)
  Sunset: {
    outerBg:'#fff0e8', card:'#ffffff', text:'#000000',
    hl:'#ffc8ae', hl2:'#efdcef', playBg:'#efdcef',
    accent:'#7d5fab', accentText:'#ffffff',
    muted:'#a05e48',
    title:'#fff6f0', subtitle:'#ffffff', char:'#ffd2bf'
  },
  // 비취 녹색 + 장신구 금빛 Play (Play #c9a24a)
  Jade: {
    outerBg:'#e6f4ef', card:'#ffffff', text:'#000000',
    hl:'#acdcc9', hl2:'#dcefe7', playBg:'#dcefe7',
    accent:'#c9a24a', accentText:'#3a2a00',
    muted:'#3d7562',
    title:'#f1faf6', subtitle:'#ffffff', char:'#f1dca3'
  },
  // 먹: 청흑 바탕 + 회청 블록 + 주홍 낙관 Play (Play #e07a5f)
  Ink: {
    outerBg:'#121418', card:'#191c22', text:'#e7e9ee',
    hl:'#465063', hl2:'#2b313c', playBg:'#2b313c',
    accent:'#e07a5f', accentText:'#121418',
    muted:'#8a909c',
    title:'#ffffff', subtitle:'#e7e9ee', char:'#f0b4a3'
  },
  // 다크 초콜릿 + 민트 Play (Play #93d6c2)
  Truffle: {
    outerBg:'#1f1613', card:'#281d19', text:'#f0e6df',
    hl:'#6c4736', hl2:'#433026', playBg:'#433026',
    accent:'#93d6c2', accentText:'#1f1613',
    muted:'#a58f82',
    title:'#fbf3ee', subtitle:'#f0e6df', char:'#bfe8db'
  },
  // 해 진 직후 보랏빛 남색 + 복숭아 Play (Play #ffb894)
  Twilight: {
    outerBg:'#16152a', card:'#1e1c38', text:'#ebe9f7',
    hl:'#4c488c', hl2:'#2f2c5a', playBg:'#2f2c5a',
    accent:'#ffb894', accentText:'#16152a',
    muted:'#9590c0',
    title:'#ffffff', subtitle:'#ebe9f7', char:'#ffd2bd'
  },
  // 안개 낀 회보라 + 연보라 Play (Play #c8b8ff)
  Smoke: {
    outerBg:'#1c1b20', card:'#24232a', text:'#ecebf0',
    hl:'#585369', hl2:'#393644', playBg:'#393644',
    accent:'#c8b8ff', accentText:'#1c1b20',
    muted:'#99949f',
    title:'#ffffff', subtitle:'#ecebf0', char:'#dcd2ff'
  },
  // 세쿼이아 붉은 나무껍질 + 세이지 Play (Play #a9c89b)
  Sequoia: {
    outerBg:'#1c1311', card:'#251a17', text:'#f1e5e0',
    hl:'#6e3c2e', hl2:'#4a2b22', playBg:'#4a2b22',
    accent:'#a9c89b', accentText:'#1c1311',
    muted:'#a88d84',
    title:'#fdf3ef', subtitle:'#f1e5e0', char:'#cfe2c5'
  },
  // 레몬 시폰: 연노랑 대사 + 연보라 속마음 + 라벤더 Play (Play #a08bd0)
  Chiffon: {
    outerBg:'#fdfae8', card:'#ffffff', text:'#000000',
    hl:'#f6eba6', hl2:'#ebe4f6', playBg:'#ebe4f6',
    accent:'#a08bd0', accentText:'#2a1d4f',
    muted:'#7a6c2e',
    title:'#fffdf2', subtitle:'#ffffff', char:'#e4dbf6'
  },
  // 벨리니 칵테일: 복숭아 대사 + 하늘 속마음 + 물빛 블루 Play (Play #86acd8)
  Bellini: {
    outerBg:'#fff3ec', card:'#ffffff', text:'#000000',
    hl:'#ffd9c4', hl2:'#dcebf6', playBg:'#dcebf6',
    accent:'#86acd8', accentText:'#132f50',
    muted:'#9a6248',
    title:'#fff8f3', subtitle:'#ffffff', char:'#ffe0cf'
  },
  // 샴페인 골드 대사 + 로즈 속마음 + 금빛 Play (Play #c4a15a)
  Champagne: {
    outerBg:'#f8f2ea', card:'#ffffff', text:'#000000',
    hl:'#ecdcc2', hl2:'#f6e6e3', playBg:'#f6e6e3',
    accent:'#c4a15a', accentText:'#2e2208',
    muted:'#86704c',
    title:'#fdf8f1', subtitle:'#ffffff', char:'#f0dfbd'
  },
  // 난초 핑크퍼플 + 청록 잎 Play (Play #5fa48f)
  Orchid: {
    outerBg:'#f8f0f7', card:'#ffffff', text:'#000000',
    hl:'#edcbe7', hl2:'#f4e8f1', playBg:'#edcbe7',
    accent:'#5fa48f', accentText:'#0f3329',
    muted:'#8a5a83',
    title:'#fdf6fc', subtitle:'#ffffff', char:'#f3d6ee'
  },
  // 유자: 노란 껍질 대사 + 연두 속마음 + 유자 잎 Play (Play #6f9150)
  Yuzu: {
    outerBg:'#fdf9e6', card:'#ffffff', text:'#000000',
    hl:'#f5e48e', hl2:'#eef2d9', playBg:'#eef2d9',
    accent:'#6f9150', accentText:'#ffffff',
    muted:'#7a6a1e',
    title:'#fffcef', subtitle:'#ffffff', char:'#f7eaa8'
  },
  // 셔벗 세 스쿱: 라즈베리 대사 + 레몬 속마음 + 민트 Play (Play #7cc8b0)
  Sorbet: {
    outerBg:'#fdf2f5', card:'#ffffff', text:'#000000',
    hl:'#f7c9d6', hl2:'#fbf0c4', playBg:'#fbf0c4',
    accent:'#7cc8b0', accentText:'#103a2e',
    muted:'#9c5670',
    title:'#fff7f9', subtitle:'#ffffff', char:'#c9ecdf'
  },
  // 눈 덮인 겨울 숲: 얼음빛 블록 + 겨울 열매 붉은 Play (Play #b8475a)
  Snowberry: {
    outerBg:'#f2f6f8', card:'#ffffff', text:'#000000',
    hl:'#d9e6ee', hl2:'#eef1f3', playBg:'#d9e6ee',
    accent:'#b8475a', accentText:'#ffffff',
    muted:'#5f7480',
    title:'#f8fbfc', subtitle:'#ffffff', char:'#f2cdd3'
  },
  // 프로방스: 라벤더 밭 대사 + 밀 이삭 속마음 + 올리브 금빛 Play (Play #8f7f3f)
  Provence: {
    outerBg:'#f3f1f5', card:'#ffffff', text:'#000000',
    hl:'#d9d1ea', hl2:'#f2e8d0', playBg:'#f2e8d0',
    accent:'#8f7f3f', accentText:'#ffffff',
    muted:'#6a6082',
    title:'#f9f7fb', subtitle:'#ffffff', char:'#ece0bc'
  },
  // 버드나무: 연둣빛 버들 대사 + 냇물 속마음 + 강물 파랑 Play (Play #5a86a2)
  Willow: {
    outerBg:'#f1f4e7', card:'#ffffff', text:'#000000',
    hl:'#dbe5bb', hl2:'#e0ebf1', playBg:'#e0ebf1',
    accent:'#5a86a2', accentText:'#ffffff',
    muted:'#5f6f3e',
    title:'#f7f9ef', subtitle:'#ffffff', char:'#d3e5f0'
  },
  // 밀밭: 익은 밀 대사 + 여름 하늘 속마음 + 수레국화 Play (Play #5470a8)
  Wheat: {
    outerBg:'#f7f2e0', card:'#ffffff', text:'#000000',
    hl:'#ecdba6', hl2:'#e6ecf4', playBg:'#e6ecf4',
    accent:'#5470a8', accentText:'#ffffff',
    muted:'#86723a',
    title:'#fcf8ec', subtitle:'#ffffff', char:'#f1e3b7'
  },
  // 단풍: 단풍잎 대사 + 은행잎 속마음 + 나무껍질 Play (Play #6e3a2e)
  Maple: {
    outerBg:'#f8eee5', card:'#ffffff', text:'#000000',
    hl:'#f1c6a8', hl2:'#f3e6c6', playBg:'#f3e6c6',
    accent:'#6e3a2e', accentText:'#fbefe6',
    muted:'#93593a',
    title:'#fdf5ee', subtitle:'#ffffff', char:'#f6d6bd'
  },
  // 서양배: 연둣빛 과육 대사 + 크림 속마음 + 껍질 적갈색 Play (Play #b06a40)
  Pear: {
    outerBg:'#f6f7e6', card:'#ffffff', text:'#000000',
    hl:'#e3e9b7', hl2:'#f3ecdb', playBg:'#f3ecdb',
    accent:'#b06a40', accentText:'#ffffff',
    muted:'#6c7232',
    title:'#fbfcef', subtitle:'#ffffff', char:'#ecefc8'
  },
  // 로열 퍼플 + 왕관 금빛 Play (Play #e6c27a)
  Royal: {
    outerBg:'#15111d', card:'#1d1828', text:'#eeeaf5',
    hl:'#54427e', hl2:'#30284a', playBg:'#30284a',
    accent:'#e6c27a', accentText:'#15111d',
    muted:'#9d93b3',
    title:'#ffffff', subtitle:'#eeeaf5', char:'#ecd29c'
  },
  // 녹슨 철 주황 블록 + 강철 하늘색 Play (Play #9cc0d8)
  Rust: {
    outerBg:'#1b1512', card:'#241c18', text:'#f1e7e0',
    hl:'#74432a', hl2:'#4b3222', playBg:'#4b3222',
    accent:'#9cc0d8', accentText:'#1b1512',
    muted:'#a8907f',
    title:'#fdf4ee', subtitle:'#f1e7e0', char:'#c3d9e8'
  },
  // 발레: 토슈즈 핑크 대사 + 연회색 속마음 + 차콜 Play (Play #3a3340)
  Ballet: {
    outerBg:'#fbf1f2', card:'#ffffff', text:'#000000',
    hl:'#f3d3d9', hl2:'#ecebef', playBg:'#ecebef',
    accent:'#3a3340', accentText:'#fbf1f2',
    muted:'#8a5f68',
    title:'#fff8f9', subtitle:'#ffffff', char:'#f3d3d9'
  },
  // 오팔: 아쿠아 대사 + 연보라 속마음 + 분홍 섬광 Play (Play #e2a3b8)
  Opal: {
    outerBg:'#f2f4f8', card:'#ffffff', text:'#000000',
    hl:'#cfe9ea', hl2:'#e7def3', playBg:'#e7def3',
    accent:'#e2a3b8', accentText:'#4a1a2b',
    muted:'#5f6f85',
    title:'#f8fafc', subtitle:'#ffffff', char:'#f3d3de'
  },
  // 마시멜로: 말랑한 분홍 대사 + 크림 속마음 + 구운 갈색 Play (Play #b9875f)
  Marshmallow: {
    outerBg:'#fbf6f4', card:'#ffffff', text:'#000000',
    hl:'#f5dfe1', hl2:'#f2e9dd', playBg:'#f2e9dd',
    accent:'#b9875f', accentText:'#3a2412',
    muted:'#8a6a62',
    title:'#fffbf9', subtitle:'#ffffff', char:'#f0dcc8'
  },
  // 로즈메리: 회녹색 잎 대사 + 연보라 꽃 속마음 + 보라 꽃 Play (Play #7d6aa6)
  Rosemary: {
    outerBg:'#eff1ec', card:'#ffffff', text:'#000000',
    hl:'#d3dccb', hl2:'#e6e1ef', playBg:'#e6e1ef',
    accent:'#7d6aa6', accentText:'#ffffff',
    muted:'#5d6a55',
    title:'#f6f8f3', subtitle:'#ffffff', char:'#ddd6ee'
  },
  // 코코아: 코코아 블록 + 더스티 로즈 Play (Play #e8a9a3)
  Cocoa: {
    outerBg:'#1e1714', card:'#271e1a', text:'#f0e6e0',
    hl:'#6a4838', hl2:'#45332a', playBg:'#45332a',
    accent:'#e8a9a3', accentText:'#1e1714',
    muted:'#a8928a',
    title:'#fdf4ef', subtitle:'#f0e6e0', char:'#f2c9c4'
  },
  // 옥스퍼드: 버건디 대사 + 네이비 그레이 속마음 + 양피지 Play (Play #d8c7a3)
  Oxford: {
    outerBg:'#151821', card:'#1c202b', text:'#e9eaf0',
    hl:'#763a4c', hl2:'#333a4d', playBg:'#333a4d',
    accent:'#d8c7a3', accentText:'#151821',
    muted:'#9298a8',
    title:'#ffffff', subtitle:'#e9eaf0', char:'#e6d9bd'
  },
  // 로즈쿼츠: 분홍빛 카드 + 장미 대사 + 세레니티 블루 속마음 + 블루 Play (Play #7f8fbf)
  'Rose Quartz': {
    outerBg:'#f1e1e4', card:'#fbf2f4', text:'#000000',
    hl:'#eecdd5', hl2:'#dde2f1', playBg:'#dde2f1',
    accent:'#7f8fbf', accentText:'#172042',
    muted:'#8c5a68',
    title:'#fff6f8', subtitle:'#ffffff', char:'#f3d4dc'
  },
  // 라일락 편지지: 연보라 카드 + 라일락 대사 + 분홍 속마음 + 장미 Play (Play #c4889c)
  'Lilac Note': {
    outerBg:'#e8e3f1', card:'#f6f3fa', text:'#000000',
    hl:'#dcd1ee', hl2:'#f1e3e8', playBg:'#f1e3e8',
    accent:'#c4889c', accentText:'#3e1424',
    muted:'#6a5e8a',
    title:'#f9f6fd', subtitle:'#ffffff', char:'#e7def5'
  },
  // 복숭아 우유: 복숭아빛 카드 + 복숭아 대사 + 연보라 속마음 + 보라 Play (Play #8a7aaa)
  'Peach Milk': {
    outerBg:'#f5e2d8', card:'#fdf4ef', text:'#000000',
    hl:'#f6cfbe', hl2:'#e9e3f0', playBg:'#e9e3f0',
    accent:'#8a7aaa', accentText:'#ffffff',
    muted:'#98604a',
    title:'#fff8f4', subtitle:'#ffffff', char:'#f8d9cb'
  },
  // 진주: 진줏빛 회색 카드 + 회보라 대사 + 분홍 속마음 + 차콜 Play (Ballet 계열) (Play #3e3a48)
  Pearl: {
    outerBg:'#e4e3e6', card:'#f3f2f4', text:'#000000',
    hl:'#dbd7e0', hl2:'#f0e5e6', playBg:'#f0e5e6',
    accent:'#3e3a48', accentText:'#f3f2f4',
    muted:'#67636e',
    title:'#fbfbfc', subtitle:'#ffffff', char:'#e6e2ec'
  },
  // 조개껍데기: 분홍 베이지 카드 + 조개 대사 + 아쿠아 속마음 + 바다 블루 Play (Opal 계열) (Play #6d8ea3)
  Seashell: {
    outerBg:'#f0e5e0', card:'#fbf5f2', text:'#000000',
    hl:'#f1d8ce', hl2:'#d8ebeb', playBg:'#d8ebeb',
    accent:'#6d8ea3', accentText:'#ffffff',
    muted:'#8c6458',
    title:'#fffaf8', subtitle:'#ffffff', char:'#f3ddd4'
  },
  // 월장석: 푸른 회색 카드 + 라일락 블루 대사 + 복숭아 속마음 + 더스티 바이올렛 Play (Play #8a84b8)
  Moonstone: {
    outerBg:'#e3e7ef', card:'#f3f5f9', text:'#000000',
    hl:'#d9dcf0', hl2:'#f5e1d8', playBg:'#f5e1d8',
    accent:'#8a84b8', accentText:'#1e1a3e',
    muted:'#5d6680',
    title:'#f8f9fc', subtitle:'#ffffff', char:'#e2e4f5'
  },
  // 꽃잎: 분홍 카드 + 복숭아 대사 + 라일락 속마음 + 슬레이트 블루 Play (Play #6c7fa0)
  Petal: {
    outerBg:'#f2e3e6', card:'#fcf4f5', text:'#000000',
    hl:'#f6d6c8', hl2:'#e3dcf0', playBg:'#e3dcf0',
    accent:'#6c7fa0', accentText:'#ffffff',
    muted:'#8e5f68',
    title:'#fff8f9', subtitle:'#ffffff', char:'#f8ddd1'
  },
  // 튈 스커트: 연분홍 카드 + 블러시 대사 + 샴페인 그레이 속마음 + 더스티 라일락 Play (Play #9c8cc4)
  Tulle: {
    outerBg:'#f1e5e8', card:'#fcf3f5', text:'#000000',
    hl:'#f3d6dc', hl2:'#ebe6e2', playBg:'#ebe6e2',
    accent:'#9c8cc4', accentText:'#241a44',
    muted:'#86606a',
    title:'#fff8f9', subtitle:'#ffffff', char:'#f3d6dc'
  },
  // 리본: 분홍 카드 + 모브 핑크 대사 + 회색 속마음 + 소프트 네이비 Play (Play #4a5878)
  Ribbon: {
    outerBg:'#f1e4ea', card:'#fbf3f6', text:'#000000',
    hl:'#ead0de', hl2:'#e6e4ea', playBg:'#e6e4ea',
    accent:'#4a5878', accentText:'#fbf3f6',
    muted:'#875a72',
    title:'#fff8fb', subtitle:'#ffffff', char:'#efd8e4'
  },
  // 모브 안개: 분홍 회색 카드 + 모브 대사 + 회청 속마음 + 슬레이트 바이올렛 Play (Play #6e6a96)
  'Mauve Mist': {
    outerBg:'#ebe3e7', card:'#f6f1f3', text:'#000000',
    hl:'#e2cfd9', hl2:'#dbe1ea', playBg:'#dbe1ea',
    accent:'#6e6a96', accentText:'#ffffff',
    muted:'#7a6070',
    title:'#fbf8fa', subtitle:'#ffffff', char:'#e8dae2'
  },
  // 비둘기: 회색 카드 + 블루 그레이 대사 + 분홍 속마음 + 모브 Play (Pearl 계열) (Play #a07890)
  Dove: {
    outerBg:'#e4e4e8', card:'#f3f3f5', text:'#000000',
    hl:'#d8dfe8', hl2:'#f2e0e4', playBg:'#f2e0e4',
    accent:'#a07890', accentText:'#ffffff',
    muted:'#646873',
    title:'#fbfbfc', subtitle:'#ffffff', char:'#e2e7ee'
  },
  // 재: 회색 카드 + 회라일락 대사 + 회청록 속마음 + 플럼 Play (Pearl 계열) (Play #7d5f78)
  Ash: {
    outerBg:'#e3e2e6', card:'#f2f2f4', text:'#000000',
    hl:'#dcd7e6', hl2:'#d9e6e6', playBg:'#d9e6e6',
    accent:'#7d5f78', accentText:'#ffffff',
    muted:'#64626e',
    title:'#fafafb', subtitle:'#ffffff', char:'#e3dfec'
  },
  // 라벤더 우유: 연보라 카드 + 라벤더 대사 + 하늘 속마음 + 페리윙클 Play (Lilac Note 계열) (Play #7f8fbf)
  'Lavender Milk': {
    outerBg:'#e7e3f1', card:'#f6f3fa', text:'#000000',
    hl:'#ddd5ef', hl2:'#dce9f4', playBg:'#dce9f4',
    accent:'#7f8fbf', accentText:'#172042',
    muted:'#665e88',
    title:'#faf8fd', subtitle:'#ffffff', char:'#e5dff4'
  },
  // 백일몽: 연보라 카드 + 분홍 대사 + 하늘 속마음 + 바이올렛 Play (Lilac Note 계열) (Play #8a7aaa)
  Daydream: {
    outerBg:'#ebe4f0', card:'#f7f3fa', text:'#000000',
    hl:'#f2d4de', hl2:'#d8e8f4', playBg:'#d8e8f4',
    accent:'#8a7aaa', accentText:'#ffffff',
    muted:'#6e5f86',
    title:'#fbf8fd', subtitle:'#ffffff', char:'#f3dbe3'
  },
  // 자두 우유: 분홍 라일락 카드 + 자두 핑크 대사 + 아쿠아 속마음 + 플럼 Play (Play #8e6a8c)
  'Plum Milk': {
    outerBg:'#efe3ec', card:'#f8f2f7', text:'#000000',
    hl:'#e6cfe2', hl2:'#d6ebea', playBg:'#d6ebea',
    accent:'#8e6a8c', accentText:'#ffffff',
    muted:'#7d5c78',
    title:'#fcf8fb', subtitle:'#ffffff', char:'#ecdbea'
  },
  // 블루벨: 연청보라 카드 + 블루벨 대사 + 아쿠아 속마음 + 로즈 Play (Play #c88a9e)
  Bluebell: {
    outerBg:'#e3e5f3', card:'#f4f5fc', text:'#000000',
    hl:'#d3d8f3', hl2:'#d8ecec', playBg:'#d8ecec',
    accent:'#c88a9e', accentText:'#3e1424',
    muted:'#5e6592',
    title:'#f8f9fd', subtitle:'#ffffff', char:'#f2d2dc'
  },
  // Ash의 다크 버전: 회라일락 대사 + 회청록 속마음 + 진주빛 회청록 Play (Play #b6d3d2)
  'Ash Night': {
    outerBg:'#1b1b1f', card:'#232328', text:'#ecebef',
    hl:'#57516c', hl2:'#3d4b4d', playBg:'#36363e',
    accent:'#b6d3d2', accentText:'#1b1b1f',
    muted:'#9b99a4',
    title:'#ffffff', subtitle:'#ecebef', char:'#cfe3e2'
  },
  // 히아신스: 옅은 페리윙클 바탕 + 흰 카드 + 연페리윙클 대사 + 분홍 라일락 속마음 + 페리윙클 Play (Play #6f7cc6)
  Hyacinth: {
    outerBg:'#dfe3f7', card:'#f8f8fd', text:'#000000',
    hl:'#dfe2f8', hl2:'#f1dde8', playBg:'#dfe2f8', pauseText:'#565e98',
    accent:'#6f7cc6', accentText:'#ffffff',
    muted:'#565e98',
    title:'#fafaff', subtitle:'#ffffff', char:'#e4e7fa'
  },
  // 해 질 녘: 진주 회색 카드 + 페리윙클 대사 + 회분홍 속마음 + 짙은 페리윙클 Play (Dove 계열) (Play #4f5890)
  Dusk: {
    outerBg:'#e3e4ea', card:'#f3f3f6', text:'#000000',
    hl:'#d6daf2', hl2:'#ece2e6', playBg:'#ece2e6', pauseText:'#4f5890',
    accent:'#4f5890', accentText:'#f3f3f6',
    muted:'#5e6276',
    title:'#fafafc', subtitle:'#ffffff', char:'#dfe2f5'
  },
  // 바다 유리: 옅은 아쿠아 카드 + 아쿠아 대사 + 복숭아 속마음 + 슬레이트 바이올렛 Play, 정지 버튼은 연아쿠아에 바이올렛 ❚❚ (Play #7a7aa8)
  'Sea Glass': {
    outerBg:'#e3f0f0', card:'#f6fbfb', text:'#000000',
    hl:'#cfe8e7', hl2:'#f5e0d6', playBg:'#d6ecea', pauseText:'#5f5f8e',
    accent:'#7a7aa8', accentText:'#ffffff',
    muted:'#4f7474',
    title:'#f6fbfb', subtitle:'#ffffff', char:'#d8eeed'
  },
};
/* 테마 선택 메뉴의 분위기 묶음 (‘전체’는 위 THEMES 순서 그대로) */
const THEME_GROUPS = ['파스텔','내추럴','비비드','다크'];
const THEME_GROUP_OF = {
  Default:'내추럴', Sage:'내추럴', 'Old Money Light':'내추럴', City:'내추럴',
  Linen:'내추럴', Driftwood:'내추럴', Latte:'내추럴', Seaside:'내추럴', Surf:'내추럴',
  Peony:'파스텔', Lavender:'파스텔', Sky:'파스텔', 'Cotton Candy':'파스텔', Apricot:'파스텔',
  Blush:'파스텔', 'Baby Blue':'파스텔', Pistachio:'파스텔', Periwinkle:'파스텔',
  Lime:'비비드', 'Mint Choco':'비비드', Honeypot:'비비드', Tangerine:'비비드', Lagoon:'비비드', 'Butter Bar':'비비드',
  Watermelon:'비비드',
  Noir:'다크', 'Old Money Dark':'다크', Monochrome:'다크', 'Dark Olive':'다크',
  Wine:'다크', Plum:'다크', 'Deep Sea':'다크', Marine:'다크',
  Hydrangea:'파스텔', Macaron:'파스텔', Mist:'파스텔', Melon:'파스텔', Wisteria:'파스텔', Lullaby:'파스텔',
  Celadon:'내추럴', Fig:'내추럴', Dune:'내추럴', Cedar:'내추럴', 'Earl Grey':'내추럴',
  Kiwi:'비비드', Sunset:'비비드', Jade:'비비드',
  Ink:'다크', Truffle:'다크', Twilight:'다크', Smoke:'다크', Sequoia:'다크',
  Chiffon:'파스텔', Bellini:'파스텔', Champagne:'파스텔', Orchid:'파스텔', Yuzu:'파스텔', Sorbet:'파스텔', Snowberry:'파스텔',
  Provence:'내추럴', Willow:'내추럴', Wheat:'내추럴', Maple:'내추럴', Pear:'내추럴',
  Royal:'다크', Rust:'다크',
  Ballet:'파스텔', Opal:'파스텔', Marshmallow:'파스텔', 'Rose Quartz':'파스텔', 'Lilac Note':'파스텔', 'Peach Milk':'파스텔', Pearl:'파스텔', Seashell:'파스텔', Moonstone:'파스텔', Petal:'파스텔', Tulle:'파스텔', Ribbon:'파스텔', 'Mauve Mist':'파스텔', Dove:'파스텔', Ash:'파스텔', 'Lavender Milk':'파스텔', Daydream:'파스텔', 'Plum Milk':'파스텔', Bluebell:'파스텔', Hyacinth:'파스텔', Dusk:'파스텔', 'Sea Glass':'파스텔',
  Rosemary:'내추럴',
  Cocoa:'다크', Oxford:'다크', 'Ash Night':'다크',
};
/* 이름을 바꾼 테마: 예전 이름 → 지금 이름. 저장된 프리셋·즐겨찾기를 불러올 때 새 이름으로 옮김 (지우지 말 것) */
const THEME_RENAMED = { Butter:'Butter Bar' };
const THEME_KEYS = ['outerBg','card','text','hl','hl2','accent','accentText','muted','title','subtitle','char'];
