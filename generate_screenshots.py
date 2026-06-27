from PIL import Image, ImageDraw, ImageFont
import os

W, H = 640, 400
OUT = "assets/screenshots"
os.makedirs(OUT, exist_ok=True)

# Try to get a monospace font, fallback to default
try:
    mono = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 14)
    mono_lg = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 11)
    sans = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 14)
    sans_lg = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 11)
    sans_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 16)
except:
    mono = mono_lg = sans = sans_lg = sans_bold = ImageFont.load_default()

def rounded_rect(draw, xy, r, fill, outline=None):
    x1, y1, x2, y2 = xy
    draw.rounded_rectangle(xy, radius=r, fill=fill, outline=outline)

def draw_topbar(draw, title):
    draw.rectangle([0,0,W,36], fill="#1e293b")
    draw.rectangle([0,36,W,37], fill="#0f172a")
    draw.text((14,10), title, fill="#94a3b8", font=sans)

def draw_btn(draw, x, y, w, h, text, fill="#06b6d4", text_fill="#0f172a"):
    rounded_rect(draw, [x,y,x+w,y+h], 4, fill=fill)
    tw = draw.textlength(text, font=mono)
    draw.text((x + (w-tw)//2, y+4), text, fill=text_fill, font=mono)

# ── 1. Video Retrieval ──
img = Image.new("RGB", (W, H), "#0f172a")
d = ImageDraw.Draw(img)
draw_topbar(d, "semantic-video-retrieval — search")

d.text((16, 52), "Q:", fill="#64748b", font=mono)
d.text((40, 52), '"a dog running on grass"', fill="#e2e8f0", font=mono)
d.rectangle([36, 74, 260, 76], fill="#06b6d4")

# Fake video frames grid
for i, label in enumerate(["frame_0042", "frame_0158", "frame_0321", "frame_0487"]):
    cx, cy = 16 + (i % 2) * 310, 92 + (i // 2) * 145
    rounded_rect(d, [cx, cy, cx+290, cy+125], 4, fill="#1e293b", outline="#334155")
    d.text((cx+12, cy+10), "▶  "+label, fill="#94a3b8", font=mono_lg)
    d.text((cx+12, cy+44), f"score: {0.92 - i*0.07:.3f}", fill="#06b6d4", font=mono_lg)
    d.text((cx+12, cy+66), "video_004.mp4", fill="#64748b", font=mono_lg)
    d.text((cx+12, cy+88), f"@ {label.split('_')[1]}s", fill="#475569", font=mono_lg)

d.text((W-170, 10), "faiss | clip", fill="#06b6d4", font=sans_lg)
img.save(f"{OUT}/video-retrieval.jpg", quality=92)
print("[OK] video-retrieval.jpg")

# ── 2. Invasive Plant Classification ──
img = Image.new("RGB", (W, H), "#0f172a")
d = ImageDraw.Draw(img)
draw_topbar(d, "invasive-plant-classifier — inference")

# Left: image area
rounded_rect(d, [16, 50, 200, 260], 4, fill="#1e293b", outline="#334155")
d.text((40, 130), "plant image", fill="#475569", font=sans)
d.text((56, 150), "(GBIF)", fill="#475569", font=sans_lg)
d.rectangle([16, 260, 200, 262], fill="#06b6d4")

# Right: results
results = [
    ("Lantana camara", "0.913", "INVASIVE"),
    ("Chromolaena odorata", "0.042", "—"),
    ("Ageratina adenophora", "0.021", "—"),
    ("Mikania micrantha", "0.011", "—"),
    ("Parthenium hysterophorus", "0.008", "—"),
]
d.text((220, 52), "Top-5 predictions", fill="#e2e8f0", font=sans)
d.text((220, 74), "Confidence   Status", fill="#64748b", font=mono_lg)
for i, (name, conf, status) in enumerate(results):
    y = 96 + i * 32
    d.text((220, y), name.ljust(24), fill="#94a3b8", font=mono)
    d.text((400, y), conf.ljust(8), fill="#e2e8f0", font=mono)
    d.text((455, y), status, fill="#06b6d4" if "INVASIVE" in status else "#475569", font=mono_lg)
    if i == 0:
        d.rectangle([220, 96, 500, 96], fill="#334155")

# Model badge
draw_btn(d, 460, 360, 70, 24, "yolov12", fill="#334155", text_fill="#94a3b8")
draw_btn(d, 540, 360, 80, 24, "convnext", fill="#334155", text_fill="#94a3b8")
draw_btn(d, 16, 360, 100, 24, "27 species", fill="#06b6d4")
d.text((W-140, 10), "resnet | densenet", fill="#94a3b8", font=sans_lg)
img.save(f"{OUT}/invasive-plants.jpg", quality=92)
print("[OK] invasive-plants.jpg")

# ── 3. Hindi-Nepali Machine Translation ──
img = Image.new("RGB", (W, H), "#0f172a")
d = ImageDraw.Draw(img)
draw_topbar(d, "hindi-nepali-mt — translate")

# Source
rounded_rect(d, [16, 46, W-16, 130], 4, fill="#1e293b", outline="#334155")
d.text((28, 54), "Hindi (source)", fill="#64748b", font=mono_lg)
d.text((28, 78), "आज मौसम बहुत अच्छा है और मैं घूमने जा रहा हूँ", fill="#e2e8f0", font=mono)
d.text((28, 100), "हामी सबै मिलेर यो परियोजनामा काम गर्नेछौं", fill="#94a3b8", font=mono)

# Arrow
d.text((20, 140), "▼  fairseq  ▶  vecmap  ▶  wsd", fill="#06b6d4", font=mono_lg)

# Target
rounded_rect(d, [16, 165, W-16, 250], 4, fill="#1e293b", outline="#334155")
d.text((28, 173), "Nepali (translation)", fill="#64748b", font=mono_lg)
d.text((28, 197), "आज मौसम धेरै राम्रो छ र म घुम्न जाँदै छु", fill="#e2e8f0", font=mono)
d.text((28, 219), "हामी सबै मिलेर यस परियोजनामा काम गर्नेछौं", fill="#94a3b8", font=mono)

# Metrics
d.text((16, 270), "BLEU: 32.4", fill="#06b6d4", font=sans_bold)
d.text((130, 270), "chrF: 0.68", fill="#06b6d4", font=sans_bold)
d.text((250, 270), "TER: 0.42", fill="#06b6d4", font=sans_bold)

# Translation pairs table
d.text((16, 310), "Hindi", fill="#64748b", font=mono_lg)
d.text((260, 310), "Nepali", fill="#64748b", font=mono_lg)
d.text((480, 310), "BLEU", fill="#64748b", font=mono_lg)
d.rectangle([16, 326, W-16, 328], fill="#334155")

pairs = [
    ("नमस्ते", "नमस्ते", "100.0"),
    ("धन्यवाद", "धन्यवाद", "100.0"),
    ("पानी", "पानी", "100.0"),
]
for i, (h, n, b) in enumerate(pairs):
    y = 336 + i * 20
    d.text((16, y), h.ljust(20), fill="#94a3b8", font=mono)
    d.text((260, y), n.ljust(20), fill="#94a3b8", font=mono)
    d.text((480, y), b, fill="#06b6d4", font=mono)

d.text((W-180, 10), "fairseq | vecmap", fill="#94a3b8", font=sans_lg)
img.save(f"{OUT}/machine-translation.jpg", quality=92)
print("[OK] machine-translation.jpg")

# ── 4. IoT Environmental Monitor ──
img = Image.new("RGB", (W, H), "#0f172a")
d = ImageDraw.Draw(img)
draw_topbar(d, "iot-environmental-monitor — dashboard")

# Sensor gauges
gauges = [("Temp", "26.4°C", "#06b6d4"), ("Humidity", "72%", "#22c55e"), ("CO₂", "412ppm", "#eab308"), ("Soil", "58%", "#a855f7")]
for i, (label, val, color) in enumerate(gauges):
    x = 16 + i * 156
    rounded_rect(d, [x, 46, x+140, 110], 4, fill="#1e293b", outline="#334155")
    d.text((x+10, 52), label, fill="#64748b", font=mono_lg)
    d.text((x+10, 72), val, fill=color, font=sans_bold)
    # Mini bar
    d.rectangle([x+10, 96, x+130, 100], fill="#0f172a")
    bar_w = int(120 * (float(val.replace("°C","").replace("%","").replace("ppm","")) / 100))
    d.rectangle([x+10, 96, x+10+bar_w, 100], fill=color)

# Camera feed placeholder
rounded_rect(d, [16, 124, 300, 260], 4, fill="#1e293b", outline="#334155")
d.text((100, 180), "📷  camera feed", fill="#475569", font=sans)
d.text((120, 204), "plant growth stage: 3", fill="#64748b", font=mono_lg)
d.text((120, 222), "green cover: 47.3%", fill="#64748b", font=mono_lg)
d.rectangle([16, 260, 300, 262], fill="#06b6d4")

# Recent readings table
d.text((316, 126), "Recent Readings", fill="#e2e8f0", font=sans)
d.text((316, 148), "Time", fill="#64748b", font=mono_lg)
d.text((400, 148), "Temp", fill="#64748b", font=mono_lg)
d.text((460, 148), "Hum", fill="#64748b", font=mono_lg)
d.text((510, 148), "CO₂", fill="#64748b", font=mono_lg)
d.rectangle([316, 164, 620, 166], fill="#334155")

readings = [("14:32:05", "26.4", "72", "412"), ("14:32:00", "26.3", "73", "408"), ("14:31:55", "26.5", "71", "415"), ("14:31:50", "26.2", "72", "410")]
for i, (t, temp, hum, co2) in enumerate(readings):
    y = 174 + i * 22
    d.text((316, y), t, fill="#94a3b8", font=mono)
    d.text((400, y), temp, fill="#94a3b8", font=mono)
    d.text((460, y), hum, fill="#94a3b8", font=mono)
    d.text((510, y), co2, fill="#94a3b8", font=mono)
    # Alert row
    if i == 0:
        d.text((560, y), "● ALERT", fill="#ef4444", font=mono_lg)

# Alerts
d.text((316, 268), "System Status", fill="#e2e8f0", font=sans)
d.text((316, 290), "●  Active   since 02:31 UTC", fill="#22c55e", font=mono)
d.text((316, 310), "●  Alerts  3 warnings today", fill="#eab308", font=mono)
d.text((316, 330), "●  Uptime  12d 7h 32m", fill="#94a3b8", font=mono)

draw_btn(d, 460, 366, 80, 22, "rpi-zero-2w", fill="#334155", text_fill="#94a3b8")
draw_btn(d, 550, 366, 72, 22, "arduino-uno", fill="#334155", text_fill="#94a3b8")

d.text((W-170, 10), "rpi | arduino | cv", fill="#06b6d4", font=sans_lg)
img.save(f"{OUT}/iot-monitor.jpg", quality=92)
print("[OK] iot-monitor.jpg")

# ── 5. Text Editor ──
img = Image.new("RGB", (W, H), "#0f172a")
d = ImageDraw.Draw(img)
draw_topbar(d, "text-editor — Untitled-3.py")

# Sidebar: line numbers
for i in range(1, 16):
    d.text((8, 44 + i*20), f"{i:3d}", fill="#475569", font=mono)
d.line([36, 44, 36, 386], fill="#1e293b", width=2)

# Code content
lines = [
    ("import", "#c792ea"), (" numpy", "#82aaff"), (" as", "#c792ea"), (" np", "#82aaff"),
    ("", None),
    ("def", "#c792ea"), (" search_videos(", "#82aaff"), ("query", "#f78c6c"), (",", None), (" top_k", "#eeffff"), ("=", None), (" 10", "#f78c6c"), ("):", None),
    ('    """Retrieve top-k video frames by text query."""', "#546e7a"),
    ("    model", None), (",", None), (" preprocess", None), (" =", None), (" load_clip()", "#82aaff"),
    ("    text_emb", None), (" =", None), (" model.encode_text(", "#82aaff"), ("query", "#f78c6c"), (")", None),
    ("    scores", None), (",", None), (" indices", None), (" =", None), (" index.search(text_emb, top_k)", "#82aaff"),
    ("    ", None),
    ("    return", "#c792ea"), (" [", None),
    ('        {"video": videos[i], "score": float(scores[0][i])}', "#82aaff"),
    ("         for", "#c792ea"), (" i", None), (" in", "#c792ea"), (" range(top_k)", None),
    ("    ]", None),
    ("", None),
    ("# Usage", "#546e7a"),
    ("results", None), (" =", None), (" search_videos(", "#82aaff"), ('"sunset landscape"', "#f78c6c"), (")", None),
    ("print(", None), ("results", None), (")", None),
]

cx = 48
cy = 44
for text, color in lines:
    if text is None:
        continue
    if text == "":
        cy += 20
        continue
    col = color if color else "#eeffff"
    d.text((cx, cy), text, fill=col, font=mono)
    cx += d.textlength(text, font=mono)

# Update line count in display
cy_final = 44 + 15 * 20

# Bottom status bar
d.rectangle([0, H-24, W, H], fill="#1e293b")
d.text((10, H-20), "UTF-8  |  Python  |  Ln 15  Col 42  |  INS", fill="#64748b", font=mono_lg)
d.text((W-80, H-20), "●  saved", fill="#22c55e", font=mono_lg)

d.text((W-170, 10), "customtkinter", fill="#06b6d4", font=sans_lg)
img.save(f"{OUT}/text-editor.jpg", quality=92)
print("[OK] text-editor.jpg")

print("\nAll screenshots generated successfully!")
