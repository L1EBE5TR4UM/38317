# AGENTS.md

> 이 문서는 이 저장소에서 작업하는 모든 AI 코딩 도구(Claude Code, Codex, Cursor, Copilot 등)와 사람을 위한 안내서입니다. 구조나 규칙이 바뀌면 이 문서도 같은 커밋에서 고칩니다.

## 1. 프로젝트 개요

LOG LIBRARY는 블로그(티스토리 등)에 붙여넣을 로그(소설·롤플레이 기록) HTML을 만드는 도구입니다.

- 사용자가 제목·본문·이미지 등을 입력하고 TYPE과 테마를 고르면, 미리보기와 복사할 HTML 코드가 바로 만들어집니다.
- GitHub Pages로 배포하는 **정적 페이지**입니다. 서버도 빌드 과정도 없고, 저장소의 파일이 그대로 서비스됩니다.
- 검색 노출을 막기 위해 `<meta name="robots" content="noindex, nofollow">`를 유지합니다.

### TYPE 5종
| TYPE | 모양 | 용도 |
|---|---|---|
| A | 자막 + Play/EQ 바 | 서사 로그, 스토리 게시 |
| B | Prompt·Model·Info 메타 바 | 봇 카탈로그, 캐릭터 소개 |
| C | 북 재킷 커버 (이미지 표지 + 제목 밴드) | 표지가 있는 로그 |
| D | 배너 제목 + 캐릭터 배지 (입력값은 A와 같음) | 그림 위에 제목을 얹는 로그 |
| E | 투명 배경 인물 소개 (CAST 1/CAST 2 + INTRODUCTION) | 인물 소개 헤더 |
| F | 레터 로그: 바탕색 베일 그림 + 가운데 큰 이탤릭 제목(Georgia, 없으면 Gelasio @import) + 한 단 편지 본문 + 서명 (Footer 없음, 작은 라벨은 고딕) | 편지형 로그 |

TYPE 글자(A~F)는 프리셋과 코드에서 쓰는 내부 구분값이고, 화면(메뉴·툴바·입력란 안내)에는 보이지 않습니다. 화면에서는 이름(예: 메타 바, 인물 소개)으로 부르고, 툴바에는 묶음 이름(LOG/CAST)을 표시합니다. TYPE은 접이식 메뉴에서 고릅니다. 평소엔 툴바에 지금 TYPE 한 줄(`#typeBtn`: 묶음 이름 `#typeBtnGroup` + 이름 + 용도)만 있고, 누르면 툴바 아래로 목록(`#typeToggle`)이 펼쳐집니다. 목록은 로그(LOG)와 인물 소개(CAST) 두 묶음이고, 인물 소개는 늘 맨 아래에 있습니다. 새 로그 TYPE은 다음 글자(G, H…)를 붙여 LOG 묶음 끝에 `data-type`·`data-name`·`data-use`와 모양 도식(`.type-mini`)을 가진 버튼으로 추가합니다. 이미 있는 TYPE의 글자는 바꾸지 않습니다.

## 2. 파일 구조

```
index.html        화면 구조 (입력란, 탭, 미리보기)
css/style.css     편집 화면 디자인
js/utils.js       공용 함수
js/themes.js      테마 데이터
js/builder.js     로그 HTML 생성
js/app.js         화면 조작·프리셋·첫 실행 (반드시 마지막에 로드)
assets/           이미지
AGENTS.md         이 문서
CLAUDE.md         @AGENTS.md 한 줄 (Claude Code용 연결)
```

### 동작 흐름
1. 브라우저가 `utils → themes → builder → app` 순서로 스크립트를 불러온다.
2. `app.js`가 기본 상태(`state`: 현재 TYPE·테마·색)를 만들고 버튼과 입력란에 이벤트를 연결한다.
3. 입력이 바뀔 때마다 `render()`가 `buildHTML()`(builder.js)을 호출한다.
4. `buildHTML()`은 `state`와 입력란 값을 읽어 블로그용 HTML 문자열을 만든다.
5. 그 문자열이 미리보기(`#previewFrame`)와 코드 영역(`#outputCode`)에 들어간다.

### 파일별 상세
- **`js/utils.js`**: `$(id)`, `escapeHtml`, `eqToken`(문자열로 짧은 고유값 생성), `hexToRgba`, `relLuminance`, `contrastRatio`, `readableInk`(배경색 위에서 읽히는 글자색 선택), `mixHex`, `toneInk`(색조를 살려 대비를 맞춘 글자색).
- **`js/themes.js`**: `THEMES`, `THEME_GROUPS`, `THEME_GROUP_OF`, `THEME_RENAMED`(바뀐 테마 이름), `THEME_KEYS`. 데이터만 있고 실행 코드는 없다.
- **`js/builder.js`**: `processInline`(따옴표·강조 등 본문 꾸밈), `buildHTML`(TYPE별 전체 HTML), `buildCoverC`(C TYPE 표지), `buildTypeD`(D TYPE 전체), `buildTypeF`·`fQuoteInks`(F TYPE 전체, 대사·속마음을 글자색으로). 실행 코드 없이 함수만 정의한다. `state`는 `app.js`에 있지만 함수가 호출될 때 읽으므로 문제없다.
- **`js/app.js`**: `state`, 탭·TYPE 전환(접이식 메뉴, `syncTypeUI()`), 테마 선택 메뉴(즐겨찾기는 `localStorage`의 `log-library-theme-favs`, ‘★ 즐겨찾기’ 탭의 ⋯ 메뉴로 JSON·코드 백업과 가져오기), 스마트 따옴표, `render`, 복사 버튼, 프리셋 저장·불러오기·내보내기.

## 3. 꼭 지킬 규칙

### 3-1. 스크립트 순서
`js/app.js`는 `index.html`의 `<script>` 중 **맨 마지막**에 둡니다. `app.js`는 불러오자마자 `THEMES.Default`를 읽고 `render()`를 실행하므로, 그 전에 다른 파일이 모두 불려 와 있어야 합니다. 나머지 세 파일은 정의만 하므로 서로 순서는 상관없습니다(실제 테스트로 확인함). 새 JS 파일은 `app.js` 위에 추가하고, 불러오자마자 실행되는 코드는 넣지 않습니다.

### 3-2. 경로
- `css/style.css` 안에서는 `../assets/...`
- `index.html`과 JS 안에서는 `assets/...`

### 3-3. 기술 범위
- npm 패키지, 번들러(Vite·webpack), TypeScript, React·Vue 등 프레임워크를 들이지 않습니다.
- `<script type="module">`로 바꾸지 않습니다. 파일을 더블클릭해서 열 때 작동하지 않게 됩니다.
- 외부 라이브러리가 꼭 필요하면 먼저 저장소 주인에게 확인합니다.

### 3-4. 생성되는 로그 HTML
결과물은 블로그 편집기에 붙여넣는 HTML이라 일반 웹페이지와 제약이 다릅니다.
- 꾸밈은 **인라인 `style`**로 합니다. 블로그가 외부 CSS·JS를 지우거나 막을 수 있습니다.
- 애니메이션·모바일 대응처럼 인라인으로 안 되는 것만 `<div><style>…</style></div>`로 넣습니다. 이때 클래스 이름에 `eqToken()`으로 만든 접미사를 붙여 블로그의 다른 글과 충돌하지 않게 합니다.
- 레이아웃은 블로그 호환성을 위해 `<table>`을 쓰는 곳이 있습니다. 함부로 flex·grid로 바꾸지 않습니다.
- TYPE A의 문단에는 티스토리 편집기용 `data-ke-size="size16"`을 유지합니다.
- 사용자 입력을 HTML에 넣을 때는 `escapeHtml`을 거칩니다.

### 3-5. 프리셋 호환성
- 프리셋은 지금 TYPE·테마 색과 `f-`, `t-`로 시작하는 `id`의 값을 이름 붙여 이 브라우저에 저장한 것입니다(`snapshot()`).
- 형식: `{"app":"log-library","kind":"preset","v":3,"type":…,"theme":…,"vars":{…},"fields":{…}}`. `restore()`와 Import JSON은 이 형식(`PRESET_VERSION`과 같은 `v`)만 받습니다.
- v3에서 새로 시작했습니다. 예전 형식(`log-atelier-presets-v2`, Log Atelier 내보내기)은 읽지 않습니다.
- 기존 `id`의 이름을 바꾸거나 지우면 저장된 프리셋에서 그 값이 사라집니다.
- `PRESET_KEY`(`log-library-presets-v3`)를 바꾸면 모든 프리셋이 사라진 것처럼 보입니다.
- 이미 있는 TYPE의 글자는 바꾸지 않습니다. 저장된 프리셋이 엉뚱한 TYPE으로 열립니다.
- 이름을 바꾼 테마는 `THEME_RENAMED`(js/themes.js)로 새 이름에 연결합니다. 항목을 지우면 예전 프리셋이 테마를 못 찾습니다.
- 즐겨찾기 백업 JSON의 형식(`{"app":"log-library","kind":"theme-favs","version":1,"favs":[…]}`)을 바꾸면 예전에 내보낸 백업을 못 읽습니다. 가져오기는 `favs` 배열이나 이름 배열 그대로를 받습니다.

## 4. 자주 하는 작업

### 테마 추가·수정
1. `js/themes.js`의 `THEMES`에 항목을 추가합니다.
   - 필수 키(`THEME_KEYS`): `outerBg`(바깥 배경), `card`(본문 카드), `text`(본문 글자), `hl`(대사 강조 배경), `hl2`(속마음 배경), `accent`, `accentText`, `muted`, `title`, `subtitle`, `char`
   - 선택 키: `pauseText`(일시정지 버튼 글자), `playBg`(플레이 버튼 배경)
2. `THEME_GROUP_OF`에 분류(파스텔·내추럴·비비드·다크·레트로·보석·전통·실험)를 지정합니다. 분류를 늘리거나 합칠 때는 `THEME_GROUPS`도 함께 고칩니다.
3. 테마 메뉴 ‘전체’의 순서는 `THEMES`에 적힌 순서입니다.
4. 모든 TYPE에서 대사·속마음·제목 글자가 읽히는지 확인합니다.
5. 테마 이름을 바꿀 때는 `THEME_RENAMED`에 `예전 이름: '새 이름'`을 추가합니다. 저장된 프리셋과 즐겨찾기가 새 이름으로 옮겨집니다.

### 입력란 추가
1. `index.html`에 `id="f-이름"`으로 추가합니다(프리셋에 자동 저장).
   - 입력란 이름은 `<label>한글 이름<em>English</em></label>`처럼 한글 뒤에 짧은 영문을 `<em>`으로 붙입니다(영문은 작은 대문자로 보임). 괄호 설명은 넣지 않고, 꼭 필요한 안내는 `placeholder`로 씁니다.
   - 섹션 제목(`.section-title`)·탭·LOG/CAST 같은 대메뉴와 Copy 버튼은 영문으로 두고, 그 밖의 라벨·버튼·선택지·알림은 한글로 씁니다.
2. 특정 TYPE에만 보이게 하려면 `a-only`, `b-only`, `e-only`, `ab-only`, `ac-only`, `abc-only`, `not-c`, `f-only`, `not-f` 중 하나를 클래스로 붙입니다. 규칙은 `css/style.css`의 `body[data-type="…"]`에 있습니다. D TYPE은 A와 같은 입력란을 쓰므로 `b-only`, `e-only`만 숨깁니다.
3. `js/builder.js`의 `buildHTML()`에서 `$('f-이름').value`로 읽어 씁니다.

### 로그 모양 수정
`js/builder.js`의 `buildHTML()` 안에서 `if (T === 'C')`, `if (T === 'E')`처럼 TYPE별로 나뉘어 있습니다. 해당 TYPE 부분만 고칩니다. D TYPE은 `buildTypeD()`, F TYPE은 `buildTypeF()`에 따로 있습니다.

## 5. 수정 후 확인

- [ ] `index.html`을 브라우저로 열었을 때 콘솔 오류가 없다
- [ ] TYPE A·B·C·D·E·F 미리보기와 생성 코드가 모두 나온다
- [ ] 테마를 바꾸면 미리보기 색이 바뀐다
- [ ] 저장해 둔 프리셋을 불러와도 값이 들어간다
- [ ] Copy 버튼이 작동한다
- [ ] 휴대폰 폭(약 400px)에서도 편집 화면과 미리보기가 깨지지 않는다

## 6. 작업 방식

- 변경은 시안을 먼저 보여 주고, 승인을 받은 뒤 PR을 만든다.
- 화면에 보이는 변경이면 `index.html` 헤더의 `Last Updated · Month D, YYYY` 날짜를 갱신한다.
- 커밋 메시지와 PR 제목은 한국어로, 무엇을 바꿨는지 한 줄로 쓴다. 예: `Honeypot 가독성 개선, Tangerine·Lagoon 테마 추가`
- 구조나 규칙을 바꾸면 이 문서도 같은 커밋에서 고친다.
