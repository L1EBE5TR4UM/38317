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
  // City 구조에 아주 옅은 Klein 파랑 바탕 + City 갈색 계열 코코아 Play(#5a4036), 본문 글자는 순검정
  'Cocoa Snow': {
    outerBg:'#f5f6fe', card:'#ffffff', text:'#000000',
    hl:'#dee3fa', hl2:'#f0f2fd',
    accent:'#5a4036', accentText:'#f5ece6',
    muted:'#5a66b0',
    title:'#e5d6cf', subtitle:'#fafafa', char:'#f0f2fd'
  },
  // City 구조에 Klein Mono 파랑(#eceffc·#d2d8f8) + 회보라 모브 Play(#86596f), 본문 글자는 순검정
  'Blue Mauve': {
    outerBg:'#eceffc', card:'#ffffff', text:'#000000',
    hl:'#d2d8f8', hl2:'#e8ebfa',
    accent:'#86596f', accentText:'#ffffff',
    muted:'#5a66b0',
    title:'#ecdbe3', subtitle:'#fafafa', char:'#e8ebfa'
  },
  // Blue Mauve와 일부러 닮게 둠(ΔE 3.9): 바탕을 짙은 코발트 쪽(#e3e8fa·#c4cef4)으로 내리고, Play는 더 어둡고 회색 섞인 히더(#6e5470)
  Heather: {
    outerBg:'#e3e8fa', card:'#ffffff', text:'#000000',
    hl:'#c4cef4', hl2:'#dfe5f8',
    accent:'#6e5470', accentText:'#f6eff6',
    muted:'#3e4c9e',
    title:'#e4d8e5', subtitle:'#fafafa', char:'#dfe5f8'
  },
  // City 구조에 하늘색 쪽 파랑 바탕 + 푸른 기가 도는 유칼립투스 Play(#4f6f68), 본문 글자는 순검정
  Eucalyptus: {
    outerBg:'#e7effc', card:'#ffffff', text:'#000000',
    hl:'#cbdaf4', hl2:'#e3ecf9',
    accent:'#4f6f68', accentText:'#ffffff',
    muted:'#4a68a6',
    title:'#d8e6e2', subtitle:'#fafafa', char:'#e3ecf9'
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
  // 야상곡: 라일락 대사 + 분홍 속마음 + 장미 Play (Play #e3aec0)
  Nocturne: {
    outerBg:'#1b1822', card:'#232030', text:'#ece8f4',
    hl:'#584c78', hl2:'#5c3f4e', playBg:'#5c3f4e', pauseText:'#ddd3f2',
    accent:'#e3aec0', accentText:'#1b1822',
    muted:'#a29cb4',
    title:'#ffffff', subtitle:'#ece8f4', char:'#ddd3f2'
  },
  // 백랍: 블루 그레이 대사 + 회분홍 속마음 + 모브 핑크 Play (Play #e0b8cc)
  Pewter: {
    outerBg:'#1b1c20', card:'#24252a', text:'#eeeef2',
    hl:'#4a576e', hl2:'#5a4651', playBg:'#5a4651', pauseText:'#dfe4ee',
    accent:'#e0b8cc', accentText:'#1b1c20',
    muted:'#9c9ca6',
    title:'#ffffff', subtitle:'#eeeef2', char:'#dfe4ee'
  },
  // 베르가못(Earl Grey의 밤): 회보라 대사 + 홍차 속마음 + 밀크티 Play (Play #e2c9ae)
  Bergamot: {
    outerBg:'#1c1a1d', card:'#252227', text:'#efebef',
    hl:'#544a5c', hl2:'#5b4a3c', playBg:'#5b4a3c', pauseText:'#e9dcc9',
    accent:'#e2c9ae', accentText:'#1c1a1d',
    muted:'#a199a2',
    title:'#ffffff', subtitle:'#efebef', char:'#e9dcc9'
  },
  // 밍크: 따뜻한 회갈색 바탕 + 토프 모브 대사 + 회청 속마음 + 연블러시 Play (Play #e8cfd2)
  Mink: {
    outerBg:'#1d1b1b', card:'#262323', text:'#f0eaea',
    hl:'#5c4c51', hl2:'#414853', playBg:'#414853', pauseText:'#ecdcde',
    accent:'#e8cfd2', accentText:'#1d1b1b',
    muted:'#a59c9c',
    title:'#ffffff', subtitle:'#f0eaea', char:'#ecdcde'
  },
  // 나방 날개: 회라일락 대사 + 돌빛 속마음 + 아이보리 Play (Play #ece4d6)
  Moth: {
    outerBg:'#1c1b1e', card:'#252428', text:'#eeecf0',
    hl:'#564f60', hl2:'#4d4943', playBg:'#4d4943', pauseText:'#e3dcea',
    accent:'#ece4d6', accentText:'#1c1b1e',
    muted:'#a19ca4',
    title:'#ffffff', subtitle:'#eeecf0', char:'#e3dcea'
  },
  // 캐시미어: 코코아 로즈 대사 + 오트밀 그레이 속마음 + 우유 Play (Play #efe4d8)
  Cashmere: {
    outerBg:'#1d1a19', card:'#272322', text:'#f2ebe8',
    hl:'#61484a', hl2:'#4c4742', playBg:'#4c4742', pauseText:'#eedbd8',
    accent:'#efe4d8', accentText:'#1d1a19',
    muted:'#a89e98',
    title:'#ffffff', subtitle:'#f2ebe8', char:'#eedbd8'
  },
  // 비구름: 스틸 블루 그레이 대사 + 더스티 모브 속마음 + 은빛 하늘 Play (Play #c9d4e2)
  Storm: {
    outerBg:'#191c20', card:'#22252a', text:'#ecedf1',
    hl:'#47525f', hl2:'#56474f', playBg:'#56474f', pauseText:'#dce2ea',
    accent:'#c9d4e2', accentText:'#191c20',
    muted:'#9ca0a8',
    title:'#ffffff', subtitle:'#ecedf1', char:'#dce2ea'
  },
  // 말린 장미: 마른 장미 대사 + 회색 속마음 + 로즈 골드 Play (Play #e6c4b6)
  'Pressed Rose': {
    outerBg:'#1e1a1b', card:'#282324', text:'#f2eaeb',
    hl:'#664950', hl2:'#48464b', playBg:'#48464b', pauseText:'#efd6d8',
    accent:'#e6c4b6', accentText:'#1e1a1b',
    muted:'#a89a9c',
    title:'#ffffff', subtitle:'#f2eaeb', char:'#efd6d8'
  },
  // 자수정: 회보라 대사 + 슬레이트 속마음 + 연자수정 Play (Play #cfc6ea)
  Amethyst: {
    outerBg:'#1c1a21', card:'#24222b', text:'#eeebf3',
    hl:'#5a4e6c', hl2:'#444a5a', playBg:'#444a5a', pauseText:'#e0daef',
    accent:'#cfc6ea', accentText:'#1c1a21',
    muted:'#a19cad',
    title:'#ffffff', subtitle:'#eeebf3', char:'#e0daef'
  },
  // 티라미수: 코코아 가루 대사 + 회모브 속마음 + 마스카포네 Play (Play #efe6d6)
  Tiramisu: {
    outerBg:'#1d1917', card:'#272220', text:'#f2ebe5',
    hl:'#5f4b41', hl2:'#4b4449', playBg:'#4b4449', pauseText:'#ead9c8',
    accent:'#efe6d6', accentText:'#1d1917',
    muted:'#a99c94',
    title:'#ffffff', subtitle:'#f2ebe5', char:'#ead9c8'
  },
  // 오래된 필름: 세피아 대사 + 회색 속마음 + 은염 Play (Play #d8d6d0)
  Sepia: {
    outerBg:'#1b1a18', card:'#242321', text:'#efece6',
    hl:'#5c4e40', hl2:'#45454a', playBg:'#45454a', pauseText:'#e6dccd',
    accent:'#d8d6d0', accentText:'#1b1a18',
    muted:'#a29d94',
    title:'#ffffff', subtitle:'#efece6', char:'#e6dccd'
  },
  // 수묵: 먹 회색 대사 + 따뜻한 회색 속마음 + 화선지 Play (Play #ede6d8)
  Sumi: {
    outerBg:'#19191b', card:'#222224', text:'#eeeeee',
    hl:'#4c4c53', hl2:'#504a44', playBg:'#504a44', pauseText:'#e6e3dc',
    accent:'#ede6d8', accentText:'#19191b',
    muted:'#9f9fa3',
    title:'#ffffff', subtitle:'#eeeeee', char:'#e6e3dc'
  },
  // 풍선껌: 분홍 카드 + 풍선껌 핑크 대사 + 소다 아쿠아 속마음 + 페리윙클 Play (Play #6e78dc)
  Bubblegum: {
    outerBg:'#ffe3ef', card:'#fff5fa', text:'#000000',
    hl:'#ffb6d4', hl2:'#a9e9ee', playBg:'#a9e9ee', pauseText:'#4f58b8',
    accent:'#6e78dc', accentText:'#ffffff',
    muted:'#a0446e',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffc9df'
  },
  // 라일락 팝: 연보라 카드 + 선명한 라일락 대사 + 핑크 속마음 + 바이올렛 Play (Play #7d5fd6)
  'Lilac Pop': {
    outerBg:'#eee3ff', card:'#fbf7ff', text:'#000000',
    hl:'#d4bcff', hl2:'#ffc6de', playBg:'#ffc6de', pauseText:'#6a4aa6',
    accent:'#7d5fd6', accentText:'#ffffff',
    muted:'#6a4aa6',
    title:'#ffffff', subtitle:'#ffffff', char:'#e2d2ff'
  },
  // 블루 라즈베리 슬러시: 블루 대사 + 라즈베리 속마음 + 코발트 Play (Play #4a68d4)
  'Blue Raspberry': {
    outerBg:'#e2eaff', card:'#f6f8ff', text:'#000000',
    hl:'#adc8ff', hl2:'#ffbccd', playBg:'#ffbccd', pauseText:'#3f5698',
    accent:'#4a68d4', accentText:'#ffffff',
    muted:'#3f5698',
    title:'#ffffff', subtitle:'#ffffff', char:'#c4d6ff'
  },
  // 복숭아 소다: 복숭아 대사 + 소다 아쿠아 속마음 + 보라 Play (Play #7a68cc)
  'Peach Soda': {
    outerBg:'#ffe8da', card:'#fff8f3', text:'#000000',
    hl:'#ffc4a4', hl2:'#b4edf0', playBg:'#b4edf0', pauseText:'#5a4aa8',
    accent:'#7a68cc', accentText:'#ffffff',
    muted:'#a0532e',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd3bd'
  },
  // 피튜니아: 선명한 페리윙클 대사 + 자홍 핑크 속마음 + 짙은 페리윙클 Play (Play #5866d4)
  Petunia: {
    outerBg:'#e6e8ff', card:'#f7f7ff', text:'#000000',
    hl:'#bcc4ff', hl2:'#f6bbe6', playBg:'#f6bbe6', pauseText:'#4a52a0',
    accent:'#5866d4', accentText:'#ffffff',
    muted:'#4a52a0',
    title:'#ffffff', subtitle:'#ffffff', char:'#cfd4ff'
  },
  // 자두 소다: 자두 핑크 대사 + 라임 속마음 + 자두 Play (Play #8a3fa0)
  'Plum Soda': {
    outerBg:'#f8e4f6', card:'#fdf7fd', text:'#000000',
    hl:'#e8b6e6', hl2:'#d9f1a4', playBg:'#d9f1a4', pauseText:'#8a3fa0',
    accent:'#8a3fa0', accentText:'#ffffff',
    muted:'#7d3d84',
    title:'#ffffff', subtitle:'#ffffff', char:'#f0cdee'
  },
  // 베리 요거트: 라즈베리 대사 + 블루베리 속마음 + 베리 퍼플 Play (Play #7a4aa6)
  'Berry Yogurt': {
    outerBg:'#ffe6ee', card:'#fff7fa', text:'#000000',
    hl:'#ffb4c8', hl2:'#c2c9f6', playBg:'#c2c9f6', pauseText:'#7a4aa6',
    accent:'#7a4aa6', accentText:'#ffffff',
    muted:'#9c4462',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffc9d6'
  },
  // 양귀비: 양귀비 다홍 대사 + 라벤더 속마음 + 보랏빛 Play (Play #6a58c4)
  Poppy: {
    outerBg:'#ffe5e2', card:'#fff7f6', text:'#000000',
    hl:'#ffb3aa', hl2:'#d8cbf6', playBg:'#d8cbf6', pauseText:'#6a58c4',
    accent:'#6a58c4', accentText:'#ffffff',
    muted:'#a04238',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffc8c1'
  },
  // 블루베리 레모네이드: 하늘빛 카드 + 블루 대사 + 레몬 시폰 속마음 + 블루베리 Play (Play #3f56c8)
  Lemonade: {
    outerBg:'#e6edff', card:'#fbfcff', text:'#000000',
    hl:'#b9ccff', hl2:'#fcefc0', playBg:'#fcefc0', pauseText:'#3f56c8',
    accent:'#3f56c8', accentText:'#ffffff',
    muted:'#405a94',
    title:'#ffffff', subtitle:'#ffffff', char:'#cad8ff'
  },
  // 보랏빛 하늘: 블루 대사 + 바이올렛 속마음 + 짙은 바이올렛 Play (Play #6a50d0)
  'Violet Sky': {
    outerBg:'#e8e8ff', card:'#ffffff', text:'#000000',
    hl:'#b8c8ff', hl2:'#dcc6ff', playBg:'#dcc6ff', pauseText:'#4e3aa8',
    accent:'#6a50d0', accentText:'#ffffff',
    muted:'#4f5aa0',
    title:'#ffffff', subtitle:'#ffffff', char:'#cad6ff'
  },
  // 라임 소다: 라임 대사 + 탄산 블루 속마음 + 블루 Play (Play #3d62c8)
  'Lime Soda': {
    outerBg:'#eef8e0', card:'#ffffff', text:'#000000',
    hl:'#d4f0a0', hl2:'#b9d4ff', playBg:'#b9d4ff', pauseText:'#2c4a9e',
    accent:'#3d62c8', accentText:'#ffffff',
    muted:'#4f6e28',
    title:'#ffffff', subtitle:'#ffffff', char:'#e2f5c0'
  },
  // 마멀레이드: 오렌지 대사 + 페리윙클 속마음 + 페리윙클 Play (Play #5a62c8)
  Marmalade: {
    outerBg:'#fff0e0', card:'#ffffff', text:'#000000',
    hl:'#ffc79a', hl2:'#c4caff', playBg:'#c4caff', pauseText:'#3f46a0',
    accent:'#5a62c8', accentText:'#ffffff',
    muted:'#a05a20',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd8b8'
  },
  // 라일락 라임: 라일락 대사 + 라임 속마음 + 바이올렛 Play (Play #6a4ec8)
  'Lilac Lime': {
    outerBg:'#efe9ff', card:'#ffffff', text:'#000000',
    hl:'#d6c2ff', hl2:'#dbf2a6', playBg:'#dbf2a6', pauseText:'#6a4ec8',
    accent:'#6a4ec8', accentText:'#ffffff',
    muted:'#5a47a0',
    title:'#ffffff', subtitle:'#ffffff', char:'#e2d4ff'
  },
  // 셔벗 하늘: 오렌지 셔벗 대사 + 핑크 속마음 + 페리윙클 Play (Play #5a62c8)
  'Sherbet Sky': {
    outerBg:'#ffece0', card:'#fffaf6', text:'#000000',
    hl:'#ffcca4', hl2:'#ffc4da', playBg:'#ffc4da', pauseText:'#4c53aa',
    accent:'#5a62c8', accentText:'#ffffff',
    muted:'#a0582a',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd9bd'
  },
  // 민트 하늘: 민트 대사 + 하늘 속마음 + 블루 Play (Play #3a5cc8)
  'Mint Sky': {
    outerBg:'#e2f6f0', card:'#ffffff', text:'#000000',
    hl:'#b6efda', hl2:'#b4d6ff', playBg:'#b4d6ff', pauseText:'#3757be',
    accent:'#3a5cc8', accentText:'#ffffff',
    muted:'#2f7260',
    title:'#ffffff', subtitle:'#ffffff', char:'#c9f3e4'
  },
  // 라벤더 민트: 라벤더 대사 + 민트 속마음 + 바이올렛 Play (Play #5a48c0)
  'Lavender Mint': {
    outerBg:'#ebe6ff', card:'#f9f7ff', text:'#000000',
    hl:'#cfc0ff', hl2:'#b8efd8', playBg:'#b8efd8', pauseText:'#5a48c0',
    accent:'#5a48c0', accentText:'#ffffff',
    muted:'#56489a',
    title:'#ffffff', subtitle:'#ffffff', char:'#ddd3ff'
  },
  // 밀크티 카드 + 찻잎 베이지 대사 + 연보라 속마음 + 라벤더 그레이 Play
  'Milk Tea': {
    outerBg:'#ece2d8', card:'#f8f3ee', text:'#000000',
    hl:'#e6d2bf', hl2:'#e3dfee', playBg:'#e3dfee', pauseText:'#6a5e8e',
    accent:'#7d6f9e', accentText:'#ffffff',
    muted:'#7f604a',
    title:'#fbf7f3', subtitle:'#ffffff', char:'#ecdccc'
  },
  // 라일락 안개 카드 + 라일락 대사 + 바닐라 속마음 + 바이올렛 Play
  'Lilac Haze': {
    outerBg:'#e9e2f2', card:'#f7f3fb', text:'#000000',
    hl:'#dccdf0', hl2:'#f6e6cf', playBg:'#f6e6cf', pauseText:'#6e58a0',
    accent:'#8d76b8', accentText:'#ffffff',
    muted:'#6a5a8c',
    title:'#fbf9fd', subtitle:'#ffffff', char:'#e6dbf5'
  },
  // 해 지기 직전 푸른 카드 + 블루 대사 + 장밋빛 속마음 + 인디고 Play
  'Blue Hour': {
    outerBg:'#dfe5f1', card:'#f3f6fb', text:'#000000',
    hl:'#cdd9f0', hl2:'#f0dde3', playBg:'#f0dde3', pauseText:'#4a5c94',
    accent:'#5b6fa8', accentText:'#ffffff',
    muted:'#56628a',
    title:'#f8fafd', subtitle:'#ffffff', char:'#dae3f5'
  },
  // 찹쌀떡 카드 + 딸기 모찌 대사 + 쑥 모찌 속마음 + 쑥색 Play
  Mochi: {
    outerBg:'#f3e6e6', card:'#fcf6f5', text:'#000000',
    hl:'#f0d2d4', hl2:'#dcebd9', playBg:'#dcebd9', pauseText:'#4f6a46',
    accent:'#7e9a74', accentText:'#1a2a16',
    muted:'#7f5e5e',
    title:'#fefafa', subtitle:'#ffffff', char:'#f3dadb'
  },
  // 성에 낀 유리 카드 + 얼음 대사 + 연보라 속마음 + 겨울 블루 Play
  Frost: {
    outerBg:'#e2ecf0', card:'#f4f9fa', text:'#000000',
    hl:'#cde3ea', hl2:'#e8e0f2', playBg:'#e8e0f2', pauseText:'#5a6ca0',
    accent:'#6c7fb0', accentText:'#ffffff',
    muted:'#527080',
    title:'#f8fcfc', subtitle:'#ffffff', char:'#d8eaf0'
  },
  // 라벤더 카드 + 라벤더 대사 + 바닐라 속마음 + 꿀색 Play
  'Vanilla Lavender': {
    outerBg:'#ebe5f3', card:'#faf7fc', text:'#000000',
    hl:'#e1d6f2', hl2:'#f6ecd2', playBg:'#f6ecd2', pauseText:'#7a5e24',
    accent:'#c9a45a', accentText:'#2a1e08',
    muted:'#6e5e8a',
    title:'#fdfbfe', subtitle:'#ffffff', char:'#e8dff5'
  },
  // 구름 회색 카드 + 하늘 그레이 대사 + 라일락 그레이 속마음 + 슬레이트 Play
  Cloud: {
    outerBg:'#e7e9ee', card:'#f6f7f9', text:'#000000',
    hl:'#dde3ec', hl2:'#ece6ef', playBg:'#ece6ef', pauseText:'#5e6884',
    accent:'#6e7894', accentText:'#ffffff',
    muted:'#646a78',
    title:'#fbfbfc', subtitle:'#ffffff', char:'#e2e6ee'
  },
  // 사과꽃 카드 + 꽃잎 대사 + 새싹 속마음 + 잎사귀 Play
  'Apple Blossom': {
    outerBg:'#f5e6e8', card:'#fdf7f8', text:'#000000',
    hl:'#f4d4da', hl2:'#dfeedd', playBg:'#dfeedd', pauseText:'#4a7656',
    accent:'#5e8a6a', accentText:'#ffffff',
    muted:'#8c5e66',
    title:'#fefafb', subtitle:'#ffffff', char:'#f6dbe0'
  },
  // 포도 대사 + 레몬 속마음 + 포도 보라 Play
  'Grape Soda': {
    outerBg:'#efe4ff', card:'#fbf8ff', text:'#000000',
    hl:'#d8c0ff', hl2:'#ffe4a8', playBg:'#ffe4a8', pauseText:'#6a3fc8',
    accent:'#6a3fc8', accentText:'#ffffff',
    muted:'#6040a8',
    title:'#ffffff', subtitle:'#ffffff', char:'#e4d4ff'
  },
  // 흰 카드 + 울트라마린 연청 대사 + 민트 속마음 + 울트라마린 Play
  'Ultramarine Pop': {
    outerBg:'#e6e8ff', card:'#ffffff', text:'#000000',
    hl:'#c0c6ff', hl2:'#c0f0e0', playBg:'#c0f0e0', pauseText:'#2a36c8',
    accent:'#2a36c8', accentText:'#ffffff',
    muted:'#2a36a0',
    title:'#ffffff', subtitle:'#ffffff', char:'#d0d4ff'
  },
  // 남색 벨벳 대사 + 회보라 속마음 + 살구 Play
  'Navy Velvet': {
    outerBg:'#141a26', card:'#1c2333', text:'#ebeef5',
    hl:'#34466a', hl2:'#4a3f5a', playBg:'#4a3f5a', pauseText:'#f5dcc4',
    accent:'#f0c8a0', accentText:'#141a26',
    muted:'#9aa2b4',
    title:'#ffffff', subtitle:'#ebeef5', char:'#f5dcc4'
  },
  // 숯 장미 대사 + 회색 속마음 + 연장미 Play
  'Charcoal Rose': {
    outerBg:'#1c1b1c', card:'#262425', text:'#f0ecec',
    hl:'#5a474c', hl2:'#444548', playBg:'#444548', pauseText:'#f2d6d8',
    accent:'#f0c4c8', accentText:'#1c1b1c',
    muted:'#a29e9f',
    title:'#ffffff', subtitle:'#f0ecec', char:'#f2d6d8'
  },
  // 별밤 남색 대사 + 보랏빛 속마음 + 별빛 노랑 Play
  Starlight: {
    outerBg:'#12141f', card:'#1a1d2c', text:'#eceef8',
    hl:'#333a66', hl2:'#3e3354', playBg:'#3e3354', pauseText:'#fff4c8',
    accent:'#fff0b0', accentText:'#12141f',
    muted:'#9a9eb8',
    title:'#ffffff', subtitle:'#eceef8', char:'#fff4c8'
  },
  // 흑요석 바탕 + 먹회색 대사 + 회청록 속마음 + 바이올렛 Play
  Obsidian: {
    outerBg:'#111113', card:'#18181b', text:'#ececf0',
    hl:'#2e2e38', hl2:'#2a3434', playBg:'#2a3434', pauseText:'#d6ccff',
    accent:'#b8a4ff', accentText:'#111113',
    muted:'#96969e',
    title:'#ffffff', subtitle:'#ececf0', char:'#d6ccff'
  },
  // 달그림자 대사 + 월석 베이지 속마음 + 달빛 Play
  Lunar: {
    outerBg:'#1a1c22', card:'#22252d', text:'#edeef2',
    hl:'#48506a', hl2:'#4e4a40', playBg:'#4e4a40', pauseText:'#ece8da',
    accent:'#e8e4d4', accentText:'#1a1c22',
    muted:'#9ea0a8',
    title:'#ffffff', subtitle:'#edeef2', char:'#ece8da'
  },
  // 한지 카드 + 닥나무 대사 + 먹물 번짐 속마음 + 먹 Play
  Hanji: {
    outerBg:'#f1ece0', card:'#fbf9f3', text:'#000000',
    hl:'#e6dcc4', hl2:'#e0e4e0', playBg:'#e0e4e0', pauseText:'#3a3a3a',
    accent:'#3a3a3a', accentText:'#fbf9f3',
    muted:'#6e6a5e',
    title:'#fdfcf9', subtitle:'#ffffff', char:'#ebe2ce'
  },
  // 군밤 대사 + 볏짚 속마음 + 밤껍질 Play
  Chestnut: {
    outerBg:'#efe2d4', card:'#fbf6f0', text:'#000000',
    hl:'#e2c4a6', hl2:'#e6e0cc', playBg:'#e6e0cc', pauseText:'#5a3018',
    accent:'#6a3a1e', accentText:'#ffffff',
    muted:'#7e5a3e',
    title:'#fdfaf7', subtitle:'#ffffff', char:'#e8ceb4'
  },
  // 돌 회색 대사 + 이끼 회청 속마음 + 현무암 Play
  Stone: {
    outerBg:'#e4e2dc', card:'#f4f3f0', text:'#000000',
    hl:'#d6d3ca', hl2:'#dbe0e0', playBg:'#dbe0e0', pauseText:'#4a4a44',
    accent:'#4a4a44', accentText:'#ffffff',
    muted:'#66645c',
    title:'#f9f9f7', subtitle:'#ffffff', char:'#dddad2'
  },
  // 상아 카드 + 양피지 대사 + 회청 속마음 + 만년필 잉크 Play
  'Ivory Ink': {
    outerBg:'#f5f1e6', card:'#fffdf7', text:'#000000',
    hl:'#ece4cc', hl2:'#e4e8ee', playBg:'#e4e8ee', pauseText:'#1f2a44',
    accent:'#1f2a44', accentText:'#ffffff',
    muted:'#6a6450',
    title:'#fffefb', subtitle:'#ffffff', char:'#efe8d4'
  },
  // 사암 대사 + 장밋빛 바위 속마음 + 협곡 갈색 Play
  Sandstone: {
    outerBg:'#f1e4d4', card:'#fcf7f0', text:'#000000',
    hl:'#e8cca8', hl2:'#e4d8d8', playBg:'#e4d8d8', pauseText:'#7a4a2c',
    accent:'#8a5a3a', accentText:'#ffffff',
    muted:'#8a6446',
    title:'#fefbf8', subtitle:'#ffffff', char:'#eed6b8'
  },
  // 밝은 카드 위에 어두운 블록: 먹색 대사 + 가지색 속마음 (글자는 자동으로 밝게)
  Inverse: {
    outerBg:'#f2f0ec', card:'#ffffff', text:'#000000',
    hl:'#2a2a30', hl2:'#4a3f5a', playBg:'#e6e3dc', pauseText:'#2a2a30',
    accent:'#2a2a30', accentText:'#ffffff',
    muted:'#5a5850',
    title:'#ffffff', subtitle:'#ffffff', char:'#e6e3dc'
  },
  // 흰 카드 + 홀로그램 세 빛(하늘·핑크·라일락 Play)
  Holographic: {
    outerBg:'#eef0ff', card:'#ffffff', text:'#000000',
    hl:'#d4f4ff', hl2:'#ffe0f8', playBg:'#ffe0f8', pauseText:'#5a40c8',
    accent:'#9d7cff', accentText:'#1a0a40',
    muted:'#6a6a98',
    title:'#ffffff', subtitle:'#ffffff', char:'#d8ccff'
  },
  // 완전 무채색 회색 + 빨간 Play 하나만 포인트
  'Red Dot': {
    outerBg:'#ededed', card:'#ffffff', text:'#000000',
    hl:'#e0e0e0', hl2:'#f0f0f0', playBg:'#f0f0f0', pauseText:'#555555',
    accent:'#e0302a', accentText:'#ffffff',
    muted:'#666666',
    title:'#ffffff', subtitle:'#ffffff', char:'#e0e0e0'
  },
  // 빛바랜 사진: 세피아 한 계열로만, 진갈색 글자
  'Sepia Photo': {
    outerBg:'#e8dcc8', card:'#f4ecdc', text:'#2a1e12',
    hl:'#dcc8a8', hl2:'#e6dac4', playBg:'#e6dac4', pauseText:'#5a3e24',
    accent:'#5a3e24', accentText:'#f4ecdc',
    muted:'#7a6248',
    title:'#fbf6ec', subtitle:'#ffffff', char:'#e8d8bc'
  },
  // 메론소다: 메론 대사 + 바닐라 아이스크림 속마음 + 메론 초록 Play
  'Melon Soda': {
    outerBg:'#eef8ec', card:'#ffffff', text:'#000000',
    hl:'#c4ecc8', hl2:'#fbf0d8', playBg:'#fbf0d8', pauseText:'#3f7a48',
    accent:'#3f8a4e', accentText:'#ffffff',
    muted:'#3f7a48',
    title:'#ffffff', subtitle:'#ffffff', char:'#fbf0d8'
  },
  // 벨벳: 탁한 와인 대사 + 회남색 속마음 + 연장미 Play
  Velvet: {
    outerBg:'#18161a', card:'#211e23', text:'#f0eaed',
    hl:'#563c48', hl2:'#3a3944', playBg:'#3a3944', pauseText:'#ecd6dc',
    accent:'#ecc8d0', accentText:'#18161a',
    muted:'#a59ca2',
    title:'#ffffff', subtitle:'#f0eaed', char:'#ecc8d0'
  },
  // 푸른 흑연: 청회색 대사 + 회색 속마음 + 연하늘 Play
  Graphite: {
    outerBg:'#16181c', card:'#1e2126', text:'#eceef2',
    hl:'#444b58', hl2:'#3a4048', playBg:'#3a4048', pauseText:'#e0e8f4',
    accent:'#d6e2f0', accentText:'#16181c',
    muted:'#9ca1aa',
    title:'#ffffff', subtitle:'#eceef2', char:'#d6e2f0'
  },
  // 채도를 낮춘 인디고: 회청 대사 + 청회 속마음 + 연하늘 Play
  'Indigo Ink': {
    outerBg:'#15161f', card:'#1d1f2b', text:'#eceef6',
    hl:'#383c60', hl2:'#2e3c48', playBg:'#2e3c48', pauseText:'#d8e2f8',
    accent:'#c8d6f6', accentText:'#15161f',
    muted:'#9c9fb4',
    title:'#ffffff', subtitle:'#eceef6', char:'#c8d6f6'
  },
  // 신문지: 회색 지면 블록 + 벽돌 빨강 Play
  Newsprint: {
    outerBg:'#ebe8e2', card:'#fbfaf7', text:'#111111',
    hl:'#dedad2', hl2:'#ece9e2', playBg:'#ece9e2', pauseText:'#9a3a30',
    accent:'#9a3a30', accentText:'#ffffff',
    muted:'#5a574f',
    title:'#ffffff', subtitle:'#ffffff', char:'#ece9e2'
  },
  // 클랭 블루 단색 (페리윙클 쪽으로 순하게 낮춤, 진한 코발트는 Cobalt Mono)
  'Klein Mono': {
    outerBg:'#eceffc', card:'#ffffff', text:'#000000',
    hl:'#d2d8f8', hl2:'#e8ebfa', playBg:'#e8ebfa', pauseText:'#4a5cc8',
    accent:'#4a5cc8', accentText:'#ffffff',
    muted:'#44509a',
    title:'#ffffff', subtitle:'#ffffff', char:'#e8ebfa'
  },
  // 깊은 코발트 한 색의 명도만 바꾼 단색
  'Cobalt Mono': {
    outerBg:'#e8ecf8', card:'#ffffff', text:'#000000',
    hl:'#cbd5f2', hl2:'#e4e9f6', playBg:'#e4e9f6', pauseText:'#1c3494',
    accent:'#1c3494', accentText:'#ffffff',
    muted:'#2c3e86',
    title:'#ffffff', subtitle:'#ffffff', char:'#e4e9f6'
  },
  // 파스텔 형광펜: 연노랑 대사 + 연하늘 속마음 + 먹색 Play
  Highlighter: {
    outerBg:'#f6f6f4', card:'#ffffff', text:'#000000',
    hl:'#fff3a8', hl2:'#cdeefb', playBg:'#cdeefb', pauseText:'#333333',
    accent:'#222222', accentText:'#fff3a8',
    muted:'#5a5a5a',
    title:'#ffffff', subtitle:'#ffffff', char:'#fff3a8'
  },
  // 바우하우스 삼원색을 낮은 채도로: 겨자 대사 + 하늘 속마음 + 벽돌 Play
  Bauhaus: {
    outerBg:'#efebe4', card:'#ffffff', text:'#000000',
    hl:'#f2d784', hl2:'#b8cde8', playBg:'#b8cde8', pauseText:'#b04a38',
    accent:'#b04a38', accentText:'#ffffff',
    muted:'#4a4a4a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2d784'
  },
  // 청화백자: 흰 카드 + 코발트 물감 번진 대사 + 백자 회색 속마음 + 코발트 Play
  Porcelain: {
    outerBg:'#eef2f8', card:'#ffffff', text:'#000000',
    hl:'#d6e0f2', hl2:'#eceff4', playBg:'#eceff4', pauseText:'#2c4a8a',
    accent:'#2c4a8a', accentText:'#ffffff',
    muted:'#4f6288',
    title:'#ffffff', subtitle:'#ffffff', char:'#eceff4'
  },
  // 설강화: 연초록 대사 + 연보라 속마음 + 슬레이트 Play
  Snowdrop: {
    outerBg:'#f1f4f2', card:'#ffffff', text:'#000000',
    hl:'#dfe9e4', hl2:'#eee9f3', playBg:'#eee9f3', pauseText:'#5c6e8c',
    accent:'#5c6e8c', accentText:'#ffffff',
    muted:'#5a6a62',
    title:'#ffffff', subtitle:'#ffffff', char:'#eee9f3'
  },
  // 빙하: 얼음 청록 대사 + 연청보라 속마음 + 심해 Play
  Glacier: {
    outerBg:'#eaf2f6', card:'#ffffff', text:'#000000',
    hl:'#d2e6ee', hl2:'#e6e8f4', playBg:'#e6e8f4', pauseText:'#3f6680',
    accent:'#3f6680', accentText:'#ffffff',
    muted:'#4a6a7a',
    title:'#ffffff', subtitle:'#ffffff', char:'#e6e8f4'
  },
  // 안개 블루 대사 + 모래빛 속마음 + 네이비 그레이 Play
  'Mist Blue': {
    outerBg:'#edf0f5', card:'#ffffff', text:'#000000',
    hl:'#dbe2ee', hl2:'#f0ebe8', playBg:'#f0ebe8', pauseText:'#4e5d7e',
    accent:'#4e5d7e', accentText:'#ffffff',
    muted:'#5a6478',
    title:'#ffffff', subtitle:'#ffffff', char:'#f0ebe8'
  },
  // 흰 카드 + 세이지 대사 + 연분홍 속마음 + 세이지 Play (Mochi 계열)
  'Sage White': {
    outerBg:'#f0f3ee', card:'#ffffff', text:'#000000',
    hl:'#dce6d6', hl2:'#f2e6ea', playBg:'#f2e6ea', pauseText:'#4e6a4c',
    accent:'#5a6e58', accentText:'#ffffff',
    muted:'#5c6a5a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2e6ea'
  },
  // 벚잎: 연분홍 대사 + 새잎 속마음 + 잎 초록 Play (Apple Blossom 계열)
  'Cherry Leaf': {
    outerBg:'#f6f1f2', card:'#ffffff', text:'#000000',
    hl:'#f2dce0', hl2:'#dfead8', playBg:'#dfead8', pauseText:'#4e6e52',
    accent:'#4e6e52', accentText:'#ffffff',
    muted:'#7a6064',
    title:'#ffffff', subtitle:'#ffffff', char:'#dfead8'
  },
  // 회라벤더 대사 + 회청 속마음 + 짙은 회보라 Play
  'Lavender Grey': {
    outerBg:'#efeef3', card:'#ffffff', text:'#000000',
    hl:'#e2dfec', hl2:'#e6eaee', playBg:'#e6eaee', pauseText:'#5a5670',
    accent:'#5a5670', accentText:'#ffffff',
    muted:'#605c70',
    title:'#ffffff', subtitle:'#ffffff', char:'#e6eaee'
  },
  // 흰 카드 + 페리윙클 대사 + 연분홍 회색 속마음 + 페리윙클 Play
  'Periwinkle White': {
    outerBg:'#eef0fb', card:'#ffffff', text:'#000000',
    hl:'#dadff6', hl2:'#f3eef0', playBg:'#f3eef0', pauseText:'#5560b0',
    accent:'#5560b0', accentText:'#ffffff',
    muted:'#585f94',
    title:'#ffffff', subtitle:'#ffffff', char:'#f3eef0'
  },
  // 이슬: 물빛 대사 + 연보라 속마음 + 청보라 Play
  Dew: {
    outerBg:'#eef5f4', card:'#ffffff', text:'#000000',
    hl:'#d6ebe8', hl2:'#e9e6f4', playBg:'#e9e6f4', pauseText:'#5a6a9c',
    accent:'#5a6a9c', accentText:'#ffffff',
    muted:'#527070',
    title:'#ffffff', subtitle:'#ffffff', char:'#e9e6f4'
  },
  // 달빛: 회청 대사 + 크림 속마음 + 밤색 네이비 Play (Lunar의 낮 버전)
  'Moonlight White': {
    outerBg:'#f2f2f6', card:'#ffffff', text:'#000000',
    hl:'#e2e4f0', hl2:'#f2eee4', playBg:'#f2eee4', pauseText:'#3c4260',
    accent:'#3c4260', accentText:'#ffffff',
    muted:'#5e6074',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2eee4'
  },
  // 바탕까지 흰색: 흰 바탕 + 흰 카드 + 연회청 블록 + 먹색 Play
  'Paper White': {
    outerBg:'#ffffff', card:'#ffffff', text:'#000000',
    hl:'#e8ebf2', hl2:'#f1f1f1', playBg:'#f1f1f1', pauseText:'#2a2a2a',
    accent:'#2a2a2a', accentText:'#ffffff',
    muted:'#6a6a6a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f1f1f1'
  },
  // 흰 바탕 + 연청 카드 대신 흰 카드 + 하늘 대사 + 라일락 속마음 + 하늘 블루 Play
  'Cloud Nine': {
    outerBg:'#ffffff', card:'#ffffff', text:'#000000',
    hl:'#dceafa', hl2:'#ece6f8', playBg:'#ece6f8', pauseText:'#3a64a8',
    accent:'#3a64a8', accentText:'#ffffff',
    muted:'#5a6a84',
    title:'#ffffff', subtitle:'#ffffff', char:'#ece6f8'
  },
  // 모눈종이: 하늘 격자색 대사 + 미색 속마음 + 청색 Play
  'Graph Paper': {
    outerBg:'#eef3f6', card:'#ffffff', text:'#000000',
    hl:'#dce8f0', hl2:'#f2efe6', playBg:'#f2efe6', pauseText:'#3a6a8c',
    accent:'#3a6a8c', accentText:'#ffffff',
    muted:'#4f6878',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2efe6'
  },
  // 활판 인쇄: 흰 종이 + 미색 대사 + 회청 속마음 + 짙은 적색 잉크 Play
  Letterpress: {
    outerBg:'#f4f1ea', card:'#ffffff', text:'#000000',
    hl:'#e6dfd2', hl2:'#e6e9ee', playBg:'#e6e9ee', pauseText:'#8a2a2a',
    accent:'#8a2a2a', accentText:'#ffffff',
    muted:'#6a5e52',
    title:'#ffffff', subtitle:'#ffffff', char:'#e6e9ee'
  },
  // 항공우편 봉투: 흰 카드 + 연빨강 대사 + 연파랑 속마음 + 우표 남색 Play
  Airmail: {
    outerBg:'#f2eee8', card:'#ffffff', text:'#000000',
    hl:'#f2dede', hl2:'#dde4f2', playBg:'#dde4f2', pauseText:'#2e4a8a',
    accent:'#2e4a8a', accentText:'#ffffff',
    muted:'#6a6460',
    title:'#ffffff', subtitle:'#ffffff', char:'#dde4f2'
  },
  // 화지: 흰 카드 + 미색 대사 + 연녹회 속마음 + 짙은 녹회 Play
  Washi: {
    outerBg:'#f2efe9', card:'#ffffff', text:'#000000',
    hl:'#e8e2d6', hl2:'#e6ebe6', playBg:'#e6ebe6', pauseText:'#4a5a4a',
    accent:'#4a5a4a', accentText:'#ffffff',
    muted:'#646860',
    title:'#ffffff', subtitle:'#ffffff', char:'#e6ebe6'
  },
  // 은빛 밤: 청회색 대사 + 회보라 속마음 + 은색 Play
  'Silver Night': {
    outerBg:'#15171b', card:'#1d2025', text:'#eceef2',
    hl:'#3a404a', hl2:'#3a3a44', playBg:'#3a3a44', pauseText:'#e2e6ee',
    accent:'#d8dde6', accentText:'#15171b',
    muted:'#9c9fa6',
    title:'#ffffff', subtitle:'#eceef2', char:'#d8dde6'
  },
  // 밤 서리: 청록 회색 대사 + 회보라 속마음 + 서리빛 Play
  'Night Frost': {
    outerBg:'#121820', card:'#1a212b', text:'#eaf0f4',
    hl:'#2e4458', hl2:'#3a3a4c', playBg:'#3a3a4c', pauseText:'#d8eef6',
    accent:'#cfe8f2', accentText:'#121820',
    muted:'#98a4ae',
    title:'#ffffff', subtitle:'#eaf0f4', char:'#cfe8f2'
  },
  // Inverse 남색판: 흰 카드 위 남색 대사 + 회남 속마음 (글자 자동 흰색)
  'Inverse Navy': {
    outerBg:'#eff1f5', card:'#ffffff', text:'#000000',
    hl:'#24304c', hl2:'#3a4660', playBg:'#e3e6ee', pauseText:'#24304c',
    accent:'#24304c', accentText:'#ffffff',
    muted:'#545c70',
    title:'#ffffff', subtitle:'#ffffff', char:'#3a4660'
  },
  // 반달: 대사는 짙은 남색 블록, 속마음은 연한 회청 블록으로 명암을 반씩
  'Half Moon': {
    outerBg:'#f0f1f4', card:'#ffffff', text:'#000000',
    hl:'#2c2e3a', hl2:'#e8eaf2', playBg:'#e8eaf2', pauseText:'#2c2e3a',
    accent:'#2c2e3a', accentText:'#ffffff',
    muted:'#5a5c68',
    title:'#ffffff', subtitle:'#ffffff', char:'#e8eaf2'
  },
  // Holographic을 더 순하게: 진주빛 하늘 + 연보라 블록 + 라벤더 Play
  'Pearl Holo': {
    outerBg:'#f4f5fb', card:'#ffffff', text:'#000000',
    hl:'#e0f0fb', hl2:'#f0e6fa', playBg:'#f0e6fa', pauseText:'#5a4ac0',
    accent:'#7a6ad8', accentText:'#ffffff',
    muted:'#646890',
    title:'#ffffff', subtitle:'#ffffff', char:'#e0f0fb'
  },
  // 오팔린 유리: 민트 대사 + 연분홍 속마음 + 페리윙클 Play
  Opaline: {
    outerBg:'#f3f6f6', card:'#ffffff', text:'#000000',
    hl:'#dcf0ec', hl2:'#f4e6ee', playBg:'#f4e6ee', pauseText:'#5a66b8',
    accent:'#6c78c8', accentText:'#ffffff',
    muted:'#5a6c6c',
    title:'#ffffff', subtitle:'#ffffff', char:'#dcf0ec'
  },
  // 간유리: 흰 카드 위 아주 옅은 블록 + 흐린 청회 Play
  'Frosted Glass': {
    outerBg:'#e9eef4', card:'#ffffff', text:'#000000',
    hl:'#e2eaf3', hl2:'#eef1f5', playBg:'#eef1f5', pauseText:'#4a5a78',
    accent:'#8a9ab8', accentText:'#1a2236',
    muted:'#5a6478',
    title:'#ffffff', subtitle:'#ffffff', char:'#eef1f5'
  },
  // Red Dot의 다크 버전: 무채색 다크 + 한 톤 낮춘 빨간 Play
  'Red Dot Night': {
    outerBg:'#161618', card:'#1e1e21', text:'#ececee',
    hl:'#3e3e44', hl2:'#303036', playBg:'#303036', pauseText:'#e6e6e8',
    accent:'#c84a42', accentText:'#ffffff',
    muted:'#9a9aa0',
    title:'#ffffff', subtitle:'#ececee', char:'#c84a42'
  },
  // 세이지 초록 한 색의 명도만 바꾼 단색
  'Sage Mono': {
    outerBg:'#eef3ee', card:'#ffffff', text:'#000000',
    hl:'#d4e4d4', hl2:'#eaf1ea', playBg:'#eaf1ea', pauseText:'#3e6a4a',
    accent:'#3e6a4a', accentText:'#ffffff',
    muted:'#4a6a52',
    title:'#ffffff', subtitle:'#ffffff', char:'#eaf1ea'
  },
  // 청록 한 색의 단색
  'Teal Mono': {
    outerBg:'#ebf4f4', card:'#ffffff', text:'#000000',
    hl:'#cde6e6', hl2:'#e8f3f3', playBg:'#e8f3f3', pauseText:'#1f6a70',
    accent:'#1f6a70', accentText:'#ffffff',
    muted:'#3a6a6e',
    title:'#ffffff', subtitle:'#ffffff', char:'#e8f3f3'
  },
  // 대사·속마음 둘 다 짙은 청회 블록 (글자는 자동 흰색)
  'Inverse Slate': {
    outerBg:'#eff1f4', card:'#ffffff', text:'#000000',
    hl:'#3a4656', hl2:'#56627a', playBg:'#e6e9ee', pauseText:'#3a4656',
    accent:'#3a4656', accentText:'#ffffff',
    muted:'#566070',
    title:'#ffffff', subtitle:'#ffffff', char:'#56627a'
  },
  // 다크의 반전: 어두운 카드 위에 밝은 대사 블록 (글자는 자동 검정)
  Negative: {
    outerBg:'#16181c', card:'#1e2126', text:'#eef0f4',
    hl:'#dfe6f0', hl2:'#3a404a', playBg:'#3a404a', pauseText:'#dfe6f0',
    accent:'#dfe6f0', accentText:'#16181c',
    muted:'#9ca0a8',
    title:'#ffffff', subtitle:'#eef0f4', char:'#dfe6f0'
  },
  // 자개: 분홍 진주 대사 + 물빛 속마음 + 청회 Play
  'Mother of Pearl': {
    outerBg:'#f5f4f8', card:'#ffffff', text:'#000000',
    hl:'#f2e8ee', hl2:'#e4eef6', playBg:'#e4eef6', pauseText:'#5a6a90',
    accent:'#6a7aa0', accentText:'#ffffff',
    muted:'#666a80',
    title:'#ffffff', subtitle:'#ffffff', char:'#e4eef6'
  },
  // 소금 결정: 회청록 대사 + 모래 속마음 + 짙은 바다 Play
  'Sea Salt': {
    outerBg:'#f0f4f4', card:'#ffffff', text:'#000000',
    hl:'#dfeaea', hl2:'#f2efea', playBg:'#f2efea', pauseText:'#3f5e66',
    accent:'#3f5e66', accentText:'#ffffff',
    muted:'#506468',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2efea'
  },
  // 색인 카드: 하늘 줄 대사 + 연빨강 여백선 속마음 + 빨강 Play
  'Index Card': {
    outerBg:'#eef2f7', card:'#ffffff', text:'#000000',
    hl:'#dbe6f4', hl2:'#fbe4e4', playBg:'#fbe4e4', pauseText:'#b04040',
    accent:'#b04040', accentText:'#ffffff',
    muted:'#5a6474',
    title:'#ffffff', subtitle:'#ffffff', char:'#fbe4e4'
  },
  // 장부: 연초록 줄 대사 + 연분홍 줄 속마음 + 장부 초록 Play
  Ledger: {
    outerBg:'#eef3ec', card:'#ffffff', text:'#000000',
    hl:'#dcebd6', hl2:'#f6e4e0', playBg:'#f6e4e0', pauseText:'#2f5a3a',
    accent:'#2f5a3a', accentText:'#ffffff',
    muted:'#506650',
    title:'#ffffff', subtitle:'#ffffff', char:'#f6e4e0'
  },
  // 마닐라 서류철: 마닐라 대사 + 회청 속마음 + 남색 Play
  'Manila Folder': {
    outerBg:'#efe8d8', card:'#fffdf6', text:'#000000',
    hl:'#ecdfb8', hl2:'#e4e8ee', playBg:'#e4e8ee', pauseText:'#3a4458',
    accent:'#3a4458', accentText:'#ffffff',
    muted:'#6a6248',
    title:'#ffffff', subtitle:'#ffffff', char:'#e4e8ee'
  },
  // 스프레드시트: 연초록 선택 셀 대사 + 회청 속마음 + 시트 초록 Play
  Spreadsheet: {
    outerBg:'#eef2ee', card:'#ffffff', text:'#000000',
    hl:'#dbeedd', hl2:'#eef0f4', playBg:'#eef0f4', pauseText:'#1e7a46',
    accent:'#1e7a46', accentText:'#ffffff',
    muted:'#506458',
    title:'#ffffff', subtitle:'#ffffff', char:'#eef0f4'
  },
  // 구리 녹: 녹청 대사 + 구리 베이지 속마음 + 구리색 Play
  Verdigris: {
    outerBg:'#ecf3f1', card:'#ffffff', text:'#000000',
    hl:'#c6e4dc', hl2:'#f0e6dc', playBg:'#f0e6dc', pauseText:'#8a5a3a',
    accent:'#8a5a3a', accentText:'#ffffff',
    muted:'#4a6a64',
    title:'#ffffff', subtitle:'#ffffff', char:'#f0e6dc'
  },
  // 올리브 잎: 연올리브 대사 + 회청 속마음 + 올리브 Play
  'Olive Leaf': {
    outerBg:'#f0f2ea', card:'#ffffff', text:'#000000',
    hl:'#dfe4cc', hl2:'#e6ecf0', playBg:'#e6ecf0', pauseText:'#5a6630',
    accent:'#5a6630', accentText:'#ffffff',
    muted:'#5e6644',
    title:'#ffffff', subtitle:'#ffffff', char:'#e6ecf0'
  },
  // 여권: 금박 연금색 대사 + 회녹 면지 속마음 + 짙은 초록 표지 Play에 금박 아이콘
  Passport: {
    outerBg:'#eef1ef', card:'#ffffff', text:'#000000',
    hl:'#f0e8cc', hl2:'#e2eae6', playBg:'#f2ecdc', pauseText:'#23463a',
    accent:'#23463a', accentText:'#f2e4b8',
    muted:'#50625a',
    title:'#ffffff', subtitle:'#ffffff', char:'#e2eae6'
  },
  // 지폐: 미색 카드 + 녹색 무늬 대사 + 연보라 무늬 속마음 + 짙은 지폐 청록 Play
  'Bank Note': {
    outerBg:'#eef1ec', card:'#fbfcf8', text:'#000000',
    hl:'#cfe6d6', hl2:'#e8e0f0', playBg:'#e8e0f0', pauseText:'#1f5a4a',
    accent:'#1f5a4a', accentText:'#ffffff',
    muted:'#586656',
    title:'#ffffff', subtitle:'#ffffff', char:'#e8e0f0'
  },
  // 바인더 색인 탭: 라일락 탭 대사 + 아쿠아 탭 속마음 + 먹색 Play
  'Tab Divider': {
    outerBg:'#f1f2f4', card:'#ffffff', text:'#000000',
    hl:'#e6dff4', hl2:'#d6eeee', playBg:'#d6eeee', pauseText:'#3a3a44',
    accent:'#3a3a44', accentText:'#ffffff',
    muted:'#5c6070',
    title:'#ffffff', subtitle:'#ffffff', char:'#d6eeee'
  },
  // 등고선 지도: 평야 초록 대사 + 물 하늘 속마음 + 등고선 갈색 Play
  'Topo Map': {
    outerBg:'#f0f2ec', card:'#ffffff', text:'#000000',
    hl:'#dcead4', hl2:'#d8e8f2', playBg:'#d8e8f2', pauseText:'#7a5a3e',
    accent:'#7a5a3e', accentText:'#ffffff',
    muted:'#5e6656',
    title:'#ffffff', subtitle:'#ffffff', char:'#dcead4'
  },
  // 영화표 반쪽: 연분홍 표 대사 + 연청록 속마음 + 청록 Play
  'Ticket Stub': {
    outerBg:'#f4efee', card:'#ffffff', text:'#000000',
    hl:'#f4dadb', hl2:'#d6ebe6', playBg:'#d6ebe6', pauseText:'#2a6a64',
    accent:'#2a6a64', accentText:'#ffffff',
    muted:'#6a5e60',
    title:'#ffffff', subtitle:'#ffffff', char:'#d6ebe6'
  },
  // 클립보드: 갈색 판 바탕 위 흰 종이 + 회색 대사 + 연녹 속마음 + 강철 클립 Play
  Clipboard: {
    outerBg:'#d9c7ae', card:'#ffffff', text:'#000000',
    hl:'#e4e6e8', hl2:'#e2eee2', playBg:'#e2eee2', pauseText:'#4a5560',
    accent:'#4a5560', accentText:'#ffffff',
    muted:'#5c6268',
    title:'#ffffff', subtitle:'#ffffff', char:'#e2eee2'
  },
  // 어두운 카드 위 밝은 모래색 대사 블록
  'Negative Sand': {
    outerBg:'#1a1916', card:'#22211e', text:'#efece6',
    hl:'#ece2d0', hl2:'#3a3833', playBg:'#3a3833', pauseText:'#ece2d0',
    accent:'#ece2d0', accentText:'#1a1916',
    muted:'#a09c94',
    title:'#ffffff', subtitle:'#efece6', char:'#ece2d0'
  },
  // 초록 천 장정 책: 짙은 초록 바탕 + 흰 카드 + 회녹 대사 + 미색 속마음
  'Green Cloth': {
    outerBg:'#2f4a40', card:'#ffffff', text:'#000000',
    hl:'#dbe8e0', hl2:'#f0ece2', playBg:'#f0ece2', pauseText:'#2f4a40',
    accent:'#2f4a40', accentText:'#ffffff',
    muted:'#5a6a62',
    title:'#ffffff', subtitle:'#ffffff', char:'#f0ece2'
  },
  // 회청 천 장정: 짙은 슬레이트 바탕 + 흰 카드 + 회청 대사 + 연녹 속마음
  'Slate Cloth': {
    outerBg:'#3e4650', card:'#ffffff', text:'#000000',
    hl:'#dde2ea', hl2:'#e4eee6', playBg:'#e4eee6', pauseText:'#3e4650',
    accent:'#3e4650', accentText:'#ffffff',
    muted:'#5c636e',
    title:'#ffffff', subtitle:'#ffffff', char:'#e4eee6'
  },
  // 와인 천 장정: 짙은 와인 바탕 + 흰 카드 + 연분홍 대사 + 회청 속마음
  'Wine Cloth': {
    outerBg:'#4e2a34', card:'#ffffff', text:'#000000',
    hl:'#f2dfe2', hl2:'#e2e8ee', playBg:'#e2e8ee', pauseText:'#4e2a34',
    accent:'#4e2a34', accentText:'#ffffff',
    muted:'#6a5a5e',
    title:'#ffffff', subtitle:'#ffffff', char:'#e2e8ee'
  },
  // 수영장 타일: 물빛 대사 + 흰 줄눈 회색 속마음 + 레인 로프 파랑 Play
  'Swimming Pool': {
    outerBg:'#e6f4f6', card:'#ffffff', text:'#000000',
    hl:'#bfe6ec', hl2:'#eff1f2', playBg:'#eff1f2', pauseText:'#1f5f8a',
    accent:'#1f5f8a', accentText:'#ffffff',
    muted:'#46687a',
    title:'#ffffff', subtitle:'#ffffff', char:'#eff1f2'
  },
  // 테라조 바닥: 흰 바탕에 박힌 분홍 돌 대사 + 초록 돌 속마음 + 회색 돌 Play
  Terrazzo: {
    outerBg:'#f4f2ef', card:'#ffffff', text:'#000000',
    hl:'#ecdcd6', hl2:'#d6e6e0', playBg:'#d6e6e0', pauseText:'#4a5058',
    accent:'#4a5058', accentText:'#ffffff',
    muted:'#605c5a',
    title:'#ffffff', subtitle:'#ffffff', char:'#d6e6e0'
  },
  // 수채화 번짐: 새싹 초록 물감 대사 + 황토 물감 속마음 + 인디고 물감 Play
  Watercolor: {
    outerBg:'#f6f6f4', card:'#ffffff', text:'#000000',
    hl:'#e0f0e4', hl2:'#f2e8dc', playBg:'#f2e8dc', pauseText:'#3a5a7a',
    accent:'#3a5a7a', accentText:'#ffffff',
    muted:'#5c6670',
    title:'#ffffff', subtitle:'#ffffff', char:'#e0f0e4'
  },
  // 세이지 액자: 중간 밝기 세이지 바탕 + 흰 카드 + 연녹 대사 + 미색 속마음
  'Sage Frame': {
    outerBg:'#b9c9bd', card:'#ffffff', text:'#000000',
    hl:'#dce8de', hl2:'#eeebe4', playBg:'#eeebe4', pauseText:'#3e5a48',
    accent:'#3e5a48', accentText:'#ffffff',
    muted:'#5a6a5e',
    title:'#ffffff', subtitle:'#ffffff', char:'#eeebe4'
  },
  /* ---- 2026-11 추가 58종 (시인성 기준: 본문 7:1, 대사 6:1, 속마음 6.5:1, Play 아이콘·푸터·제목·인물명 4.5:1) ---- */
  // [파스텔] 회색 낀 라벤더
  'Lavender Fog': {
    outerBg:'#ecebf3', card:'#ffffff', text:'#000000',
    hl:'#d6d3e6', hl2:'#e9e7f1',
    accent:'#6f6a92', accentText:'#ffffff',
    muted:'#6a677f',
    title:'#f4f3f9', subtitle:'#f8f8fb', char:'#d6d3e6'
  },
  // [파스텔] 아쿠아 우유
  'Aqua Milk': {
    outerBg:'#e1f5f7', card:'#ffffff', text:'#000000',
    hl:'#b8e6ec', hl2:'#dcf1f4',
    accent:'#3a9fae', accentText:'#113034',
    muted:'#47757c',
    title:'#eefafc', subtitle:'#f5fcfd', char:'#b8e6ec'
  },
  // [파스텔] 커스터드 푸딩
  Pudding: {
    outerBg:'#fcf1dc', card:'#ffffff', text:'#000000',
    hl:'#f3d9a4', hl2:'#faeccd',
    accent:'#9a6a2a', accentText:'#fcfbfa',
    muted:'#826a48',
    title:'#fff8ea', subtitle:'#fffbf2', char:'#f3d9a4'
  },
  // [파스텔] 대사 하늘·속마음 분홍, 거품 목욕
  'Bubble Bath': {
    outerBg:'#f0ebfa', card:'#ffffff', text:'#000000',
    hl:'#d4e6fa', hl2:'#f6dcef',
    accent:'#a68ad8', accentText:'#322941',
    muted:'#6d6684',
    title:'#f8f5ff', subtitle:'#fbf9ff', char:'#f6dcef'
  },
  // [파스텔] 스위트피 꽃
  'Sweet Pea': {
    outerBg:'#fbebf4', card:'#ffffff', text:'#000000',
    hl:'#e9d0f2', hl2:'#fbe0ee',
    accent:'#c45c95', accentText:'#22101a',
    muted:'#885f79',
    title:'#fdf3f9', subtitle:'#fef8fb', char:'#f3c9e0'
  },
  // [파스텔] 실험: 민트·핑크·노랑 무지개 파스텔
  Unicorn: {
    outerBg:'#f3eefc', card:'#ffffff', text:'#000000',
    hl:'#c9ecf2', hl2:'#fde2ef',
    accent:'#f29ac0', accentText:'#4a1f35',
    muted:'#74668b',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffe7a8'
  },
  // [파스텔] 크림소다
  'Cream Soda': {
    outerBg:'#fbf4e6', card:'#ffffff', text:'#000000',
    hl:'#cdeee0', hl2:'#f6ead2',
    accent:'#e8a35c', accentText:'#573d22',
    muted:'#7b6e57',
    title:'#fffaf0', subtitle:'#fffcf6', char:'#cdeee0'
  },
  // [파스텔] 복숭아 대사 + 하늘 속마음
  'Peach Cloud': {
    outerBg:'#fbeee8', card:'#ffffff', text:'#000000',
    hl:'#f6d2c4', hl2:'#dfe6f4',
    accent:'#c07a64', accentText:'#301e19',
    muted:'#85665c',
    title:'#ffffff', subtitle:'#ffffff', char:'#f6d2c4'
  },
  // [파스텔] 커스터드 + 장밋빛 속마음
  Custard: {
    outerBg:'#faf2e0', card:'#ffffff', text:'#000000',
    hl:'#f2dfae', hl2:'#f4e4e0',
    accent:'#9a7a3a', accentText:'#1b150a',
    muted:'#7d6a48',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2dfae'
  },
  // [파스텔] 흐린 장미 + 베이지
  'Hazy Rose': {
    outerBg:'#f4eaec', card:'#ffffff', text:'#000000',
    hl:'#e8ccd2', hl2:'#ece6dc',
    accent:'#9a6a74', accentText:'#080506',
    muted:'#7e6268',
    title:'#ffffff', subtitle:'#ffffff', char:'#e8ccd2'
  },
  // [내추럴] 점토
  Clay: {
    outerBg:'#ece3dc', card:'#fffbf8', text:'#2a201b',
    hl:'#dcc7b9', hl2:'#ebe0d8',
    accent:'#8c6552', accentText:'#ffffff',
    muted:'#746257',
    title:'#faf3ee', subtitle:'#fcf8f5', char:'#dcc7b9'
  },
  // [내추럴] 자작나무
  Birch: {
    outerBg:'#f2f1ec', card:'#ffffff', text:'#1d1d1a',
    hl:'#dedcd2', hl2:'#ecebe5',
    accent:'#4a4a42', accentText:'#f2f1ec',
    muted:'#6f6e66',
    title:'#fafaf6', subtitle:'#fcfcfa', char:'#dedcd2'
  },
  // [내추럴] 호두나무
  Walnut: {
    outerBg:'#eadfd3', card:'#fffaf4', text:'#2a1c12',
    hl:'#d6bfa6', hl2:'#e9dccd',
    accent:'#5a3a22', accentText:'#f4e7d7',
    muted:'#795f4a',
    title:'#f7eee4', subtitle:'#faf5ef', char:'#d6bfa6'
  },
  // [내추럴] 고사리
  Fern: {
    outerBg:'#e5ede3', card:'#fafdf9', text:'#17231a',
    hl:'#c2d8c0', hl2:'#dde9db',
    accent:'#3d6b4a', accentText:'#ffffff',
    muted:'#576e61',
    title:'#f0f6ef', subtitle:'#f6faf5', char:'#c2d8c0'
  },
  // [내추럴] 호밀빵
  Rye: {
    outerBg:'#ebe2d2', card:'#fdf9f1', text:'#251c10',
    hl:'#d6c4a2', hl2:'#e7dcc6',
    accent:'#4e3c22', accentText:'#efe4cf',
    muted:'#74634a',
    title:'#f7f0e2', subtitle:'#faf6ee', char:'#d6c4a2'
  },
  // [내추럴] 갯벌, 회색 진흙과 바다색 버튼
  Mudflat: {
    outerBg:'#e6e2dc', card:'#fbfaf8', text:'#221e1a',
    hl:'#cfc6ba', hl2:'#e2ddd5',
    accent:'#4c5a5e', accentText:'#ffffff',
    muted:'#69645e',
    title:'#f5f3f0', subtitle:'#f9f8f6', char:'#c5d0d2'
  },
  // [내추럴] 식물 표본: 대사 마른 잎·속마음 마른 장미
  Herbarium: {
    outerBg:'#f1eee2', card:'#fffdf6', text:'#1e2016',
    hl:'#d4dcc0', hl2:'#efe0dc',
    accent:'#8a4a4a', accentText:'#ffffff',
    muted:'#706c57',
    title:'#faf8ef', subtitle:'#fcfbf5', char:'#e6c6c0'
  },
  // [내추럴] 풀밭 + 들장미
  Meadow: {
    outerBg:'#eceee2', card:'#fdfdf8', text:'#1e2218',
    hl:'#d6dfc0', hl2:'#f0dcd8',
    accent:'#6a7a3a', accentText:'#ffffff',
    muted:'#5e6650',
    title:'#f6f8f0', subtitle:'#fafbf6', char:'#f0dcd8'
  },
  // [내추럴] 마른 라벤더 + 마른 풀
  'Dried Lavender': {
    outerBg:'#eceae8', card:'#fdfcfb', text:'#201e22',
    hl:'#dcd6e0', hl2:'#e4e6da',
    accent:'#6a5e7a', accentText:'#ffffff',
    muted:'#66606a',
    title:'#f6f5f6', subtitle:'#faf9fa', char:'#dcd6e0'
  },
  // [비비드] 수영장 파랑 + 튜브 핑크
  'Pool Party': {
    outerBg:'#d6f6ff', card:'#ffffff', text:'#000000',
    hl:'#7fdcff', hl2:'#c9f0ff',
    accent:'#ff4fa3', accentText:'#4c1831',
    muted:'#237694',
    title:'#f0fbff', subtitle:'#f6fdff', char:'#ffd0e8'
  },
  // [비비드] 크레용 삼원색
  Crayon: {
    outerBg:'#fff7d6', card:'#ffffff', text:'#000000',
    hl:'#9fd3ff', hl2:'#ffd0d0',
    accent:'#ff3b30', accentText:'#400f0c',
    muted:'#3b6bd6',
    title:'#fffdf2', subtitle:'#fffef7', char:'#ffe14a'
  },
  // [비비드] 스프링클
  Sprinkles: {
    outerBg:'#fff6ec', card:'#ffffff', text:'#000000',
    hl:'#ffc4e0', hl2:'#b8ecd8',
    accent:'#6a4ae0', accentText:'#ffffff',
    muted:'#8a5a3a',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffe07a'
  },
  // [비비드] 과일 샐러드
  'Fruit Salad': {
    outerBg:'#f6fbe8', card:'#ffffff', text:'#000000',
    hl:'#ffd27a', hl2:'#c4ee9a',
    accent:'#e8502a', accentText:'#341209',
    muted:'#5a7a2a',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd27a'
  },
  // [다크] 다크 초콜릿
  'Dark Chocolate': {
    outerBg:'#1a1210', card:'#241a17', text:'#efe5df',
    hl:'#4a3530', hl2:'#372823',
    accent:'#e8c3a8', accentText:'#1a1210',
    muted:'#998479',
    title:'#fff5ef', subtitle:'#fff9f5', char:'#f4e1d4'
  },
  // [다크] 실험: 기름막 무지갯빛
  'Oil Slick': {
    outerBg:'#0e0f14', card:'#16171f', text:'#e9eaf2',
    hl:'#1f3d4a', hl2:'#3a2348',
    accent:'#7ef0d0', accentText:'#0e0f14',
    muted:'#8288a8',
    title:'#ffffff', subtitle:'#ffffff', char:'#f1e1ff'
  },
  // [다크] 자단목
  Rosewood: {
    outerBg:'#1c1414', card:'#261b1b', text:'#f0e4e2',
    hl:'#533634', hl2:'#3d2928',
    accent:'#d89a8e', accentText:'#1c1414',
    muted:'#9e8482',
    title:'#fff4f2', subtitle:'#fff8f7', char:'#f6e3df'
  },
  // [다크] 석유빛 청록 + 황동
  Petrol: {
    outerBg:'#0f1416', card:'#162024', text:'#e4eef0',
    hl:'#1e3a42', hl2:'#2e2e40',
    accent:'#e0c07a', accentText:'#0f1416',
    muted:'#869498',
    title:'#ffffff', subtitle:'#ffffff', char:'#f7efde'
  },
  // [레트로] 50년대 다이너: 체리 레드 + 민트
  Diner: {
    outerBg:'#fdf1e3', card:'#ffffff', text:'#1a1a1a',
    hl:'#ffb3b3', hl2:'#c9ece6',
    accent:'#e63946', accentText:'#22090a',
    muted:'#317a73',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd6d6'
  },
  // [레트로] 70년대 아보카도 주방
  'Avocado Kitchen': {
    outerBg:'#ecebcf', card:'#fbfaee', text:'#262614',
    hl:'#c2c27a', hl2:'#e8d8a8',
    accent:'#a5671a', accentText:'#ffffff',
    muted:'#6b6a32',
    title:'#fbfae6', subtitle:'#fdfcf0', char:'#e8d088'
  },
  // [레트로] 폴라로이드 바랜 색
  Polaroid: {
    outerBg:'#ecebe6', card:'#fffef9', text:'#222222',
    hl:'#f2d7a8', hl2:'#c8dde0',
    accent:'#3d6f8a', accentText:'#ffffff',
    muted:'#6e6961',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2d7a8'
  },
  // [레트로] 80년대 오락실
  Arcade: {
    outerBg:'#0b0b1a', card:'#141428', text:'#f0f0ff',
    hl:'#3a1f5a', hl2:'#1f3a3a',
    accent:'#ffe14a', accentText:'#0b0b1a',
    muted:'#7575af',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffc3ea'
  },
  // [레트로] 햇볕에 바랜 사진
  Sunbleached: {
    outerBg:'#f2e7da', card:'#fdf8f2', text:'#2a2420',
    hl:'#e8c6b4', hl2:'#cfdcd8',
    accent:'#c07a5c', accentText:'#301e17',
    muted:'#72665e',
    title:'#fdf8f2', subtitle:'#fefbf7', char:'#e8c6b4'
  },
  // [레트로] 코다크롬 필름
  Kodachrome: {
    outerBg:'#f5ead0', card:'#fffbf0', text:'#1c1a14',
    hl:'#f5c04a', hl2:'#a8d0d8',
    accent:'#c8312a', accentText:'#ffffff',
    muted:'#3f6f7a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f5c04a'
  },
  // [레트로] 볼링장 카펫
  'Bowling Alley': {
    outerBg:'#f2e3ee', card:'#ffffff', text:'#1c1420',
    hl:'#c8b8f0', hl2:'#ffd0b8',
    accent:'#2a3a8a', accentText:'#ffffff',
    muted:'#8a4a7a',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd0b8'
  },
  // [레트로] Y2K 크롬 실버
  'Y2K Chrome': {
    outerBg:'#e6ecf5', card:'#ffffff', text:'#10141c',
    hl:'#c6d4ea', hl2:'#eadcf5',
    accent:'#7a8aa8', accentText:'#1e222a',
    muted:'#5e6a83',
    title:'#ffffff', subtitle:'#ffffff', char:'#d8f0ff'
  },
  // [레트로] 미드센추리 가구
  'Mid Century': {
    outerBg:'#efe6d2', card:'#fbf6ea', text:'#1f1a12',
    hl:'#e8b04a', hl2:'#b8d0c4',
    accent:'#2e6a6a', accentText:'#ffffff',
    muted:'#9c5429',
    title:'#fff8ea', subtitle:'#fffbf2', char:'#eab658'
  },
  // [레트로] 길가 모텔 간판
  Motel: {
    outerBg:'#fbe8d8', card:'#ffffff', text:'#1e1410',
    hl:'#7fd0c8', hl2:'#ffd2b4',
    accent:'#e8553a', accentText:'#34130d',
    muted:'#287570',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd2b4'
  },
  // [레트로] 실험: 초록 도트 액정
  'Game Boy': {
    outerBg:'#c4cfa1', card:'#e0e8c4', text:'#0f380f',
    hl:'#9bbc0f', hl2:'#c8d898',
    accent:'#306230', accentText:'#e0e8c4',
    muted:'#415d33',
    title:'#e0f8d0', subtitle:'#ecfbe3', char:'#c4e070'
  },
  // [레트로] 빈티지 엽서
  Postcard: {
    outerBg:'#f6e8d4', card:'#fffaf2', text:'#1e1a14',
    hl:'#a8d4e8', hl2:'#f6d0b8',
    accent:'#d0452a', accentText:'#ffffff',
    muted:'#2f6f8f',
    title:'#ffffff', subtitle:'#ffffff', char:'#f6d0b8'
  },
  // [레트로] 밀크셰이크: 딸기 + 민트
  Milkshake: {
    outerBg:'#fdf0f2', card:'#ffffff', text:'#1a1416',
    hl:'#ffc8d4', hl2:'#c8ecf0',
    accent:'#c83a5a', accentText:'#ffffff',
    muted:'#8a5a66',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffc8d4'
  },
  // [레트로] 자동차 극장 노을
  'Drive-in': {
    outerBg:'#eef0f6', card:'#ffffff', text:'#14161e',
    hl:'#ffd0a8', hl2:'#c8d4f4',
    accent:'#2a3a8a', accentText:'#ffffff',
    muted:'#6a5a7a',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffd0a8'
  },
  // [레트로] LP 레코드 + 금색 라벨
  'Vinyl Record': {
    outerBg:'#141414', card:'#1e1e1e', text:'#ececec',
    hl:'#5a2a2a', hl2:'#2a3a3a',
    accent:'#f2c84a', accentText:'#141414',
    muted:'#948e88',
    title:'#ffffff', subtitle:'#ffffff', char:'#faecc0'
  },
  // [레트로] 8mm 홈비디오
  'Super 8': {
    outerBg:'#f2e8d6', card:'#fffaf0', text:'#22180e',
    hl:'#f0c890', hl2:'#c8d8c0',
    accent:'#a8481c', accentText:'#ffffff',
    muted:'#6e5a40',
    title:'#ffffff', subtitle:'#ffffff', char:'#f0c890'
  },
  // [레트로] 옛날 밀폐 용기
  Tupperware: {
    outerBg:'#f4f4ea', card:'#ffffff', text:'#14160e',
    hl:'#f8c8a0', hl2:'#b8e0d0',
    accent:'#e86a3a', accentText:'#401d10',
    muted:'#4d7869',
    title:'#ffffff', subtitle:'#ffffff', char:'#f8c8a0'
  },
  // [레트로] 아이스크림 가게
  'Ice Cream Parlor': {
    outerBg:'#fbf3ec', card:'#ffffff', text:'#1a1410',
    hl:'#f8cad4', hl2:'#cfe8d8',
    accent:'#c85a6a', accentText:'#1e0e10',
    muted:'#7a5a54',
    title:'#ffffff', subtitle:'#ffffff', char:'#f8cad4'
  },
  // [레트로] 유리병 탄산
  'Pop Bottle': {
    outerBg:'#fff0dc', card:'#ffffff', text:'#1e140a',
    hl:'#ffc070', hl2:'#c8e8c0',
    accent:'#d8502a', accentText:'#200c06',
    muted:'#8a5a28',
    title:'#ffffff', subtitle:'#ffffff', char:'#ffc070'
  },
  // [레트로] 슬라이드 필름
  'Slide Film': {
    outerBg:'#f2f0ea', card:'#ffffff', text:'#161614',
    hl:'#f6d48a', hl2:'#b8d4e8',
    accent:'#d8402a', accentText:'#0b0302',
    muted:'#3a6a8a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f6d48a'
  },
  // [레트로] 빨래방
  Laundromat: {
    outerBg:'#e8f4f4', card:'#ffffff', text:'#101c1c',
    hl:'#c0e6e8', hl2:'#f8d8e0',
    accent:'#2a8a8a', accentText:'#061515',
    muted:'#4a7270',
    title:'#ffffff', subtitle:'#ffffff', char:'#f8d8e0'
  },
  // [레트로] 티키 바
  Tiki: {
    outerBg:'#f4ead6', card:'#fffaf0', text:'#1e160c',
    hl:'#f8c08a', hl2:'#a8dcc8',
    accent:'#2a7a5a', accentText:'#ffffff',
    muted:'#7a5a30',
    title:'#ffffff', subtitle:'#ffffff', char:'#f8c08a'
  },
  // [레트로] 50년대 아토믹 디자인
  Atomic: {
    outerBg:'#eef0e8', card:'#ffffff', text:'#141810',
    hl:'#f6c8a8', hl2:'#b8dcd8',
    accent:'#2a7a8a', accentText:'#ffffff',
    muted:'#6a6a5a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f6c8a8'
  },
  // [레트로] 대학 점퍼
  Varsity: {
    outerBg:'#f2ede4', card:'#ffffff', text:'#14161c',
    hl:'#f2c8c0', hl2:'#c8d4e4',
    accent:'#1a2a5a', accentText:'#ffffff',
    muted:'#7a3a3a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f2c8c0'
  },
  // [비비드] 청금석: 남색 + 금 반점
  Lapis: {
    outerBg:'#1a2a6c', card:'#f4f6fd', text:'#0b1238',
    hl:'#c4cdf2', hl2:'#e2e6f9',
    accent:'#2a3fa8', accentText:'#f5c84a',
    muted:'#8594d2',
    title:'#fef7e4', subtitle:'#fefaef', char:'#ffffff'
  },
  // [다크] 연수정
  'Smoky Quartz': {
    outerBg:'#2a2420', card:'#342d28', text:'#f0e8e0',
    hl:'#5a4a3c', hl2:'#463b32',
    accent:'#c8a888', accentText:'#2a2420',
    muted:'#968a7f',
    title:'#ffffff', subtitle:'#ffffff', char:'#f1e9e1'
  },
  // [내추럴] 비취 + 금
  'Imperial Jade': {
    outerBg:'#e2f2e6', card:'#fbfffc', text:'#062214',
    hl:'#9ad8b0', hl2:'#d4f0de',
    accent:'#0a6a3a', accentText:'#f5d76a',
    muted:'#407756',
    title:'#ffffff', subtitle:'#ffffff', char:'#f5d76a'
  },
  // [파스텔] 남동석 + 공작석 얼룩
  Azurite: {
    outerBg:'#eaf0f8', card:'#ffffff', text:'#0a1630',
    hl:'#c6d8f0', hl2:'#d8ece6',
    accent:'#1a4a9a', accentText:'#ffffff',
    muted:'#4e6488',
    title:'#ffffff', subtitle:'#ffffff', char:'#d8ece6'
  },
  // [내추럴] 단청: 뇌록·주홍·석간주
  Dancheong: {
    outerBg:'#e8f0ea', card:'#fffdf6', text:'#1a1a14',
    hl:'#f2c2b0', hl2:'#c8e2d4',
    accent:'#c8382a', accentText:'#ffffff',
    muted:'#2f6a5a',
    title:'#ffffff', subtitle:'#ffffff', char:'#f5d76a'
  },
  // [파스텔] 매화
  Maehwa: {
    outerBg:'#fbeff2', card:'#ffffff', text:'#1e0a10',
    hl:'#f0c0cc', hl2:'#e8ecd8',
    accent:'#8a2a42', accentText:'#ffffff',
    muted:'#866666',
    title:'#ffffff', subtitle:'#ffffff', char:'#f0c0cc'
  },
  // [다크] 칠판 + 분필
  Chalkboard: {
    outerBg:'#1f2c25', card:'#34463a', text:'#f0f4ea',
    hl:'#45624d', hl2:'#575849',
    accent:'#fff7a8', accentText:'#2a3a30',
    muted:'#889e8e',
    title:'#ffffff', subtitle:'#ffffff', char:'#fff6f9'
  },
  // 붓꽃 정원: 보라 꽃잎과 노란 꽃술의 보색
  'Iris Garden': {
    outerBg:'#efeaf7', card:'#ffffff', text:'#1d1530',
    hl:'#d9cdf1', hl2:'#f7ebb7',
    accent:'#5b3fa0', accentText:'#ffffff',
    muted:'#60537c',
    title:'#fbf6ff', subtitle:'#f2eaff', char:'#f5d76e'
  },
  // 크라프트지: 갈색 포장지 바탕에 검정 스탬프
  'Kraft Paper': {
    outerBg:'#c4a27a', card:'#d9bd98', text:'#1b140d',
    hl:'#b98f63', hl2:'#c9a67e',
    accent:'#1f1a15', accentText:'#e8d3b5',
    muted:'#3c2d1e',
    title:'#fff4e4', subtitle:'#f6e6cf', char:'#f0dcbd'
  },
  // 멍 자국: 보라→황록으로 번지는 탁한 색
  Bruise: {
    outerBg:'#d8d2de', card:'#f6f4f2', text:'#241f2b',
    hl:'#c6b5d3', hl2:'#dfe0b8',
    accent:'#5a4466', accentText:'#f6f4f2',
    muted:'#4f4955',
    title:'#f6f0fa', subtitle:'#ece6f1', char:'#e2e3a8'
  },
  // 토마토 텃밭: 토마토 빛 바탕에 초록 꼭지 버튼 (빨강·초록 보색)
  'Tomato Garden': {
    outerBg:'#f6e3dc', card:'#ffffff', text:'#1d1a14',
    hl:'#cfe3b8', hl2:'#f7d0c4',
    accent:'#2f6b2a', accentText:'#ffffff',
    muted:'#6a5a4f',
    title:'#fff6f1', subtitle:'#ffe9e2', char:'#d6ecc6'
  },
  // 루이보스: 붉은 찻물과 꿀빛
  Rooibos: {
    outerBg:'#ecd6cb', card:'#fbf3ee', text:'#2c160f',
    hl:'#e3b2a0', hl2:'#efd9b3',
    accent:'#8f3b24', accentText:'#fbf3ee',
    muted:'#634538',
    title:'#fff1ea', subtitle:'#fbe3d8', char:'#f2d29e'
  },
  // 밤 벚꽃: 남색 밤하늘 아래 연분홍 꽃잎
  'Sakura Night': {
    outerBg:'#171b33', card:'#1f2440', text:'#eef0fa',
    hl:'#5a3f5e', hl2:'#33395a',
    accent:'#f0bfd0', accentText:'#1f2440',
    muted:'#b1b6d2',
    title:'#ffffff', subtitle:'#f3e8f3', char:'#f4c6d6'
  },
  // 석류: 짙은 루비 알맹이와 분홍 속껍질
  Pomegranate: {
    outerBg:'#f5e4e6', card:'#fffafa', text:'#2a0b14',
    hl:'#efb3c0', hl2:'#f7d9cf',
    accent:'#8e1330', accentText:'#ffffff',
    muted:'#734250',
    title:'#fff2f5', subtitle:'#ffe4ea', char:'#f6c1cd'
  },
  // 사막의 밤: 쪽빛 하늘과 모래 언덕
  'Desert Night': {
    outerBg:'#1d1f3a', card:'#262947', text:'#f0ebe0',
    hl:'#5b4d3e', hl2:'#353a5c',
    accent:'#e0c08f', accentText:'#1d1f3a',
    muted:'#c3bfc9',
    title:'#fff7ea', subtitle:'#efe6d6', char:'#e8cc9c'
  },
  // 전자책 화면: 반사광 없는 연회색 종이와 먹색 글자
  'E-ink': {
    outerBg:'#c9c8c2', card:'#e1e0da', text:'#151515',
    hl:'#bdbcb5', hl2:'#d2d1cb',
    accent:'#2a2a2a', accentText:'#e1e0da',
    muted:'#4c4c47',
    title:'#f5f5f2', subtitle:'#ecece8', char:'#e2e2dd'
  },
  // 산호초: 산호 분홍과 청록 바다 (형광기 뺀 톤)
  'Coral Reef': {
    outerBg:'#d3ece9', card:'#ffffff', text:'#13252a',
    hl:'#f7b5a3', hl2:'#c4e4e0',
    accent:'#145c66', accentText:'#ffffff',
    muted:'#3c565b',
    title:'#fff4ef', subtitle:'#e8f7f5', char:'#f7c1af'
  },
  // 호지차: 볶은 찻잎의 구운 갈색과 우유 거품
  Hojicha: {
    outerBg:'#c8ae92', card:'#f3ebe2', text:'#24180e',
    hl:'#c19a74', hl2:'#e1d2bf',
    accent:'#4a2e1a', accentText:'#f3ebe2',
    muted:'#473526',
    title:'#fbf3ea', subtitle:'#efe2d3', char:'#ead2b6'
  },
  // 듀오톤 인쇄: 자두색과 연두 두 잉크만 쓴 포스터
  'Duotone Plum Lime': {
    outerBg:'#e9efd5', card:'#fbfcf5', text:'#2a1530',
    hl:'#d4e3a3', hl2:'#e3d3e8',
    accent:'#5a2a63', accentText:'#f2f7de',
    muted:'#6b5a6e',
    title:'#f6fbe6', subtitle:'#eef5d3', char:'#d9e8a6'
  },
  // 블루베리 머핀: 보랏빛 남색 열매와 구운 머핀 갈색, 본문 글자는 테마 색조를 띤 짙은 색
  'Blueberry Muffin': {
    outerBg:'#e7e3ee', card:'#fdfbf7', text:'#181b5a',
    hl:'#cdc8e6', hl2:'#ecdcc4',
    accent:'#3a3570', accentText:'#fdfbf7',
    muted:'#4e4a6a',
    title:'#f6f3ff', subtitle:'#ede9fa', char:'#efd9b8'
  },
  // 동백: 붉은 동백꽃과 윤이 나는 짙은 초록 잎, 본문 글자는 테마 색조를 띤 짙은 색
  Camellia: {
    outerBg:'#e6ede6', card:'#fffdfb', text:'#002c1a',
    hl:'#f2bdbd', hl2:'#cfe0d2',
    accent:'#1f4a35', accentText:'#ffffff',
    muted:'#3f5246',
    title:'#fff4f3', subtitle:'#ffe9e8', char:'#f4b8b8'
  },
  // 고추냉이: 연두 고추냉이와 간장 검정, 본문 글자는 테마 색조를 띤 짙은 색
  Wasabi: {
    outerBg:'#e3ecc9', card:'#fbfdf4', text:'#1e2700',
    hl:'#cfe39a', hl2:'#e1e2d8',
    accent:'#1e1f19', accentText:'#e8f2c6',
    muted:'#45502b',
    title:'#f8fde8', subtitle:'#eef6d6', char:'#d6eba0'
  },
  // 채색 필사본: 양피지에 울트라마린과 금박, 본문 글자는 테마 색조를 띤 짙은 색
  Illuminated: {
    outerBg:'#eadfc6', card:'#fbf5e8', text:'#011a55',
    hl:'#c7cff0', hl2:'#efdca6',
    accent:'#24398f', accentText:'#fbf5e8',
    muted:'#4f4433',
    title:'#fff7e6', subtitle:'#f6e8c8', char:'#f0d68a'
  },
  // 적외선 사진: 하얗게 바랜 나무와 분홍빛 잎, 청록 하늘 (실험적), 본문 글자는 테마 색조를 띤 짙은 색
  Infrared: {
    outerBg:'#f3e6ee', card:'#fffcfd', text:'#02282e',
    hl:'#f2c6dc', hl2:'#cde5e9',
    accent:'#24636e', accentText:'#ffffff',
    muted:'#5a4458',
    title:'#fff7fb', subtitle:'#fbeaf3', char:'#c9e9ee'
  },
  // 프레스코: 석회벽에 바랜 테라코타와 청금석, 본문 글자는 테마 색조를 띤 짙은 색
  Fresco: {
    outerBg:'#eadfd2', card:'#f9f5ef', text:'#021f41',
    hl:'#e7bfa4', hl2:'#c9d3e4',
    accent:'#2f4a7a', accentText:'#f9f5ef',
    muted:'#5a4a3f',
    title:'#fff6ee', subtitle:'#f4e9dd', char:'#e9b796'
  },
  // 금잔화: 주황빛 금잔화와 짙은 자주 꽃심, 본문 글자는 테마 색조를 띤 짙은 색
  Marigold: {
    outerBg:'#f8e3c4', card:'#fffaf2', text:'#450d2c',
    hl:'#f8c27a', hl2:'#ead2df',
    accent:'#5a1a3d', accentText:'#fffaf2',
    muted:'#5a3e45',
    title:'#fff4e3', subtitle:'#ffe9cc', char:'#fbc67e'
  },
  // 공작: 짙은 청록 깃털과 남보라 눈 무늬, 금빛, 본문 글자는 테마 색조를 띤 짙은 색
  Peacock: {
    outerBg:'#0c2629', card:'#123236', text:'#c4f3fa',
    hl:'#2f3f6e', hl2:'#1f4a4c',
    accent:'#d6b65e', accentText:'#0c2629',
    muted:'#9db9b6',
    title:'#f6fcfb', subtitle:'#dcefeb', char:'#e2c779'
  },
  // 현무암: 검회색 화산석과 식은 용암 주황, 본문 글자는 테마 색조를 띤 짙은 색
  Basalt: {
    outerBg:'#1c1c1e', card:'#262628', text:'#fee6dd',
    hl:'#5a3426', hl2:'#3a3a3d',
    accent:'#d9774a', accentText:'#1c1c1e',
    muted:'#acaaa5',
    title:'#fff5ef', subtitle:'#ece7e2', char:'#e9a07c'
  },
  // 카모마일: 흰 꽃잎과 노란 꽃심, 연둣빛 찻물, 본문 글자는 테마 색조를 띤 짙은 색
  Chamomile: {
    outerBg:'#eef2e0', card:'#ffffff', text:'#232901',
    hl:'#f6e7a0', hl2:'#dbe8c6',
    accent:'#5c6a1f', accentText:'#ffffff',
    muted:'#4f5235',
    title:'#fffef2', subtitle:'#f7f6e2', char:'#f6e39a'
  },
};
/* 테마 선택 메뉴의 분위기 묶음 (‘전체’는 위 THEMES 순서 그대로) */
const THEME_GROUPS = ['파스텔','내추럴','비비드','다크','레트로'];
const THEME_GROUP_OF = {
  Default:'내추럴', Sage:'내추럴', 'Old Money Light':'내추럴', City:'내추럴', 'Cocoa Snow':'내추럴', 'Blue Mauve':'내추럴', Heather:'내추럴', Eucalyptus:'내추럴',
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
  Nocturne:'다크', Pewter:'다크', Bergamot:'다크', Mink:'다크', Moth:'다크', Cashmere:'다크', Storm:'다크', 'Pressed Rose':'다크', Amethyst:'다크', Tiramisu:'다크', Sepia:'다크', Sumi:'다크',
  Bubblegum:'비비드', 'Lilac Pop':'비비드', 'Blue Raspberry':'비비드', 'Peach Soda':'비비드', Petunia:'비비드', 'Plum Soda':'비비드', 'Berry Yogurt':'비비드', Poppy:'비비드', Lemonade:'비비드', 'Violet Sky':'비비드', 'Lime Soda':'비비드', Marmalade:'비비드', 'Lilac Lime':'비비드', 'Sherbet Sky':'비비드', 'Mint Sky':'비비드', 'Lavender Mint':'비비드',
  'Milk Tea':'파스텔', 'Lilac Haze':'파스텔', 'Blue Hour':'파스텔', Mochi:'파스텔', Frost:'파스텔', 'Vanilla Lavender':'파스텔', Cloud:'파스텔', 'Apple Blossom':'파스텔', Porcelain:'파스텔', Snowdrop:'파스텔', Glacier:'파스텔', 'Mist Blue':'파스텔', 'Sage White':'파스텔', 'Cherry Leaf':'파스텔', 'Lavender Grey':'파스텔', 'Periwinkle White':'파스텔', Dew:'파스텔', 'Moonlight White':'파스텔', 'Cloud Nine':'파스텔', 'Pearl Holo':'파스텔', Opaline:'파스텔', 'Frosted Glass':'파스텔', 'Teal Mono':'파스텔', 'Mother of Pearl':'파스텔', 'Sea Salt':'파스텔', 'Tab Divider':'파스텔', 'Ticket Stub':'파스텔', 'Swimming Pool':'파스텔', Watercolor:'파스텔',
  'Grape Soda':'비비드', 'Ultramarine Pop':'비비드', Holographic:'비비드', 'Melon Soda':'비비드', 'Klein Mono':'비비드', 'Cobalt Mono':'비비드', Highlighter:'비비드', Bauhaus:'비비드',
  'Navy Velvet':'다크', 'Charcoal Rose':'다크', Starlight:'다크', Obsidian:'다크', Lunar:'다크', Velvet:'다크', Graphite:'다크', 'Indigo Ink':'다크', 'Silver Night':'다크', 'Night Frost':'다크', 'Red Dot Night':'다크', Negative:'다크', 'Negative Sand':'다크', 'Green Cloth':'다크', 'Slate Cloth':'다크', 'Wine Cloth':'다크',
  Hanji:'내추럴', Chestnut:'내추럴', Stone:'내추럴', 'Ivory Ink':'내추럴', Sandstone:'내추럴', Inverse:'내추럴', 'Red Dot':'내추럴', 'Sepia Photo':'내추럴', Newsprint:'내추럴', 'Paper White':'내추럴', 'Graph Paper':'내추럴', Letterpress:'내추럴', Airmail:'내추럴', Washi:'내추럴', 'Inverse Navy':'내추럴', 'Half Moon':'내추럴', 'Sage Mono':'내추럴', 'Inverse Slate':'내추럴', 'Index Card':'내추럴', Ledger:'내추럴', 'Manila Folder':'내추럴', Spreadsheet:'내추럴', Verdigris:'내추럴', 'Olive Leaf':'내추럴', Passport:'내추럴', 'Bank Note':'내추럴', 'Topo Map':'내추럴', Clipboard:'내추럴', Terrazzo:'내추럴', 'Sage Frame':'내추럴',
  'Lavender Fog':'파스텔', 'Aqua Milk':'파스텔', Pudding:'파스텔', 'Bubble Bath':'파스텔', 'Sweet Pea':'파스텔', Unicorn:'파스텔', 'Cream Soda':'파스텔', 'Peach Cloud':'파스텔', Custard:'파스텔', 'Hazy Rose':'파스텔', Clay:'내추럴', Birch:'내추럴', Walnut:'내추럴', Fern:'내추럴', Rye:'내추럴', Mudflat:'내추럴', Herbarium:'내추럴', Meadow:'내추럴', 'Dried Lavender':'내추럴', 'Pool Party':'비비드', Crayon:'비비드', Sprinkles:'비비드', 'Fruit Salad':'비비드', 'Dark Chocolate':'다크', 'Oil Slick':'다크', Rosewood:'다크', Petrol:'다크', Diner:'레트로', 'Avocado Kitchen':'레트로', Polaroid:'레트로', Arcade:'레트로', Sunbleached:'레트로', Kodachrome:'레트로', 'Bowling Alley':'레트로', 'Y2K Chrome':'레트로', 'Mid Century':'레트로', Motel:'레트로', 'Game Boy':'레트로', Postcard:'레트로', Milkshake:'레트로', 'Drive-in':'레트로', 'Vinyl Record':'레트로', 'Super 8':'레트로', Tupperware:'레트로', 'Ice Cream Parlor':'레트로', 'Pop Bottle':'레트로', 'Slide Film':'레트로', Laundromat:'레트로', Tiki:'레트로', Atomic:'레트로', Varsity:'레트로', Lapis:'비비드', 'Smoky Quartz':'다크', 'Imperial Jade':'내추럴', Azurite:'파스텔', Dancheong:'내추럴', Maehwa:'파스텔', Chalkboard:'다크',
  'Iris Garden':'비비드', 'Kraft Paper':'내추럴', Bruise:'파스텔', 'Tomato Garden':'비비드', Rooibos:'내추럴', 'Sakura Night':'다크', Pomegranate:'비비드', 'Desert Night':'다크', 'E-ink':'내추럴', 'Coral Reef':'비비드', Hojicha:'내추럴', 'Duotone Plum Lime':'비비드', 'Blueberry Muffin':'파스텔', Camellia:'비비드', Wasabi:'비비드', Illuminated:'레트로', Infrared:'파스텔', Fresco:'내추럴', Marigold:'비비드', Peacock:'다크', Basalt:'다크', Chamomile:'파스텔',
};
/* 이름을 바꾼 테마: 예전 이름 → 지금 이름. 저장된 프리셋·즐겨찾기를 불러올 때 새 이름으로 옮김 (지우지 말 것) */
const THEME_RENAMED = { Butter:'Butter Bar' };
const THEME_KEYS = ['outerBg','card','text','hl','hl2','accent','accentText','muted','title','subtitle','char'];
