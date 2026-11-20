const $ = (id) => document.getElementById(id);

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function eqToken(str){
  const s = String(str || '');
  let h = 5381;
  for(let i=0;i<s.length;i++){ h = (((h<<5)+h) + s.charCodeAt(i)) >>> 0; }
  return h.toString(36).slice(0,6) || '0';
}

function hexToRgba(hex, alpha){
  if(!hex) return `rgba(0,0,0,${alpha})`;
  if(hex.startsWith('rgb')) return hex;
  const m = hex.replace('#','');
  const full = m.length===3 ? m.split('').map(c=>c+c).join('') : m;
  const r = parseInt(full.substring(0,2),16);
  const g = parseInt(full.substring(2,4),16);
  const b = parseInt(full.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function relLuminance(hex){
  if(!hex || typeof hex !== 'string' || hex[0] !== '#') return 0.5;
  let h = hex.replace('#','');
  if(h.length===3) h = h.split('').map(c=>c+c).join('');
  if(h.length!==6) return 0.5;
  const toLin = (c)=>{ c/=255; return c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4); };
  const r = toLin(parseInt(h.substring(0,2),16));
  const g = toLin(parseInt(h.substring(2,4),16));
  const b = toLin(parseInt(h.substring(4,6),16));
  if([r,g,b].some(Number.isNaN)) return 0.5;
  return 0.2126*r + 0.7152*g + 0.0722*b;
}
function contrastRatio(a,b){
  const la = relLuminance(a), lb = relLuminance(b);
  const hi = Math.max(la,lb), lo = Math.min(la,lb);
  return (hi+0.05)/(lo+0.05);
}
function readableInk(bgHex, preferred){
  if(preferred && contrastRatio(bgHex, preferred) >= 3.5) return preferred;
  const dark = '#1f1a14', light = '#f4f1ea';
  return contrastRatio(bgHex, dark) >= contrastRatio(bgHex, light) ? dark : light;
}
