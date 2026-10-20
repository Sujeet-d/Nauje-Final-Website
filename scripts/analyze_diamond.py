import subprocess

# Crop exact diamond with small margin
subprocess.run([
    'convert', 'public/assets/branding/diamond_zoom.png',
    '-crop', '321x249+95+46', '+repage',
    'public/assets/branding/diamond_exact_crop.png'
], check=True)

# Generate an edge / difference map to find precise vertices
subprocess.run([
    'convert', 'public/assets/branding/diamond_exact_crop.png',
    '-fill', 'white', '-opaque', 'rgb(243,229,218)',
    '-fuzz', '10%',
    'public/assets/branding/diamond_mask.png'
], check=True)

print("Saved diamond_exact_crop.png and diamond_mask.png")
