(function(){
  'use strict'

  // ─── Mobile menu ───
  var h = document.getElementById('hamburger')
  var nl = document.getElementById('nav-links')
  if(h&&nl){
    h.addEventListener('click',function(){h.classList.toggle('open');nl.classList.toggle('open')})
    nl.querySelectorAll('.nav-i').forEach(function(l){l.addEventListener('click',function(){h.classList.remove('open');nl.classList.remove('open')})})
  }

  // ─── Header scroll ───
  var header=document.getElementById('header')
  var tick=!1
  window.addEventListener('scroll',function(){
    if(!tick){requestAnimationFrame(function(){header.classList.toggle('scrolled',window.scrollY>40);tick=!1});tick=!0}
  })

  // ─── Active nav ───
  var ni=document.querySelectorAll('.nav-i')
  var ss=document.querySelectorAll('section[id]')
  function act(){
    var sy=window.scrollY+90,cur=''
    ss.forEach(function(s){var t=s.offsetTop,h=s.offsetHeight;if(sy>=t&&sy<t+h)cur=s.getAttribute('id')})
    ni.forEach(function(n){n.classList.toggle('active',n.getAttribute('href')==='#'+cur)})
  }
  window.addEventListener('scroll',act);act()

  // ─── Back to top ───
  var top=document.getElementById('top')
  if(top){
    window.addEventListener('scroll',function(){top.classList.toggle('show',window.scrollY>400)})
    top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})
  }

  // ─── Projects ───
  var projects=[
    {title:'Semantic Video Retrieval',sem:'6th Sem',
     desc:'Text-based video search using CLIP and FAISS. Encodes frames as 512-dim embeddings and retrieves relevant shots from natural-language queries.',
     tags:['CLIP','FAISS','PyTorch'],url:'https://github.com/shivramsaud/video-retrieval'},
    {title:'Invasive Plant Species Classification',sem:'5th Sem',
     desc:'27-class classifier for government-listed invasive plants in Nepal. Compared YOLOv12, ResNet, DenseNet, and ConvNeXtV2 on GBIF-sourced imagery.',
     tags:['YOLOv12','ResNet','ConvNeXtV2'],url:'https://github.com/shivramsaud/invasive-plant-classification'},
    {title:'Hindi\u2013Nepali Machine Translation',sem:'4th Sem',
     desc:'Fairseq transformer with VecMap cross-lingual alignment and Word Sense Disambiguation. Evaluated on a 20,000-pair parallel corpus.',
     tags:['Fairseq','VecMap','WSD'],url:'https://github.com/shivramsaud/hindi-nepali-machine-translation'},
    {title:'IoT Environmental Monitor',sem:'3rd Sem',
     desc:'Mushroom farming monitor combining DHT22/CO\u2082 sensors on Arduino, Raspberry Pi edge gateway with SQLite, and Pi Camera\u2013based plant growth tracking.',
     tags:['Raspberry Pi','Arduino','CV'],url:'https://github.com/shivramsaud/iot-environmental-monitor'},
    {title:'Desktop Text Editor',sem:'2nd Sem',
     desc:'Multi-tab editor with syntax highlighting, find/replace, and line numbers. Built with Python, Tkinter, and CustomTkinter.',
     tags:['Python','Tkinter','CustomTkinter'],url:'https://github.com/shivramsaud/text-editor-desktop'}
  ]
  var pg=document.getElementById('proj-grid')
  if(pg){
    projects.forEach(function(p){
      var c=document.createElement('div');c.className='pc'
      var b=document.createElement('div');b.className='pc-bar'
      var bo=document.createElement('div');bo.className='pc-body'
      var tg=document.createElement('div');tg.className='pc-tags'
      p.tags.forEach(function(t){var s=document.createElement('span');s.className='pc-tag';s.textContent=t;tg.appendChild(s)})
      var ti=document.createElement('h3');ti.className='pc-title';ti.textContent=p.title
      var d=document.createElement('p');d.className='pc-desc';d.textContent=p.desc
      var f=document.createElement('div');f.className='pc-foot'
      var se=document.createElement('span');se.className='pc-sem';se.textContent=p.sem
      var l=document.createElement('a');l.className='pc-link';l.href=p.url;l.target='_blank';l.rel='noopener noreferrer'
      l.textContent='Repository \u2197'
      f.appendChild(se);f.appendChild(l)
      bo.appendChild(tg);bo.appendChild(ti);bo.appendChild(d);bo.appendChild(f)
      c.appendChild(b);c.appendChild(bo);pg.appendChild(c)
    })
  }

  // ─── Publications ───
  var pubs=[
    {title:'Detection of Language, Hate Speech and Targets using FastText and BERT',
     venue:'CHiPSAL 2025',authors:'D. Acharya, S. Dawadi, S. Saud & S. Regmi',
     detail:'ACL Anthology, pp. 334\u2013338',code:'https://github.com/shivramsaud/hatespeech-detection'},
    {title:'Nepali Number Plate Recognition with IoT Gate Control',
     venue:'ICCTE-2025',authors:'P. Ghimire, A. Gautam, S. Saud & S. Jha',
     detail:'Springer LNEE (in press)',code:'https://github.com/shivramsaud/number-plate-recognition-iot'},
    {title:'Fine-Grained Toxicity Detection in Online Gaming (GameTox)',
     venue:'EEUCA 2026',authors:'Shared Task (accepted)',
     detail:'Multi-label XLM-RoBERTa classification over gaming chat logs',code:'https://github.com/shivramsaud/gametox-detection'}
  ]
  var pl=document.getElementById('pubs')
  if(pl){
    pubs.forEach(function(p){
      var pu=document.createElement('div');pu.className='pub'
      var pt=document.createElement('div');pt.className='pub-top'
      var ti=document.createElement('span');ti.className='pub-title';ti.textContent=p.title
      var ve=document.createElement('span');ve.className='pub-venue';ve.textContent=p.venue
      pt.appendChild(ti);pt.appendChild(ve)
      var au=document.createElement('p');au.className='pub-authors';au.textContent=p.authors+' \u2014 '+p.detail
      var li=document.createElement('div');li.className='pub-links'
      var cl=document.createElement('a');cl.className='pub-link';cl.href=p.code;cl.target='_blank';cl.rel='noopener noreferrer';cl.textContent='Code'
      li.appendChild(cl)
      pu.appendChild(pt);pu.appendChild(au);pu.appendChild(li);pl.appendChild(pu)
    })
  }

  // ─── Skills ───
  var groups=[
    {label:'Deep Learning & ML',items:['PyTorch','TensorFlow','Scikit-learn','FAISS','Hugging Face','BERT','FastText','CLIP','XLM-RoBERTa','ResNet','DenseNet','ConvNeXtV2','YOLOv12']},
    {label:'NLP & Speech',items:['IndicNLP','NLTK','spaCy','Piper TTS','Fairseq','VecMap','Word Sense Disambiguation']},
    {label:'Hardware & Deployment',items:['Raspberry Pi','Arduino','ESP32-CAM','Edge AI','IoT Systems','PaddleOCR','OpenCV']},
    {label:'Languages & Tooling',items:['Python','C/C++','Streamlit','CustomTkinter','Git','Linux','SQLite']}
  ]
  var sg=document.getElementById('skill-groups')
  if(sg){
    groups.forEach(function(g){
      var d=document.createElement('div')
      var l=document.createElement('p');l.className='sg-label';l.textContent=g.label;d.appendChild(l)
      var i=document.createElement('div');i.className='sg-items'
      g.items.forEach(function(n){var s=document.createElement('span');s.className='sg-item';s.textContent=n;i.appendChild(s)})
      d.appendChild(i);sg.appendChild(d)
    })
  }

  // ─── Timeline ───
  var tld=[
    {date:'2026',label:'Expected Graduation',sub:'B.Tech AI, Kathmandu University'},
    {date:'2025',label:'NAST Research Grant',sub:'NPR 1,00,000 \u2014 IoT mushroom cultivation'},
    {date:'2025',label:'First Publication',sub:'CHiPSAL 2025, ACL Anthology'},
    {date:'2025',label:'Raspberry Pi Mentor',sub:'Robotics Club, Kathmandu University'},
    {date:'2022',label:'Started B.Tech AI',sub:'Kathmandu University'}
  ]
  var tle=document.getElementById('tl')
  if(tle){
    tld.forEach(function(t,i){
      var it=document.createElement('div');it.className='tl-i'+(i===0?' cur':'')
      var d=document.createElement('div');d.className='tl-date';d.textContent=t.date
      var l=document.createElement('div');l.className='tl-label2';l.textContent=t.label
      var s=document.createElement('div');s.className='tl-sub';s.textContent=t.sub
      it.appendChild(d);it.appendChild(l);it.appendChild(s);tle.appendChild(it)
    })
  }
})()
