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
  Butter: {
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
};
/* 테마 선택 메뉴의 분위기 묶음 (‘전체’는 위 THEMES 순서 그대로) */
const THEME_GROUPS = ['파스텔','내추럴','비비드','다크'];
const THEME_GROUP_OF = {
  Default:'내추럴', Sage:'내추럴', 'Old Money Light':'내추럴', City:'내추럴',
  Linen:'내추럴', Driftwood:'내추럴', Latte:'내추럴', Seaside:'내추럴', Surf:'내추럴',
  Peony:'파스텔', Lavender:'파스텔', Sky:'파스텔', 'Cotton Candy':'파스텔', Apricot:'파스텔',
  Blush:'파스텔', 'Baby Blue':'파스텔', Pistachio:'파스텔', Periwinkle:'파스텔',
  Lime:'비비드', 'Mint Choco':'비비드', Honeypot:'비비드', Tangerine:'비비드', Lagoon:'비비드', Butter:'비비드',
  Watermelon:'비비드',
  Noir:'다크', 'Old Money Dark':'다크', Monochrome:'다크', 'Dark Olive':'다크',
  Wine:'다크', Plum:'다크', 'Deep Sea':'다크', Marine:'다크',
};
const THEME_KEYS = ['outerBg','card','text','hl','hl2','accent','accentText','muted','title','subtitle','char'];
