import wave
import struct
import math
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "songs")
os.makedirs(OUT_DIR, exist_ok=True)

SAMPLE_RATE = 22050

# (filename, duration_seconds, base_freq_hz)
tracks = [
    ("watan-ke-logon.wav", 18, 220.0),
    ("sandese-aate-hain.wav", 20, 246.94),
    ("maa-tujhe-salaam.wav", 16, 261.63),
    ("vande-mataram.wav", 22, 293.66),
    ("mile-sur-mera-tumhara.wav", 19, 329.63),
    ("rang-de-basanti.wav", 17, 349.23),
    ("chak-de-india.wav", 15, 392.0),
    ("saare-jahan-se-accha.wav", 21, 415.3),
    ("jai-ho.wav", 18, 440.0),
    ("de-ghuma-ke.wav", 16, 466.16),
    ("desh-mere.wav", 20, 493.88),
    ("kar-chale-hum-fida.wav", 19, 523.25),
]

def gen(path, duration, freq):
    n_samples = int(SAMPLE_RATE * duration)
    with wave.open(path, "w") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        frames = bytearray()
        for i in range(n_samples):
            t = i / SAMPLE_RATE
            # gentle envelope so it fades in/out instead of clicking
            fade = min(1.0, t / 0.6, (duration - t) / 0.6)
            fade = max(0.0, fade)
            # simple two-tone harmonic pad, quiet
            val = 0.18 * math.sin(2 * math.pi * freq * t)
            val += 0.08 * math.sin(2 * math.pi * (freq * 1.5) * t)
            val *= fade
            sample = int(max(-1.0, min(1.0, val)) * 32767)
            frames += struct.pack("<h", sample)
        wf.writeframes(frames)

for name, dur, freq in tracks:
    gen(os.path.join(OUT_DIR, name), dur, freq)
    print("wrote", name)
