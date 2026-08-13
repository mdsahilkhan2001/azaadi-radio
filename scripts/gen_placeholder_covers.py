import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)

# id, slug, two accent colors, a simple motif letter
covers = [
    (1, "watan-ke-logon", "#ff9933", "#7a3b12"),
    (2, "sandese-aate-hain", "#138808", "#0a3d05"),
    (3, "maa-tujhe-salaam", "#ff9933", "#138808"),
    (4, "vande-mataram", "#c9a227", "#3a2e0a"),
    (5, "mile-sur-mera-tumhara", "#ff9933", "#12213a"),
    (6, "rang-de-basanti", "#e0b400", "#7a2b0a"),
    (7, "chak-de-india", "#138808", "#062b12"),
    (8, "saare-jahan-se-accha", "#ff9933", "#1a1a2e"),
    (9, "jai-ho", "#d97706", "#3a1a05"),
    (10, "de-ghuma-ke", "#138808", "#1a1a2e"),
    (11, "desh-mere", "#ff9933", "#0a0e1a"),
    (12, "kar-chale-hum-fida", "#c2410c", "#111827"),
]

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" fill="url(#g)"/>
  <rect width="400" height="400" fill="url(#r)"/>
  <circle cx="200" cy="200" r="90" fill="none" stroke="#f4ead9" stroke-opacity="0.35" stroke-width="1.5"/>
  <g stroke="#f4ead9" stroke-opacity="0.3" stroke-width="1.5">
    <line x1="200" y1="110" x2="200" y2="290"/>
    <line x1="110" y1="200" x2="290" y2="200"/>
    <line x1="136" y1="136" x2="264" y2="264"/>
    <line x1="264" y1="136" x2="136" y2="264"/>
  </g>
  <circle cx="200" cy="200" r="6" fill="#f4ead9" fill-opacity="0.6"/>
  <rect x="0" y="376" width="400" height="8" fill="#ff9933" fill-opacity="0.8"/>
  <rect x="0" y="384" width="400" height="8" fill="#f4ead9" fill-opacity="0.85"/>
  <rect x="0" y="392" width="400" height="8" fill="#138808" fill-opacity="0.8"/>
</svg>"""

for id_, slug, c1, c2 in covers:
    svg = TEMPLATE.format(c1=c1, c2=c2)
    with open(os.path.join(OUT_DIR, f"{slug}.svg"), "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", slug)
