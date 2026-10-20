import os
import subprocess
import glob

os.makedirs('public/optimized', exist_ok=True)
os.makedirs('public/thumbnails', exist_ok=True)

raw_images = glob.glob('public/*.png') + glob.glob('public/*.jpg')

print(f"Optimizing {len(raw_images)} images...")

for img in raw_images:
    filename = os.path.basename(img)
    name_base, ext = os.path.splitext(filename)
    
    # 1. Desktop / Medium WebP (max 1200x1200)
    out_1200 = f"public/optimized/{name_base}-1200.webp"
    # 2. Card / Mobile WebP (max 600x600)
    out_600 = f"public/optimized/{name_base}-600.webp"
    
    # Run convert with ImageMagick
    if not os.path.exists(out_1200):
        cmd_1200 = ['convert', img, '-resize', '1200x1200>', '-quality', '85', out_1200]
        subprocess.run(cmd_1200, check=True)
        
    if not os.path.exists(out_600):
        cmd_600 = ['convert', img, '-resize', '600x600>', '-quality', '82', out_600]
        subprocess.run(cmd_600, check=True)

print("Images optimized successfully!")

# Optimize video thumbnails
for i in range(1, 5):
    png_poster = f"public/thumbnails/video{i}-poster.png"
    if os.path.exists(png_poster):
        webp_poster = f"public/thumbnails/video{i}-poster.webp"
        jpg_poster = f"public/thumbnails/video{i}-poster.jpg"
        subprocess.run(['convert', png_poster, '-resize', '800x450>', '-quality', '85', webp_poster], check=True)
        subprocess.run(['convert', png_poster, '-resize', '800x450>', '-quality', '85', jpg_poster], check=True)

print("Video thumbnails optimized successfully!")
