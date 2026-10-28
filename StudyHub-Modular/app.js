/* ============================================================
   COURSES — struktur per pertemuan
   {id, title, eyebrow, summary, pertemuan:[
       {label, sub, cards[], blocks[], table{}, quiz[], wawancara[]} ]}
   TAMBAH MATA KULIAH = append objek di COURSES.
   TAMBAH PERTEMUAN  = append objek di pertemuan[].
   ============================================================ */
const COURSES = [window.DATA_TDO, window.DATA_MANAJEMEN_PROYEK, window.DATA_EKONOMI_PERILAKU, window.DATA_PERILAKU_KONSUMEN, window.DATA_STATISTIKA_BISNIS];

/* ============================================================ RENDER */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

let cur={course:null,ptm:null};

function showView(id){
  ['viewHome','viewCourse','viewPtm'].forEach(v=>{$(v).hidden=(v!==id);});
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderCrumbs(parts){
  const c=$('crumbs');
  c.innerHTML='<button onclick="goHome()">🏠 Beranda</button>'+parts.map((p,i)=>
    `<span class="sep">›</span><button onclick="${p.fn}">${esc(p.label)}</button>`).join('')
    +(parts.length?`<span class="sep">›</span><span class="cur">${esc(parts[parts.length-1].active||'')}</span>`:'');
}

function goHome(){
  cur={course:null,ptm:null};
  renderCrumbs([]);
  const total=COURSES.reduce((n,c)=>n+c.pertemuan.length,0);
  $('courseGrid').innerHTML=COURSES.map((c,i)=>{
    const q=c.pertemuan.reduce((n,p)=>n+(p.quiz?p.quiz.length:0),0);
    const w=c.pertemuan.reduce((n,p)=>n+(p.wawancara?p.wawancara.length:0),0);
    return `<div class="ccard" onclick="goCourse(${i})">
      <div class="cnum">${String(i+1).padStart(2,'0')}</div>
      <div class="ceb">${esc(c.eyebrow)}</div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.summary)}</p>
      <div class="ctags">
        <span class="tag a">${c.pertemuan.length} pertemuan</span>
        <span class="tag">📝 ${q} kuis</span>
        <span class="tag">💬 ${w} kartu</span>
      </div></div>`;
  }).join('');
  $('footSrc').innerHTML=COURSES.length>1
    ? `<b>Mata kuliah:</b> ${COURSES.map(c=>esc(c.title)).join(' · ')}`
    : `<b>Sumber:</b> ${esc(COURSES[0].eyebrow)}`;
  showView('viewHome');
}

function goCourse(i){
  cur.course=i;cur.ptm=null;
  const c=COURSES[i];
  renderCrumbs([{label:c.title,fn:`goCourse(${i})`}]);
  $('courseHead').innerHTML=`<div class="cbanner"><div class="cnum">${String(i+1).padStart(2,'0')}</div>
    <div class="chdr"><div class="eyebrow">${esc(c.eyebrow)}</div><h2>${esc(c.title)}</h2>
    <p class="csummary">${esc(c.summary)}</p></div></div>`;
  $('ptmList').innerHTML=c.pertemuan.map((p,j)=>{
    const q=p.quiz?p.quiz.length:0, w=p.wawancara?p.wawancara.length:0, k=p.cards?p.cards.length:0;
    return `<div class="pcard" onclick="goPtm(${i},${j})">
      <div class="pnum">${String(j+1).padStart(2,'0')}</div>
      <div><h4>${esc(p.label)}</h4><div class="psub">${esc(p.sub)}</div>
      <div class="ptags">
        <span class="tag a">${k} kartu</span>
        <span class="tag">📝 ${q} kuis</span>
        <span class="tag">💬 ${w} kartu wawancara</span>
      </div></div></div>`;
  }).join('');
  showView('viewCourse');
}

function goPtm(i,j){
  cur.course=i;cur.ptm=j;
  const c=COURSES[i],p=c.pertemuan[j];
  renderCrumbs([{label:c.title,fn:`goCourse(${i})`},{label:p.label,active:p.sub}]);
  let h=`<div class="course"><div class="cbanner"><div class="cnum">${String(i+1).padStart(2,'0')}</div>
    <div class="chdr"><div class="eyebrow">${esc(c.eyebrow)}</div><h2>${esc(c.title)}</h2>
    <p class="csummary">${esc(c.summary)}</p></div></div>
    <div class="ptitle">${esc(p.label)} · ${esc(p.sub)}</div></div>`;

  if(p.cards&&p.cards.length){
    h+=`<div class="subsec"><div class="sec-h"><div class="n">A</div><h3>Ringkasan Materi</h3></div>
      <div class="grid">${p.cards.map(cd=>`
        <div class="card"><h4>${esc(cd.icon||'')} ${esc(cd.h)}</h4><span class="lvl">${esc(cd.lvl||'')}</span>
        <p>${esc(cd.p||'')}</p>${(cd.ul||[]).length?`<ul>${cd.ul.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}</div>`).join('')}</div></div>`;
  }
  if(p.blocks&&p.blocks.length){
    h+=`<div class="subsec"><div class="sec-h"><div class="n">B</div><h3>Peta Konsep</h3></div>
      <div class="grid">${p.blocks.map(bd=>`
        <div class="card"><h4>${esc(bd.icon||'')} ${esc(bd.h)}</h4><span class="lvl">${esc(bd.lvl||'')}</span>
        <ul>${bd.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div></div>`;
  }
  if(p.table){
    const t=p.table;
    h+=`<div class="subsec"><div class="sec-h"><div class="n">C</div><h3>${esc(t.title||'Perbandingan')}</h3></div>
      <p class="sec-sub">${esc(t.note||'Perbandingan dua pendekatan.')}</p>
      <div class="tbl-wrap"><table><thead><tr><th>${esc(t.first||'Item')}</th><th class="low">${esc(t.low)}</th><th class="diff">${esc(t.diff)}</th></tr></thead><tbody>
      ${t.rows.map(r=>`<tr><td class="f">${esc(r[0])}</td><td class="low">${esc(r[1])}</td><td class="diff">${esc(r[2])}</td></tr>`).join('')}
      </tbody></table></div></div>`;
  }
  if(p.quiz&&p.quiz.length){
    const qid=`quiz-${c.id}-p${j}`;
    h+=`<div class="subsec"><div class="sec-h"><div class="n">D</div><h3>Kuis Interaktif</h3></div>
      <p class="sec-sub">${p.quiz.length} soal pilihan ganda · urutan diacak · ada pembahasan & skor.</p>
      <div class="qbox" id="${qid}">
        <div class="startq"><p style="color:var(--muted);margin-bottom:14px">Siap menguji pemahamanmu?</p>
          <button class="btn" data-start="${qid}">🚀 Mulai Kuis</button></div>
        <div class="playq hidden">
          <div class="qmeta"><span class="qbadge">Soal 1</span><span class="scorepill">⭐ <span class="scoreLive">0</span></span></div>
          <div class="pbar"><div class="pfill prog"></div></div>
          <div class="qmeta"><span class="qProg"></span><span class="qCat"></span></div>
          <div class="qtext qText"></div><div class="opts"></div>
          <div class="fb"></div><button class="btn nextq" style="display:none"></button>
        </div>
        <div class="endq hidden" style="text-align:center">
          <div class="rescore finalScore">0/0</div><p class="endMsg" style="color:var(--muted)"></p>
          <button class="btn ghost toggleRev">Lihat Pembahasan</button>
          <div class="review hidden"></div>
          <button class="btn restart">🔁 Ulangi</button></div>
      </div></div>`;
  }
  if(p.wawancara&&p.wawancara.length){
    h+=`<div class="subsec"><div class="sec-h"><div class="n">E</div><h3>Kartu Wawancara</h3></div>
      <p class="sec-sub">${p.wawancara.length} skenario (Q1 konsep · Q2 terapkan · Q3 kontrafaktual).</p>
      <div class="wcards">${p.wawancara.map((w,wi)=>`
        <div class="wcard"><h4>[${String(wi+1).padStart(2,'0')}] ${esc(w.t)}</h4>
        <div class="concept">${esc(w.c)}</div>
        ${w.q.map(([t,a])=>`<div class="q"><div class="t">Q · ${esc(t)}</div><div class="a">${esc(a)}</div></div>`).join('')}
        </div>`).join('')}</div></div>`;
  }
  $('ptmMount').innerHTML=h;
  if(p.quiz&&p.quiz.length)initQuiz(`quiz-${c.id}-p${j}`,p.quiz);
  showView('viewPtm');
}

/* ============================================================ QUIZ ENGINE */
function initQuiz(boxId,quiz){
  const box=$(boxId);
  if(!box)return;
  const start=box.querySelector('.startq'),play=box.querySelector('.playq'),end=box.querySelector('.endq');
  let qi=0,score=0,answered=false,order=[];
  const KEYS=['A','B','C','D','E'];
  const q=el=>box.querySelector(el);
  start.querySelector('[data-start]').onclick=()=>{
    order=quiz.map((_,i)=>i);
    for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
    qi=0;score=0;answered=false;start.classList.add('hidden');end.classList.add('hidden');play.classList.remove('hidden');show();
  };
  function show(){
    answered=false;const it=quiz[order[qi]];
    q('.qbadge').textContent='Soal '+(qi+1);
    q('.qProg').textContent=(qi+1)+' / '+quiz.length;
    q('.qCat').textContent=it.c;q('.qText').textContent=it.q;
    q('.prog').style.width=(qi/quiz.length*100)+'%';q('.scoreLive').textContent=score;
    q('.fb').className='fb';q('.nextq').style.display='none';
    q('.opts').innerHTML=it.o.map((op,i)=>`<button class="opt" data-i="${i}"><span class="k">${KEYS[i]}</span><span>${esc(op)}</span></button>`).join('');
    q('.opts').querySelectorAll('.opt').forEach(b=>b.onclick=()=>pick(+b.dataset.i,b));
  }
  function pick(i,el){
    if(answered)return;answered=true;const it=quiz[order[qi]];
    q('.opts').querySelectorAll('.opt').forEach((b,j)=>{b.disabled=true;
      if(j===it.a)b.classList.add('correct');
      if(j===i&&i!==it.a)b.classList.add('wrong');});
    const fb=q('.fb');
    if(i===it.a){score++;q('.scoreLive').textContent=score;fb.className='fb ok show';fb.innerHTML='✅ <b>Benar!</b> '+it.x;}
    else{fb.className='fb bad show';fb.innerHTML='❌ <b>Kurang tepat.</b> '+it.x;}
    const nb=q('.nextq');nb.style.display='inline-block';
    nb.textContent=(qi===quiz.length-1)?'Lihat Hasil 🏆':'Soal Berikutnya →';
    nb.onclick=()=>{qi<quiz.length-1?(qi++,show()):finish();};
  }
  function finish(){
    play.classList.add('hidden');end.classList.remove('hidden');
    const pct=Math.round(score/quiz.length*100);
    q('.finalScore').textContent=score+'/'+quiz.length;
    q('.endMsg').textContent=(pct>=85?'🌟 Luar biasa!':pct>=70?'👍 Bagus!':pct>=50?'📚 Cukup.':'💪 Semangat!')+' ('+pct+'%)';
    q('.review').innerHTML=quiz.map((it,i)=>`<div class="rvi"><div class="rq">${i+1}. ${esc(it.q)}</div><div class="ra ok">✔ ${esc(it.o[it.a])}</div></div>`).join('');
    q('.toggleRev').onclick=()=>q('.review').classList.toggle('hidden');
    q('.restart').onclick=()=>{end.classList.add('hidden');play.classList.add('hidden');start.classList.remove('hidden');};
  }
}

goHome();
