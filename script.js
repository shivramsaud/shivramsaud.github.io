(function () {
  'use strict';

  // ─── Mobile Menu ───
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-i').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ─── Header scroll state ───
  var header = document.getElementById('header');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        header.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  });

  // ─── Active nav link ───
  var navItems = document.querySelectorAll('.nav-i');
  var sections = document.querySelectorAll('section[id]');
  function setActive() {
    var sy = window.scrollY + 100;
    var cur = '';
    sections.forEach(function (s) {
      var top = s.offsetTop, h = s.offsetHeight;
      if (sy >= top && sy < top + h) cur = s.getAttribute('id');
    });
    navItems.forEach(function (n) {
      n.classList.toggle('active', n.getAttribute('href') === '#' + cur);
    });
  }
  window.addEventListener('scroll', setActive);
  setActive();

  // ─── Back to top ───
  var topBtn = document.getElementById('top-btn');
  if (topBtn) {
    window.addEventListener('scroll', function () {
      topBtn.classList.toggle('show', window.scrollY > 400);
    });
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Projects ───
  var projects = [
    { title: 'Semantic Video Retrieval', sem: '6th Sem',
      desc: 'Text-based video search using CLIP and FAISS. Encodes video frames as 512-dim embeddings and retrieves the most relevant shots from a natural-language query.',
      tags: ['CLIP', 'FAISS', 'PyTorch'],
      url: 'https://github.com/shivramsaud/video-retrieval' },
    { title: 'Invasive Plant Species Classification', sem: '5th Sem',
      desc: '27-class classifier for government-listed invasive plants in Nepal. Compared YOLOv12, ResNet, DenseNet, and ConvNeXtV2 on GBIF-sourced imagery.',
      tags: ['YOLOv12', 'ResNet', 'ConvNeXtV2'],
      url: 'https://github.com/shivramsaud/invasive-plant-classification' },
    { title: 'Hindi\u2013Nepali Machine Translation', sem: '4th Sem',
      desc: 'Fairseq transformer pipeline with VecMap cross-lingual embedding alignment and Word Sense Disambiguation. Evaluated on a 20k parallel corpus.',
      tags: ['Fairseq', 'VecMap', 'WSD'],
      url: 'https://github.com/shivramsaud/hindi-nepali-machine-translation' },
    { title: 'IoT Environmental Monitor', sem: '3rd Sem',
      desc: 'Mushroom farming monitoring system combining DHT22/CO\u2082 sensors on Arduino, a Raspberry Pi edge gateway with SQLite logging, and Pi Camera\u2013based plant growth tracking.',
      tags: ['Raspberry Pi', 'Arduino', 'CV'],
      url: 'https://github.com/shivramsaud/iot-environmental-monitor' },
    { title: 'Text Editor Desktop App', sem: '2nd Sem',
      desc: 'Multi-tab text editor with syntax highlighting, find/replace, and line numbers. Built with Python, Tkinter, and CustomTkinter.',
      tags: ['Python', 'Tkinter', 'CustomTkinter'],
      url: 'https://github.com/shivramsaud/text-editor-desktop' },
  ];
  var pg = document.getElementById('proj-grid');
  if (pg) {
    projects.forEach(function (p) {
      var card = document.createElement('div'); card.className = 'pc';
      var bar = document.createElement('div'); bar.className = 'pc-bar';
      var body = document.createElement('div'); body.className = 'pc-body';
      var tags = document.createElement('div'); tags.className = 'pc-tags';
      p.tags.forEach(function (t) {
        var tag = document.createElement('span'); tag.className = 'pc-tag'; tag.textContent = t;
        tags.appendChild(tag);
      });
      var title = document.createElement('h3'); title.className = 'pc-title'; title.textContent = p.title;
      var desc = document.createElement('p'); desc.className = 'pc-desc'; desc.textContent = p.desc;
      var foot = document.createElement('div'); foot.className = 'pc-foot';
      var sem = document.createElement('span'); sem.className = 'pc-sem'; sem.textContent = p.sem;
      var link = document.createElement('a'); link.className = 'pc-link';
      link.href = p.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = 'Repository \u2197';
      foot.appendChild(sem); foot.appendChild(link);
      body.appendChild(tags); body.appendChild(title); body.appendChild(desc); body.appendChild(foot);
      card.appendChild(bar); card.appendChild(body);
      pg.appendChild(card);
    });
  }

  // ─── Publications ───
  var pubs = [
    { title: 'Detection of Language, Hate Speech and Targets using FastText and BERT',
      venue: 'CHiPSAL 2025', authors: 'D. Acharya, S. Dawadi, S. Saud & S. Regmi',
      detail: 'ACL Anthology, pp. 334\u2013338',
      code: 'https://github.com/shivramsaud/hatespeech-detection' },
    { title: 'Nepali Number Plate Recognition with IoT Gate Control',
      venue: 'ICCTE-2025', authors: 'P. Ghimire, A. Gautam, S. Saud & S. Jha',
      detail: 'Springer LNEE (in press)',
      code: 'https://github.com/shivramsaud/number-plate-recognition-iot' },
    { title: 'Fine-Grained Toxicity Detection in Online Gaming (GameTox)',
      venue: 'EEUCA 2026', authors: 'Shared Task (accepted)',
      detail: 'Multi-label XLM-RoBERTa classification over gaming chat logs',
      code: 'https://github.com/shivramsaud/gametox-detection' },
  ];
  var pl = document.getElementById('pubs');
  if (pl) {
    pubs.forEach(function (p) {
      var pub = document.createElement('div'); pub.className = 'pub';
      var top = document.createElement('div'); top.className = 'pub-top';
      var title = document.createElement('span'); title.className = 'pub-title'; title.textContent = p.title;
      var venue = document.createElement('span'); venue.className = 'pub-venue'; venue.textContent = p.venue;
      top.appendChild(title); top.appendChild(venue);
      var authors = document.createElement('p'); authors.className = 'pub-authors';
      authors.textContent = p.authors + ' \u2014 ' + p.detail;
      var links = document.createElement('div'); links.className = 'pub-links';
      var cl = document.createElement('a'); cl.className = 'pub-link';
      cl.href = p.code; cl.target = '_blank'; cl.rel = 'noopener noreferrer'; cl.textContent = 'Code';
      links.appendChild(cl);
      pub.appendChild(top); pub.appendChild(authors); pub.appendChild(links);
      pl.appendChild(pub);
    });
  }

  // ─── Skills ───
  var groups = [
    { label: 'Deep Learning & ML', items: ['PyTorch','TensorFlow','Scikit-learn','FAISS','Hugging Face Transformers','BERT','FastText','CLIP','XLM-RoBERTa','ResNet','DenseNet','ConvNeXtV2','YOLOv12'] },
    { label: 'NLP & Speech', items: ['IndicNLP','NLTK','spaCy','Piper TTS','Fairseq','VecMap','Word Sense Disambiguation'] },
    { label: 'Hardware & Deployment', items: ['Raspberry Pi','Arduino','ESP32-CAM','Edge AI Deployment','IoT Systems','PaddleOCR','OpenCV'] },
    { label: 'Languages & Tooling', items: ['Python','C/C++','Streamlit','CustomTkinter','Git','Linux','SQLite'] },
  ];
  var sg = document.getElementById('skill-groups');
  if (sg) {
    groups.forEach(function (g) {
      var div = document.createElement('div');
      var label = document.createElement('p'); label.className = 'sg-label'; label.textContent = g.label;
      div.appendChild(label);
      var items = document.createElement('div'); items.className = 'sg-items';
      g.items.forEach(function (n) {
        var span = document.createElement('span'); span.className = 'sg-item'; span.textContent = n;
        items.appendChild(span);
      });
      div.appendChild(items);
      sg.appendChild(div);
    });
  }

  // ─── Timeline ───
  var tlData = [
    { date: '2026', label: 'Expected Graduation', sub: 'B.Tech AI, Kathmandu University' },
    { date: '2025', label: 'NAST Research Grant', sub: 'NPR 1,00,000 \u2014 IoT mushroom cultivation' },
    { date: '2025', label: 'First Publication', sub: 'CHiPSAL 2025, ACL Anthology' },
    { date: '2025', label: 'Raspberry Pi Mentor', sub: 'Robotics Club, KU' },
    { date: '2022', label: 'Started B.Tech AI', sub: 'Kathmandu University' },
  ];
  var tle = document.getElementById('tl');
  if (tle) {
    tlData.forEach(function (t, i) {
      var item = document.createElement('div'); item.className = 'tl-i' + (i === 0 ? ' cur' : '');
      var date = document.createElement('div'); date.className = 'tl-date'; date.textContent = t.date;
      var label = document.createElement('div'); label.className = 'tl-label2'; label.textContent = t.label;
      var sub = document.createElement('div'); sub.className = 'tl-sub'; sub.textContent = t.sub;
      item.appendChild(date); item.appendChild(label); item.appendChild(sub);
      tle.appendChild(item);
    });
  }
})();
