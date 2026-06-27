(function () {
  'use strict';

  // ─── Mobile Menu ───
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // ─── Header Scroll Effect ───
  var header = document.getElementById('header');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        header.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  });

  // ─── Active Nav Link ───
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');
  function updateActive() {
    var scrollY = window.scrollY + 120;
    var current = '';
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActive);
  updateActive();

  // ─── Scroll Reveal ───
  var revealEls = document.querySelectorAll('.project-card, .pub-card, .skill-item, .timeline-item');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // ─── Projects Data ───
  var projects = [
    {
      title: 'Semantic Video Retrieval',
      desc: 'Built a semantic video retrieval system using CLIP and FAISS that enables text-based search over video content. Implemented using Python, PyTorch, and Hugging Face transformers.',
      tags: ['CLIP', 'FAISS', 'PyTorch', 'HuggingFace'],
      sem: '6th Semester',
      img: './assets/screenshots/video-retrieval.jpg',
      url: 'https://github.com/shivramsaud/video-retrieval'
    },
    {
      title: 'Invasive Plant Species Classification',
      desc: 'Developed a multi-class classifier to identify 27 government-listed invasive plant species in Nepal. Trained and compared YOLOv12, ResNet, DenseNet, and ConvNeXtV2 on GBIF-sourced imagery.',
      tags: ['YOLOv12', 'ResNet', 'DenseNet', 'ConvNeXtV2'],
      sem: '5th Semester',
      img: './assets/screenshots/invasive-plants.jpg',
      url: 'https://github.com/shivramsaud/invasive-plant-classification'
    },
    {
      title: 'Hindi–Nepali Machine Translation',
      desc: 'Developed a Hindi–Nepali machine translation pipeline using Fairseq with 20k evaluation dataset. Applied VecMap for cross-lingual alignment and Word Sense Disambiguation to improve accuracy.',
      tags: ['Fairseq', 'VecMap', 'WSD', 'BLEU'],
      sem: '4th Semester',
      img: './assets/screenshots/machine-translation.jpg',
      url: 'https://github.com/shivramsaud/hindi-nepali-machine-translation'
    },
    {
      title: 'IoT Environmental Monitor',
      desc: 'Designed and implemented an IoT system to monitor and optimise environmental conditions for mushroom cultivation. Computer-vision-based plant growth monitoring with Raspberry Pi and Arduino.',
      tags: ['Raspberry Pi', 'Arduino', 'CV', 'Edge AI'],
      sem: '3rd Semester',
      img: './assets/screenshots/iot-monitor.jpg',
      url: 'https://github.com/shivramsaud/iot-environmental-monitor'
    },
    {
      title: 'Text Editor Desktop App',
      desc: 'Built a feature-rich desktop text editor using Python, Tkinter, and CustomTkinter with a modern UI. Supports tab management, syntax highlighting, find/replace, and file operations.',
      tags: ['Python', 'Tkinter', 'CustomTkinter', 'UI'],
      sem: '2nd Semester',
      img: './assets/screenshots/text-editor.jpg',
      url: 'https://github.com/shivramsaud/text-editor-desktop'
    }
  ];

  var grid = document.getElementById('projects-grid');
  if (grid) {
    projects.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'project-card';

      var imgDiv = document.createElement('div');
      imgDiv.className = 'project-card-img';
      var img = document.createElement('img');
      img.src = p.img;
      img.alt = p.title;
      img.loading = 'lazy';
      img.onerror = function () {
        img.style.display = 'none';
        var ph = document.createElement('div');
        ph.className = 'img-placeholder';
        ph.textContent = 'Screenshot';
        imgDiv.appendChild(ph);
      };
      imgDiv.appendChild(img);

      var body = document.createElement('div');
      body.className = 'project-card-body';

      var tagsDiv = document.createElement('div');
      tagsDiv.className = 'project-card-tags';
      p.tags.forEach(function (t) {
        var tag = document.createElement('span');
        tag.className = 'project-tag';
        tag.textContent = t;
        tagsDiv.appendChild(tag);
      });

      var title = document.createElement('h3');
      title.className = 'project-card-title';
      title.textContent = p.title;

      var desc = document.createElement('p');
      desc.className = 'project-card-desc';
      desc.textContent = p.desc;

      var footer = document.createElement('div');
      footer.className = 'project-card-footer';
      var sem = document.createElement('span');
      sem.className = 'project-card-sem';
      sem.textContent = p.sem;
      var link = document.createElement('a');
      link.className = 'project-card-link';
      link.href = p.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View Repository \u2197';

      footer.appendChild(sem);
      footer.appendChild(link);
      body.appendChild(tagsDiv);
      body.appendChild(title);
      body.appendChild(desc);
      body.appendChild(footer);
      card.appendChild(imgDiv);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  // ─── Publications Data ───
  var pubs = [
    {
      title: 'Detection of Language, Hate Speech and Targets using FastText and BERT',
      venue: 'CHiPSAL 2025',
      authors: 'D. Acharya, S. Dawadi, S. Saud & S. Regmi',
      detail: 'ACL Anthology, pp. 334\u2013338',
      codeUrl: 'https://github.com/shivramsaud/hatespeech-detection',
      paperUrl: null
    },
    {
      title: 'Nepali Number Plate Recognition with IoT Gate Control',
      venue: 'ICCTE-2025',
      authors: 'P. Ghimire, A. Gautam, S. Saud & S. Jha',
      detail: 'Springer LNEE (in press)',
      codeUrl: 'https://github.com/shivramsaud/number-plate-recognition-iot',
      paperUrl: null
    },
    {
      title: 'Fine-Grained Toxicity Detection in Online Gaming (GameTox)',
      venue: 'EEUCA 2026',
      authors: 'Shared Task (accepted)',
      detail: 'Multi-label toxicity classification over gaming chat logs',
      codeUrl: 'https://github.com/shivramsaud/gametox-detection',
      paperUrl: null
    }
  ];

  var pubsList = document.getElementById('pubs-list');
  if (pubsList) {
    pubs.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'pub-card';

      var header = document.createElement('div');
      header.className = 'pub-card-header';
      var title = document.createElement('span');
      title.className = 'pub-card-title';
      title.textContent = p.title;
      var venue = document.createElement('span');
      venue.className = 'pub-card-venue';
      venue.textContent = p.venue;
      header.appendChild(title);
      header.appendChild(venue);

      var authors = document.createElement('p');
      authors.className = 'pub-card-authors';
      authors.textContent = p.authors + ' \u2014 ' + p.detail;

      var links = document.createElement('div');
      links.className = 'pub-card-links';
      var codeLink = document.createElement('a');
      codeLink.className = 'pub-link';
      codeLink.href = p.codeUrl;
      codeLink.target = '_blank';
      codeLink.rel = 'noopener noreferrer';
      codeLink.textContent = 'Code';
      links.appendChild(codeLink);

      var paperLink = document.createElement('a');
      paperLink.className = 'pub-link' + (p.paperUrl ? '' : ' disabled');
      paperLink.href = p.paperUrl || '#';
      paperLink.target = p.paperUrl ? '_blank' : null;
      paperLink.rel = p.paperUrl ? 'noopener noreferrer' : null;
      paperLink.textContent = 'Paper';
      links.appendChild(paperLink);

      card.appendChild(header);
      card.appendChild(authors);
      card.appendChild(links);
      pubsList.appendChild(card);
    });
  }

  // ─── Skills Data ───
  var skills = [
    { name: 'PyTorch', icon: '\uD83D\uDD25' },
    { name: 'TensorFlow', icon: '\uD83E\uDDE0' },
    { name: 'Scikit-learn', icon: '\uD83D\uDCCA' },
    { name: 'FAISS', icon: '\uD83D\uDD0D' },
    { name: 'HuggingFace', icon: '\uD83E\uDD17' },
    { name: 'BERT', icon: '\uD83D\uDCDD' },
    { name: 'FastText', icon: '\u26A1' },
    { name: 'CLIP', icon: '\uD83D\uDDBC\uFE0F' },
    { name: 'YOLOv12', icon: '\uD83C\uDFAF' },
    { name: 'ResNet', icon: '\uD83D\uDD17' },
    { name: 'DenseNet', icon: '\uD83C\uDF10' },
    { name: 'ConvNeXtV2', icon: '\u2699\uFE0F' },
    { name: 'Fairseq', icon: '\uD83D\uDCD6' },
    { name: 'NLTK', icon: '\uD83D\uDCDA' },
    { name: 'spaCy', icon: '\uD83D\uDD04' },
    { name: 'Raspberry Pi', icon: '\uD83D\uDDA5\uFE0F' },
    { name: 'Arduino', icon: '\uD83D\uDD0C' },
    { name: 'IoT', icon: '\uD83D\uDCE1' },
    { name: 'Edge AI', icon: '\uD83D\uDCF1' },
    { name: 'Python', icon: '\uD83D\uDC0D' },
    { name: 'C/C++', icon: '\u2699\uFE0F' },
    { name: 'OpenCV', icon: '\uD83D\uDC41\uFE0F' },
    { name: 'PaddleOCR', icon: '\uD83D\uDCC4' },
    { name: 'Streamlit', icon: '\uD83D\uDCC8' }
  ];

  var skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skills.forEach(function (s) {
      var item = document.createElement('div');
      item.className = 'skill-item';
      var icon = document.createElement('span');
      icon.className = 'skill-icon';
      icon.textContent = s.icon;
      var name = document.createElement('span');
      name.className = 'skill-name';
      name.textContent = s.name;
      item.appendChild(icon);
      item.appendChild(name);
      skillsGrid.appendChild(item);
    });
  }

  // ─── Timeline Data ───
  var timeline = [
    { date: '2026', label: 'Expected Graduation', sub: 'B.Tech AI, Kathmandu University' },
    { date: '2025', label: 'NAST Research Grant', sub: 'IoT mushroom cultivation (NPR 1,00,000)' },
    { date: '2025', label: 'First Publication', sub: 'CHiPSAL 2025, ACL Anthology' },
    { date: '2025', label: 'Raspberry Pi Mentor', sub: 'Robotics Club, Kathmandu University' },
    { date: '2024', label: 'Semester Projects Begin', sub: 'NLP, CV, IoT pipelines' },
    { date: '2022', label: 'Started B.Tech AI', sub: 'Kathmandu University, Dhulikhel' }
  ];

  var timelineEl = document.getElementById('timeline');
  if (timelineEl) {
    timeline.forEach(function (t, i) {
      var item = document.createElement('div');
      item.className = 'timeline-item' + (i === 0 ? ' active' : '');
      var date = document.createElement('div');
      date.className = 'timeline-date';
      date.textContent = t.date;
      var label = document.createElement('div');
      label.className = 'timeline-label';
      label.textContent = t.label;
      var sub = document.createElement('div');
      sub.className = 'timeline-sub';
      sub.textContent = t.sub;
      item.appendChild(date);
      item.appendChild(label);
      item.appendChild(sub);
      timelineEl.appendChild(item);
    });
  }
})();
