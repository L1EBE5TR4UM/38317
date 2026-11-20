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
};
/* 테마 선택 메뉴의 분위기 묶음 (‘전체’는 위 THEMES 순서 그대로) */
const THEME_GROUPS = ['파스텔','내추럴','비비드','다크'];
const THEME_GROUP_OF = {
  Default:'내추럴', Sage:'내추럴', 'Old Money Light':'내추럴', City:'내추럴',
  Peony:'파스텔', Lavender:'파스텔', Sky:'파스텔', 'Cotton Candy':'파스텔', Apricot:'파스텔',
  Lime:'비비드', 'Mint Choco':'비비드', Honeypot:'비비드', Tangerine:'비비드', Lagoon:'비비드', Butter:'비비드',
  Noir:'다크', 'Old Money Dark':'다크', Monochrome:'다크', 'Dark Olive':'다크',
};
const THEME_KEYS = ['outerBg','card','text','hl','hl2','accent','accentText','muted','title','subtitle','char'];
