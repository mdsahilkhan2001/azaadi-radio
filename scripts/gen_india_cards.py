import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)

cards = [
    ("culture", "#c2410c", "#1a0e05"),
    ("unity", "#ff9933", "#138808"),
    ("diversity", "#b45309", "#0a3d05"),
    ("freedom", "#ea580c", "#111827"),
    ("courage", "#166534", "#111827"),
    ("heritage", "#a16207", "#1a1a2e"),
]

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <radialGradient id="v" cx="50%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.35"/>
    </radialGradient>
  </defs>
  <rect width="600" height="800" fill="url(#g)"/>
  <rect width="600" height="800" fill="url(#v)"/>
  <g stroke="#f4ead9" stroke-opacity="0.25" stroke-width="1">
    <circle cx="300" cy="380" r="220"/>
    <circle cx="300" cy="380" r="150"/>
  </g>
</svg>"""

for name, c1, c2 in cards:
    with open(os.path.join(OUT_DIR, f"india-{name}.svg"), "w", encoding="utf-8") as f:
        f.write(TEMPLATE.format(c1=c1, c2=c2))
    print("wrote", name)
