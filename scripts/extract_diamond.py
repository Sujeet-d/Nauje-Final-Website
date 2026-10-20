import subprocess
import os

# We can use ImageMagick to compute color difference from the background paper color
# Background paper is #F2E3D6 (242, 227, 214)
# Let's crop from the original 2048x2048 at the diamond location
os.makedirs('public/assets/branding', exist_ok=True)

# 1. High-resolution crop directly from original 2048x2048 image:
# Diamond center is around x=1024, y=700
# Diamond width is ~320, height is ~246
# Bounding box is x: 894 to 1214, y: 596 to 842
# Let's crop with a little padding: 340x266+854+586
crop_cmd = [
    'convert', 'public/assets/aistudio/Final_Old_Website_Branding_83033e10.png',
    '-crop', '340x266+854+586',
    '+repage', 'public/assets/branding/diamond_raw_crop.png'
]
subprocess.run(crop_cmd, check=True)

# 2. Extract with ImageMagick using level/difference for smooth alpha
# Create a background-color image
# Difference image shows the diamond
extract_cmd = [
    'convert', 'public/assets/branding/diamond_raw_crop.png',
    '-fuzz', '15%',
    '-transparent', '#F2E3D6',
    '-trim', '+repage',
    'public/assets/branding/nauje-diamond-symbol.png'
]
subprocess.run(extract_cmd, check=True)

# Also create WebP version
subprocess.run(['convert', 'public/assets/branding/nauje-diamond-symbol.png', 'public/assets/branding/nauje-diamond-symbol.webp'], check=True)
print("Extracted diamond symbol successfully!")
