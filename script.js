(function(){
  'use strict'

  // Active nav
  var nl=document.querySelectorAll('.snl')
  var ss=document.querySelectorAll('section[id]')
  function act(){
    var sy=window.scrollY+100,cur=''
    ss.forEach(function(s){var t=s.offsetTop,h=s.offsetHeight;if(sy>=t&&sy<t+h)cur=s.getAttribute('id')})
    nl.forEach(function(n){n.classList.toggle('active',n.getAttribute('href')==='#'+cur)})
  }
  window.addEventListener('scroll',act);act()

  // Back to top
  var up=document.getElementById('up')
  if(up){
    window.addEventListener('scroll',function(){up.classList.toggle('show',window.scrollY>300)})
    up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})
  }

  // Projects
  var projects=[
    {title:'Semantic Video Retrieval',sem:'6th Sem',
     desc:'CLIP + FAISS text-to-video search. Encodes frames as 512-dim embeddings, retrieves relevant shots from natural-language queries.',
     tags:['CLIP','FAISS','PyTorch'],url:'https://github.com/shivramsaud/video-retrieval'},
    {title:'Invasive Plant Classification',sem:'5th Sem',
     desc:'27-class classifier for invasive plants in Nepal. Compared YOLOv12, ResNet, DenseNet, ConvNeXtV2 on GBIF imagery.',
     tags:['YOLOv12','ResNet','ConvNeXtV2'],url:'https://github.com/shivramsaud/invasive-plant-classification'},
    {title:'Hindi-Nepali Machine Translation',sem:'4th Sem',
     desc:'Fairseq transformer with VecMap alignment and WSD. 20k parallel corpus, evaluated with BLEU/chrF/TER.',
     tags:['Fairseq','VecMap','WSD'],url:'https://github.com/shivramsaud/hindi-nepali-machine-translation'},
    {title:'IoT Environmental Monitor',sem:'3rd Sem',
     desc:'Mushroom farm monitor: DHT22/CO2 sensors on Arduino, RPi edge gateway with SQLite, Pi Camera growth tracking.',
     tags:['Raspberry Pi','Arduino','CV'],url:'https://github.com/shivramsaud/iot-environmental-monitor'},
    {title:'Desktop Text Editor',sem:'2nd Sem',
     desc:'Multi-tab editor with syntax highlighting, find/replace, line numbers. Python + CustomTkinter.',
     tags:['Python','Tkinter','CustomTkinter'],url:'https://github.com/shivramsaud/text-editor-desktop'}
  ]
  var pg=document.getElementById('pg')
  if(pg){
    projects.forEach(function(p){
      var c=document.createElement('div');c.className='pc'
      var tg=document.createElement('div');tg.className='pct'
      p.tags.forEach(function(t){var s=document.createElement('span');s.className='pctg';s.textContent=t;tg.appendChild(s)})
      var n=document.createElement('h3');n.className='pcn';n.textContent=p.title
      var d=document.createElement('p');d.className='pcd';d.textContent=p.desc
      var f=document.createElement('div');f.className='pcf'
      var se=document.createElement('span');se.className='pcs';se.textContent=p.sem
      var l=document.createElement('a');l.className='pcl';l.href=p.url;l.target='_blank';l.rel='noopener noreferrer';l.textContent='Source \u2197'
      f.appendChild(se);f.appendChild(l)
      c.appendChild(tg);c.appendChild(n);c.appendChild(d);c.appendChild(f)
      pg.appendChild(c)
    })
  }

  // Publications
  var pubs=[
    {title:'Detection of Language, Hate Speech and Targets using FastText and BERT',venue:'CHiPSAL 2025',
     authors:'D. Acharya, S. Dawadi, S. Saud & S. Regmi',detail:'ACL Anthology, pp. 334\u2013338',
     code:'https://github.com/shivramsaud/hatespeech-detection'},
    {title:'Nepali Number Plate Recognition with IoT Gate Control',venue:'ICCTE-2025',
     authors:'P. Ghimire, A. Gautam, S. Saud & S. Jha',detail:'Springer LNEE (in press)',
     code:'https://github.com/shivramsaud/number-plate-recognition-iot'},
    {title:'Fine-Grained Toxicity Detection in Online Gaming (GameTox)',venue:'EEUCA 2026',
     authors:'Shared Task (accepted)',detail:'Multi-label XLM-RoBERTa on gaming chat logs',
     code:'https://github.com/shivramsaud/gametox-detection'}
  ]
  var pl=document.getElementById('pl')
  if(pl){
    pubs.forEach(function(p){
      var b=document.createElement('div');b.className='pb'
      var t=document.createElement('div');t.className='pbt'
      var tn=document.createElement('span');tn.className='pbn';tn.textContent=p.title
      var tv=document.createElement('span');tv.className='pbv';tv.textContent=p.venue
      t.appendChild(tn);t.appendChild(tv)
      var a=document.createElement('p');a.className='pba';a.textContent=p.authors+' \u2014 '+p.detail
      var l=document.createElement('div');l.className='pbl'
      var lk=document.createElement('a');lk.className='pblk';lk.href=p.code;lk.target='_blank';lk.rel='noopener noreferrer';lk.textContent='Code'
      l.appendChild(lk)
      b.appendChild(t);b.appendChild(a);b.appendChild(l)
      pl.appendChild(b)
    })
  }

  // Skills
  var groups=[
    {label:'Deep Learning & ML',items:['PyTorch','TensorFlow','Scikit-learn','FAISS','Hugging Face','BERT','FastText','CLIP','XLM-RoBERTa','ResNet','DenseNet','ConvNeXtV2','YOLOv12']},
    {label:'NLP & Speech',items:['IndicNLP','NLTK','spaCy','Piper TTS','Fairseq','VecMap','Word Sense Disambiguation']},
    {label:'Hardware & Deployment',items:['Raspberry Pi','Arduino','ESP32-CAM','Edge AI','IoT Systems','PaddleOCR','OpenCV']},
    {label:'Languages & Tooling',items:['Python','C/C++','Streamlit','CustomTkinter','Git','Linux','SQLite']}
  ]
  var sg=document.getElementById('sg')
  if(sg){
    groups.forEach(function(g){
      var d=document.createElement('div')
      var l=document.createElement('p');l.className='sgl';l.textContent=g.label;d.appendChild(l)
      var i=document.createElement('div');i.className='sgi'
      g.items.forEach(function(n){var s=document.createElement('span');s.className='sgit';s.textContent=n;i.appendChild(s)})
      d.appendChild(i);sg.appendChild(d)
    })
  }

  // Timeline
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
      var it=document.createElement('div');it.className='tli'+(i===0?' cur':'')
      var d=document.createElement('div');d.className='tld';d.textContent=t.date
      var l=document.createElement('div');l.className='tll';l.textContent=t.label
      var s=document.createElement('div');s.className='tls';s.textContent=t.sub
      it.appendChild(d);it.appendChild(l);it.appendChild(s);tle.appendChild(it)
    })
  }
})()
