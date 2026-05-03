(function(){
  const SK='wgs_wes_lang';
  let lang='zh';
  // Try to read saved lang; ignore failures (file:// protocol blocks localStorage in some browsers)
  try { lang = localStorage.getItem(SK) || 'zh'; } catch(e){ lang='zh'; }

  function apply(l){
    lang=l;
    try { localStorage.setItem(SK,l); } catch(e){}
    document.documentElement.lang=l==='zh'?'zh-Hant':'en';
    // Show/hide lang-specific blocks
    document.querySelectorAll('[data-lang]').forEach(el=>{
      el.style.display=el.dataset.lang===l?'':'none';
    });
    // Update simple text swaps
    document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
      el.textContent=el.dataset[l];
    });
    // Toggle button
    const btn=document.getElementById('langToggle');
    if(btn) btn.textContent=l==='zh'?'EN':'中文';
    // Fire event for charts etc
    document.dispatchEvent(new CustomEvent('langchange',{detail:{lang:l}}));
  }

  function toggle(){ apply(lang==='zh'?'en':'zh'); }
  function get(){ return lang; }

  function init(){
    const nav=document.querySelector('.top-nav-inner');
    if(nav && !document.getElementById('langToggle')){
      const btn=document.createElement('button');
      btn.id='langToggle'; btn.className='lang-toggle';
      btn.textContent=lang==='zh'?'EN':'中文';
      btn.onclick=toggle; nav.appendChild(btn);
    }
    apply(lang);
  }

  // Handle case where script loads after DOMContentLoaded already fired
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else {
    init();
  }

  window.I18n={apply,toggle,get};
})();
