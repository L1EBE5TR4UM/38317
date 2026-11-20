const state = {
  type:'A',
  theme:'Default',
  themeVars: {...THEMES.Default},
};

/* ---------- TAB / TYPE ---------- */
$('tabs').addEventListener('click', (e)=>{
  const b = e.target.closest('button'); if(!b) return;
  for (const btn of $('tabs').children) btn.classList.toggle('active', btn===b);
  const tab = b.dataset.tab;
  document.querySelectorAll('[data-pane]').forEach(p=>{
    p.style.display = (p.dataset.pane===tab) ? '' : 'none';
  });
});
$('typeToggle').addEventListener('click', (e)=>{
  const b = e.target.closest('button'); if(!b) return;
  for (const btn of $('typeToggle').children) btn.classList.toggle('active', btn===b);
  state.type = b.dataset.type;
  document.body.setAttribute('data-type', state.type);
  render();
});

/* ---------- THEMES UI ----------
   현재 테마 줄(미니 카드 + 이름 + ‹ ›) 아래에
   왼쪽 분류 메뉴(전체 / ★ 즐겨찾기 / 분위기 묶음)와 오른쪽 검색 + 아이콘 목록.
   즐겨찾기는 이 브라우저의 localStorage에만 저장된다. */
const FAV_KEY = 'log-library-theme-favs';
let themeFavs = new Set();
try{ themeFavs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]').map(n => THEME_RENAMED[n] || n)); }catch(e){}
function saveThemeFavs(){ try{ localStorage.setItem(FAV_KEY, JSON.stringify([...themeFavs])); }catch(e){} }

const tp = { open:true, filter:'전체', q:'' };
const TP_FILTERS = ['전체','★', ...THEME_GROUPS];
const themePicker = $('themePicker');
themePicker.innerHTML = `
  <div class="tp-now">
    <span data-tp-icon></span>
    <button type="button" class="tp-name" data-tp-act="toggle"><b></b><small></small></button>
    <div class="tp-arrows">
      <button type="button" class="tp-arrow" data-tp-act="prev" aria-label="이전 테마">&#8249;</button>
      <button type="button" class="tp-arrow" data-tp-act="next" aria-label="다음 테마">&#8250;</button>
    </div>
  </div>
  <div class="tp-body">
    <div class="tp-side" data-tp-tabs></div>
    <div class="tp-main">
      <input type="search" class="tp-search" id="tp-search" placeholder="이름 검색" autocomplete="off" />
      <div class="tp-list" data-tp-list role="listbox" aria-label="테마 목록"></div>
    </div>
  </div>`;

function themeMini(t, big){
  return `<span class="tp-m${big?' lg':''}" style="background:${t.outerBg}"><span class="tp-mc" style="background:${t.card}">`
    + `<span class="tp-l" style="background:${t.hl};width:80%"></span>`
    + `<span class="tp-l" style="background:${t.text};opacity:.35;width:95%"></span>`
    + `<span class="tp-l" style="background:${t.hl2 || t.hl};width:55%"></span>`
    + `<span class="tp-dot" style="background:${t.accent}"></span></span></span>`;
}
function tpMatches(name, filter){
  if (filter === '전체') return true;
  if (filter === '★') return themeFavs.has(name);
  return THEME_GROUP_OF[name] === filter;
}
function tpVisible(){
  return Object.keys(THEMES).filter(n =>
    (!tp.q || n.toLowerCase().includes(tp.q)) && tpMatches(n, tp.filter));
}
function applyTheme(name){
  if (!THEMES[name]) return;
  state.theme = name;
  state.themeVars = {...THEMES[name]};
  for (const k of THEME_KEYS){
    const el = $('t-'+k); if(el){ el.value = state.themeVars[k]; }
    const lbl = $('t-'+k+'-v'); if(lbl){ lbl.textContent = state.themeVars[k]; }
  }
  repaintChips();
  render();
}
// 테마 선택 UI 다시 그리기 (프리셋 불러오기 등에서도 호출)
function repaintChips(){
  const cur = THEMES[state.theme] ? state.theme : null;
  const t = cur ? THEMES[cur] : state.themeVars;
  themePicker.querySelector('[data-tp-icon]').innerHTML = themeMini(t, true);
  themePicker.querySelector('.tp-name b').textContent = cur || 'Custom';
  themePicker.querySelector('.tp-name small').textContent = tp.open ? '접기 ▴' : '펼치기 ▾';
  themePicker.querySelector('.tp-name').setAttribute('aria-expanded', tp.open);
  themePicker.querySelector('.tp-body').hidden = !tp.open;

  const names = Object.keys(THEMES);
  themePicker.querySelector('[data-tp-tabs]').innerHTML = TP_FILTERS.map(f => {
    const n = names.filter(x => tpMatches(x, f)).length;
    return `<button type="button" class="tp-tab" data-tp-filter="${f}" aria-pressed="${f===tp.filter}">${f==='★'?'★ 즐겨찾기':f}<sup>${n}</sup></button>`;
  }).join('');

  const list = tpVisible();
  const box = themePicker.querySelector('[data-tp-list]');
  if (!list.length){
    box.innerHTML = `<div class="tp-empty">${tp.filter==='★' && !tp.q
      ? '즐겨찾기한 테마가 없습니다. 이름 옆 ☆를 눌러 추가하세요.'
      : '맞는 테마가 없습니다. 검색어나 분류를 바꿔 보세요.'}</div>`;
    return;
  }
  box.innerHTML = `<div class="tp-grid">${list.map(n => {
    const fav = themeFavs.has(n), esc = escapeHtml(n);
    return `<div class="tp-cell" role="option" data-tp-theme="${esc}" aria-selected="${n===state.theme}" title="${esc}">`
      + themeMini(THEMES[n]) + `<span class="tp-n">${esc}</span>`
      + `<button type="button" class="tp-star" data-tp-star="${esc}" aria-pressed="${fav}" aria-label="${esc} 즐겨찾기">${fav?'★':'☆'}</button></div>`;
  }).join('')}</div>`;
}
function tpStep(d){
  const list = tpVisible().length ? tpVisible() : Object.keys(THEMES);
  let i = list.indexOf(state.theme);
  i = i < 0 ? 0 : (i + d + list.length) % list.length;
  applyTheme(list[i]);
}
themePicker.addEventListener('click', e=>{
  const act = e.target.closest('[data-tp-act]');
  if (act){
    if (act.dataset.tpAct === 'toggle'){ tp.open = !tp.open; repaintChips(); }
    else tpStep(act.dataset.tpAct === 'next' ? 1 : -1);
    return;
  }
  const star = e.target.closest('[data-tp-star]');
  if (star){
    const n = star.dataset.tpStar;
    themeFavs.has(n) ? themeFavs.delete(n) : themeFavs.add(n);
    saveThemeFavs(); repaintChips(); return;
  }
  const tab = e.target.closest('[data-tp-filter]');
  if (tab){ tp.filter = tab.dataset.tpFilter; repaintChips(); return; }
  const cell = e.target.closest('[data-tp-theme]');
  if (cell) applyTheme(cell.dataset.tpTheme);
});
$('tp-search').addEventListener('input', e=>{ tp.q = e.target.value.trim().toLowerCase(); repaintChips(); });

/* ---------- COLOR PICKERS ---------- */
THEME_KEYS.forEach(k=>{
  const el = $('t-'+k); const lbl = $('t-'+k+'-v');
  if(el){
    el.addEventListener('input', ()=>{
      state.themeVars[k] = el.value;
      if(lbl) lbl.textContent = el.value;
      render();
    });
  }
});

/* ---------- D TYPE 사진 조정 슬라이더 값 표시 ---------- */
['u','c'].forEach(pre => ['zoom','fx','fy'].forEach(k => {
  const el = $(`f-${pre}-${k}`), lbl = $(`f-${pre}-${k}-v`);
  if (el && lbl) el.addEventListener('input', () => { lbl.textContent = el.value; });
}));

/* ---------- INPUT WIRING ---------- */
document.querySelectorAll('input, select, textarea').forEach(el=>{
  el.addEventListener('input', render);
  el.addEventListener('change', render);
});

/* ============================================================
   Smart-quote & ellipsis auto-convert for the body textarea.
   ============================================================ */
(()=>{
  const ta = $('f-body');
  if (!ta) return;
  let composing = false;
  ta.addEventListener('compositionstart', ()=>{ composing = true; });
  ta.addEventListener('compositionend',   ()=>{ composing = false; });

  function smartReplace(){
    const checkbox = $('f-smartquote');
    if (checkbox && !checkbox.checked) return;
    if (composing) return;

    const value = ta.value;
    const caret = ta.selectionStart;

    let out = '';
    let newCaret = caret;
    const isWord = (ch)=> /[A-Za-z0-9]/.test(ch || '');
    const opensAfter = (ch)=>{
      if (!ch) return true;
      return /[\s(\[\{<—\-]/.test(ch);
    };

    let i = 0;
    while (i < value.length){
      const ch = value[i];
      const prevOut = out.length ? out[out.length - 1] : '';
      if (ch === '.' && value[i+1] === '.' && value[i+2] === '.'){
        out += '\u2026';
        if (caret > i + 2) newCaret -= 2;
        else if (caret > i) newCaret = out.length;
        i += 3;
        continue;
      }
      if (ch === '"'){
        out += opensAfter(prevOut) ? '\u201C' : '\u201D';
        i++;
        continue;
      }
      if (ch === "'"){
        const next = value[i+1] || '';
        if (isWord(prevOut) && isWord(next)){
          out += '\u2019';
        } else {
          out += opensAfter(prevOut) ? '\u2018' : '\u2019';
        }
        i++;
        continue;
      }
      out += ch;
      i++;
    }

    if (out !== value){
      const delta = out.length - value.length;
      ta.value = out;
      const newPos = Math.min(out.length, Math.max(0, caret + delta));
      try{ ta.setSelectionRange(newPos, newPos); }catch(e){}
      render();
    }
  }

  ta.addEventListener('input', smartReplace);
})();

/* ---------- RENDER ---------- */
function render(){
  const html = buildHTML();
  // D TYPE + 완전 투명 배경: 출력에 배경이 없으므로 미리보기도 테마 색을 깔지 않고
  // 블로그에 붙여넣었을 때처럼 흰 바탕 위에 그대로 보여줌 (어두운 틀 위에서는 글자가 안 보이기 때문)
  const previewTransparentC = state.type === 'D' && $('f-ctransparent').checked;
  $('previewFrame').style.background = previewTransparentC ? '#ffffff' : '';
  $('previewFrame').innerHTML = html;
  $('outputCode').textContent = html;
}

/* ---------- COPY ---------- */
$('copyBtn').addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText($('outputCode').textContent);
    const btn = $('copyBtn'); btn.textContent='Copied!'; btn.classList.add('copied');
    setTimeout(()=>{ btn.textContent='Copy'; btn.classList.remove('copied'); }, 1400);
  }catch(e){
    const r = document.createRange(); r.selectNode($('outputCode'));
    window.getSelection().removeAllRanges(); window.getSelection().addRange(r);
    document.execCommand('copy'); window.getSelection().removeAllRanges();
    $('copyBtn').textContent='Copied!';
    setTimeout(()=>{ $('copyBtn').textContent='Copy'; }, 1400);
  }
});

/* ---------- PRESETS ---------- */
const PRESET_KEY = 'log-atelier-presets-v2';
function loadPresets(){ try{ return JSON.parse(localStorage.getItem(PRESET_KEY)||'{}'); }catch{ return {}; } }
function savePresets(o){ localStorage.setItem(PRESET_KEY, JSON.stringify(o)); }
function snapshot(){
  const s = { v: 2, type: state.type, theme: state.theme, vars: {...state.themeVars}, fields: {} };
  document.querySelectorAll('[id^="f-"], [id^="t-"]').forEach(el=>{
    if(el.type==='checkbox') s.fields[el.id] = el.checked;
    else if(el.type==='color' || el.type==='text' || el.type==='url' || el.type==='number' || el.tagName==='SELECT' || el.tagName==='TEXTAREA') s.fields[el.id] = el.value;
  });
  return s;
}
function restore(snap){
  if(!snap || typeof snap !== 'object') return;

  // 스냅샷 v2 이전의 'C'는 지금의 D TYPE(인물 소개)이므로 D로 옮겨 불러옴
  const snapType = (snap.type === 'C' && !(snap.v >= 2)) ? 'D' : snap.type;
  if(snapType === 'A' || snapType === 'B' || snapType === 'C' || snapType === 'D'){
    state.type = snapType;
    for (const btn of $('typeToggle').children){
      btn.classList.toggle('active', btn.dataset.type===state.type);
    }
    document.body.setAttribute('data-type', state.type);
  }

  if(snap.theme){
    // 이름이 바뀐 테마는 새 이름으로 (THEME_RENAMED)
    state.theme = THEME_RENAMED[snap.theme] || snap.theme;
  }

  let vars = null;
  if (snap.vars && typeof snap.vars === 'object') vars = snap.vars;
  else if (snap.themeVars && typeof snap.themeVars === 'object') vars = snap.themeVars;
  else if (snap.fields){
    const reconstructed = {};
    let foundAny = false;
    for(const k of THEME_KEYS){
      if (snap.fields['t-'+k] !== undefined){
        reconstructed[k] = snap.fields['t-'+k];
        foundAny = true;
      }
    }
    if (foundAny) vars = reconstructed;
  }
  if (vars){
    state.themeVars = { ...THEMES.Default, ...state.themeVars, ...vars };
    for (const k of THEME_KEYS){
      const el = $('t-'+k);
      if (el && state.themeVars[k] !== undefined){
        el.value = state.themeVars[k];
      }
      const lbl = $('t-'+k+'-v');
      if (lbl && state.themeVars[k] !== undefined){
        lbl.textContent = state.themeVars[k];
      }
    }
  }

  if (snap.fields && typeof snap.fields === 'object'){
    for (const [id, val] of Object.entries(snap.fields)){
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.type === 'checkbox'){
        el.checked = !!val;
      } else {
        el.value = (val === null || val === undefined) ? '' : val;
      }
      const lbl = $(id+'-v');
      if (lbl) lbl.textContent = (val === null || val === undefined) ? '' : val;
    }
  }

  repaintChips();
  render();
}
function refreshPresetList(){
  const sel = $('p-load'); const data = loadPresets();
  sel.innerHTML = '<option value="">— 저장된 preset 선택 —</option>';
  Object.keys(data).sort().forEach(name=>{
    const o = document.createElement('option'); o.value=name; o.textContent=name; sel.appendChild(o);
  });
}
$('p-save').addEventListener('click', ()=>{
  const name = ($('p-name').value||'').trim(); if(!name){ alert('Preset 이름을 입력하세요.'); return; }
  const all = loadPresets(); all[name] = snapshot(); savePresets(all);
  refreshPresetList(); alert(`"${name}" 저장됨`);
});
$('p-delete').addEventListener('click', ()=>{
  const name = $('p-load').value || ($('p-name').value||'').trim();
  if(!name){ alert('삭제할 preset을 선택하세요.'); return; }
  const all = loadPresets(); delete all[name]; savePresets(all); refreshPresetList();
});
$('p-load').addEventListener('change', ()=>{
  const name = $('p-load').value; if(!name) return;
  restore(loadPresets()[name]);
});
$('p-export').addEventListener('click', ()=>{
  try{
    const snap = snapshot();
    const json = JSON.stringify(snap, null, 2);
    const blob = new Blob([json], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (($('p-name').value || '').trim() || 'log-atelier-theme') + '.json';
    a.style.position = 'fixed';
    a.style.left = '-9999px';
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{
      if(a.parentNode) document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }catch(err){
    alert('Export 중 오류: ' + err.message);
    console.error(err);
  }
});
$('p-import').addEventListener('click', ()=>{
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.style.position = 'fixed';
  input.style.left = '-9999px';
  document.body.appendChild(input);

  input.addEventListener('change', (e)=>{
    const f = e.target.files && e.target.files[0];
    if(!f){ document.body.removeChild(input); return; }
    const r = new FileReader();
    r.onload = (ev)=>{
      let snap;
      try{
        snap = JSON.parse(ev.target.result);
      }catch(err){
        alert('JSON을 파싱하지 못했습니다.\n오류: ' + err.message);
        if(input.parentNode) document.body.removeChild(input);
        return;
      }
      try{
        let normalised;
        const isLogAtelierExport = snap && typeof snap === 'object' &&
          ('cardBg' in snap || 'textColor' in snap || 'hiColor' in snap || 'footerColor' in snap);
        if (isLogAtelierExport){
          const mapped = {};
          if (snap.outerBg !== undefined)            mapped.outerBg = snap.outerBg;
          if (snap.cardBg !== undefined)             mapped.card = snap.cardBg;
          if (snap.textColor !== undefined)          mapped.text = snap.textColor;
          if (snap.hiColor !== undefined)            mapped.hl = snap.hiColor;
          if (snap.hiColorB !== undefined)           mapped.hl2 = snap.hiColorB;
          if (snap.playBtnBgVal !== undefined)       mapped.accent = snap.playBtnBgVal;
          if (snap.playBtnTextVal !== undefined)     mapped.accentText = snap.playBtnTextVal;
          if (snap.footerColor !== undefined)        mapped.muted = snap.footerColor;
          if (snap.titleClusterColor !== undefined){ mapped.title = snap.titleClusterColor; mapped.char = snap.titleClusterColor; }
          if (snap.heroSubtitleColor !== undefined)  mapped.subtitle = snap.heroSubtitleColor;
          normalised = { vars: mapped };
        } else if (snap && (snap.fields || snap.vars || snap.type || snap.theme)){
          normalised = snap;
        } else if (snap && typeof snap === 'object'){
          normalised = { vars: snap };
        } else {
          throw new Error('알 수 없는 JSON 형식');
        }
        restore(normalised);
        alert('Preset을 불러왔습니다.');
      }catch(err){
        alert('Preset 적용 중 오류가 발생했습니다.\n' + err.message);
        console.error(err);
      }finally{
        if(input.parentNode) document.body.removeChild(input);
      }
    };
    r.onerror = ()=>{
      alert('파일을 읽지 못했습니다.');
      if(input.parentNode) document.body.removeChild(input);
    };
    r.readAsText(f);
  });

  input.click();
});

refreshPresetList();
document.body.setAttribute('data-type', state.type);
repaintChips();
render();
