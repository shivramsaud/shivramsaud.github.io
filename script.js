(function () {
  // ── Projects Data ──
  var projects = [
    {
      title: "Semantic Video Retrieval",
      semester: "6th Semester",
      description:
        "Built a semantic video retrieval system using CLIP and FAISS that enables text-based search over video content. Implemented using Python, PyTorch, and Hugging Face transformers.",
      img: "./assets/screenshots/video-retrieval.jpg",
      url: "https://github.com/shivramsaud/video-retrieval",
      tags: ["CLIP", "FAISS", "PyTorch"],
    },
    {
      title: "Invasive Plant Species Classification",
      semester: "5th Semester",
      description:
        "Developed a multi-class classification system to identify 27 government-listed invasive plant species in Nepal using deep learning. Trained and compared YOLOv12, ResNet, DenseNet, and ConvNeXtV2 on GBIF-sourced data.",
      img: "./assets/screenshots/invasive-plants.jpg",
      url: "https://github.com/shivramsaud/invasive-plant-classification",
      tags: ["YOLOv12", "ResNet", "ConvNeXtV2"],
    },
    {
      title: "Hindi–Nepali Machine Translation",
      semester: "4th Semester",
      description:
        "Developed a Hindi–Nepali machine translation pipeline using Fairseq with a 20k evaluation dataset. Applied VecMap for cross-lingual word-level vector alignment and Word Sense Disambiguation to improve translation accuracy.",
      img: "./assets/screenshots/machine-translation.jpg",
      url: "https://github.com/shivramsaud/hindi-nepali-machine-translation",
      tags: ["Fairseq", "VecMap", "WSD"],
    },
    {
      title: "IoT Environmental Monitor",
      semester: "3rd Semester",
      description:
        "Designed and implemented an IoT system to monitor and optimise environmental conditions for mushroom cultivation. Computer-vision-based plant growth monitoring with Raspberry Pi, DHT22, soil moisture, and MH-Z19B CO2 sensors.",
      img: "./assets/screenshots/iot-monitor.jpg",
      url: "https://github.com/shivramsaud/iot-environmental-monitor",
      tags: ["Raspberry Pi", "Arduino", "CV"],
    },
    {
      title: "Text Editor Desktop Application",
      semester: "2nd Semester",
      description:
        "Built a feature-rich desktop text editor using Python, Tkinter, and CustomTkinter with a modern UI. Supports tab management, syntax highlighting, find/replace, and multiple file operations.",
      img: "./assets/screenshots/text-editor.jpg",
      url: "https://github.com/shivramsaud/text-editor-desktop",
      tags: ["Python", "Tkinter", "CustomTkinter"],
    },
  ];

  // ── Render Projects ──
  var grid = document.getElementById("project-grid");
  if (grid) {
    projects.forEach(function (p) {
      var card = document.createElement("div");
      card.className = "project-card";

      var imgDiv = document.createElement("div");
      imgDiv.className = "project-card-img";

      var img = document.createElement("img");
      img.src = p.img;
      img.alt = p.title + " screenshot";
      img.loading = "lazy";

      img.onerror = function () {
        img.style.display = "none";
        var placeholder = document.createElement("div");
        placeholder.className = "img-placeholder";
        placeholder.textContent = "img";
        imgDiv.appendChild(placeholder);
      };

      imgDiv.appendChild(img);

      var body = document.createElement("div");
      body.className = "project-card-body";

      var title = document.createElement("h3");
      title.className = "project-card-title";
      title.textContent = p.title;

      var desc = document.createElement("p");
      desc.className = "project-card-desc";
      desc.textContent = p.description;

      var footer = document.createElement("div");
      footer.className = "project-card-footer";

      var sem = document.createElement("span");
      sem.className = "project-card-semester";
      sem.textContent = p.semester;

      var link = document.createElement("a");
      link.className = "project-card-link";
      link.href = p.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Source";

      footer.appendChild(sem);
      footer.appendChild(link);
      body.appendChild(title);
      body.appendChild(desc);
      body.appendChild(footer);
      card.appendChild(imgDiv);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  // ── Skills Data ──
  var skills = [
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "FAISS", icon: "🔍" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "BERT", icon: "📝" },
    { name: "FastText", icon: "⚡" },
    { name: "CLIP", icon: "🖼️" },
    { name: "YOLOv12", icon: "🎯" },
    { name: "ResNet", icon: "🔗" },
    { name: "DenseNet", icon: "🌐" },
    { name: "ConvNeXtV2", icon: "⚙️" },
    { name: "Fairseq", icon: "📖" },
    { name: "NLTK", icon: "📚" },
    { name: "spaCy", icon: "🔄" },
    { name: "Raspberry Pi", icon: "🖥️" },
    { name: "Arduino", icon: "🔌" },
    { name: "IoT", icon: "📡" },
    { name: "Edge AI", icon: "📱" },
    { name: "Python", icon: "🐍" },
    { name: "C/C++", icon: "⚙️" },
    { name: "OpenCV", icon: "👁️" },
    { name: "PaddleOCR", icon: "📄" },
    { name: "Streamlit", icon: "📈" },
  ];

  var skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skills.forEach(function (s) {
      var item = document.createElement("div");
      item.className = "skill-item";

      var icon = document.createElement("span");
      icon.className = "skill-icon";
      icon.textContent = s.icon;

      var name = document.createElement("span");
      name.className = "skill-name";
      name.textContent = s.name;

      item.appendChild(icon);
      item.appendChild(name);
      skillsGrid.appendChild(item);
    });
  }

  // ── Active Nav Highlight ──
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("section[id]");

  function onScroll() {
    var scrollY = window.scrollY + 100;
    var current = "";
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = sec.getAttribute("id");
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
})();
