(function(){
  'use strict'

  var sbl=document.querySelectorAll('.sbl:not(.sl)')
  var ss=document.querySelectorAll('section[id]')
  function act(){
    var sy=window.scrollY+80,cur=''
    ss.forEach(function(s){var t=s.offsetTop,h=s.offsetHeight;if(sy>=t&&sy<t+h)cur=s.getAttribute('id')})
    sbl.forEach(function(n){n.classList.toggle('active',n.getAttribute('href')==='#'+cur)})
  }
  window.addEventListener('scroll',act);act()

  var up=document.getElementById('up')
  if(up){
    window.addEventListener('scroll',function(){up.classList.toggle('show',window.scrollY>300)})
    up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})
  }

  var proj=[
    {t:'Semantic Video Retrieval',sem:'6th Sem',
     d:'CLIP + FAISS text-to-video search. Encodes frames as 512-dim embeddings for natural-language shot retrieval.',
     ts:['CLIP','FAISS','PyTorch'],u:'https://github.com/shivramsaud/video-retrieval'},
    {t:'Invasive Plant Classification',sem:'5th Sem',
     d:'27-class vision classifier for invasive plants in Nepal. Benchmarked YOLOv12, ResNet-50, DenseNet-121, ConvNeXtV2 on GBIF data.',
     ts:['YOLOv12','ResNet','ConvNeXtV2'],u:'https://github.com/shivramsaud/invasive-plant-classification'},
    {t:'Hindi-Nepali Machine Translation',sem:'4th Sem',
     d:'Fairseq transformer with VecMap cross-lingual alignment and WSD. Trained on 20k parallel corpus, BLEU/chrF/TER evaluation.',
     ts:['Fairseq','VecMap','WSD'],u:'https://github.com/shivramsaud/hindi-nepali-machine-translation'},
    {t:'IoT Environmental Monitor',sem:'3rd Sem',
     d:'End-to-end mushroom farm monitor with DHT22/CO2 sensors on Arduino, RPi edge gateway with SQLite, Pi Camera growth tracking.',
     ts:['Raspberry Pi','Arduino','OpenCV'],u:'https://github.com/shivramsaud/iot-environmental-monitor'},
    {t:'Desktop Text Editor',sem:'2nd Sem',
     d:'Multi-tab code editor with syntax highlighting, find-and-replace, line numbers. Built with Python + CustomTkinter.',
     ts:['Python','Tkinter'],u:'https://github.com/shivramsaud/text-editor-desktop'}
  ]
  var pg=document.getElementById('pg')
  if(pg){
    proj.forEach(function(p){
      var c=document.createElement('div');c.className='pc'
      var tg=document.createElement('div');tg.className='pc-tags'
      p.ts.forEach(function(t){var s=document.createElement('span');s.className='pc-tag';s.textContent=t;tg.appendChild(s)})
      var n=document.createElement('h3');n.className='pc-t';n.textContent=p.t
      var d=document.createElement('p');d.className='pc-d';d.textContent=p.d
      var f=document.createElement('div');f.className='pc-f'
      var se=document.createElement('span');se.className='pc-sem';se.textContent=p.sem
      var l=document.createElement('a');l.className='pc-l';l.href=p.u;l.target='_blank';l.rel='noopener noreferrer';l.textContent='Source \u2197'
      f.appendChild(se);f.appendChild(l)
      c.appendChild(tg);c.appendChild(n);c.appendChild(d);c.appendChild(f)
      pg.appendChild(c)
    })
  }

  var pubs=[
    {t:'Detection of Language, Hate Speech and Targets using FastText & BERT',v:'CHiPSAL 2025',
     a:'D. Acharya, S. Dawadi, S. Saud & S. Regmi',dt:'ACL Anthology, pp. 334\u2013338',
     u:'https://github.com/shivramsaud/hatespeech-detection'},
    {t:'Nepali Number Plate Recognition with IoT Gate Control',v:'ICCTE 2025',
     a:'P. Ghimire, A. Gautam, S. Saud & S. Jha',dt:'Springer LNEE (in press)',
     u:'https://github.com/shivramsaud/number-plate-recognition-iot'},
    {t:'Fine-Grained Toxicity Detection in Online Gaming (GameTox)',v:'EEUCA 2026',
     a:'Shared Task (accepted)',dt:'Multi-label XLM-RoBERTa classification on gaming chat logs',
     u:'https://github.com/shivramsaud/gametox-detection'}
  ]
  var pbl=document.getElementById('pl')
  if(pbl){
    pubs.forEach(function(p){
      var b=document.createElement('div');b.className='pb'
      var h=document.createElement('div');h.className='pb-h'
      var tn=document.createElement('span');tn.className='pb-t';tn.textContent=p.t
      var tv=document.createElement('span');tv.className='pb-v';tv.textContent=p.v
      h.appendChild(tn);h.appendChild(tv)
      var a=document.createElement('p');a.className='pb-a';a.textContent=p.a+' \u2014 '+p.dt
      var l=document.createElement('div');l.className='pb-acts'
      var lk=document.createElement('a');lk.className='pb-link';lk.href=p.u;lk.target='_blank';lk.rel='noopener noreferrer';lk.textContent='Code'
      l.appendChild(lk)
      b.appendChild(h);b.appendChild(a);b.appendChild(l)
      pbl.appendChild(b)
    })
  }

  var skills=[
    {l:'Deep Learning & ML',i:['PyTorch','TensorFlow','Scikit-learn','FAISS','Hugging Face','BERT','FastText','CLIP','XLM-RoBERTa','ResNet','DenseNet','ConvNeXtV2','YOLOv12']},
    {l:'NLP & Speech',i:['IndicNLP','NLTK','spaCy','Piper TTS','Fairseq','VecMap','Word Sense Disambiguation']},
    {l:'Hardware & Deployment',i:['Raspberry Pi','Arduino','ESP32-CAM','Edge AI','IoT Systems','PaddleOCR','OpenCV']},
    {l:'Languages & Tooling',i:['Python','C/C++','Streamlit','CustomTkinter','Git','Linux','SQLite']}
  ]
  var skg=document.getElementById('skg')
  if(skg){
    skills.forEach(function(g){
      var d=document.createElement('div')
      var l=document.createElement('p');l.className='skl';l.textContent=g.l;d.appendChild(l)
      var i=document.createElement('div');i.className='ski'
      g.i.forEach(function(n){var s=document.createElement('span');s.className='skit';s.textContent=n;i.appendChild(s)})
      d.appendChild(i);skg.appendChild(d)
    })
  }

  var tld=[
    {d:'2026',l:'Expected Graduation',s:'B.Tech AI, Kathmandu University'},
    {d:'2025',l:'NAST Research Grant',s:'NPR 1,00,000 \u2014 IoT mushroom cultivation'},
    {d:'2025',l:'First Publication',s:'CHiPSAL 2025, ACL Anthology'},
    {d:'2025',l:'Raspberry Pi Mentor',s:'Robotics Club, Kathmandu University'},
    {d:'2022',l:'Started B.Tech AI',s:'Kathmandu University'}
  ]
  var tle=document.getElementById('tl')
  if(tle){
    tld.forEach(function(t,i){
      var c=document.createElement('div');c.className='tli'+(i===0?' cur':'')
      var dd=document.createElement('div');dd.className='tld';dd.textContent=t.d
      var ll=document.createElement('div');ll.className='tll';ll.textContent=t.l
      var ss=document.createElement('div');ss.className='tls';ss.textContent=t.s
      c.appendChild(dd);c.appendChild(ll);c.appendChild(ss);tle.appendChild(c)
    })
  }
})()
