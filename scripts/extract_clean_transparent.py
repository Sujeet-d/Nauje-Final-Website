import subprocess

# 1. Background color is rgb(243, 229, 218)
# Create a solid background image of same size
subprocess.run([
    'convert', '-size', '321x249', 'xc:rgb(243,229,218)', '/tmp/paper_bg.png'
], check=True)

# 2. Compute absolute difference between diamond_exact_crop and paper_bg
subprocess.run([
    'convert', 'public/assets/branding/diamond_exact_crop.png', '/tmp/paper_bg.png',
    '-compose', 'difference', '-composite',
    '-colorspace', 'gray',
    '-contrast-stretch', '3%x0%',
    '-level', '15%,85%',
    '/tmp/alpha_mask.png'
], check=True)

# 3. Apply alpha mask to the diamond crop
subprocess.run([
    'convert', 'public/assets/branding/diamond_exact_crop.png', '/tmp/alpha_mask.png',
    '-compose', 'CopyOpacity', '-composite',
    'public/assets/branding/nauje-diamond-clean.png'
], check=True)

print("Created public/assets/branding/nauje-diamond-clean.png")
