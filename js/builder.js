/* ============================================================
   BUILD HTML — exact structure matching Log Atelier output
   ============================================================ */
function processInline(text, v, plainQuotes){
  let h = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  h = h.replace(/\u201C/g, '&#8220;').replace(/\u201D/g, '&#8221;');
  h = h.replace(/\u2018/g, '&#8216;').replace(/\u2019/g, '&#8217;');
  h = h.replace(/\*\*\*([^*\n]+?)\*\*\*/g, '<b><i>$1</i></b>');
  h = h.replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>');
  // plainQuotes: D TYPE 전용. 따옴표는 그대로 두고 강조 배경(대사/속마음 박스)만 씌우지 않음
  if (plainQuotes) return h.replace(/\n/g, '<br>');
  const diaInk = readableInk(v.hl, v.text);
  h = h.replace(/&quot;((?:(?!&quot;).)+?)&quot;/g, (_m, inner)=>{
    return `<span data-dia="1" style="background-color:${v.hl};color:${diaInk};padding:0 6px;border-radius:4px;">&quot;${inner}&quot;</span>`;
  });
  h = h.replace(/&#8220;((?:(?!&#8221;).)+?)&#8221;/g, (_m, inner)=>{
    return `<span data-dia="1" style="background-color:${v.hl};color:${diaInk};padding:0 6px;border-radius:4px;">&#8220;${inner}&#8221;</span>`;
  });
  const softHl = v.hl2 || hexToRgba(v.hl, 0.5);
  const thoughtInk = readableInk(v.hl2 || v.hl, v.text);
  h = h.replace(/(^|[^A-Za-z0-9_])&#39;((?:(?!&#39;)[^\n])+?)&#39;(?![A-Za-z0-9_])/g, (_m, before, inner)=>{
    return `${before}<span data-dia="2" style="background-color:${softHl};color:${thoughtInk};padding:0 6px;border-radius:4px;">&#39;${inner}&#39;</span>`;
  });
  h = h.replace(/&#8216;((?:(?!&#8217;).)+?)&#8217;/g, (_m, inner)=>{
    return `<span data-dia="2" style="background-color:${softHl};color:${thoughtInk};padding:0 6px;border-radius:4px;">&#8216;${inner}&#8217;</span>`;
  });
  h = h.replace(/\n/g, '<br>');
  return h;
}

function buildHTML(){
  const v = state.themeVars;
  const T = state.type; // 'A' | 'B' | 'C' | 'D'
  const blockInk = readableInk(v.hl, v.text);

  const title     = $('f-title').value || '';
  const character = $('f-character').value || '';
  const author    = $('f-author').value || '';
  const tagsRaw   = ($('f-tags').value || '').trim();
  const tags      = tagsRaw ? tagsRaw.split(',').map(s=>s.trim()).filter(Boolean) : [];
  const subtitle  = $('f-subtitle').value || '';

  const useHero = $('f-usehero').checked;
  const img     = $('f-img').value || '';
  const fx      = parseInt($('f-fx').value || 50, 10);
  const fy      = parseInt($('f-fy').value || 50, 10);
  const hh      = parseInt($('f-hheight').value || 350, 10);
  const tpos    = $('f-tpos').value;

  const promptName = ($('f-prompt').value || '').trim();
  const modelName  = ($('f-model').value || '').trim();
  const botLink    = ($('f-link').value || '').trim();

  const progressEl = $('f-progress');
  const progress = progressEl ? Math.min(100, Math.max(0, parseInt(progressEl.value || 0, 10))) : 0;

  const mw    = parseInt($('f-mw').value || 650, 10);
  const boxScroll = $('f-boxscroll').checked;
  const cardH = parseInt($('f-cardh').value || 420, 10);
  const fs    = parseFloat($('f-fs').value || 15.4);
  const lh    = parseFloat($('f-lh').value || 1.9);
  const ls    = parseFloat($('f-ls').value || -0.93);
  const font  = $('f-font').value === 'custom' ? $('f-fontcustom').value : $('f-font').value;
  const indent  = $('f-indent').checked;
  const justify = $('f-justify').checked;
  const overlayDark = parseFloat($('t-overlayDark') ? ($('t-overlayDark').value || 0.5) : 0.5);

  const validAlign = (tpos === 'center' || tpos === 'right') ? tpos : 'left';
  const overlayGrad = `linear-gradient(to top,rgba(0,0,0,${overlayDark}),rgba(0,0,0,${(overlayDark*0.3).toFixed(2)}),rgba(0,0,0,${(overlayDark*0.12).toFixed(2)}))`;
  const heroBgRule = (useHero && img)
    ? `background:url('${img}') ${fx}% ${fy}% / cover no-repeat;`
    : `background:${v.muted};`;
  const authorLine = author
    ? `<div style="font-size:13px;letter-spacing:0.08em;text-align:${validAlign};">by <span style="font-weight:600;text-transform:uppercase;">${escapeHtml(author)}</span></div>`
    : '';

  const thumbImg = (useHero && img)
    ? `<p><img style="width: 0px; height: 0px;" src="${img}" class="fr-fic fr-dii"></p>`
    : '';

  function renderBubble(raw, kind){
    const tokens = raw.trim().split(/\s+/);
    let time = '', name = '', message = raw.trim();
    const timeRe = /^\d{1,2}:\d{2}$/;
    if (tokens.length >= 3 && timeRe.test(tokens[tokens.length - 2])){
      name = tokens[tokens.length - 1];
      time = tokens[tokens.length - 2];
      message = tokens.slice(0, tokens.length - 2).join(' ');
    }
    else if (tokens.length === 2 && timeRe.test(tokens[0])){
      time = tokens[0];
      name = tokens[1];
      message = '';
    }
    const messageHTML = message ? processInline(message, v, T === 'D') : '';

    const isSent = (kind === 'sent');
    const bubbleBg     = isSent ? '#007aff' : '#e5e5ea';
    const bubbleColor  = isSent ? '#ffffff' : '#000000';
    const tailRadius   = isSent
      ? 'border-bottom-right-radius: 0'
      : 'border-bottom-left-radius: 0';

    const msgFont = "'Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic','맑은 고딕',sans-serif";
    return `<div style="margin-bottom: 15px; text-align: center; font-family: ${msgFont};">
<div style="font-size: 10.5px; color: #888; margin-bottom: 5px; font-family: ${msgFont};">${escapeHtml(time)}</div>
<div style="display: inline-block; max-width: 85%; text-align: center; font-family: ${msgFont};">
<div style="display: inline-block; padding: 10px 15px; border-radius: 18px; ${tailRadius}; font-size: 14px; background: ${bubbleBg}; color: ${bubbleColor}; word-break: break-word; text-align: justify; font-family: ${msgFont};">${messageHTML}</div>
<div style="font-size: 10.5px; color: #888; margin-top: 4px; text-align: center; font-family: ${msgFont};">${escapeHtml(name)}</div>
</div>
</div>`;
  }

  const raw = $('f-body').value || '';
  const blocks = raw.split(/\n{2,}/);

  let pStyle, spacer;
  if (T !== 'A'){
    pStyle = `margin:0;line-height:${lh};letter-spacing:${ls}px;font-size:${fs}px;text-indent:${indent?'1em':'0'}${justify?';text-align:justify':''}`;
    spacer = `<p><br></p>`;
  } else {
    pStyle = `margin: 0px; line-height: ${lh}; letter-spacing: ${ls}px; font-size: ${fs}px; text-indent: ${indent?'1em':'0px'}; text-align: ${justify?'justify':'left'};`;
    spacer = `<p style="text-align: ${justify?'justify':'left'};" data-ke-size="size16">&nbsp;</p>`;
  }

  const tripleRe = /^\[\[\[([\s\S]+?)\]\]\]$/;
  const doubleRe = /^\[\[([\s\S]+?)\]\]$/;

  const paragraphHTMLs = blocks.map(b=>{
    const trimmed = b.trim();
    if (!trimmed) return '';
    const triple = trimmed.match(tripleRe);
    if (triple) return renderBubble(triple[1], 'received');
    const double = trimmed.match(doubleRe);
    if (double) return renderBubble(double[1], 'sent');
    if (trimmed === '---'){
      const dataKe = (T==='A') ? ' data-ke-size="size16"' : '';
      return `<p style="${pStyle}"${dataKe}><span style="display:inline-block;width:100%;border-top:1px solid ${hexToRgba(v.muted,0.35)};margin:6px 0">&nbsp;</span></p>`;
    }
    const inner = processInline(trimmed, v, T === 'D');
    const dataKe = (T==='A') ? ' data-ke-size="size16"' : '';
    return `<p style="${pStyle}"${dataKe}>${inner}</p>`;
  }).filter(Boolean);
  const bodyHTML = paragraphHTMLs.join('\n' + spacer + '\n');

  // ===================================================================
  //  C TYPE — 북 재킷 커버 (이미지 표지 + 아래 제목 밴드 + 본문 + 푸터 띠)
  //  · 바깥 프레임 없이 한 장으로 이어짐, 푸터는 바깥 배경색(outerBg) 띠
  //  · 그림 위에는 왼쪽 #태그 / 오른쪽 작성자만
  // ===================================================================
  if (T === 'C'){
    const disp = `'Cormorant Garamond','Noto Serif KR',Georgia,serif`;
    const coverBg = (useHero && img)
      ? `background:url('${img}') ${fx}% ${fy}% / cover no-repeat;background-color:${v.muted};`
      : `background-color:${v.muted};`;
    const od = overlayDark;
    const cover = buildCoverC({ v, disp, coverBg, od, hh, title, character, subtitle, author, tags });

    const scrollUid = eqToken(v.muted + '|' + v.card);
    const scrollStyleC = boxScroll ? `<div><style>
.la-scroll-${scrollUid}{scrollbar-width:thin;scrollbar-color:${hexToRgba(v.muted,0.45)} transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar{width:6px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-track{background:transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb{background:${hexToRgba(v.muted,0.45)};border-radius:999px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb:hover{background:${hexToRgba(v.muted,0.7)};}
</style></div>` : '';
    const footerCustomC = ($('f-footer').value || '').trim();
    const footerTextC = footerCustomC ? footerCustomC : (author ? escapeHtml(author) : '');
    const hasFooterC = !!footerTextC;
    const cardC = `<div style="background-color:${v.card};color:${v.text};border-radius:${hasFooterC ? '0' : '0 0 12px 12px'};padding:6px 24px 28px 24px;">
${boxScroll ? `<div class="la-scroll-${scrollUid}" style="max-height: ${cardH}px; overflow-y: auto; overflow-x: hidden; padding-right: 10px; box-sizing: border-box; -webkit-overflow-scrolling: touch; overscroll-behavior: contain;">
${bodyHTML}
</div>` : bodyHTML}
</div>`;

    const footerC = hasFooterC ? `
<div style="padding:13px 0;border-radius:0 0 12px 12px;background-color:${v.outerBg};text-align:center;color:${v.muted};font-size:12px;letter-spacing:0.08em;">${footerTextC}</div>` : '';

    return `${scrollStyleC}${thumbImg}<div style="max-width:${mw}px;margin:0 auto;padding:0;box-sizing:border-box;font-family:${font};color:${v.text};">
${cover}
${cardC}
${footerC}
</div>`;
  }

  // ===================================================================
  //  D TYPE — 투명 배경 인물 소개 헤더 (DRAMATIS PERSONAE + INTRODUCTION)
  //  · 배경색 없음  · 두 인물은 2단 테이블로 모바일에서도 나란히
  //  · 사진 위치 옵션은 사진만 이동, 소개는 항상 양쪽 정렬
  //  · 이름 색: USER = hl(대사 강조 배경), CHAR = accent(플레이 버튼 배경), 반전 가능
  // ===================================================================
  if (T === 'D'){
    const ink = v.text;
    const roleInk = hexToRgba(v.text, 0.5);
    const photoLeft = $('f-cphoto').value === 'left';
    // 이름 색: USER = 대사 강조 배경(hl), CHAR = 플레이 버튼 배경(accent). 반전 체크 시 서로 바꿈
    const swapName = $('f-cswap').checked;
    const nameUser = swapName ? v.accent : v.hl;
    const nameChar = swapName ? v.hl : v.accent;
    const cTitle = $('f-ctitle').value || '';
    const cSub   = $('f-csub').value || '';
    const cStory = $('f-cstory').value || '';
    const serif  = `'Noto Serif KR','Nanum Myeongjo',Georgia,serif`;
    const sans   = `Pretendard,'Pretendard Variable','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif`;
    const people = [
      { role:$('f-u-role').value, name:$('f-u-name').value, img:($('f-u-img').value||'').trim(), zoom:+$('f-u-zoom').value, fx:+$('f-u-fx').value, fy:+$('f-u-fy').value, desc:$('f-u-desc').value||'', color:nameUser },
      { role:$('f-c-role').value, name:$('f-c-name').value, img:($('f-c-img').value||'').trim(), zoom:+$('f-c-zoom').value, fx:+$('f-c-fx').value, fy:+$('f-c-fy').value, desc:$('f-c-desc').value||'', color:nameChar },
    ];
    const imgMargin = photoLeft ? 'margin:0 0 16px 0;' : 'margin:0 auto 16px auto;';
    // 사진 조정: 원형 틀(overflow:hidden) 안에서 object-position으로 초점, scale로 확대 (확대 기준점 = 초점)
    const avatar = (c) => c.img
      ? `<div style="width:64px;height:64px;border-radius:50%;overflow:hidden;${imgMargin}"><img src="${escapeHtml(c.img)}" alt="${escapeHtml(c.name||'')}" style="width:64px;height:64px;max-width:none;object-fit:cover;object-position:${c.fx}% ${c.fy}%;transform:scale(${(c.zoom/100).toFixed(2)});transform-origin:${c.fx}% ${c.fy}%;display:block;margin:0;border-radius:0;"></div>`
      : `<div style="width:64px;height:64px;border-radius:50%;background:${v.hl};${imgMargin}">&nbsp;</div>`;
    const cell = (c, i) => `<td style="width:50%;vertical-align:top;text-align:left;padding:0 ${i?0:22}px 0 ${i?22:0}px;border:0;">
${avatar(c)}
<div style="font-size:11px;font-weight:700;letter-spacing:0.16em;color:${roleInk};margin:0 0 4px 0;">${escapeHtml(c.role||'')}</div>
<div style="font-size:15px;font-weight:900;letter-spacing:0.06em;color:${c.color};margin:0 0 10px 0;">${escapeHtml((c.name||'').toUpperCase())}</div>
<div style="font-size:13.5px;line-height:1.85;color:${ink};text-align:justify;text-align-last:left;word-break:normal;">${processInline(c.desc.trim(), v, true)}</div>
</td>`;

    const head = `<div style="text-align:center;margin:0 0 36px 0;">
<div style="font-size:26px;font-weight:900;letter-spacing:-0.02em;color:${ink};line-height:1.2;">${escapeHtml(cTitle)}</div>
${cSub ? `<div style="font-family:${serif};font-size:13px;letter-spacing:0.2em;color:${ink};margin-top:8px;padding-left:0.2em;">${escapeHtml(cSub)}</div>` : ''}
<div style="width:24px;height:1px;background:${ink};margin:12px auto 0 auto;">&nbsp;</div>
</div>`;

    const castTable = `<table style="width:100%;border-collapse:collapse;border:0;table-layout:fixed;"><tbody><tr>
${people.map(cell).join('\n')}
</tr></tbody></table>`;

    const storyBlock = (bodyHTML.trim() || cStory) ? `<div style="margin:48px 0 0 0;">
<div style="border-top:2px solid ${ink};border-bottom:1px solid ${ink};padding:20px 0;text-align:center;">
<span style="font-size:12px;font-weight:900;letter-spacing:0.42em;color:${ink};padding-left:0.42em;">${escapeHtml(cStory)}</span>
</div>
<div style="padding:22px 0 0 0;font-family:${sans};color:${ink};">
${bodyHTML}
</div>
</div>` : '';

    const transparent = $('f-ctransparent').checked;
    const bgRule = transparent ? 'padding:8px 0;' : `padding:32px 24px;background-color:${v.outerBg};border-radius:14px;box-sizing:border-box;`;
    return `<div style="max-width:${mw}px;margin:0 auto;${bgRule}font-family:${sans};color:${ink};word-break:keep-all;">
${head}
${castTable}
${storyBlock}
</div>`;
  }

  // ===================================================================
  //  E TYPE — 배너 제목 + 캐릭터 배지 (입력값은 A와 같음)
  // ===================================================================
  if (T === 'E'){
    return buildTypeE({ v, font, mw, boxScroll, cardH, bodyHTML, title, character, subtitle, author, tags,
      useHero, img, fx, fy, hh, overlayDark, thumbImg, validAlign });
  }

  // ===================================================================
  //  B TYPE
  // ===================================================================
  if (T === 'B'){
    const heroBlock = `
    <div style="width:100%;height:${hh}px;display:table;${heroBgRule}border-radius:14px;box-sizing:border-box;">
      <div style="display:table-cell;vertical-align:middle;text-align:${validAlign};padding:26px 24px 24px 24px;background:${overlayGrad};border-radius:14px;">
        <div style="color:${v.title};text-shadow:0 1px 7px rgba(0,0,0,0.7);display:inline-block;max-width:100%;text-align:${validAlign};">
          ${authorLine}
          <h1 style="margin:8px 0 6px 0;font-size:32px;font-weight:700;letter-spacing:0.02em;color:${v.title};text-align:${validAlign};">${escapeHtml(title)}</h1>
          <div style="font-size:15px;text-transform:uppercase;letter-spacing:0.12em;color:${v.char};text-align:${validAlign};">${escapeHtml(character)}</div>
        </div>
      </div>
    </div>`;

    const metaParts = [];
    if (modelName)  metaParts.push(`<span style="margin-right:10px;color:#ffffff;">${escapeHtml(modelName)}</span>`);
    else            metaParts.push(`<span style="margin-right:10px;color:#ffffff;">Model</span>`);
    metaParts.push(`<span style="margin:0 8px;color:#ffffff;">&bull;</span>`);
    if (promptName) metaParts.push(`<span style="margin-right:10px;color:#ffffff;">${escapeHtml(promptName)}</span>`);
    else            metaParts.push(`<span style="margin-right:10px;color:#ffffff;">Prompt</span>`);
    metaParts.push(`<span style="margin:0 8px;color:#ffffff;">&bull;</span>`);
    if (botLink)    metaParts.push(`<span style="margin-right:10px;color:#ffffff;">${escapeHtml(botLink)}</span>`);
    else            metaParts.push(`<span style="margin-right:10px;color:#ffffff;">Info</span>`);

    const metaBar = `
  <div style="margin:-54px 18px 0 18px;">
    <div style="background:rgba(20, 18, 16, 0.3);color:#ffffff;border-radius:10px;padding:10px 14px;box-shadow:rgba(0,0,0,0.22) 0px 6px 18px;font-size:clamp(11px,1.6vw,14px);line-height:1.6;letter-spacing:0.02em;box-sizing:border-box;word-break:break-word;text-align:center;">
      ${metaParts.join('\n      ')}&nbsp;
    </div>
  </div>`;

    const tagsHTML = tags.length ? `<div style="margin:0 0 16px 0;">
${tags.map(t=>`<span style="display:inline-block;padding:3px 10px;margin:0 4px 4px 0;border-radius:999px;background:${v.hl};color:${blockInk};font-size:11px;letter-spacing:0.06em;" data-dia="1">${escapeHtml(t)}</span>`).join('')}
</div>` : '';

    const scrollUid = eqToken(v.muted + '|' + v.card);
    const scrollStyleB = boxScroll ? `<div><style>
.la-scroll-${scrollUid}{scrollbar-width:thin;scrollbar-color:${hexToRgba(v.muted,0.45)} transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar{width:6px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-track{background:transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb{background:${hexToRgba(v.muted,0.45)};border-radius:999px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb:hover{background:${hexToRgba(v.muted,0.7)};}
</style></div>` : '';
    const cardBlock = `
  <div style="background-color:${v.card};border-radius:12px;padding:36px 30px;margin-top:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05); color:${v.text};">
    ${boxScroll ? `${tagsHTML}<div class="la-scroll-${scrollUid}" style="max-height: ${cardH}px; overflow-y: auto; overflow-x: hidden; padding-right: 10px; box-sizing: border-box; -webkit-overflow-scrolling: touch; overscroll-behavior: contain;">
${bodyHTML}
</div>` : `${tagsHTML}${bodyHTML}`}
  </div>`;

    const footerCustom = ($('f-footer').value || '').trim();
    const footerText = footerCustom
      ? footerCustom
      : (author ? escapeHtml(author) : '');
    const footer = footerText ? `
  <div style="margin-top:28px;padding:14px 0 30px 0;border-top:1px solid ${hexToRgba(v.muted,0.35)};text-align:center;color:${v.muted};">
    <div style="font-size:12px;">
      <span style="font-size:12px;">${footerText}</span>
    </div>
  </div>` : '';

    return `${scrollStyleB}${thumbImg}<div style="max-width:${mw}px;margin:0 auto;padding:0;font-family:${font};color:${v.text};background-color:${v.outerBg};border-radius:14px;">
  <div style="border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
${heroBlock}
  </div>
${metaBar}
${cardBlock}
${footer}
</div>`;
  }

  // ===================================================================
  //  A TYPE
  // ===================================================================
  const subtitleLine = subtitle
    ? `<br /><div style="font-size: 13px; line-height: 1.6; letter-spacing: -0.4px; color: ${v.subtitle}; text-align: ${validAlign};">${subtitle}</div>`
    : '';

  const eqColor = v.accent;
  const eqUid  = eqToken(eqColor);
  const eqWrap = `la-eq-${eqUid}`;
  const eqBar  = `la-eq-bar-${eqUid}`;
  const eqAnim = `la-eq-pulse-${eqUid}`;
  const eqHtml = `<div class="${eqWrap}">
<div class="${eqBar}">&nbsp;</div>
<div class="${eqBar}">&nbsp;</div>
<div class="${eqBar}">&nbsp;</div>
<div class="${eqBar}">&nbsp;</div>
<div class="${eqBar}">&nbsp;</div>
</div>`;

  // Play / Pause 버튼 줄도 Title 정렬(validAlign)을 따라감
  //  · left  : [▶][❚❚] EQ ─────────
  //  · center: (빈칸) [▶][❚❚] EQ   — 빈칸이 EQ 폭만큼 받쳐 버튼이 정확히 가운데
  //  · right : ───────── EQ [▶][❚❚]
  const tdBase = 'padding: 0; vertical-align: middle; border: 0;';
  const playCell = `<td style="${tdBase}">
<div style="display: inline-block; box-sizing: border-box; width: 44px; height: 26px; padding: 0; text-align: center; overflow: hidden; word-break: keep-all; border-radius: 999px; background-color: ${v.accent}; color: ${v.accentText}; font-size: 13px; font-weight: 600; letter-spacing: 0.04em; box-shadow: 0 3px 10px rgba(0,0,0,0.3); white-space: nowrap; line-height: 26px;">&#9654;</div>
</td>`;
  const pauseCell = `<td style="${tdBase}">
<div style="display: inline-block; box-sizing: border-box; width: 44px; height: 26px; padding: 0; text-align: center; overflow: hidden; word-break: keep-all; border-radius: 999px; background-color: ${v.playBg || v.hl}; color: ${readableInk(v.playBg || v.hl, v.pauseText || v.muted)}; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; border: 1px solid ${hexToRgba(v.muted,0.2)}; margin-left: 6px; white-space: nowrap; line-height: 24px;">&#10074;&#10074;</div>
</td>`;
  let playCells, tableWidth, keAlign;
  if (validAlign === 'center'){
    playCells = `<td style="${tdBase} width: 41px;">&nbsp;</td>
${playCell}
${pauseCell}
<td style="padding: 0 0 0 14px; vertical-align: middle; width: 27px; border: 0;">
${eqHtml}
</td>`;
    tableWidth = 'width: auto; margin-left: auto; margin-right: auto;';
    keAlign = 'alignCenter';
  } else if (validAlign === 'right'){
    playCells = `<td style="padding: 0 14px 0 0; vertical-align: middle; width: 100%; border: 0; text-align: right;">
${eqHtml.replace('<div class="', '<div style="margin-left: auto;" class="')}
</td>
${playCell}
${pauseCell}`;
    tableWidth = 'width: 100%;';
    keAlign = 'alignRight';
  } else {
    playCells = `${playCell}
${pauseCell}
<td style="padding: 0 0 0 14px; vertical-align: middle; width: 100%; border: 0; text-align: left;">
${eqHtml}
</td>`;
    tableWidth = 'width: 100%;';
    keAlign = 'alignLeft';
  }
  const playTable = `
<table style="margin-top: 24px; ${tableWidth} border-collapse: collapse; border: 0; border-spacing: 0;" data-ke-align="${keAlign}">
<tbody>
<tr>
${playCells}
</tr>
</tbody>
</table>`;

  const heroBlockB = `
<div style="width: 100%; height: ${hh}px; display: table; ${heroBgRule} border-radius: 14px; box-sizing: border-box;">
<div style="display: table-cell; vertical-align: middle; padding: 28px 32px 32px 32px; background: ${overlayGrad}; border-radius: 14px;">
<div style="max-width: 100%; color: ${v.title}; text-shadow: 0 1px 7px rgba(0,0,0,0.7);">
${authorLine}
<h1 style="margin: 10px 0px 4px; font-size: 30px; font-weight: bold; letter-spacing: 0.02em; color: ${v.title}; line-height: 1.2; text-align: ${validAlign};">${escapeHtml(title)}</h1>
<div style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.16em; color: ${v.char}; margin-bottom: 20px; text-align: ${validAlign};">${escapeHtml(character)}</div>
${subtitleLine}
</div>
${playTable}
</div>
</div>`;

  const tagsHTML = tags.length ? `<div style="margin: 0 0 14px 0;">
${tags.map(t=>`<span style="display:inline-block; padding:3px 10px; margin:0 4px 4px 0; border-radius:999px; background:${v.hl}; color:${blockInk}; font-size:11px; letter-spacing:0.06em;" data-dia="1">${escapeHtml(t)}</span>`).join('')}
</div>` : '';

  const scrollUid = eqToken(v.muted + '|' + v.card);
  const cardBlockB = `
<div style="background-color: ${v.card}; border-radius: 12px; padding: 25px 20px; margin: -45px 18px 0 18px; box-shadow: 0 4px 14px rgba(0,0,0,0.2); color: ${v.text};">
${boxScroll ? `${tagsHTML}<div class="la-scroll-${scrollUid}" style="max-height: ${cardH}px; overflow-y: auto; overflow-x: hidden; padding-right: 10px; box-sizing: border-box; -webkit-overflow-scrolling: touch; overscroll-behavior: contain;">
${bodyHTML}
</div>` : `${tagsHTML}${bodyHTML}`}
</div>`;

  const footerCustomA = ($('f-footer').value || '').trim();
  const footerTextA = footerCustomA
    ? footerCustomA
    : (author ? escapeHtml(author) : '');
  const footerB = footerTextA ? `
<div style="margin-top: 22px; padding: 14px 0 30px 0; border-top: 1px solid ${hexToRgba(v.muted,0.35)}; text-align: center; color: ${v.muted};">
<div style="font-size: 12px; line-height: 1.2;"><span style="font-size: 12px;">${footerTextA}</span></div>
</div>` : '';

  const styleBlock = `<div><style>
.${eqWrap}{display:flex;align-items:flex-end;gap:3px;width:27px;height:14px;overflow:hidden;}
.${eqBar}{flex:none;width:3px;background:${eqColor};border-radius:2px 2px 0 0;font-size:0;line-height:0;overflow:hidden;animation:0.9s ease-in-out infinite alternate;}
.${eqBar}:nth-child(1){height:5px;animation-name:${eqAnim}-a;animation-delay:0s;}
.${eqBar}:nth-child(2){height:11px;animation-name:${eqAnim}-b;animation-delay:0.18s;}
.${eqBar}:nth-child(3){height:7px;animation-name:${eqAnim}-c;animation-delay:0.36s;}
.${eqBar}:nth-child(4){height:13px;animation-name:${eqAnim}-d;animation-delay:0.09s;}
.${eqBar}:nth-child(5){height:5px;animation-name:${eqAnim}-a;animation-delay:0.27s;}
@keyframes ${eqAnim}-a{from{height:1.75px}to{height:5px}}
@keyframes ${eqAnim}-b{from{height:3.85px}to{height:11px}}
@keyframes ${eqAnim}-c{from{height:2.45px}to{height:7px}}
@keyframes ${eqAnim}-d{from{height:4.55px}to{height:13px}}${boxScroll ? `
.la-scroll-${scrollUid}{scrollbar-width:thin;scrollbar-color:${hexToRgba(v.muted,0.45)} transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar{width:6px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-track{background:transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb{background:${hexToRgba(v.muted,0.45)};border-radius:999px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb:hover{background:${hexToRgba(v.muted,0.7)};}` : ''}
</style></div>`;

  return `${styleBlock}${thumbImg}\n<div style="max-width: ${mw}px; margin: 0 auto; padding: 0; font-family: ${font}; color: ${v.text}; background-color: ${v.outerBg}; border-radius: 14px;">
<div style="border-radius: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
${heroBlockB}
</div>
${cardBlockB}
${footerB}
</div>`;
}

/* ===================================================================
   C TYPE 커버 빌더 — 북 재킷
   · 이미지는 깨끗하게 (왼쪽 위 #태그, 오른쪽 위 작성자만)
   · 제목·캐릭터명·소제목은 아래 카드색 밴드에, 본문 카드와 한 장으로 이어짐
   =================================================================== */
function buildCoverC(o){
  const { v, disp, coverBg, od, hh, title, character, subtitle, author, tags } = o;
  const T  = escapeHtml(title);
  const CH = escapeHtml(character);
  const AU = escapeHtml(author);
  const a = (x)=>Math.min(1, x).toFixed(2);
  const sh2 = 'text-shadow:0 1px 8px rgba(0,0,0,0.5);';
  const tdZ = 'padding:0;border:0;';
  const byAu = AU ? `by <b style="text-transform:uppercase;">${AU}</b>` : '';
  const grad = `linear-gradient(to bottom,rgba(0,0,0,${a(od*0.9)}) 0%,rgba(0,0,0,0) 26%)`;
  const ink = v.text, mute = v.muted;
  // 태그: 그림 왼쪽 위에 # 붙여 알약 배경 없이 하나씩
  const hashTags = tags.map(t=>`<span style="margin-right:10px;white-space:nowrap;">#${escapeHtml(t)}</span>`).join('');
  const tagCell = tags.length
    ? `<td style="${tdZ}text-align:left;vertical-align:bottom;font-size:10.5px;letter-spacing:0.08em;color:${v.title};${sh2}">${hashTags}</td>`
    : `<td style="${tdZ}">&nbsp;</td>`;
  const topRow = `<table style="width:100%;border-collapse:collapse;border:0;border-spacing:0;"><tbody><tr>
${tagCell}
<td style="${tdZ}text-align:right;vertical-align:bottom;font-size:9.5px;letter-spacing:0.2em;color:${v.title};white-space:nowrap;${sh2}">${byAu || '&nbsp;'}</td>
</tr></tbody></table>`;
  // 모바일(600px 이하)에서는 표지 그림 세로를 70%로 줄여 본문 영역을 넓힌다
  const hhM = Math.max(140, Math.round(hh * 0.7));
  const heroCls = 'la-cvh-' + eqToken(hh + '|' + hhM);
  const mobileStyle = `<div><style>@media (max-width:600px){.${heroCls}{height:${hhM}px !important;}}</style></div>`;
  return `${mobileStyle}<div style="border-radius:12px 12px 0 0;overflow:hidden;background-color:${v.card};">
<div style="${coverBg}">
<div class="${heroCls}" style="background:${grad};height:${hh}px;padding:14px 20px;box-sizing:border-box;">
${topRow}
</div>
</div>
<div style="padding:22px 24px 18px 24px;background-color:${v.card};">
<div style="width:28px;height:3px;background-color:${v.hl};margin-bottom:12px;font-size:0;line-height:0;">&nbsp;</div>
<div style="font-family:${disp};font-size:42px;font-weight:600;line-height:1.05;letter-spacing:0.01em;color:${ink};">${T}</div>
<div style="font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;line-height:1.5;margin-top:10px;color:${mute};">${CH}</div>
${subtitle ? `<div style="font-family:${disp};font-style:italic;font-size:15px;line-height:1.5;margin-top:10px;padding-top:10px;border-top:1px solid ${hexToRgba(mute,0.3)};color:${ink};">${subtitle}</div>` : ''}
</div>
</div>`;
}

/* ===================================================================
   E TYPE 빌더 — 배너 제목형 봇 카드
   · 배너: Hero 이미지(아래쪽 어둡게) 또는 Muted 단색, 위에 작성자·제목·소제목
   · 배지 = Character Name (배너 아래 경계에 반쯤 걸침, 제목과 반대쪽)
   · 입력값은 A TYPE과 같음
   · 대사/속마음은 A·B·C와 같은 강조 박스
   =================================================================== */
function buildTypeE(o){
  const { v, font, mw, boxScroll, cardH, bodyHTML, title, character, subtitle, author, tags,
          useHero, img, fx, fy, hh, overlayDark, thumbImg, validAlign } = o;
  const hasImg = useHero && img;

  const scrollUid = eqToken(v.muted + '|' + v.card);
  const scrollStyle = boxScroll ? `<div><style>
.la-scroll-${scrollUid}{scrollbar-width:thin;scrollbar-color:${hexToRgba(v.muted,0.45)} transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar{width:6px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-track{background:transparent;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb{background:${hexToRgba(v.muted,0.45)};border-radius:999px;}
.la-scroll-${scrollUid}::-webkit-scrollbar-thumb:hover{background:${hexToRgba(v.muted,0.7)};}
</style></div>` : '';
  const bodyBox = boxScroll
    ? `<div class="la-scroll-${scrollUid}" style="max-height: ${cardH}px; overflow-y: auto; overflow-x: hidden; padding-right: 10px; box-sizing: border-box; -webkit-overflow-scrolling: touch; overscroll-behavior: contain;">
${bodyHTML}
</div>` : bodyHTML;

  const footerCustom = ($('f-footer').value || '').trim();
  const footerText = footerCustom ? footerCustom : (author ? escapeHtml(author) : '');
  const footer = footerText ? `
<div style="padding:14px 0 18px 0;margin:0 30px;border-top:1px solid ${hexToRgba(v.muted,0.25)};text-align:center;color:${v.muted};font-size:12px;letter-spacing:0.06em;">${footerText}</div>` : '';

  const hashTags = tags.length
    ? `<div style="margin:0 0 14px 0;font-size:11.5px;letter-spacing:0.06em;color:${v.muted};">${tags.map(t=>`<span style="margin-right:10px;white-space:nowrap;">#${escapeHtml(t)}</span>`).join('')}</div>` : '';
  const byAu = author ? `by <b style="text-transform:uppercase;">${escapeHtml(author)}</b>` : '';

  // 배너: 이미지가 있으면 A·B처럼 아래쪽을 어둡게, 없으면 Muted 단색
  const od = overlayDark;
  const bandH = Math.max(160, Math.round(hh * 0.9)); // A·B보다 배너를 조금 낮게 (기본 350 → 315)
  const bandBg = hasImg
    ? `background:url('${img}') ${fx}% ${fy}% / cover no-repeat;background-color:${v.muted};`
    : `background-color:${v.muted};`;
  const shade = hasImg ? `background:linear-gradient(to top,rgba(0,0,0,${od}),rgba(0,0,0,${(od*0.15).toFixed(2)}));` : '';
  const sh = hasImg ? 'text-shadow:0 1px 7px rgba(0,0,0,0.6);' : '';
  const titleInk = hasImg ? v.title : readableInk(v.muted, v.title);
  const subInk = hasImg ? v.subtitle : titleInk;
  const banner = `<div style="${bandBg}border-radius:14px 14px 0 0;">
<div style="${shade}height:${bandH}px;display:table;width:100%;box-sizing:border-box;border-radius:14px 14px 0 0;">
<div style="display:table-cell;vertical-align:bottom;padding:24px 30px 42px 30px;text-align:${validAlign};color:${titleInk};${sh}">
${byAu ? `<div style="font-size:11px;letter-spacing:0.16em;margin-bottom:8px;">${byAu}</div>` : ''}
<div style="font-size:28px;font-weight:800;letter-spacing:-0.01em;line-height:1.2;color:${titleInk};">${escapeHtml(title)}</div>
${subtitle ? `<div style="font-size:13px;line-height:1.6;margin-top:8px;color:${subInk};">${subtitle}</div>` : ''}
</div>
</div>
</div>`;

  // 배지: Play 버튼 색 단색. 제목과 반대쪽에 두어 정보가 한쪽으로 쏠리지 않게 함 (가운데 정렬이면 가운데)
  const badgeStyle = `background-color:${v.accent};color:${v.accentText};`;
  const badgeAlign = validAlign === 'left' ? 'right' : (validAlign === 'right' ? 'left' : 'center');
  const badge = `<div style="display:inline-block;padding:6px 16px;border-radius:999px;${badgeStyle}font-size:14px;font-weight:700;letter-spacing:0.02em;white-space:nowrap;line-height:1.5;box-shadow:0 3px 10px rgba(0,0,0,0.18);">${escapeHtml(character)}</div>`;

  const row = `<div style="margin-top:-17px;padding:0 26px;text-align:${badgeAlign};">${badge}</div>`;

  return `${scrollStyle}${thumbImg}<div style="max-width:${mw}px;margin:0 auto;padding:0;box-sizing:border-box;font-family:${font};color:${v.text};background-color:${v.card};border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
${banner}
${row}
<div style="padding:20px 30px 28px 30px;">
${hashTags}${bodyBox}
</div>${footer}
</div>`;
}
