import subprocess
import os

# Create 180x180 apple-touch-icon: plum circle with the transparent gold diamond centered
os.makedirs('public', exist_ok=True)

# 1. Base plum rounded canvas 180x180
canvas_cmd = [
    'convert', '-size', '180x180', 'xc:none',
    '-fill', '#4A154B',
    '-draw', 'roundrectangle 0,0,180,180,36,36',
    '/tmp/plum_base_180.png'
]
subprocess.run(canvas_cmd, check=True)

# Resize diamond to fit nicely inside 180x180 (e.g. width ~120px)
diamond_resize_cmd = [
    'convert', 'public/assets/branding/nauje-diamond-symbol.png',
    '-resize', '125x125',
    '/tmp/diamond_125.png'
]
subprocess.run(diamond_resize_cmd, check=True)

# Composite diamond onto plum base
subprocess.run([
    'composite', '-gravity', 'center',
    '/tmp/diamond_125.png', '/tmp/plum_base_180.png',
    'public/apple-touch-icon.png'
], check=True)

# 2. Create 32x32 and 16x16 PNGs from the high-res 180x180 icon
subprocess.run(['convert', 'public/apple-touch-icon.png', '-resize', '32x32', 'public/favicon-32x32.png'], check=True)
subprocess.run(['convert', 'public/apple-touch-icon.png', '-resize', '16x16', 'public/favicon-16x16.png'], check=True)
subprocess.run(['convert', 'public/apple-touch-icon.png', '-resize', '48x48', 'public/favicon.ico'], check=True)

print("Favicon PNG assets generated successfully!")
